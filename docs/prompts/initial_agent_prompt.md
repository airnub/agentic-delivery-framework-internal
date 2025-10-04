# Delivery Team Prompt — Bootstrap ADF Documentation

> Use this prompt with a Delivery Team agent (Aider/Continue/OpenHands/Cline) **inside the approved workspace runtime** for this repository. The agent should generate or update methodology documentation and scaffolding without touching application code.

## High-Level Objective

Establish or refresh the repository documentation so the **Program Director** can select Issues in the active **Iteration** and run the loop safely.

## Must-Have Outputs

1. Ensure these files exist and match intent:
   - `/README.md`
   - `/AGENTS.md`
   - `/docs/vision.md`
   - `/docs/problem-statement.md`
   - `/docs/goals.md`
   - `/docs/roadmap.md`
   - `/docs/specs/spec.v0.0.21.md` (latest semver spec)
   - `/docs/adrs/0001-architecture-dual-loop.md`
   - `/docs/naming/enterprise-friendly-naming.md`
2. Add methodology hygiene if missing:
   - `.github/ISSUE_TEMPLATE/` set (Story, Task, Bug, plus optional Change Request template)
   - `.github/PULL_REQUEST_TEMPLATE.md` with documentation-focused checklist
   - `.github/CODEOWNERS` (placeholder owners)
   - `.github/dependabot.yml` (docs/dependency placeholder if required)
3. Provide guidance in docs for selecting the appropriate platform profile (e.g., link to [docs/profiles/github.md](../profiles/github.md) for GitHub adopters). Do not automate platform setup unless explicitly instructed.

## Guardrails

- Do **not** push to `main`. Create branch `docs/bootstrap-<date>`.
- All changes via **PR** titled `docs: bootstrap agentic delivery framework documentation` with body referencing Issues.
- Keep secrets out of files. Do not modify devcontainer or executable workflows unless instructed.

## Visual References
- [ADF overview flow Mermaid source](../diagrams/adf-overview-flow.mmd)
- [ADF dual-loop sequence Mermaid source](../diagrams/adf-sequence.mmd)

## Inputs (from conversation distilled)

- Program Director operates outside the workspace runtime and controls lifecycle via the chosen platform APIs or tooling.
- Delivery Team agents run inside the managed workspace runtime (devcontainer, cloud IDE, etc.) and iterate on Stories before opening change requests.
- Use platform-neutral terminology and link to the relevant profile when platform-specific guidance is needed.
- Safety: keep work inside the governed workspace runtime with branch protection, required checks, and automated review configured per conformance level.
- Optional stack needs: container tooling, database emulation, or other services defined in the workspace baseline.
- ADF Iterations (Sprint/Cycle) define the timebox; reset or resume the workspace runtime per Iteration policy.

## Tasks

1. Verify and (re)generate the files listed under **Must-Have Outputs** using the content and intent in this repo.
2. Create `.github/` templates described above with concise, policy-aligned checklists.
3. Open a PR summarizing how the updates reinforce the Program Director + Delivery Team dual-loop architecture.

## Definition of Done

- PR created from `docs/bootstrap-<date>` containing only documentation and configuration templates.
- Markdown lint and link checks pass.
- PR reviewed/approved; Issues closed via keywords where applicable.

---

This methodology/spec is licensed under CC BY-SA 4.0.
