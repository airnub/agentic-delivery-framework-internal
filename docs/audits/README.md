---
title: ADF Audits (Informative)
slug: /audits
---

# ADF Audits

- This folder contains **dated, immutable** audit documents of the ADF repo.
- Naming: `YYYY-MM-DD-adf-audit.md`
- Source: created manually and via the weekly GitHub Action (see `.github/workflows/adf-weekly-audit.yml`).
- Scope: audits are **informative**; the normative method remains in `docs/specs`.
- Weekly runs rely on `.github/prompts/adf-weekly-audit.prompt.yaml` and the scheduled workflow under `.github/workflows/`.
- The default GitHub Model for the workflow is `openai/gpt-5`; update the prompt if your organization requires a different engine.
- Local helper scripts are intentionally omitted so the GitHub Action remains the single audit entry point.
- The workflow calls GitHub Models directly, files the resulting report in a pull request labeled `automation:weekly-audit`, and
  auto-closes unattended audit PRs after seven days to prevent backlog churn.
