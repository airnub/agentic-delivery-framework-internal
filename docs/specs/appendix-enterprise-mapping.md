---
title: "Appendix — Enterprise Mapping"
summary: "Informative mapping from ADF evidence and metrics to common enterprise audit frameworks."
---

# Appendix — Enterprise Mapping

This appendix is **informative** and aligns ADF artifacts with common enterprise expectations. Use it to demonstrate how the methodology satisfies compliance and governance inquiries without introducing vendor lock-in.

## Evidence Bundle → SOC2 / ISO Change Evidence

| Evidence Field | SOC2 CC / ISO 27001 Control Alignment | Notes |
| --- | --- | --- |
| `requirements-trace.json` | SOC2 CC7.2, ISO 27001 A.8.33 | Demonstrates requirement identification and approval path. |
| `summary.md` | SOC2 CC1.2, ISO 27001 A.5.23 | Captures approvers, scope, and risk handling for change records. |
| `gates/` artifacts | SOC2 CC7.3, ISO 27001 A.8.25 | Provides testing, security review, and dependency hygiene evidence. |
| `preview/` assets | SOC2 CC3.2, ISO 27001 A.8.34 | Shows validation of user impact prior to release. |
| `provenance/` metadata | SOC2 CC1.1, ISO 27001 A.8.24 | Supports integrity and provenance verification for builds. |
| `sanitized-logs/` (when present) | SOC2 CC7.4, ISO 27001 A.5.30 | Supplies traceability for incident response with privacy controls. |

## Minimal Metrics → DORA View

| ADF Metric | DORA Dimension | Insight |
| --- | --- | --- |
| Lead Time for Changes | Deployment Frequency & Lead Time | Measures velocity from commit to production-ready state. |
| Change Failure Rate (CFR) | Change Failure Rate | Tracks incident-triggering releases across agents and humans. |
| Mean Time to Restore (MTTR) | MTTR | Shows recovery agility after detected issues. |
| Deployment Frequency | Deployment Frequency | Highlights cadence of production releases driven by CRs. |
| Pulse Increment health | Quality & Reliability | Extends DORA with agent/human mix context for governance reviews. |

## CAB-lite Policy Mapping by Autonomy Level

| Autonomy Level | Human Review Expectations | Policy Notes |
| --- | --- | --- |
| A0–A1 | Formal CAB or change approver attends Delivery Pulse prior to release. | Aligns with traditional change advisory workflows while leveraging Story Preview for shared context. |
| A2 | CAB-lite review occurs asynchronously via Story Preview and Evidence Bundle sign-off before merge. | Human approver confirms `tests-ci` and policy gates, referencing the Agent Run Ledger. |
| A3 | CAB-lite shifts to periodic ratification of Story Leases and budget adherence. | Delivery Leads document approvals for `cost-budget`, `risk-budget`, and `lease-broker` outputs. |
| A4 | CAB-lite focuses on governance outcomes during scheduled ratification windows. | Governance board verifies ledger hash chain, risk budgets, and autonomy guardrails. |

> **Reminder:** Autonomy levels beyond A2 remain opt-in; adopting them requires the additional normative gates specified in the [Autonomy Levels appendix](appendix-autonomy-levels.md).

