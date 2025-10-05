# Sequential Subtask Pipeline (SSP) — Design & Method Prescription for ADF

## 0) Problem summary (why this exists)
When a Story/Task is decomposed into smaller sub‑tasks and worked on in parallel by agents, they frequently step on each other: divergent edits, cascading rebases, and undo/redo loops. Current agent stacks struggle with conflict‑aware planning. Empirically, **sequentializing the sub‑tasks**—so each runs on the fully applied result of the previous—removes most failure modes.

> Goal: a **single, conflict‑safe, Story‑scoped pipeline** that produces one **Story Preview** and, only after all sub‑tasks complete, a single **Change Request** (CR) for review.

---

## 1) ADF methodology (vendor‑neutral) — prescriptive text
**Section: Subtask Sequencing Policy (SSP)**

**Normative requirements (RFC 2119 language):**
1. **Single Story Branch.** When a Story is decomposed, the Team **MUST** implement all related sub‑tasks on **one dedicated Story branch**.
2. **Exclusive Lease.** At any time, **exactly one worker (human or agent)** **MUST** hold an **exclusive lease** on that Story branch. Others **MUST NOT** push edits until the lease is released.
3. **Queued Order.** Sub‑tasks **MUST** be executed in a **declared queue order**. Each sub‑task starts from the **HEAD** produced by the previous sub‑task (no parallel edits to the Story branch).
4. **Checkpoint per Sub‑task.** Each sub‑task **MUST** create a **checkpoint commit** with: tests, verification notes, and a runnable **Story Preview** (preview env URL or local recipe). Checkpoints **MUST NOT** merge to the default branch.
5. **One Change Request.** A Story that used SSP **MUST** open **one CR** only **after** all queued sub‑tasks reach “checkpoint‑green” (DoD at Story scope). The CR description **SHOULD** aggregate evidence from all checkpoints.
6. **Failure Handling.** If a sub‑task fails gates, the lease holder **MUST** either fix forward or revert the checkpoint, then requeue.
7. **WIP Limits.** Teams **SHOULD** set WIP limits (e.g., ≤3 active Stories per Team/agent) to reduce thrash.

**Artifact updates:**
- **Story Preview**: produced after each sub‑task checkpoint (branch/env/local), proving the Story remains runnable.
- **Pulse Increment**: still built daily from **merged** work; SSP checkpoints are **not** included until the final CR merges.

**Gates:**
- DoD + CR gates apply at the Story CR; sub‑task checkpoints **SHOULD** run a scoped subset (lint/tests/security/perf budget when touched) to maintain continuity.

**Transparency:**
- Queue state, lease holder, and checkpoint results **MUST** be visible (e.g., as a status note on the Story, updated by automation).

---

## 2) Flow (method)
1) **Plan**: Split the Story into ordered sub‑tasks with clear acceptance per sub‑task; write the queue (see format below).
2) **Lease**: Acquire the Story lease; announce “working on Sub‑task N of M”.
3) **Implement**: Apply sub‑task N → tests → local run.
4) **Checkpoint**: Commit + push; publish **Story Preview**; attach evidence; mark sub‑task N complete.
5) **Advance**: Release lease; next worker acquires lease; repeat for N+1.
6) **CR**: After M/ M complete, open **one CR**; aggregate evidence; run full DoD + gates.
7) **Merge**: On approval, merge to default; included in next **Pulse Increment** automatically.

---

## 3) Queue file (neutral format)
Create a Story‑local queue description at `.adf/story/queue.yml`:
```yaml
story: ABC-123 Add subscription billing
sprint_goal: Improve conversion on paid tiers
wip_limit_hint: 3
subtasks:
  - id: S1
    title: Add Plan model + migration
    acceptance:
      - migration applies and rolls back cleanly
      - seed demo data available
    gates: [lint, unit, security]
  - id: S2
    title: API endpoints for plans
    depends_on: [S1]
    gates: [lint, unit, integration]
  - id: S3
    title: UI selection + checkout stub
    depends_on: [S1, S2]
    gates: [lint, e2e, perf]
```

