# Coding Agent Prompt — Bootstrap Documentation & Agile Rails

> Use this prompt with an inner agent (Aider/Continue/OpenHands/Cline) **inside a Codespace** for this repo. The agent should generate or update the documentation and basic Agile rails without touching application code.

## High‑Level Objective
Create/refresh the repo’s documentation and Agile scaffolding so that an **outer orchestrator** can pick Issues in the current **Iteration** and start the sprint loop safely.

## Must‑Have Outputs
1. Ensure these files exist and match intent:
   - `/README.md`
   - `/AGENTS.md`
   - `/docs/vision.md`
   - `/docs/problem-statement.md`
   - `/docs/goals.md`
   - `/docs/roadmap.md`
   - `/docs/specs/spec.v0.1.0.md` (semver spec)
   - `/docs/adrs/0001-architecture-dual-loop.md`
2. Add GitHub hygiene if missing:
   - `.github/ISSUE_TEMPLATE/` (bug, story w/ acceptance criteria, task)
   - `.github/PULL_REQUEST_TEMPLATE.md` (checklist incl. tests, links to Issue, security note)
   - `.github/CODEOWNERS` (placeholder owners)
   - `.github/dependabot.yml` (placeholders)
3. Add **Projects** and **Iteration** guidance to docs; do not create Projects programmatically unless instructed.

## Guardrails
- Do **not** push to `main`. Create branch `docs/bootstrap-<date>`.
- All changes via **PR** titled `docs: bootstrap agentic-agile documentation` with body referencing Issues.
- Keep secrets out of files. Do not modify devcontainer or CI here unless instructed.

## Inputs (from conversation distilled)
- Outer orchestrator outside Codespaces controls lifecycle via GitHub APIs/`gh codespace ssh -c`.
- Inner agents inside Codespaces (Aider/Cline/Continue/OpenHands) iterate on stories and open PRs.
- Use GitHub Models (OpenAI GPT‑5‑Codex where available) for reasoning; remain model‑agnostic.
- Safety: never edit local machines. Everything is in Codespaces with Branch Protection + required checks + Copilot Code Review + Code Scanning.
- Optional stack needs: Docker‑in‑Docker, Supabase CLI support in devcontainer.
- Agile over waterfall; sprints as timeboxed Iterations; fresh Codespace per sprint.

## Tasks
1. Verify and (re)generate the files listed under **Must‑Have Outputs** using the content and intent in this repo.
2. Create `.github/` templates described above with succinct, high‑signal checklists.
3. Open a PR with a summary explaining how this enables the dual‑loop architecture.

## Definition of Done
- PR created from `docs/bootstrap-<date>` containing only documentation and .github templates.
- All markdown lints pass; links work.
- PR reviewed/approved; Issues closed via keywords where applicable.
