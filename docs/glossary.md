# ADF Glossary (Informative)

| Term | Definition |
| --- | --- |
| **Change Request (CR)** | Platform-specific merge request (PR/MR/CL) that must satisfy all required gates before merge. |
| **CR Gates** | Normative quality checks such as `tests-ci`, `spec-verify`, `security-static`, and `human-approval` enforced on every CR. |
| **Definition of Done (DoD)** | Shared checklist defining quality, documentation, and verification standards an Increment MUST meet before release. |
| **Delivery Lead** | Accountability similar to Scrum Master that steers Delivery Pulse, enforces CR-First, and manages WIP limits. |
| **Delivery Pulse** | ≤10 minute daily inspection replacing the Daily Scrum, reviewing Pulse Increment evidence and gate status. |
| **Developers** | Accountability that plans, builds, tests, and documents increments inside the governed workspace runtime (humans and/or agents). |
| **Evidence Bundle** | Audit package (e.g., `requirements-trace.json`, gate logs, Story Preview) linked from each CR. |
| **Exclusive Lease** | Time-bounded control granting exactly one worker write access to a Story branch during SSP execution. |
| **Mode Policy** | Guardrail defining when agents may act autonomously, collaborate, or require human approval. |
| **Performance Budget** | Agreed thresholds for latency, throughput, or resource use that changes MUST respect on performance-sensitive paths. |
| **Product Owner** | Accountability that maintains the Product Goal and backlog, clarifies acceptance criteria, and accepts outcomes during Story Preview and Sprint Review. |
| **Pulse Increment** | Daily demo build containing all merged work since the last Pulse, reviewed during Delivery Pulse. |
| **Sequential Subtask Pipeline (SSP)** | Normative practice sequencing subtasks on a single Story branch with exclusive lease control and Story Preview checkpoints. |
| **spec-verify** | Required gate confirming method conformance, risk controls, and documentation updates per the Specification. |
| **Sprint (aka Iteration)** | Timebox anchoring planning, Delivery Pulse, Sprint Review, and Sprint Retrospective around one Sprint Goal. |
| **Story Preview** | Pre-merge demonstration artifact showing acceptance criteria satisfied before Product Owner approval. |
| **tests-ci** | Required automated verification gate proving code health for each CR. |
| **WIP Limit** | Policy capping concurrent Stories or CRs to preserve flow and prevent gate overload. |
