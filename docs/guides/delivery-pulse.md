---
title: "Delivery Pulse Operations"
summary: "Procedures for meeting the ADF v0.6.0 Delivery Pulse requirements, including telemetry curation and retention."
---

# Delivery Pulse Operations

This guide operationalizes [ADF v0.6.0 §6](../specs/adf-spec-v0.6.0.md#6-delivery-pulse-metrics), focusing on the daily Pulse Increment cadence and the expanded telemetry package.

## Table of Contents
- [Daily Cadence](#daily-cadence)
- [Telemetry Package](#telemetry-package)
- [Preparation Workflow](#preparation-workflow)
- [Distribution & Retention](#distribution--retention)
- [Roles and Collaboration](#roles-and-collaboration)
- [Continuous Improvement](#continuous-improvement)

## Daily Cadence

- Pulse Increments **MUST** occur every working day with a clearly published schedule.
- Each Pulse **MUST** summarize merges since the last increment, pending CRs, and active Story Leases.
- Delivery Leads **SHOULD** send reminders two hours prior to capture fresh data and updates.

## Telemetry Package

Include the following elements in every Pulse Increment:

| Element | Requirement |
| --- | --- |
| Trust Score Trend | Aggregate Trust Score, delta vs. previous Pulse, and breaches logged. |
| Guard Timer Breaches | Count, Story IDs, disposition (resolved, pending, escalated). |
| Prompt Hygiene Status | Summary of scans, outstanding remediation tasks, and new prompt approvals. |
| DORA Snapshot | Lead Time, Deployment Frequency, CFR, MTTR with commentary. |
| Break-Glass & CAPA | Events since last Pulse, CAPA owner, due date. |
| Backlog Alignment | Links to `spec-map.md` updates and major clause focus areas. |

### Informative Example — Pulse Summary Snippet

```
## Telemetry Highlights (informative example)
- Trust Score avg: 82 (+3)
- Guard Timer breaches: 1 (STORY-511, mitigated)
- Prompt hygiene: All scans green; PROMPT-112 pending review
- DORA: Lead Time 1.8d, Deploy Frequency 5/day, CFR 0%, MTTR n/a
```

_This format is **informative**; adapt to organizational templates while preserving required data._

## Preparation Workflow

1. **Collect Data:** Pull metrics from CI, Evidence Bundles, prompt logs, and lease registry.
2. **Synthesize Narrative:** Highlight notable trends, risks, and required decisions.
3. **Assemble Artifact:** Update Pulse document (`pulse/<date>/summary.md`) with telemetry table and decisions log.
4. **Review:** Delivery Lead validates accuracy; Product Owner adds customer-facing context.
5. **Publish:** Distribute artifact to stakeholders before the scheduled sync.

## Distribution & Retention

- Store Pulse artifacts in version-controlled or immutable storage for at least 21 increments.
- Tag each artifact with Sprint or iteration identifier to aid retrieval.
- Ensure access controls match the sensitivity of embedded telemetry.

## Roles and Collaboration

| Role | Responsibilities |
| --- | --- |
| Delivery Lead | Owns Pulse cadence, validates telemetry, facilitates discussion. |
| Product Owner | Provides business context, updates backlog alignment, tracks customer impact. |
| Governance Partner | Reviews compliance metrics, trust thresholds, and CAPA progress. |
| Executors | Supply demo assets, acknowledge actions, and confirm SSP continuity. |

## Continuous Improvement

- Use Pulse retrospectives weekly to refine telemetry accuracy and reduce manual steps.
- Capture improvement actions as Stories referencing the relevant specification clause.
- Integrate Pulse feedback into Trust Score weighting updates (see [Trust Metrics guide](trust-metrics.md)).
- Document lessons learned in the `pulse/<date>/notes.md` file for future audits.

---

This work is licensed under CC BY-SA 4.0.
