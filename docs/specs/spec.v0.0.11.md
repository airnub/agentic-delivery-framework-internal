# Spec v0.0.11 — MVP (naming update)

> **Terminology refresh (2025-10):** Vocabulary updated to Delivery Lead, Product Owner, and Developers with Delivery Pulse, Story Preview, and Pulse Increment references. Requirements remain semantically equivalent to the original 0.0.11 publication.

## 1. Architecture
- **Delivery Lead** (service or GitHub App) manages Sprints (aka Iterations) and Codespaces lifecycle.
- **Developers** run **inside Codespaces**; supports Aider/Cline/Continue/OpenHands.

## 2. Required Capabilities
### Delivery Lead
- **Select work**: read Issues with label `iteration:<num>` or in active **Sprint (aka Iteration)**.
- **Codespaces lifecycle**: create/reuse/stop via REST or `gh codespace`.
- **Start Developers**: `gh codespace ssh -c 'git switch -c feat/<issue>; ./agent/start.sh <issue>'`.
- **Governance**: ensure Branch Protection enabled, required checks configured, Copilot Code Review assigned, WIP limits respected (≤3 active Stories), and Delivery Pulse notes capture daily Pulse Increment status.
- **Secrets**: provision Codespaces Secrets for tokens/keys; never log secrets.

### Developers
- **Environment**: devcontainer includes git, Node/PNPM (or your stack), Docker‑in‑Docker, optional Supabase CLI.
- **Behavior**: create `feat/*` branch, implement ACs, run tests/linters, open a Change Request with `Closes #<id>`, attach Story Preview evidence, verify Performance Budget impact, and iterate until gates are green.

## 3. Devcontainer (baseline)
- Base image: Debian/Ubuntu devcontainer with git + gh + Node LTS + Docker‑in‑Docker feature.
- Ports default **Private**; expose only what’s needed.
- Install chosen Developers tooling (Aider/Cline/Continue/OpenHands) and `./agent/start.sh`.

## 4. Governance
- Branch Protection on default branch; required checks (CI, lint, tests, CodeQL) plus Performance Budget verification where applicable.
- Copilot Code Review auto‑requested.
- Delivery Lead documents Story Previews, Pulse Increment status, and WIP limit compliance within the Change Request template.

## 5. Acceptance
- From a clean repo, Delivery Lead can: pick one Issue, spin a Codespace, start the Developers, get a Change Request, pass gates (CI/tests, QA, security, automated review, human approval, Performance Budget), merge, close Issue, publish the daily Pulse Increment note, and stop Codespace.

---

This methodology/spec is licensed under CC BY-SA 4.0.
