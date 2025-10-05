# Spec v0.0.12 — MVP (documentation enhancements)

> **Historical GitHub implementation:** This version documents the original GitHub-specific workflow. For the current neutral methodology read [spec v0.4.0](../../spec.v0.4.0.md) alongside the [GitHub platform profile](../../../profiles/github.md).

> **Terminology refresh (2025-10):** Vocabulary normalized to Delivery Lead, Product Owner, and Developers with Delivery Pulse, Story Preview, and Pulse Increment references. Functional scope matches the original 0.0.12 release.

## 1. Architecture
- **Delivery Lead** (service or GitHub App) manages Sprints (aka Iterations) and Codespaces lifecycle.
- **Developers** run **inside Codespaces**; supports Aider/Cline/Continue/OpenHands.

## 2. Required Capabilities
### Delivery Lead
- **Select work**: read Issues with label `iteration:<num>` or in active **Sprint (aka Iteration)**.
- **Governance**: ensure Branch Protection enabled, required checks configured, Copilot Code Review assigned, WIP limits observed (≤3 active Stories), and Delivery Pulse notes capture daily Pulse Increment status.

> **GitHub profile (historical):**
> - **Codespaces lifecycle**: create/reuse/stop via REST or `gh codespace`.
> - **Start Developers**: `gh codespace ssh -c 'git switch -c feat/<issue>; ./agent/start.sh <issue>'`.
> - **Secrets**: provision Codespaces Secrets for tokens/keys; never log secrets.

### Developers
- **Environment**: devcontainer includes git, Node/PNPM (or your stack), Docker‑in‑Docker, optional Supabase CLI.
- **Behavior**: create `feat/*` branch, implement ACs, run tests/linters, open a Change Request with `Closes #<id>`, attach Story Preview evidence, verify Performance Budget impact, and iterate until gates are green.

## 3. Devcontainer (baseline)
- Base image: Debian/Ubuntu devcontainer with git + gh + Node LTS + Docker‑in‑Docker feature.
- Ports default **Private**; expose only what’s needed.
- Install chosen Developers tooling (Aider/Cline/Continue/OpenHands) and `./agent/start.sh`.

## 4. Governance
- Branch Protection on default branch; required checks (CI, lint, tests, CodeQL) plus Performance Budget verification when relevant.
- Copilot Code Review auto‑requested.
- Delivery Lead documents Story Previews, Pulse Increment status, and WIP compliance in the Change Request template.

## 5. Acceptance
- From a clean repo, Delivery Lead can: pick one Issue, start the Developers, get a Change Request, pass gates (CI/tests, QA, security, automated review, human approval, Performance Budget), merge, close Issue, publish the daily Pulse Increment note, and shut down the workspace runtime.

> **GitHub profile (historical):** Spin a Codespace, run the Developers workflow there, and stop the Codespace after merge.

## 6. Documentation Enhancements (Non-behavioral)
- Added **Mermaid overview flow** and **planning & delivery sequence** diagrams (`docs/diagrams/adf-overview-neutral.mmd`, `docs/diagrams/adf-sequence-neutral.mmd`).
- Embedded diagrams across `README.md`, `docs/overview.md`, and `docs/adrs/0001-architecture-planning-delivery-flow.md` for quick reference.
- Updated `docs/prompts/initial-agent-prompt.md` with links so future agents keep visuals and behavior in sync.

---

This work is licensed under CC BY-SA 4.0.
