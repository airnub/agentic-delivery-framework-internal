# Conformance Levels

This document uses the key words **MUST**, **SHOULD**, and **MAY** as described in [RFC 2119](https://www.rfc-editor.org/rfc/rfc2119) and [RFC 8174](https://www.rfc-editor.org/rfc/rfc8174) when, and only when, they appear in all capitals.

ADF conformance is structured across three levels. Higher levels include lower-level requirements.

## Level 1 (L1) — Planning & Governance
Organizations **MUST**:
- Operate Iterations (or equivalent timeboxes) in a work management system that tracks Epics → Stories → Tasks.
- Require change requests before merging to protected branches.
- Enforce at least two gates per change request: continuous integration/tests **MUST** run, and at least one human review **MUST** approve before merge.

Organizations **SHOULD**:
- Link work items to change requests via automation or templates.
- Maintain audit trails for Iteration decisions and gate outcomes.

Organizations **MAY**:
- Incorporate additional governance such as compliance sign-offs or portfolio reviews.

## Level 2 (L2) — Execution Loop
In addition to L1, organizations **MUST**:
- Allow the Program Director to provision, resume, and stop a managed workspace runtime for the Delivery Team.
- Ensure the Delivery Team iterates within the workspace runtime from work item intake to merged change request.
- Provide mechanisms for responding to feedback from automated or human gates within the same Iteration.

Organizations **SHOULD**:
- Automate workspace runtime warm starts with seeded secrets and tooling.
- Provide observable status of change requests, including outstanding gates and feedback.

Organizations **MAY**:
- Employ multiple specialized agents (e.g., testing, documentation) inside the workspace runtime.

## Level 3 (L3) — Telemetry & Cost
In addition to L1 and L2, organizations **MUST**:
- Implement an idle shutdown policy for workspace runtimes to control spend and reduce risk.
- Track budget usage or consumption signals for workspace runtimes and automated services.

Organizations **SHOULD**:
- Enable warm start strategies (snapshots, caches) to minimize cold-start time while respecting policies.
- Surface Iteration-level telemetry (lead time, gate rework, runtime utilization) to Program Director dashboards.

Organizations **MAY**:
- Integrate anomaly detection or predictive scaling for workspace runtimes based on Iteration forecasts.

This methodology/spec is licensed under CC BY-SA 4.0.
