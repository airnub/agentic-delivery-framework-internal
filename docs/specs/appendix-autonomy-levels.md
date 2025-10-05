---
title: "Appendix — Autonomy Levels"
summary: "Normative autonomy level definitions for components opting into A3–A4 operations."
---

# Appendix — Autonomy Levels

Teams **MAY** adopt autonomy levels. If adopting A3 or A4, the following **SHALL** be enforced: `cost-budget` gate, `risk-budget` gate, Story Lease Broker check, and periodic human ratification.

| Level | Capabilities | Permissions | Required Gates |
| --- | --- | --- | --- |
| **A0 — Manual-only** | Humans or hybrid pairs run all subtasks; agents observe. | Read-only access to repositories and telemetry. | Baseline DoD Signals from [Section 3](adf-spec-v0.5.0.md#3-change-request-gates). |
| **A1 — Assisted Execution** | Agents propose subtasks and code diffs with human-in-the-loop approvals. | Comment and draft-PR rights; no direct merges. | Baseline DoD Signals plus Story Lease acquisition logged. |
| **A2 — Supervised Autonomy** | Agents run SSP subtasks and gate pipelines with human checkpoint sign-off. | Push to Story branches; merges gated by human approval. | Baseline DoD Signals, Agent Run Ledger (see [handbook](../handbook/evidence-bundle.md#agent-run-ledger)) required. |
| **A3 — Budget-constrained Autonomy** | Agents execute Story scope end-to-end during active lease windows. | Merge upon green gates within declared budgets. | Baseline DoD Signals **plus** `cost-budget`, `risk-budget`, and `lease-broker`; Ledger hash chaining required. |
| **A4 — Continuous Autonomous Delivery** | Agents steward continuous Story queues with periodic human ratification. | Merge and schedule follow-on work inside defined swimlanes. | Baseline DoD Signals **plus** `cost-budget`, `risk-budget`, `lease-broker`, and ratification checkpoint documented. |

> **Normative note:** Autonomy Levels A3–A4 inherit all obligations from lower levels in addition to the required gates listed above.

This work is licensed under CC BY-SA 4.0.

