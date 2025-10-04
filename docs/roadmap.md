# Roadmap

## P0 — Documentation & Conventions
- Land this docs scaffold; define branch naming, PR templates, and Issue templates aligned to ADF (Program Director + Delivery Team).

## P1 — Manual Program Director
- A small Node/TS script (or GitHub App) that:
  - Reads the active **Iteration** from Projects.
  - Creates/reuses a Codespace; injects secrets; runs `gh codespace ssh -c` to start the Delivery Team.
  - Monitors PR status; moves Issue to Done on merge; stops/parks the Codespace.

## P2 — GitHub App Program Director
- Replace PAT with App auth; fine-grained permissions.
- Add budget controls and automatic prebuild warmups.
- Multi-repo program view and cross-repo story planning.

## P3 — Advanced
- Multi-agent Delivery Team (test agent, docs agent, fixit agent).
- Risk-based gates (e.g., extra reviewers for migrations/infra changes).
- Runbooks for rollbacks and hotfix Iterations.

## Iteration Flow
```mermaid
flowchart TD
  %% Agentic Delivery Framework — Overview Flow
  A[Program Director\n(Outside Codespaces)] --> B{Select Iteration\nvia GitHub Projects}
  B -->|For each Story| C{Codespace exists?}
  C -->|No| D[Create Codespace\n(prebuilds, secrets, retention)]
  C -->|Yes| E[Resume Codespace]
  D --> F[Start Delivery Team inside Codespace\n(Aider/Cline/Continue/OpenHands)]
  E --> F
  F --> G[Create branch\nfeat/<issue-key>]
  G --> H[Implement Tasks\nplan → edit → run → test]
  H --> I[Open PR with checklists\n"Closes #<issue-id>"]
  I --> J{{PR Gates}}
  J --> J1[CI / Tests]
  J --> J2[QA Verification]
  J --> J3[Security Review\n(CodeQL / deps)]
  J --> J4[Copilot Code Review]
  J --> J5[Human Reviewer(s)]
  J -->|All pass| K[Merge → Close Issue →\nMove Story to Done]
  J -->|Fail| F
  K --> L{More Stories in Iteration?}
  L -->|Yes| B
  L -->|No| M[Stop/Hibernate Codespace\nGenerate Metrics]
  M --> N[Iteration Review & Retro\nProgram Director plans next Iteration]
```
Telemetry and budget controls attach at Codespace creation/resume (nodes D/E) and at stop/hibernate (node M) so the Program Director can meter spend across Iterations.

_Figure: Overview flow anchors roadmap stages to the outer Program Director loop and inner Delivery Team cadence. Formerly Agentic-Agile iteration flow._

