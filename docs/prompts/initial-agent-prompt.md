# Developers Prompt — Bootstrap ADF Documentation

> Use this prompt with Developer agents (Aider/Continue/OpenHands/Cline) **inside the approved workspace runtime** for this repository. The agent should generate or update methodology documentation and scaffolding without touching application code.

## High-Level Objective

Establish or refresh the repository documentation so the **Delivery Lead**, **Product Owner**, and **Developers** can operate each **Sprint (aka Iteration)** safely with Delivery Pulse cadences and inspectable artifacts.

## Must-Have Outputs

1. Ensure these files exist and match intent:
   - `/README.md`
   - `/AGENTS.md`
   - `/docs/overview.md`
   - `/docs/guide/handbook.md`
   - `/docs/specs/spec.v0.4.0.md` (latest semver spec)
   - `/docs/specs/changelog.md`
   - `/docs/adrs/0001-architecture-planning-delivery-flow.md`
   - `/docs/naming/enterprise-friendly-naming.v0.0.4.md`
2. Add methodology hygiene if missing:
   - Change Request templates covering Story, Task, Bug, and (optionally) Change Request summaries under the directory required by the selected platform profile (e.g., GitHub `.github/ISSUE_TEMPLATE/`, GitLab `.gitlab/issue_templates/`).
   - A Change Request description template with documentation-focused checklist following the platform profile’s conventions (e.g., GitHub `.github/PULL_REQUEST_TEMPLATE.md`, GitLab `merge_request_templates/`).
   - Code ownership configuration aligned with the platform profile (e.g., GitHub `.github/CODEOWNERS`, GitLab `CODEOWNERS`).
   - Dependency update configuration required by the platform profile (e.g., GitHub `.github/dependabot.yml`, Renovate or built-in tooling elsewhere).
3. Provide guidance in docs for selecting the appropriate platform profile (e.g., link to [docs/profiles/github.md](../profiles/github.md) for GitHub adopters). Do not automate platform setup unless explicitly instructed.

## Guardrails

- Do **not** push to `main`. Create branch `docs/bootstrap-<date>`.
- All changes via **Change Request (CR)** titled `docs: bootstrap agentic delivery framework documentation` with body referencing Issues/Work Items.
- Keep secrets out of files. Do not modify devcontainer or executable workflows unless instructed.

## Visual References
- [ADF overview flow Mermaid source](../diagrams/adf-overview-neutral.mmd)
- [ADF planning & delivery sequence Mermaid source](../diagrams/adf-sequence-neutral.mmd)

## Inputs (from conversation distilled)

- Delivery Lead operates outside the workspace runtime and controls lifecycle via the chosen platform APIs or tooling.
- Product Owner curates the Product Goal and Product Backlog; collaborate on Story Previews and Sprint Reviews.
- Developers (Human / AI / Hybrid) run inside the managed workspace runtime (devcontainer, cloud IDE, etc.), produce Story Previews, and ensure DoD Signals plus Performance Budget checks pass before merge.
- Use platform-neutral terminology and link to the relevant profile when platform-specific guidance is needed.
- Safety: keep work inside the governed workspace runtime with branch protection, required checks, automated review, Delivery Pulse reporting, and WIP limits configured per conformance level.
- Optional stack needs: container tooling, database emulation, or other services defined in the workspace baseline.
- ADF Sprints (aka Iterations) define the timebox; reset or resume the workspace runtime per Sprint policy and publish a daily Pulse Increment.

## Tasks

1. Verify and (re)generate the files listed under **Must-Have Outputs** using the content and intent in this repo.
2. Create the platform-profile-aligned templates described above with concise, policy-aligned checklists.
3. Open a Change Request summarizing how the updates reinforce the Delivery Lead + Developers planning and delivery flow, following the workflow steps for the chosen platform profile (GitHub, GitLab, etc.).

## Definition of Done

- Change Request created from `docs/bootstrap-<date>` containing only documentation and configuration templates.
- Markdown lint and link checks pass.
- Change Request reviewed/approved per the selected platform profile; Issues/Work Items closed via keywords where applicable.

---

This work is licensed under CC BY-SA 4.0.
