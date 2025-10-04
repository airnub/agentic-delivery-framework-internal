
# ADR 0001: Dual-Loop Architecture (Program Director + Delivery Team)

> Also Known As: formerly Agentic-Agile dual-loop (Outer Orchestrator / Inner Dev Agents).

## Context

> Repository renamed from `airnub/agentic-agile` to `airnub/agentic-delivery-framework` (docs-only update; no behavioral changes).

We need safe, auditable agentic development that maps onto ADF Iterations and keeps all
execution inside GitHub’s ecosystem (existing NDAs, org policies, and audit).

## Decision

Adopt a **dual-loop** architecture:

- **Program Director** (product/program layer) outside Codespaces controls Iterations,
  selects Stories/Epics, manages Codespaces lifecycle, and applies PR governance.
- **Delivery Team** (engineering layer) runs inside Codespaces and implements Stories via
  PRs under strict gates.

## Diagrams
- [Mermaid overview flow](../diagrams/adf-overview-flow.mmd)
- [Mermaid dual-loop sequence](../diagrams/adf-sequence.mmd)

```mermaid
sequenceDiagram
  %% Agentic Delivery Framework — Dual-Loop Sequence
  participant PD as Program Director (Outer)
  participant GH as GitHub Projects (Iterations)
  participant CS as GitHub Codespaces
  participant DT as Delivery Team (Inner)
  participant PR as Pull Request Gates

  PD->>GH: Select active Iteration & Stories
  PD->>CS: Create/Resume Codespace (prebuilds, secrets)
  PD->>CS: Start DT via `gh codespace ssh -c`
  DT->>CS: git switch -c feat/<issue-key>
  DT->>CS: Implement Tasks (edit/run/test)
  DT->>PR: Open PR with "Closes #<issue-id>"
  PR->>PR: CI / QA Verification / Security Review / Copilot Review / Human Review
  alt All gates pass
    PR->>CS: Merge to default branch
    PD->>GH: Move Story to Done
    PD->>CS: Stop/Hibernate Codespace
  else Any gate fails
    PR->>DT: Comments & failing checks
    DT->>CS: Iterate fixes on branch
  end
  PD->>GH: Iteration Review & Plan Next
```
_Figure: Sequence diagram documents the Program Director ↔ Delivery Team interactions and review gates (formerly Agentic-Agile dual-loop)._

## Alternatives Considered

- **Managed cloud agents** (OpenAI Codex, Anthropic Computer Use, Google/Gemini IDEs):
  faster to start, but limited container control, portability, and alignment with GitHub
  governance.
- **Local developer machines**: unsafe and non-reproducible for autonomous edits.
- **Single big agent run (waterfall)**: poor feedback loops; hard to govern.

## Consequences

- **Pros**: safety (no local edits), GitHub-native governance, model choice via GitHub
  Models, reproducible envs, enterprise naming alignment.
- **Cons**: we own orchestration (Codespaces minutes, prebuilds, secrets, costs). We
  mitigate with prebuilds, idle shutdowns, and budgets.
