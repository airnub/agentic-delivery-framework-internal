# AGENTS — Program Director & Delivery Team

> Mini-glossary:
> - **Agentic Delivery Framework (ADF)** = overall system.
> - **Program Director** = orchestration service outside the workspace runtime.
> - **Delivery Team** = inner workspace runtime agents + humans.
> - **Iteration** = timebox (Sprint/Cycle).
> - **Work items** = Epic → Story → Task (optional Change Request).
>
> Formerly positioned as a GitHub-native framework; the methodology is now vendor-neutral.

This repo defines two cooperating agent layers inside the Agentic Delivery Framework (ADF).

## 1) Program Director (Product/Program)

**Lives**: Outside the workspace runtime (SaaS service or local daemon, ideally as a managed application).

**Responsible for**:

- Iteration planning via a **work management system** with an Iteration timebox; selecting Stories for the active Iteration.
- **Workspace runtime lifecycle**: create/reuse/stop per Iteration or per Story; seed tasks and secrets.
- **Kicking off the Delivery Team** via remote execution or orchestration hooks.
- **Model calls** (OpenAI, Anthropic, Google, etc.) for planning/synthesis.
- **Change request governance**: enforce branch protections; ensure automated review and required gates before merge; move work items to Done.
- **Cost & safety**: set retention windows, stop idle workspace runtimes, keep secrets in secure vaults.

**Key tools**: API integrations to the selected platform(s), workspace runtime management, observability, automated review/security scanning.

## 2) Delivery Team (Engineering)

**Lives**: Inside the workspace runtime (your devcontainer, cloud IDE, ephemeral VM, or VDI).

**Options**:

- **Aider (CLI)** – diff/commit/change-request workflow, terminal-first.
- **Cline (VS Code extension)** – executes terminal commands with human-in-the-loop approvals.
- **Continue (ext/CLI)** – extensible agent framework with MCP tools and custom tools.
- **OpenHands (OpenDevin)** – sandboxed “AI engineer,” runs commands/tests and proposes change requests.

**Responsible for**: cloning Story context, running the stack (Docker/Supabase if enabled), writing code and tests, opening change requests that **reference and close** Stories/Tasks, and iterating until acceptance.

**Safety rails**:

- No push to `main`/`release` branches.
- Always develop on `feat/<work-item>-<slug>`; all changes via change requests.
- Respect repo linters/formatters and required checks (tests, security scanning, linting, etc.).

## Loop Summary

1. The Program Director selects Stories in the current **Iteration** and opens/assigns them.
2. The Program Director spins/reuses a **workspace runtime**; starts the Delivery Team on a `feat/*` branch.
3. The Delivery Team iterates (plan → edit → run → test) and opens a change request ("Closes <work-item>").
4. **Automated review**, security scanning, and status checks gate merges; a human reviewer can nudge the Delivery Team.
5. On merge, the Program Director moves the work item to **Done** and hibernates or tears down the workspace runtime.

> Formerly Agentic-Agile terminology (Outer Orchestrator / Inner Dev Agents).

---

### Glossary

- **Workspace Runtime**: any controlled development environment (cloud dev container, ephemeral VM, or VDI).
- **Change Request**: PR/MR/CL depending on the selected platform.
- **Automated Review**: any automated code review tool (examples live in platform profiles).
- **Security Review**: SAST/DAST/dependency scanning pipelines applicable to the selected platform.

---

This methodology/spec is licensed under CC BY-SA 4.0.
