# Spec v0.4.0 — Sequential Subtask Pipeline, Delivery Pulse, Story Preview, Pulse Increment

## Changelog

- Minor release v0.4.0: adds Subtask Sequencing Policy (SSP) as the normative practice when Stories are decomposed; Delivery Pulse reports SHOULD surface SSP status (lease holder, queue position, last checkpoint, blockers). Backward compatible with v0.3.0.
- Minor release v0.3.0: repo-wide vocabulary alignment (Delivery Lead, Delivery Pulse, Sprint as canonical term) and new artifacts (Story Preview, Pulse Increment), plus Performance Budget in change request/DoD gates and WIP limit guidance.

## 1. Accountabilities & Role Modality Charter
- **Delivery Lead** (Human / AI / Hybrid) facilitates Sprint events, manages the workspace runtime lifecycle, enforces CR-first governance, and upholds WIP limits and Performance Budget verification when applicable.
- **Product Owner** (Human / AI / Hybrid) maintains the Product Goal and Product Backlog, clarifies acceptance criteria, and accepts outcomes during Story Preview and Sprint Review.
- **Developers** (Human / AI / Hybrid) plan, build, test, and document increments inside the governed workspace runtime, producing Story Previews before Stories are marked Done and contributing to the daily Pulse Increment.
- **Role Modality Charter:** All accountabilities MAY be fulfilled by Humans, AI assistants, or Hybrid pairs. Implementations MUST record provenance (actor identity, reasoning summary, evidence) for auditability.

## 2. Artifacts & Commitments
| Artifact | Commitment | Description |
|---|---|---|
| **Product Backlog** | **Product Goal** | Ordered list of Product Backlog Items (PBIs) aligned to product outcomes. |
| **Sprint Backlog** | **Sprint Goal** | Forecast of PBIs and slices planned for the current Sprint (aka Iteration). |
| **Increment** | **Definition of Done (DoD)** | Potentially shippable state after a Change Request merges. |
| **Story Preview** | **Reviewable-by-Design** | Per-story demo (preview environment or local recipe) + evidence before marking the Story Done. Lives in the Change Request. When a Story is decomposed, each sub-task checkpoint MUST provide a Story Preview per the [Subtask Sequencing Policy (SSP)](../method/ssp-sequential-subtask-pipeline.v0.1.0.md). |
| **Pulse Increment** | **DoD** | Daily demo build aggregating all merged, green changes; fuels Delivery Pulse inspection. SSP checkpoints remain off the Pulse Increment until the final Story Change Request merges. |

Story Previews MUST include run instructions, test/scan evidence, and rollback guidance. Pulse Increments SHOULD be automated and published ahead of the human Delivery Pulse.

## 3. Events & Cadence
- **Sprint (aka Iteration):** Default 2–5 days (allow 1-day Sprints). One Sprint Goal; scope may flex.
- **Sprint Planning:** Set Sprint Goal, forecast PBIs, identify initial slices and WIP plan.
- **Delivery Pulse:** Automated overnight pulse + 10–15 minute human sync to inspect Pulse Increment, surface impediments, and agree on next actions. Pulse report SHOULD include SSP status (current lease holder, queue position, last checkpoint, blockers) for any Story using the queue.
- **Sprint Review:** Demonstrate Increment, review Story Previews, adapt Product Backlog.
- **Sprint Retrospective:** Improve working agreements, tooling, guardrails.
- **Backlog Refinement:** Continuous collaboration to prepare PBIs (clarify, split, size, acceptance criteria).

## 4. Few Simple Rules
1. **CR-first:** Every change merges via a Change Request (CR).
2. **DoD + CR gates:** CI/tests, QA verification, security review, automated review, required human approvals, and **Performance Budget** checks (when performance-sensitive paths change) MUST pass before merge.
3. **Story Preview before Done:** Each Story supplies a runnable demo and evidence inside the CR prior to acceptance.
4. **Decomposed Stories use SSP:** Queue sub-tasks on one Story branch with an exclusive lease and open a single CR after all checkpoints are green.
5. **Daily Pulse Increment:** Publish a demo build of merged, green work every day.
6. **Make it inspectable:** Maintain transparent telemetry, Story Previews, Pulse Increment reports, and CR histories for human and AI inspection.

