# ADR 0001: Dual‑Loop Architecture (Orchestrator + Codespaces)

## Context
We need safe, auditable agentic development that maps onto Agile sprints and keeps all execution inside GitHub’s ecosystem (existing NDAs, org policies, and audit).

## Decision
Adopt a **dual‑loop** architecture:
- **Outer Orchestrator** (product/program layer) outside Codespaces controls sprints, selects stories, manages Codespaces lifecycle, and applies PR governance.
- **Inner Dev Agent(s)** (engineering layer) run inside Codespaces and implement stories via PRs under strict gates.

## Alternatives Considered
- **Managed cloud agents** (OpenAI Codex, Anthropic Computer Use, Google/Gemini IDEs): faster to start, but limited container control, portability, and alignment with GitHub governance.
- **Local developer machines**: unsafe and non‑reproducible for autonomous edits.
- **Single big agent run (waterfall)**: poor feedback loops; hard to govern.

## Consequences
- **Pros**: safety (no local edits), GitHub‑native governance, model choice via GitHub Models, reproducible envs.
- **Cons**: we own orchestration (Codespaces minutes, prebuilds, secrets, costs). We mitigate with prebuilds, idle shutdowns, and budgets.
