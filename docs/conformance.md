# Conformance Levels

This document uses the key words **MUST**, **SHOULD**, and **MAY** as described in [RFC 2119](https://www.rfc-editor.org/rfc/rfc2119) and [RFC 8174](https://www.rfc-editor.org/rfc/rfc8174) when, and only when, they appear in all capitals.

ADF conformance is structured across three levels. Higher levels include lower-level requirements.

## Level 1 (L1) — Planning & Governance
Organizations **MUST**:
- Operate Sprints (aka Iterations) in a work management system that tracks Epics → Stories → Tasks with a Sprint Goal.
- Require Change Requests before merging to protected branches (**CR-first**).
- Enforce CR gates so CI/tests, QA verification, security review, automated review, required human approval(s), and **Performance Budget** checks (when performance-sensitive paths change) pass before merge.
- Define and publish a Definition of Done (DoD) that includes Story Preview expectations.

Organizations **SHOULD**:
- Link work items to Change Requests via automation or templates.
- Maintain audit trails for Sprint decisions, gate outcomes, and DoD/Performance Budget exceptions.

Organizations **MAY**:
- Incorporate additional governance such as compliance sign-offs or portfolio reviews.

## Level 2 (L2) — Execution & Evidence
In addition to L1, organizations **MUST**:
- Allow the Delivery Lead to provision, resume, and stop a managed workspace runtime for Developers.
- Ensure Developers iterate inside the workspace runtime from Story intake to merged Change Request.
- Produce **Story Previews** (runnable demos + evidence) before Stories are marked Done.
- Publish a daily **Pulse Increment** ahead of the Delivery Pulse.
- Acquire and enforce an **exclusive Story branch lease** for decomposed Stories, read the declared sub-task queue, and execute the **Subtask Sequencing Policy (SSP)** sequentially on that branch.
- Publish a capability-class routing policy and bind SSP/orchestration phases to capability classes.

Organizations **SHOULD**:
- Automate workspace warm starts with seeded secrets and tooling for Humans / AI / Hybrid modalities.
- Provide observable status of Change Requests, including outstanding gates, Performance Budget status, and Story Preview evidence.

Organizations **MAY**:
- Employ multiple specialized agents (e.g., testing, documentation, cost analysis) inside the workspace runtime.

## Level 3 (L3) — Telemetry, Cost, & Flow
In addition to L1 and L2, organizations **MUST**:
- Implement an idle shutdown policy for workspace runtimes to control spend and reduce risk.
- Track budget usage, Performance Budget trends, and WIP metrics for Delivery Pulse reporting.
- Surface **SSP telemetry** (queue state, lease holder, checkpoint results, durations, retries) to Delivery Pulse consumers.
- Periodically evaluate routing policy versus non-functional traits (latency, accuracy, cost, context length) and record `{ capability_class, model_id }` in Change Request evidence for auditability.

Organizations **SHOULD**:
- Enable warm start strategies (snapshots, caches) to minimize cold-start time while respecting policies.
- Surface Sprint-level telemetry (lead time, gate rework, runtime utilization, Pulse Increment health) to Delivery Lead dashboards.
- Enforce configurable **WIP limits** (e.g., `wip_limits.active_stories_per_team: 3`) and align them with SSP queue capacity.

Organizations **MAY**:
- Integrate anomaly detection or predictive scaling for workspace runtimes and Pulse Increment quality based on Sprint forecasts.

---

This work is licensed under CC BY-SA 4.0.
