# Onboarding for Kanban teams

Kanban teams keep their board but **MUST** align single-piece flow with the v0.6.0 spec-driven workflow and guardrails.

- **WIP control:** SSP’s Story Lease enforces single-item WIP at the Story level; subtasks are sequenced, not parallelized.
- **Flow metrics:** Use [Metrics](metrics.md) for lead time, SSP stall rate, rework rate, escape defects, and the new Trust Score trend.
- **Policies, not ceremonies:** Keep your columns; ADF constrains how work flows ([spec-driven workflow](../specs/adf-spec-v0.6.0.md#1-spec-driven-workflow), gates, SSP), not your visualization. See the [SSP guide](ssp.md) for sequencing patterns and handoff duties.

## Adopt the v0.6.0 artifact kit

| Artifact | How Kanban teams use it | Reference |
|---|---|---|
| Story Spec | Prioritize and replenish the queue against specification clauses so the top of the board always cites `v0.6.0 §…`. | [ADF v0.6.0 §1](../specs/adf-spec-v0.6.0.md#1-spec-driven-workflow) |
| Preview-as-Spec | Treat the Story Preview as the active policy card; update it at each pull signal to reflect scope and evidence. | [Story Preview Playbook](story-preview.md) |
| Verification checklist | Gate column transitions on the verification checklist to prevent unverified work entering “Ready for Review.” | [CR checklist (verification)](../templates/cr-checklist.md) |
| Trust metrics | Plot Trust Score and Guard Timer breaches on the flow metrics dashboard to trigger swarming or stop-the-line. | [ADF v0.6.0 §5](../specs/adf-spec-v0.6.0.md#5-trust-metrics-and-kill-switch), [Metrics guide](metrics.md) |
| Kill-switch guidance | Document the kill-switch owner on the board policy and rehearse activation during retrospectives. | [ADF v0.6.0 §5.2](../specs/adf-spec-v0.6.0.md#5-trust-metrics-and-kill-switch), [Safety rails](safety-rails.md) |

## Deep-dive references

- [Spec-driven workflow](../specs/adf-spec-v0.6.0.md#1-spec-driven-workflow) — backlog policies, variance handling, and Evidence Bundle hooks.
- [Multi-agent SSP handoffs](../specs/adf-spec-v0.6.0.md#2-sequential-subtask-pipeline-ssp-multi-agent-handoffs) and the [SSP guide](ssp.md) — how Lease Stewards coordinate asynchronous agents without breaking flow limits.
