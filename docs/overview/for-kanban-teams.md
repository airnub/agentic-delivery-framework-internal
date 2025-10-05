# ADF for Kanban Teams (informative)

ADF’s **Sequential Subtask Pipeline (SSP)** behaves like **single‑piece flow**:
- Pull the **next subtask** in order; **WIP=1** per Story is enforced via the **Story Lease**.
- Reach a local **Checkpoint Green**, then push.
- Merge via a single **Change Request**; **DoD Signals** (tests, security, perf, policy) decide.

## Minimal board (lens)
```mermaid
flowchart LR
  R[Ready (ordered)] --> IP[In Progress (leased, WIP=1)] --> CG[Checkpoint Green] --> G[DoD Signals] --> D[Done]
```

**Explicit policies (lens)**

* **Pull:** Take top **Ready**; respect the Lease.
* **WIP:** One subtask at a time.
* **Blocked:** Mark reason + aging; escalate if SLE breached.
* **Replenish:** Leads may reorder between subtasks (not mid-subtask); document reason in the Story.
* **Expedite:** Break-glass with approval; CAPA; Pulse flag.
* **Done:** Subtask Done when merged (signals green).

## Minimal metrics (helpful, not mandatory)

* Subtask **cycle time** (Ready → Done)
* Story **lead time** (first subtask start → merge)
* **Blocked aging** (time in Blocked)

## Where to go next

* **SSP (normative rules)** → `../handbook/ssp.md`
* **DoD Signals (portable checks)** → `../handbook/cr-gates.md`
* **Delivery Pulse (inspectability)** → `../handbook/pulse-increment.md`


---

This work is licensed under CC BY-SA 4.0.
