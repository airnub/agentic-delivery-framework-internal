# Roadmap

## P0 — Documentation & Conventions
- Land this methodology scaffold; define branch naming, Change Request templates, and work item templates aligned to ADF (Delivery Lead + Product Owner + Developers).

## P1 — Delivery Lead orchestration (manual)
- Lightweight service or script that:
  - Reads the active **Sprint** from the work management system and upholds one Sprint Goal.
  - Creates/reuses a workspace runtime; injects secrets; briefs Developers on Story Preview expectations and WIP limits.
  - Monitors Change Request status; verifies Performance Budget evidence when applicable; moves the work item to Done on merge; hibernates the workspace runtime.
  - Publishes daily Pulse Increment snapshots ahead of the Delivery Pulse.

## P2 — Managed Delivery Lead tooling
- Replace personal credentials with managed auth (app/service principal).
- Add budget controls, WIP dashboards, and automatic warm starts.
- Multi-repo program view and cross-team story planning with Story Preview visibility.

## P3 — Advanced
- Multi-agent Developer team (test agent, docs agent, fixit agent) collaborating with humans.
- Risk-based gates (e.g., extra reviewers for migrations/infra changes, deeper Performance Budget analysis).
- Runbooks for rollbacks and hotfix Sprints integrated into Delivery Pulse updates.

## Sprint Flow
```mermaid
flowchart TD
  PO[Product Owner] --> SP[Sprint Planning]
  DL[Delivery Lead] --> SP
  SP --> SB[Sprint Backlog]
  SB --> DEV[Development (Developers: Human/AI/Hybrid)]
  DEV --> CR[Change Request]
  CR --> G{{CR Gates\nCI/Tests | QA | Security | Automated | Human | Performance Budget}}
  G -->|pass| INC[Increment (meets DoD)]
  G -->|changes requested| DEV
  INC --> REV[Sprint Review]
  REV --> REF[Backlog Refinement]
  DL --> DP[Delivery Pulse]
  INC -. daily aggregate .-> PI[Pulse Increment (daily demo build)]
  DP --> PI
  REV --> RET[Retrospective]
```

Telemetry and budget controls attach when the Delivery Lead creates/resumes the workspace runtime and during Delivery Pulse inspection so spend, WIP, and Performance Budgets stay visible throughout the Sprint.

---

This methodology/spec is licensed under CC BY-SA 4.0.
