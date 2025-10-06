---
title: "Appendix — Compliance Mapping"
summary: "Normative mappings between ADF v0.6.0 controls and common compliance objectives."
---

# Appendix — Compliance Mapping

> **Status:** Normative. Teams MAY extend the mappings with local controls but MUST preserve the intent described here.

## 1. Scope

This appendix enumerates minimum compliance relationships that ADF v0.6.0 implementations **MUST** maintain. The mappings keep the framework aligned with widely adopted control catalogs while remaining platform-neutral.

## 2. Control Matrix

| ADF Obligation | Compliance Objective | Required Evidence Bundle Artifact |
|----------------|----------------------|-----------------------------------|
| `spec-verify` gate completion | Change management traceability (ISO/IEC 27001 A.12.1.2, SOC 2 CC8.1) | `requirements-trace.json` with linked CR identifiers |
| `tests-ci` gate adherence | Release validation integrity (ISO/IEC 27001 A.14.2.8, SOC 2 CC8.1) | Test summary report and automated test logs |
| `security-static` gate | Secure development lifecycle (NIST SSDF PO.3, ISO/IEC 27001 A.14.2.5) | Static analysis results, risk acceptance approvals |
| `deps-supply-chain` gate | Third-party component governance (NIST 800-218 PW.5, SOC 2 CC7.1) | SBOM, dependency exception register |
| `perf-budget` gate | Service level protection (ISO/IEC 20000-1 8.2, internal SLO policy) | Performance benchmark attachments, regression deltas |
| `framework-guard` gate | Application security policy enforcement (ISO/IEC 27001 A.9.4.4) | Access control checklist, guardrail configuration snapshot |
| `mode-policy` gate | Policy compliance and sensitive data handling (ISO/IEC 27001 A.18.1.4) | Policy evaluation logs, prompt hygiene checklist |
| `preview-build` gate | Release readiness review (ISO/IEC 27001 A.14.2.9) | Story Preview artifact, acceptance sign-off |
| `human-approval` gate | Segregation of duties (ISO/IEC 27001 A.6.1.2, SOC 2 CC5.2) | Approval record with reviewer role mapping |
| `trust-metrics` gate | Continuous control monitoring (NIST 800-137, SOC 2 CC3.2) | Trust score ledger, kill-switch health log |

Teams **MUST** update this matrix when regulatory scopes change and **SHOULD** annotate local control IDs alongside the provided catalog references.

## 3. Policy Integration Requirements

1. Organizations **MUST** maintain a compliance register that maps every ADF obligation to a policy owner.
2. The register **MUST** be referenced in the Evidence Bundle for each Change Request.
3. Deviations or accepted risks **MUST** be tracked as `spec-variance` entries and linked to corrective actions within 30 days.
4. When a new regulatory framework is adopted, a gap analysis **SHOULD** be completed before enabling autonomous execution at Autonomy Level A3 or higher.

## 4. Review Cadence

- Compliance mappings **MUST** be reviewed at least quarterly by the Delivery Lead and risk management representatives.
- Audit findings **MUST** feed into Delivery Pulse retrospectives.
- Informative local annexes **MAY** capture jurisdiction-specific notes, provided they are labeled informative and do not contradict this appendix.
