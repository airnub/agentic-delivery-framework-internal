# ADF Glossary (Informative)

| Term | Definition |
| --- | --- |
| **Change Request (CR)** | Platform-specific merge request (PR/MR/CL) that must satisfy all required gates before merge. |
| **CR Gates** | Normative quality checks such as `tests-ci`, `spec-verify`, `security-static`, and `human-approval` enforced on every CR. |
| **Delivery Lead** | Accountability similar to Scrum Master that steers Delivery Pulse, enforces CR-First, and manages WIP limits. |
| **Delivery Pulse** | ≤10 minute daily inspection replacing the Daily Scrum, reviewing Pulse Increment evidence and gate status. |
| **Evidence Bundle** | Audit package (e.g., `requirements-trace.json`, gate logs, Story Preview) linked from each CR. |
| **Exclusive Lease** | Time-bounded control granting exactly one worker write access to a Story branch during SSP execution. |
| **Mode Policy** | Guardrail defining when agents may act autonomously, collaborate, or require human approval. |
| **Pulse Increment** | Daily demo build containing all merged work since the last Pulse, reviewed during Delivery Pulse. |
| **Sequential Subtask Pipeline (SSP)** | Normative practice sequencing subtasks on a single Story branch with exclusive lease control. |
| **Story Preview** | Pre-merge demonstration artifact showing acceptance criteria satisfied before Product Owner approval. |
| **tests-ci** | Required automated verification gate proving code health for each CR. |
| **spec-verify** | Required gate confirming method conformance, risk controls, and documentation updates per the Specification. |
| **WIP Limit** | Policy capping concurrent Stories or CRs to preserve flow and prevent gate overload. |
