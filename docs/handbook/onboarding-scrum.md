# Onboarding for Scrum teams

ADF preserves product goals and empiricism while Delivery Pulse replaces the daily scrum when asynchronous agents contribute.

| Scrum concept | ADF lens | What changes |
|---|---|---|
| Daily Scrum | Delivery Pulse | Async agents produce a Pulse Increment; humans do a 10–15 min inspect-and-adapt on the increment. |
| Sprint Goal | Product Goal | Same intent; ADF recommends Story Previews to align agent work. |
| Definition of Done | DoD + CR Gates | Merge only when required gates are green. |
| Developers | Human/AI/Hybrid | Same accountability; agents run in governed workspaces. |

Cross-train the team on [Story Preview](story-preview.md), [CR Gates](cr-gates.md), and [Metrics](metrics.md) so Scrum cadences stay evidence-driven.

## Adopt the v0.6.0 artifact kit

Scrum teams **MUST** anchor Sprint planning and reviews on the v0.6.0 artifacts so every Story traces back to the specification and safety rails.

| Artifact | Purpose | Where to start |
|---|---|---|
| Story Spec | Maps backlog items to ADF clauses so Sprint Goals stay within the [spec-driven workflow](../specs/adf-spec-v0.6.0.md#1-spec-driven-workflow). | [ADF v0.6.0 §1](../specs/adf-spec-v0.6.0.md#1-spec-driven-workflow) |
| Preview-as-Spec | Elevates the Story Preview into the living acceptance spec with explicit clause references and evidence. | [Story Preview Playbook](story-preview.md) |
| Verification checklist | Confirms `spec-verify`, `tests-ci`, and `security-static` ordering before `human-approval`, reducing Sprint review rework. | [CR checklist (verification)](../templates/cr-checklist.md) |
| Trust metrics | Tracks guard-rail health each Pulse to decide when to fast-track or pause work. | [ADF v0.6.0 §5](../specs/adf-spec-v0.6.0.md#5-trust-metrics-and-kill-switch), [Metrics guide](metrics.md) |
| Kill-switch guidance | Documents who can suspend automation, evidence required, and the reactivation path. | [ADF v0.6.0 §5.2](../specs/adf-spec-v0.6.0.md#5-trust-metrics-and-kill-switch), [Safety rails](safety-rails.md) |

## Deep-dive references

- [Spec-driven workflow](../specs/adf-spec-v0.6.0.md#1-spec-driven-workflow) — how Stories cite clauses, manage variances, and feed the Evidence Bundle.
- [Multi-agent SSP handoffs](../specs/adf-spec-v0.6.0.md#2-sequential-subtask-pipeline-ssp-multi-agent-handoffs) and the [SSP guide](ssp.md) — coordination rules, Lease Steward duties, and handoff packets for hybrid teams.