The orchestrator reads this queue and processes `subtasks` strictly in order.

---

## 4) Implementation guide (platform mapping — optional, informative)

> This section is informative and not part of the normative ADF method.

### 4.1 Concurrency & locking

* Use a CI/workflow **concurrency group** to serialize work per Story branch.
* Maintain a lightweight **lease file** `.adf/story/lease.json` updated by the orchestrator; reflect lease holder in a status comment on the Story.

### 4.2 Story Runner (orchestrator)

* A platform app or workflow kicks off for each queued sub‑task:

  1. Checkout the **Story branch**.
  2. Launch agents in a **workspace runtime** at the current HEAD.
  3. Run sub‑task plan; produce changes; commit `feat(ABC-123): [S2] API endpoints (checkpoint)`.
  4. Build & publish **Story Preview** (preview env or Docker recipe) + upload evidence.
  5. Mark sub‑task S2 **complete**; proceed to S3.
* On final sub‑task, **squash/curate** commits if desired, then open a single **CR** for ABC‑123.

### 4.3 Evidence & preview

* Attach to each checkpoint:

  * test results; security/deps scan; performance snapshot if touched;
  * preview URL or local run command; seeded fixtures.

### 4.4 Failure & requeue

* On fail, **do not** open a CR. Keep lease, fix forward or revert the checkpoint, and re‑run. Only advance on green.

### 4.5 Merge queue

* Use a platform **merge queue** only for the **final Story CR** (helps reduce integration risk). It is **not** a replacement for sub‑task serialization.

---

## 5) Why queue beats parallel for agents

* **Determinism**: every sub‑task sees one canonical base (no intra‑Story rebases).
* **Local reasoning**: agents don’t need to predict other agents’ edits.
* **Review hygiene**: one CR per Story with stitched evidence; fewer noisy side‑CRs.

---

## 6) Additions to ADF spec (suggested integration points)

* In **Artifacts**: reference **Story Preview** and **Pulse Increment**; note SSP as the recommended practice when decomposition occurs.
* In **Events → Delivery Pulse**: include “SSP status” in the Pulse report: current lease holder, queue position, last checkpoint, blockers.
* In **Few simple rules**: add “Decomposed Stories use SSP: queued sub‑tasks on one branch; single CR at the end.”
* In **Conformance**:

  * **L2** requires the workspace/runtime + orchestrator capability to **acquire an exclusive Story lease** and run the declared queue.
  * **L3** includes exposure of SSP telemetry (queue state, durations, retries) and enforcement of WIP limits.

---

## 7) Minimal templates (copy‑ready snippets)

**CR body (Story) adds this block:**

```markdown
### Story Preview (required)
- Preview: <url> OR Local: `make demo` / `docker compose up demo`
- Evidence: tests ✅ | security ✅/exception | perf (if touched) ✅
- What changed: summary + screenshots
- Rollback/disable: note
```

**Queue status comment format:**

```
SSP status — ABC-123
• Lease: @agent‑bot (since 02:10 UTC)
• Position: S2/3 — API endpoints for plans
• Last checkpoint: S1 ✅ (build #1433)
• Next: S3 — UI selection + checkout
```

---

## 8) Risks & mitigations

* **Long‑running sub‑task**: set a max lease TTL; auto‑escalate to Delivery Lead.
* **Urgent change hits same files**: temporarily pause SSP; land a hotfix to main; rebase Story branch; resume.
* **Queue churn (re‑ordering)**: only the Delivery Lead (human/AI) may re‑order; orchestrator must stop at safe checkpoints.

---

## 9) Next steps

* **Method**: add SSP to the ADF spec and naming docs as above.
* **Implementation**: reference platform profiles for concrete mappings (kept outside this repo).

