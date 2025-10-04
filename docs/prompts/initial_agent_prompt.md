
# Coding Agent Prompt — Bootstrap ADF Docs & Delivery Rails

> Use this prompt with a Delivery Team agent (Aider/Continue/OpenHands/Cline) **inside a Codespace** for this repo. The agent should generate or update the documentation and Agentic Delivery Framework (ADF) rails without touching application code.

## High-Level Objective

Create/refresh the repo’s documentation and ADF scaffolding so that the **Program Director** can pick Issues in the current **Iteration** and run the loop safely.

## Must-Have Outputs

1. Ensure these files exist and match intent:
   - `/README.md`
   - `/AGENTS.md`
   - `/docs/vision.md`
   - `/docs/problem-statement.md`
   - `/docs/goals.md`
   - `/docs/roadmap.md`
   - `/docs/specs/spec.v0.1.1.md` (semver spec)
   - `/docs/adrs/0001-architecture-dual-loop.md`
   - `/docs/naming/enterprise-friendly-naming.md`
2. Add GitHub hygiene if missing:
   - `.github/ISSUE_TEMPLATE/` (Epic, Story w/ acceptance criteria, Task, Change Request optional)
   - `.github/PULL_REQUEST_TEMPLATE.md` (checklist incl. tests, links to Issue, security note)
   - `.github/CODEOWNERS` (placeholder owners)
   - `.github/dependabot.yml` (placeholders)
3. Add **Projects** and **Iteration** guidance to docs; do not create Projects programmatically unless instructed.

## Guardrails

- Do **not** push to `main`. Create branch `docs/bootstrap-<date>`.
- All changes via **PR** titled `docs: bootstrap agentic delivery framework documentation` with body referencing Issues.
- Keep secrets out of files. Do not modify devcontainer or CI here unless instructed.

## Inputs (from conversation distilled)

- Program Director outside Codespaces controls lifecycle via GitHub APIs/`gh codespace ssh -c`.
- Delivery Team agents inside Codespaces (Aider/Cline/Continue/OpenHands) iterate on Stories and open PRs.
- Use GitHub Models (OpenAI GPT-5-Codex where available) for reasoning; remain model-agnostic.
- Safety: never edit local machines. Everything is in Codespaces with Branch Protection + required checks + Copilot Code Review + Code Scanning.
- Optional stack needs: Docker-in-Docker, Supabase CLI support in devcontainer.
- ADF Iterations (Sprint/Cycle) as timeboxes; fresh Codespace per Iteration.

## Tasks

1. Verify and (re)generate the files listed under **Must-Have Outputs** using the content and intent in this repo.
2. Create `.github/` templates described above with succinct, high-signal checklists.
3. Open a PR with a summary explaining how this enables the Program Director + Delivery Team dual-loop architecture.

## Definition of Done

- PR created from `docs/bootstrap-<date>` containing only documentation and .github templates.
- All markdown lints pass; links work.
- PR reviewed/approved; Issues closed via keywords where applicable.
