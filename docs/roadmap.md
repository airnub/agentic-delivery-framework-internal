# Roadmap

## P0 — Documentation & Conventions
- Land this methodology scaffold; define branch naming, change request templates, and work item templates aligned to ADF (Program Director + Delivery Team).

## P1 — Manual Program Director
- A lightweight service or script that:
  - Reads the active **Iteration** from the work management system.
  - Creates/reuses a workspace runtime; injects secrets; starts the Delivery Team session.
  - Monitors change request status; moves the work item to Done on merge; hibernates the workspace runtime.

## P2 — Managed Program Director
- Replace personal credentials with managed auth (app/service principal).
- Add budget controls and automatic warm starts.
- Multi-repo program view and cross-team story planning.

## P3 — Advanced
- Multi-agent Delivery Team (test agent, docs agent, fixit agent).
- Risk-based gates (e.g., extra reviewers for migrations/infra changes).
- Runbooks for rollbacks and hotfix Iterations.

## Iteration Flow
```mermaid
flowchart TD
  PD[Program Director (outer)] --> P1{Select Iteration <br/> in Work Management System}
  P1 -->|For each Story| WR{Workspace Runtime available?}
  WR -->|No| C1[Create Workspace Runtime <br/> (warm start, secrets, retention)]
  WR -->|Yes| C2[Resume Workspace Runtime]
  C1 --> DT[Start Delivery Team inside workspace]
  C2 --> DT
  DT --> B1[Branch feat/&lt;work-item&gt;]
  B1 --> W[Implement Tasks <br/> plan → edit → run → test]
  W --> CR[Open Change Request <br/> with checklists ("Closes &lt;work-item&gt;")]
  CR --> G{{Change Request Gates}}
  G --> G1[CI / Tests]
  G --> G2[QA Verification]
  G --> G3[Security Review]
  G --> G4[Automated Review]
  G --> G5[Human Review]
  G -->|All pass| M[Merge → Close Work Item]
  G -->|Fail| DT
  M --> R{More Stories in Iteration?}
  R -->|Yes| P1
  R -->|No| H[Hibernate/Stop Workspace <br/> Generate Metrics]
```

Telemetry and budget controls attach at workspace runtime creation/resume (nodes C1/C2) and at hibernate/stop (node H) so the Program Director can meter spend across Iterations.

_Figure: Overview flow anchors roadmap stages to the outer Program Director loop and inner Delivery Team cadence using neutral terminology. Formerly Agentic-Agile iteration flow._

---

This methodology/spec is licensed under CC BY-SA 4.0.
