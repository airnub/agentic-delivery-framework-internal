---
title: "Trust Metrics Implementation"
summary: "How to compute, report, and govern the ADF v0.6.0 trust metrics gate, including data sources and remediation loops."
---

# Trust Metrics Implementation

This guide expands [ADF v0.6.0 §5](../specs/adf-spec-v0.6.0.md#5-trust-metrics-and-kill-switch) with practical steps for running the `trust-metrics` gate and interpreting the resulting signals.

## Table of Contents
- [Trust Score Composition](#trust-score-composition)
- [Data Ingestion](#data-ingestion)
- [Gate Operation](#gate-operation)
- [Threshold Governance](#threshold-governance)
- [Reporting & Pulse Integration](#reporting--pulse-integration)
- [Remediation Workflow](#remediation-workflow)

## Trust Score Composition

A minimal Trust Score **MUST** aggregate the following dimensions:

| Dimension | Required Inputs | Notes |
| --- | --- | --- |
| Gate History | Pass/fail history for `spec-verify`, `tests-ci`, `security-static`, `mode-policy`. | Weight recent failures higher. |
| SSP Adherence | Lease duration, Guard Timer breaches, handoff confirmations. | Source from [Multi-Agent SSP guide](multi-agent-patterns.md). |
| Prompt Hygiene | Prompt log review status, sanitization scan results. | See [Prompt Hygiene guide](prompt-hygiene.md). |
| Delivery Health | Break-glass usage, unresolved CAPA, Pulse compliance. | Align with [Delivery Pulse guide](delivery-pulse.md). |

Scores **MUST** be normalized (0–100 or equivalent) with documented weighting stored in version control.

## Data Ingestion

- Pull gate outcomes from CI APIs or Evidence Bundle artifacts.
- Capture lease and handoff metadata from SSP automation or `provenance/hand-offs.json`.
- Import prompt hygiene status from the prompt version log.
- Record break-glass and CAPA data from work management tools.

### Informative Example — Neutral Data Pipeline

```
# Informative Python snippet for aggregating trust metrics
def compute_trust(cr_id):
    gate = gates_api.fetch_summary(cr_id)
    ssp = ledger.load("provenance/hand-offs.json")
    prompts = prompt_log.lookup(cr_id)
    pulse = pulse_metrics.fetch_recent()
    return scorer.combine(gate, ssp, prompts, pulse)
```

_This example is **informative**; teams MAY implement equivalent pipelines in their tooling of choice._

## Gate Operation

1. **Pre-merge:** Run Trust Score computation after all other gates pass.
2. **Evaluation:** Compare score against policy thresholds (e.g., 80 for merge, 60 for break-glass).
3. **Output:** Publish results to the Evidence Bundle (`gates/trust-metrics.json`) including component breakdown.
4. **Action:** If score falls below threshold, block merge, trigger remediation, and notify Delivery Lead.

## Threshold Governance

- Thresholds **MUST** live in version-controlled policy files with change history.
- Delivery Leads **MUST** review thresholds quarterly or after major incidents.
- Governance boards **SHOULD** approve adjustments impacting regulated environments.
- Teams MAY define progressive thresholds per autonomy level (document rationale).

## Reporting & Pulse Integration

- Daily Pulse summaries **MUST** include aggregated Trust Scores, trend deltas, and notable breaches (see [Delivery Pulse guide](delivery-pulse.md)).
- Maintain dashboards correlating Trust Scores with incident frequency and break-glass use.
- Share threshold changes during the Pulse to keep stakeholders aligned.

## Remediation Workflow

1. **Diagnose:** Identify dimension(s) dragging the score below threshold.
2. **Plan:** Create mitigation tasks or Story subtasks with explicit owners.
3. **Track:** Monitor improvements across subsequent CRs; log progress in Pulse artifacts.
4. **Verify:** Once metrics stabilize above threshold for two consecutive CRs, close remediation tasks.
5. **Document:** Update the Evidence Bundle with closure notes and share lessons learned during retrospectives.

---

This work is licensed under CC BY-SA 4.0.
