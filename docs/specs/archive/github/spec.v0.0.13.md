# Spec v0.0.13 — MVP (docs-only repo rename)

> **Historical GitHub implementation:** This version documents the original GitHub-specific workflow. For the current neutral methodology read [spec v0.4.0](../../spec.v0.4.0.md) alongside the [GitHub platform profile](../../../profiles/github.md).

> **Terminology refresh (2025-10):** Vocabulary normalized to Delivery Lead, Product Owner, and Developers with Delivery Pulse, Story Preview, and Pulse Increment references. Behavioral scope unchanged from the original 0.0.13 release.

## Changelog

- Docs-only update: repository renamed to `airnub/agentic-delivery-framework`; links and references updated. No behavioral changes.

## 1. Architecture
- **Delivery Lead** (service or GitHub App) manages Sprints (aka Iterations) and Codespaces lifecycle.
- **Developers** run **inside Codespaces**; supports Aider/Cline/Continue/OpenHands.

## 2. Required Capabilities
### Delivery Lead
- **Select work**: read Issues with label `iteration:<num>` or in active **Sprint (aka Iteration)**.
- **Governance**: ensure Branch Protection enabled, required checks configured, Copilot Code Review assigned, WIP limits respected (≤3 active Stories), and Delivery Pulse notes capture daily Pulse Increment status.

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

---

This methodology/spec is licensed under CC BY-SA 4.0.
