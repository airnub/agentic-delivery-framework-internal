---
title: "Appendix — DORA Alignment"
summary: "Normative linkage between ADF Delivery Pulse metrics and DORA capabilities."
---

# Appendix — DORA Alignment

> **Status:** Normative. The metrics defined here **MUST** be implemented to claim DORA alignment under ADF v0.6.0.

## 1. Metric Definitions

1. **Deployment Frequency** — Count of successful `preview-build` + `human-approval` completions per Pulse Increment. Teams **MUST** store the count and deployment notes inside the Delivery Pulse record.
2. **Lead Time for Changes** — Duration from CR creation to `human-approval`. Lead time **MUST** include all gate dwell times and be captured in the Trust Score ledger.
3. **Change Failure Rate** — Ratio of deployments that trigger a `break_glass.used=true` record, revert, or emergency fix within 7 days. Evidence **MUST** cite the associated CAPA reference.
4. **Time to Restore Service** — Time from incident declaration to production recovery. Recovery steps **MUST** link to `mode-policy` outcomes and kill-switch activations when used.

## 2. Data Collection Requirements

- Delivery Pulse **MUST** include a dedicated `metrics/dora.json` artifact summarizing the four metrics with timestamps.
- Calculations **MUST** be reproducible using artifacts stored in the Evidence Bundle (no external dashboards required).
- When automated agents collect metrics, the Lease Steward **MUST** validate the results weekly.

## 3. Usage in Governance

- Quarterly conformance reviews **MUST** compare DORA trends against Trust Score thresholds.
- Material deviations (±20% change over a quarter) **MUST** trigger a remediation Story with explicit linkage to the impacted gates.
- Informative regional supplements **MAY** provide additional regulatory metrics, provided they remain clearly labeled as informative.

## 4. Reporting Format

| Field | Description | Source |
|-------|-------------|--------|
| `deployment_frequency` | Integer count of production deployments per Pulse Increment. | `preview-build` gate logs |
| `lead_time_hours` | Mean lead time in hours for completed CRs. | Trust Score ledger |
| `change_failure_rate` | Percentage of deployments requiring remediation. | Delivery Pulse incident register |
| `time_to_restore_hours` | Mean hours to restore service after incidents. | Incident response timeline |

Teams **MUST** retain at least 12 months of historical DORA artifacts to support audits and retrospectives.
