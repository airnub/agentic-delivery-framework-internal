# AGENTS — Program Director & Delivery Team

> Mini-glossary:
> - **Agentic Delivery Framework (ADF)** = overall system.
> - **Program Director** = orchestration service outside Codespaces.
> - **Delivery Team** = inner Codespaces agents + humans.
> - **Iteration** = timebox (Sprint/Cycle).
> - **Work items** = Epic → Story → Task (optional Change Request).

This repo defines two cooperating agent layers inside the Agentic Delivery Framework (ADF).

## 1) Program Director (Product/Program)

**Lives**: Outside Codespaces (SaaS service or local daemon, ideally as a **GitHub App**).

**Responsible for**:

- Iteration planning via **GitHub Projects (Iterations)**; selecting Stories for the active Iteration.
- **Codespaces lifecycle**: create/reuse/stop per Iteration or per Story; seed tasks and secrets.
- **Kicking off the Delivery Team** via `gh codespace ssh -c` or Codespaces REST exec hooks.
- **Model calls** via **GitHub Models** (OpenAI GPT‑5/GPT‑5‑Codex when available, Anthropic, Google) for planning/synthesis.
- **PR governance**: enforce Branch Protection; ensure **Copilot Code Review** + required checks before merge; move Issues to Done.
- **Cost & safety**: set retention windows, stop idle Codespaces, keep secrets in **Codespaces Secrets**.

**Key tools**: GitHub App auth, Codespaces REST/CLI, GitHub Models API, Projects API, Actions dispatch, Copilot Code Review.

## 2) Delivery Team (Engineering)

**Lives**: Inside Codespaces (your devcontainer).

**Options**:

- **Aider (CLI)** – diff/commit/PR workflow, terminal-first.
- **Cline (VS Code extension)** – executes terminal commands with human-in-the-loop approvals.
- **Continue (ext/CLI)** – extensible agent framework with MCP tools and custom tools.
- **OpenHands (OpenDevin)** – sandboxed “AI engineer,” runs commands/tests and proposes PRs.

**Responsible for**: cloning Story context, running stack (Docker/Supabase if enabled),
writing code and tests, opening PRs that **reference and close** Issues, and iterating until
acceptance.

**Safety rails**:

- No push to `main`/`release` branches.
- Always develop on `feat/<issue-key>-<slug>`; all changes via PR.
- Respect repo linters/formatters and required checks (tests, CodeQL, ESLint, etc.).

## Loop Summary

1. The Program Director selects Stories in the current **Iteration** and opens/assigns them.
2. The Program Director spins/reuses a **Codespace**; starts the Delivery Team on a `feat/*` branch.
3. The Delivery Team iterates (edit→run→test) and opens a PR (“Closes #123”).
4. **Copilot Code Review** + status checks gate merges; reviewer can nudge the Delivery Team.
5. On merge, the Program Director moves the Issue to **Done** and tears down/parks the Codespace.

> Formerly Agentic-Agile terminology (Outer Orchestrator / Inner Dev Agents).
