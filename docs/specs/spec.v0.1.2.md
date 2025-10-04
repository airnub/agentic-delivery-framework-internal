# Spec v0.1.2 — MVP (documentation enhancements)

## 1. Architecture
- **Program Director** (service or GitHub App) manages Iterations and Codespaces lifecycle.
- **Delivery Team** runs **inside Codespaces**; supports Aider/Cline/Continue/OpenHands.

## 2. Required Capabilities
### Program Director
- **Select work**: read Issues with label `iteration:<num>` or in active **Iteration**.
- **Codespaces lifecycle**: create/reuse/stop via REST or `gh codespace`.
- **Start Delivery Team**: `gh codespace ssh -c 'git switch -c feat/<issue>; ./agent/start.sh <issue>'`.
- **Governance**: ensure Branch Protection enabled, required checks configured, and Copilot Code Review assigned.
- **Secrets**: provision Codespaces Secrets for tokens/keys; never log secrets.

### Delivery Team
- **Environment**: devcontainer includes git, Node/PNPM (or your stack), Docker‑in‑Docker, optional Supabase CLI.
- **Behavior**: create `feat/*` branch, implement ACs, run tests/linters, open PR with `Closes #<id>`; iterate until green.

## 3. Devcontainer (baseline)
- Base image: Debian/Ubuntu devcontainer with git + gh + Node LTS + Docker‑in‑Docker feature.
- Ports default **Private**; expose only what’s needed.
- Install chosen Delivery Team tooling (Aider/Cline/Continue/OpenHands) and `./agent/start.sh`.

## 4. Governance
- Branch Protection on default branch; required checks (CI, lint, tests, CodeQL).
- Copilot Code Review auto‑requested.

## 5. Acceptance
- From a clean repo, Program Director can: pick one Issue, spin a Codespace, start the Delivery Team, get a PR, pass checks, merge, close Issue, stop Codespace.

## 6. Documentation Enhancements (Non-behavioral)
- Added **Mermaid overview flow** and **dual-loop sequence** diagrams (`docs/diagrams/adf-overview-flow.mmd`, `docs/diagrams/adf-sequence.mmd`).
- Embedded diagrams across `README.md`, `docs/vision.md`, `docs/roadmap.md`, and `docs/adrs/0001-architecture-dual-loop.md` for quick reference.
- Updated `docs/prompts/initial_agent_prompt.md` with links so future agents keep visuals and behavior in sync.

This methodology/spec is licensed under CC BY-SA 4.0.
