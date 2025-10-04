# Spec v0.1.0 — MVP

## 1. Architecture
- **Outer Orchestrator** (service or GitHub App) manages sprints and Codespaces lifecycle.
- **Inner Agent** runs **inside Codespaces**; supports Aider/Cline/Continue/OpenHands.

## 2. Required Capabilities
### Outer Orchestrator
- **Select work**: read Issues with label `sprint:<num>` or in active **Iteration**.
- **Codespaces lifecycle**: create/reuse/stop via REST or `gh codespace`.
- **Start inner agent**: `gh codespace ssh -c 'git switch -c feat/<issue>; ./agent/start.sh <issue>'`.
- **Governance**: ensure Branch Protection enabled, required checks configured, and Copilot Code Review assigned.
- **Secrets**: provision Codespaces Secrets for tokens/keys; never log secrets.

### Inner Agent
- **Environment**: devcontainer includes git, Node/PNPM (or your stack), Docker‑in‑Docker, optional Supabase CLI.
- **Behavior**: create `feat/*` branch, implement ACs, run tests/linters, open PR with `Closes #<id>`; iterate until green.

## 3. Devcontainer (baseline)
- Base image: Debian/Ubuntu devcontainer with git + gh + Node LTS + Docker‑in‑Docker feature.
- Ports default **Private**; expose only what’s needed.
- Install chosen inner agent (Aider/Cline/Continue/OpenHands) and `./agent/start.sh`.

## 4. Governance
- Branch Protection on default branch; required checks (CI, lint, tests, CodeQL).
- Copilot Code Review auto‑requested.

## 5. Acceptance
- From a clean repo, orchestrator can: pick one Issue, spin a Codespace, start inner agent, get a PR, pass checks, merge, close Issue, stop Codespace.

This methodology/spec is licensed under CC BY-SA 4.0.
