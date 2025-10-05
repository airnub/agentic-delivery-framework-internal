---
title: "Sequential Subtask Pipeline (SSP)"
summary: "Step-by-step handbook for running the Sequential Subtask Pipeline with lease semantics and anti-collision controls."
---

# Sequential Subtask Pipeline (SSP)

This guide operationalizes the SSP defined in the [ADF v0.5.0 specification](../specs/adf-spec-v0.5.0.md#2-sequential-subtask-pipeline-ssp). It is optimized for day-one adoption by human or agent executors.

## Table of Contents
- [Roles and Inputs](#roles-and-inputs)
- [Lease Lifecycle](#lease-lifecycle)
- [Subtask Decomposition](#subtask-decomposition)
- [Execution Loop](#execution-loop)
- [Checkpoints and Story Preview Updates](#checkpoints-and-story-preview-updates)
- [Anti-Collision Rules](#anti-collision-rules)
- [Example Timeline](#example-timeline)
- [Troubleshooting](#troubleshooting)

## Roles and Inputs

- **Story Owner:** Developer or agent holding the active Story Lease.
- **Reviewer:** Responsible for approvals and guidance during CR reviews.
- **Delivery Lead:** Monitors WIP limits, ensures Pulse readiness, and arbitrates conflicts.

Inputs required before starting:

1. Story acceptance criteria and success metrics.
2. Declared scope (directories, systems) to feed the Edit Locality Guard.
3. Initial Story Preview shell, referencing the [template](../templates/story-preview.md).

## Lease Lifecycle

1. **Acquire:** Use the work management system or automation to lock the Story Lease. TTL defaults to two hours.
2. **Renew:** Refresh the lease before expiry if work continues. Automation **SHOULD** warn at 15 minutes remaining.
3. **Release:** Upon merge or handoff, release the lease and update Story status.
4. **Handoff:** If work is paused, create a `handoff.md` snippet in the Story branch summarizing state, remaining subtasks, and blockers.

## Subtask Decomposition

- Break the Story into minimal, testable subtasks (1–2 hours each).
- Order subtasks to mitigate dependency risks and align with reviewer availability.
- Record the Subtask Queue in the Story Preview under a “Work Plan” section.
- Mark subtasks as `todo`, `doing`, `done` to enable asynchronous inspection.

## Execution Loop

Follow this loop for each subtask:

1. **Plan:** Confirm the next subtask and its scoped files.
2. **Edit:** Make changes locally within the declared scope.
3. **Verify:** Run targeted tests and linting.
4. **Checkpoint:** Capture the green state (tests, logs) and note results.
5. **Update Preview:** Append evidence to the Story Preview.
6. **Push:** Push to the single Story branch.
7. **Trigger Gates:** Ensure the CR pipeline runs. Address failures before advancing.

Automation **MAY** enforce WIP limits by blocking Step 2 when another executor holds the lease.

## Checkpoints and Story Preview Updates

- Each checkpoint **MUST** include test results, diff summary, and risk observations.
- Embed screenshots or log snippets directly in the Preview or upload to Evidence Bundle storage.
- For schema or security changes, document rationale inline and link to the relevant migration script.
- Maintain a running “Open Questions” list to support reviewer collaboration.

## Anti-Collision Rules

- Only one Story Lease holder edits at a time. Pair programming **MAY** occur synchronously under a shared lease.
- The Edit Locality Guard threshold defaults to 20% of touched lines outside declared scope. Update declared scope when necessary.
- Repository-wide refactors require a dedicated refactor Story with reviewers informed before execution.
- Use feature flags to isolate incomplete work when feature exposure risks exist.

## Example Timeline

| Time | Action |
| --- | --- |
| 09:00 | Acquire lease, populate Subtask Queue, initialize Story Preview. |
| 09:15 | Complete subtask 1, checkpoint tests, update Preview. |
| 09:45 | Address `tests-ci` failure, log fix subtask, re-run gates. |
| 10:30 | Finish final subtask, gather Preview evidence, request review. |
| 11:00 | Reviewers approve, merge CR, release lease, add CR to Pulse notes. |

## Troubleshooting

- **Lease expired mid-work:** Request a new lease, confirm no conflicting commits landed, rebase Story branch if necessary.
- **Edit Locality Guard failure:** Update declared scope with rationale, or split work into a new Story if scope expanded.
- **Gate instability:** Capture logs in the Evidence Bundle and flag the Delivery Lead for systemic fixes.
- **Reviewer unavailable:** Use the `mode-policy` gate to enforce fallback CODEOWNERS or escalate to the Delivery Lead.

For detailed gate remediation steps, consult the [CR Gates guide](cr-gates.md).

## Kanban Lens (informative)

Teams MAY visualize the Sequential Subtask Pipeline (SSP) with a minimal Kanban board to aid transparency and flow control. This lens introduces **no new ceremonies** and **no new backlogs**; SSP’s normative rules (Story Lease, WIP=1 per Story, ordered subtask queue, single CR, CR Gates) remain unchanged.

```mermaid
flowchart LR
  R[Ready (ordered)] --> IP[In Progress (leased, WIP=1)] --> CG[Checkpoint Green] --> G[CR Gates] --> D[Done]
```

**Explicit policies (lens)**

* **Pull:** Take the topmost **Ready** subtask for the current Story; if the Story Lease is held, wait.
* **WIP:** **WIP=1** per Story; no parallel subtasks.
* **Blocked:** Mark with a reason and aging; escalate if aging exceeds your SLE.
* **Replenish:** PO/Delivery Lead may reorder **Ready** between subtasks (not mid-subtask); document the reason in the Story.
* **Expedite:** Use break-glass only with approval; auto-file CAPA; flag in the Delivery Pulse.
* **Done:** A subtask is Done when merged via the Story’s CR and **CR Gates** are green.

---

This methodology/spec is licensed under CC BY-SA 4.0.