## 5. Change Request Governance & Policy Knobs
- **Required gates:** CI/tests, QA verification, security review, automated review, human approvals per policy, documentation updates, rollout/rollback notes, and Performance Budget checks when applicable.
- **DoD enforcement:** DoD MUST be explicit and versioned. CR templates SHOULD reference Story Preview requirements and Performance Budget expectations.
- **Policy knobs:** Organizations MAY set WIP limits (e.g., `wip_limits.active_stories_per_team: 3`), require human sign-off for sensitive domains, or adjust automated review depth. Changes MUST remain auditable.

## 6. Workspace Runtime Baseline
- Provide reproducible environments (devcontainer, VM image, cloud IDE, VDI) with required dependencies, tooling, and automation.
- Configure least-privilege access; ensure secrets flow through managed vaults.
- Install Developer tooling (Aider, Cline, Continue, OpenHands, etc.) and onboarding scripts for Humans / AI / Hybrid pairs.
- Capture telemetry (runtime utilization, spend, gate durations) for Delivery Pulse inspection and Conformance L3.

## 7. Planning & Delivery Flow
1. Delivery Lead and Product Owner align on Sprint Goal and ordered PBIs.
2. Delivery Lead prepares or resumes the workspace runtime, briefs Developers, and ensures WIP limits are respected.
3. Developers implement slices inside the runtime, opening CRs for every change and attaching Story Previews.
4. CR gates + DoD evidence determine readiness to merge; failing gates send work back for iteration.
5. Pulse Increment aggregates merged work daily; Delivery Pulse reviews insights, telemetry, and next actions.
6. After merge, Delivery Lead updates the work management system, captures telemetry, and may hibernate or stop the workspace runtime.

### Subtask Sequencing Policy (SSP)

When a Story is decomposed into ordered sub-tasks, teams **MUST** follow the Subtask Sequencing Policy:

1. **Single Story Branch.** When a Story is decomposed, the Team **MUST** implement all related sub-tasks on **one dedicated Story branch**.
2. **Exclusive Lease.** At any time, **exactly one worker (human or agent)** **MUST** hold an **exclusive lease** on that Story branch. Others **MUST NOT** push edits until the lease is released.
3. **Queued Order.** Sub-tasks **MUST** be executed in a **declared queue order**. Each sub-task starts from the **HEAD** produced by the previous sub-task (no parallel edits to the Story branch).
4. **Checkpoint per Sub-task.** Each sub-task **MUST** create a **checkpoint commit** with: tests, verification notes, and a runnable **Story Preview**. Checkpoints **MUST NOT** merge to the default branch.
5. **One Change Request.** A Story that used SSP **MUST** open **one Change Request** only **after** all queued sub-tasks reach “checkpoint-green” (DoD at Story scope). The CR description **SHOULD** aggregate evidence from all checkpoints.
6. **Failure Handling.** If a sub-task fails gates, the lease holder **MUST** either fix forward or revert the checkpoint, then requeue.
7. **WIP Limits.** Teams **SHOULD** set WIP limits (e.g., ≤3 active Stories per Team/agent) to reduce thrash.

Refer to the [Sequential Subtask Pipeline (SSP) method guide](../method/ssp-sequential-subtask-pipeline.v0.1.0.md) for detailed flow, queue formats, and informative implementation notes.

## 8. Conformance & Profiles
- **Conformance:** Implementations SHOULD map to [L1–L3 requirements](../conformance.md). L2+ MUST demonstrate Story Previews, Pulse Increment generation, and SSP execution with exclusive Story branch leases; L3 includes SSP telemetry exposure, cost controls, and WIP policy enforcement.
- **Profiles:** Platform-specific terminology and automation live in [profiles overview](../profiles/overview.md) and companion profile files (e.g., [GitHub profile](../profiles/github.md)). Core spec remains vendor-neutral.

## 9. References & History
- Previous specs (v0.0.10–v0.0.21) retain historical vocabulary for provenance; consult repository history if earlier naming is
  required.
- Companion implementations: see [airnub/adf-github-suite](https://github.com/airnub/adf-github-suite) for a GitHub-aligned stack.

---

This methodology/spec is licensed under CC BY-SA 4.0.
