# Agentic Delivery Framework Method Charter

The Agentic Delivery Framework (ADF) defines the minimal, enforceable guardrails for human and AI contributors to deliver software through Scrum-compatible cadences. It keeps roles, events, and artifacts recognizable while sequencing work through CR-first governance, Story Previews, and Daily Pulse inspection.

**Normative:** The **Sequential Subtask Pipeline (SSP)** is mandatory across ADF. It provides the exclusive Story lease, ordered subtask queue, checkpoints, and single end-of-Story CR required for safe agent execution.

## Mission
- Preserve Scrum’s simplicity while making agent participation auditable and reversible.
- Ensure every change flows through a governed workspace runtime with CR gates and Definition of Done evidence.
- Maintain transparent Story and Sprint states so Delivery Leads, Product Owners, and Developers can intervene quickly.

## Commitments
- Uphold the Product Goal, Sprint Goal, and Increment as the anchors for planning and inspection.
- Operate the Daily Pulse as the daily adaptation moment, publishing a Pulse Increment ahead of the sync.
- Keep Evidence Bundles, Story Previews, and SSP telemetry visible to stakeholders and auditors.

## Invariants
- Change Requests are the only path to merge; gates map to `spec-verify`, `tests-ci`, `security-static`, `deps-supply-chain`, `perf-budget`, `framework-guard`, `mode-policy`, `preview-build`, and `human-approval`.
- Story Previews document acceptance evidence before Stories move to Done.
- SSP sequencing prevents conflicting edits by humans or agents and culminates in a single CR.

---

This work is licensed under CC BY-SA 4.0.
