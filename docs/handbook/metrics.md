---
title: "Metrics Implementation Guide"
summary: "How to calculate and report DORA and agent-specific metrics for ADF v0.5.0."
---

# Metrics Implementation Guide

This guide explains how to compute and report the metrics defined in [Section 8 of the specification](../specs/adf-spec-v0.5.0.md#8-metrics-vocabulary).

## Table of Contents
- [Metric Catalog](#metric-catalog)
- [Data Sources](#data-sources)
- [Calculation Methods](#calculation-methods)
- [Reporting Cadence](#reporting-cadence)
- [Dashboards & Alerts](#dashboards--alerts)
- [Quality Tips](#quality-tips)

## Metric Catalog

### Minimal Set (Required)

| Metric | Definition | Target Cadence |
| --- | --- | --- |
| Lead Time for Changes | Time from first commit on Story branch to production deploy (or Pulse inclusion for pre-prod teams). | Daily snapshot via Pulse. |
| Deployment Frequency | Count of CRs merged to `main` (or deployed) per day. | Daily Pulse summary. |
| Change Failure Rate (CFR) | Percentage of CRs requiring hotfix or rollback within defined window. | Weekly review. |
| Mean Time to Restore (MTTR) | Average time to restore service after incident triggered by a change. | Incident retrospectives. |

### Optional Metrics

_Informative._ Optional metrics **MUST NOT** block merges unless organizational policy explicitly elevates them to mandatory status.

| Metric | Definition | Target Cadence |
| --- | --- | --- |
| Edit Locality % | Ratio of changed lines within declared scope vs. total changed lines. | Per CR, aggregated weekly. |
| Lease Churn | Average number of lease renewals or transfers per Story. | Weekly SSP review. |
| Preview→Merge Ratio | Number of Story Previews ready vs. merges achieved. Indicates flow efficiency. | Daily Pulse. |
| Gate Failure Taxonomy | Distribution of gate failure causes (tests, security, policy, etc.). | Monthly governance report. |

## Data Sources

- **Version control:** Pull CR metadata, commit timestamps, Story references.
- **CI pipelines:** Capture gate outcomes, test durations, Edit Locality metrics.
- **Incident tracker:** Record failure/rollback events for CFR and MTTR.
- **Lease registry:** Track lease acquisition, renewal, and release events.
- **Pulse artifacts:** Provide snapshot of merges, metrics, and break-glass events.

## Calculation Methods

1. **Lead Time for Changes:** `merge_timestamp - first_commit_timestamp`. For teams without continuous deploy, use `pulse_timestamp` as proxy.
2. **Deployment Frequency:** Count merges to `main` (or deploys) per day, aggregated over the week.
3. **CFR:** `(number_of_changes_causing_incident / total_changes)` over the review window.
4. **MTTR:** Average duration from incident start to restoration (end time).
5. **Edit Locality %:** `in_scope_changed_lines / total_changed_lines * 100`. Source from `mode-policy` gate output.
6. **Lease Churn:** `(lease_renewals + handoffs) / stories_completed` within period.
7. **Preview→Merge Ratio:** `previews_ready / merges_completed` within period. Values &lt;1 signal blockers post-preview.
8. **Gate Failure Taxonomy:** Categorize each gate failure with tags (e.g., `tests-ci::flaky`, `security-static::secret`) and compute distribution.

## Reporting Cadence

- **Daily Pulse:** Include Lead Time, Deployment Frequency, Preview→Merge, and notable gate failures.
- **Weekly Review:** Add CFR trends, Lease Churn insights, and gate failure hotspots.
- **Monthly Governance:** Present MTTR, Gate Failure Taxonomy, and conformance status.

## Dashboards & Alerts

- Use BI tools or spreadsheets to visualize trends. Dashboards **SHOULD** link to underlying Evidence Bundles.
- Configure alerts for thresholds, e.g., CFR > 15%, Edit Locality &lt; 80%, or Lease Churn spikes.
- Integrate with communication channels to notify Delivery Leads when metrics degrade.

## Quality Tips

- Automate data collection where possible to reduce manual errors.
- Document definitions in a metrics dictionary accessible to all stakeholders.
- Annotate significant events (incidents, releases) to contextualize trends.
- Validate metrics during retrospectives and adjust instrumentation when drift occurs.
- Ensure privacy considerations when publishing metrics derived from sensitive data.

For additional guardrails, reference the [Pulse guide](pulse-increment.md) and [Conformance roadmap](conformance.md).

---

This methodology/spec is licensed under CC BY-SA 4.0.
