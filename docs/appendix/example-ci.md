---
title: "Appendix — Informative CI Workflow"
summary: "Informative example of a neutral CI pipeline aligning with ADF gates."
---

# Appendix — Informative CI Workflow

> **Status:** Informative. This example illustrates one way to structure CI automation; adoption is optional.

## 1. Overview

This appendix provides a platform-agnostic Continuous Integration (CI) workflow that **MAY** assist teams in satisfying ADF gate expectations. It is intentionally generic and avoids vendor-specific syntax.

See: [`ci/examples/adf-neutral-pr-gate.yml`](../../ci/examples/adf-neutral-pr-gate.yml) for a minimal, vendor-neutral GitHub Actions example of ADF gates. Replace simulated steps with your organization’s real checks.

## 2. Sequential Gate Outline

1. **Source Checkout** — Retrieve the Story branch corresponding to the active CR.
2. **Automated Tests (`tests-ci`)** — Execute unit and integration suites with coverage thresholds configured per policy.
3. **Security Analysis (`security-static`)** — Run static analysis and secret scanning with fail-fast thresholds.
4. **Dependency Review (`deps-supply-chain`)** — Generate SBOM, check dependency advisories, and enforce allowed license lists.
5. **Performance Check (`perf-budget`)** — Execute representative benchmark scenarios and compare against the Story’s performance envelope.
6. **Spec Validation (`spec-verify`)** — Run schema validation and confirm `requirements-trace.json` references current clause identifiers.
7. **Policy Enforcement (`mode-policy`)** — Verify prompt hygiene, Edit Locality, and restricted file access.
8. **Preview Acceptance (`preview-accept`)** — Capture Product Owner sign-off on Story Preview artifacts and attach confirmation to the Evidence Bundle.
9. **Evidence Publication** — Attach logs and metrics to the Evidence Bundle for archive prior to merge.

## 3. YAML-Like Pseudocode (Informative)

```yaml
pipeline:
  stages:
    - checkout
    - tests-ci
    - security-static
    - deps-supply-chain
    - perf-budget
    - spec-verify
    - mode-policy
    - preview-accept
  rules:
    sequential: true
    artifacts:
      evidence_bundle: upload
```

The pseudocode above is illustrative and **MUST NOT** be interpreted as a required syntax. Teams **MAY** adapt the ordering to include additional local checks while preserving gate semantics.
