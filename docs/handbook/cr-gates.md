---
title: "CR Gates Operations Guide"
summary: "Operational playbook for running and troubleshooting ADF v0.5.0 Change Request gates."
---

# Change Request Gates — Operations Guide

This handbook expands on the normative [CR Gates](../specs/adf-spec-v0.5.0.md#3-change-request-gates) and documents minimum expectations, evidence capture, and break-glass handling.

## Table of Contents
- [Gate Overview](#gate-overview)
- [Gate Procedures](#gate-procedures)
- [Break-Glass Workflow](#break-glass-workflow)
- [Escalation Matrix](#escalation-matrix)
- [Reporting](#reporting)

## Gate Overview

All gates run on every CR unless explicitly bypassed via `break-glass`. Required check names **MUST** match the specification. The table below summarizes the purpose and minimal bar.

| Gate | Minimal Bar | Evidence |
| --- | --- | --- |
| `spec-verify` | Required fields present; schema lint passes. | Attach lint logs, RTM diff screenshot or `rtm.json` snippet. |
| `tests-ci` | All tests green; coverage meets policy threshold. | Test summary, coverage report path, failing tests annotated when applicable. |
| `security-static` | SAST and secret scan pass or documented risk acceptance. | SARIF, issue tracker link, acceptance note in Story Preview. |
| `deps-supply-chain` | SBOM generated; critical/high vulns addressed or deferred with approval. | SBOM artifact reference, vulnerability scan report, approval comment. |
| `perf-budget` | Key user journeys within defined latency/resource budgets. | Performance report with baseline comparison, flagged regressions explained. |
| `framework-guard` | Framework/platform guardrails satisfied. | Tool output, policy confirmation from framework owner. |
| `mode-policy` | Organizational policies (Edit Locality, restricted paths) satisfied. | Policy engine logs, locality % snippet. |
| `preview-build` | Story Preview assets successfully generated and attached. | Artifact link, screenshot thumbnail, build log. |
| `human-approval` | Required reviewers approved. | Reviewer list, approval timestamps, CODEOWNERS match. |

## Gate Procedures

1. **Pre-flight:** Ensure the Story Preview declares scope, risks, and dependencies. This prevents avoidable gate failures.
2. **Trigger:** Gates run automatically on push. Manual re-run **SHOULD** be available for flaky environments.
3. **Monitor:** Use CI dashboards to track status. Delivery Leads **SHOULD** subscribe to failure notifications.
4. **Remediate:**
   - Reproduce the failure locally when possible.
   - Update the Story Preview with root cause, fix plan, and lessons learned.
   - When a fix requires additional scope, create a new subtask per the [SSP guide](ssp.md).
5. **Record:** Store gate outputs in the Evidence Bundle under `gates/`.

## Break-Glass Workflow

1. **Eligibility:** Only Delivery Leads or designated incident responders **MAY** apply the `break-glass` label.
2. **Approval:** Document the justification in the CR discussion, referencing impacted gate(s) and mitigation plan.
3. **Bypass:** CI pipelines recognize the label and unblock gates 3–7. Gates 1, 2, 8, and 9 **MUST** still pass.
4. **CAPA:** Automatically create a corrective/preventive action (CAPA) work item for the next Sprint, linking to the CR.
5. **Pulse Flag:** Ensure the Pulse Increment highlights the break-glass event and its remediation status.

## Escalation Matrix

| Issue | First Contact | Secondary | Notes |
| --- | --- | --- | --- |
| Repeated gate failures | Story Owner | Delivery Lead | Evaluate for systemic fixes or scope adjustment. |
| Tool outage | Platform Engineer | Delivery Lead | Invoke incident response; consider break-glass if risk accepted. |
| Policy dispute | Delivery Lead | Governance Board | Document rationale in Story Preview and risk register. |
| Human reviewer unavailable | Delivery Lead | Product Owner | Reassign CODEOWNER or schedule synchronous review. |

## Reporting

- Include gate outcomes and failure reasons in the Pulse Increment summary.
- Track gate failure taxonomy in metrics dashboards (see [Metrics guide](metrics.md)).
- During retrospectives, review CAPA status and adjust guardrails where repeated break-glass events occur.

For automation references and GitHub-specific mapping, consult the [GitHub profile](../profiles/github.md).
