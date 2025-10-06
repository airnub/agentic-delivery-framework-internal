---
title: "Appendix — Informative CI Workflow"
summary: "Informative example of a neutral CI pipeline aligning with ADF gates."
---

# Appendix — Informative CI Workflow

> **Status:** Informative. This example illustrates one way to structure CI automation; adoption is optional.

## 1. Overview

This appendix provides a platform-agnostic Continuous Integration (CI) workflow that **MAY** assist teams in satisfying ADF gate expectations. It is intentionally generic and avoids vendor-specific syntax.

## 2. Sequential Gate Outline

1. **Source Checkout** — Retrieve the Story branch corresponding to the active CR.
2. **Spec Validation (`spec-verify`)** — Run schema validation and confirm `requirements-trace.json` references current clause identifiers.
3. **Automated Tests (`tests-ci`)** — Execute unit and integration suites with coverage thresholds configured per policy.
4. **Security Analysis (`security-static`)** — Run static analysis and secret scanning with fail-fast thresholds.
5. **Dependency Review (`deps-supply-chain`)** — Generate SBOM, check dependency advisories, and enforce allowed license lists.
6. **Performance Check (`perf-budget`)** — Execute representative benchmark scenarios and compare against the Story’s performance envelope.
7. **Policy Enforcement (`mode-policy`)** — Verify prompt hygiene, Edit Locality, and restricted file access.
8. **Preview Build (`preview-build`)** — Produce a deployable artifact plus Story Preview assets.
9. **Evidence Publication** — Attach logs and metrics to the Evidence Bundle before requesting `human-approval`.

## 3. YAML-Like Pseudocode (Informative)

```yaml
pipeline:
  stages:
    - checkout
    - spec-verify
    - tests-ci
    - security-static
    - deps-supply-chain
    - perf-budget
    - mode-policy
    - preview-build
  rules:
    sequential: true
    artifacts:
      evidence_bundle: upload
```

The pseudocode above is illustrative and **MUST NOT** be interpreted as a required syntax. Teams **MAY** adapt the ordering to include additional local checks while preserving gate semantics.
