# AGENTS

This repo defines two cooperating agent layers.

## 1) Outer Orchestrator (Product/Program)
**Lives**: Outside Codespaces (SaaS service or local daemon, ideally as a **GitHub App**).  
**Responsible for**:
- Sprint planning via **GitHub Projects (Iterations)**; selecting stories for the active sprint.
- **Codespaces lifecycle**: create/reuse/stop per sprint or per story; seed tasks and secrets.
- **Kicking off inner agents** via `gh codespace ssh -c` or Codespaces REST exec hooks.
- **Model calls** via **GitHub Models** (OpenAI GPT‑5/GPT‑5‑Codex when available, Anthropic, Google) for planning/synthesis.
- **PR governance**: enforce Branch Protection; ensure **Copilot Code Review** + required checks before merge; move Issues to Done on acceptance.
- **Cost & safety**: set retention windows, stop idle Codespaces, keep secrets in **Codespaces Secrets**.

**Key tools**: GitHub App auth, Codespaces REST/CLI, GitHub Models API, Projects API, Actions dispatch, Copilot Code Review.

## 2) Inner Dev Agents (Engineering)
**Lives**: Inside Codespaces (your devcontainer).

**Options**:
- **Aider (CLI)** – diff/commit/PR workflow, terminal‑first.
- **Cline (VS Code extension)** – executes terminal commands with human‑in‑the‑loop approvals.
- **Continue (ext/CLI)** – extensible agent framework with MCP tools and custom tools.
- **OpenHands (OpenDevin)** – sandboxed “AI engineer,” runs commands/tests and proposes PRs.

**Responsible for**: cloning story context, running stack (Docker/Supabase if enabled), writing code and tests, opening PRs that **reference and close** Issues, and iterating until acceptance.

**Safety rails**:
- No push to `main`/`release` branches.
- Always develop on `feat/<issue-key>-<slug>`; all changes via PR.
- Respect repo linters/formatters and required checks (tests, CodeQL, ESLint, etc.).

## Loop Summary
1. Outer selects stories in current **Iteration** and opens/assigns them.
2. Outer spins/reuses a **Codespace**; starts inner agent on a `feat/*` branch.
3. Inner agent iterates (edit→run→test) and opens a PR (“Closes #123”).
4. **Copilot Code Review** + status checks gate merges; reviewer can nudge the agent.
5. On merge, outer moves the Issue to **Done** and tears down/parks the Codespace.

