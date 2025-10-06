---
title: "Kill-Switch & Rollback Guide"
summary: "Protocols for activating the ADF v0.6.0 kill-switch, coordinating rollbacks, and restoring autonomous execution safely."
---

# Kill-Switch & Rollback Guide

Refer to [ADF v0.6.0 §5.2](../specs/adf-spec-v0.6.0.md#52-kill-switch-protocol) when planning or executing kill-switch activations. This guide provides the operational detail required to suspend and restore autonomous execution.

## Table of Contents
- [Activation Criteria](#activation-criteria)
- [Execution Steps](#execution-steps)
- [Rollback Coordination](#rollback-coordination)
- [Reactivation Requirements](#reactivation-requirements)
- [Communication Templates](#communication-templates)
- [Post-Incident Review](#post-incident-review)

## Activation Criteria

- Trigger the kill-switch when Trust Scores fall below emergency thresholds, critical secrets leak, or governance mandates suspension.
- Delivery Leads or designated incident responders **MUST** document the trigger rationale before activation.
- Activation **MUST** halt autonomous merges and disable agent-triggered pipelines immediately.

## Execution Steps

1. **Initiate:** Toggle the kill-switch control (infrastructure toggle, feature flag, or orchestration command).
2. **Log:** Record timestamp, initiator, reason, and affected systems in the Delivery Pulse log and Evidence Bundle.
3. **Notify:** Alert stakeholders (Delivery Lead, Product Owner, governance partners) via agreed communication channel.
4. **Secure:** Revoke agent credentials or tokens if compromise is suspected.
5. **Freeze:** Block new CR merges until remediation plan is approved.

## Rollback Coordination

- Create a dedicated remediation Story referencing the triggering clause and incident ID.
- Capture containment steps, validation checks, and required approvals in the Story Preview.
- Coordinate with platform teams to restore infrastructure components after verification.
- Update CAPA tracker with tasks derived from the incident analysis.

### Informative Example — Neutral Rollback Checklist

```
Rollback Checklist (informative)
- [ ] Kill-switch state confirmed OFF
- [ ] Evidence Bundle updated with incident notes
- [ ] Trust Score recalculated >= policy threshold
- [ ] Governance sign-off recorded
```

_This checklist is **informative**; adapt to organization-specific workflows while meeting normative requirements._

## Reactivation Requirements

- Autonomous execution **MUST NOT** resume until:
  - Trust Scores meet or exceed policy thresholds for the affected components.
  - Remediation plan is reviewed and approved via the `human-approval` gate.
  - Delivery Pulse documents recovery steps and residual risks.
  - Prompt hygiene and SSP controls pass targeted validation.
- Governance boards **SHOULD** attest to readiness for regulated systems.

## Communication Templates

- Provide templated notifications for activation, status updates, and reactivation announcements.
- Emphasize next steps, contact points, and expected timelines in each message.
- Store templates in a shared repository with clear informative labeling to avoid implying mandates.

## Post-Incident Review

- Conduct a retrospective within five working days.
- Document root cause, contributing factors, and improvement actions.
- Update Trust Score weighting or thresholds if the incident revealed blind spots (see [Trust Metrics guide](trust-metrics.md)).
- Share learnings during the next Pulse and ensure CAPA items remain visible until closed.

---

This work is licensed under CC BY-SA 4.0.
