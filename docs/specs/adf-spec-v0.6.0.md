---
title: "Agentic Delivery Framework v0.6.0"
summary: "Normative specification for ADF v0.6.0 covering spec-driven workflow, multi-agent SSP handoffs, refreshed CR gates, prompt hygiene controls, trust metrics with kill-switch requirements, Delivery Pulse metrics, compliance/DORA integration, and recommendations mapping."
---

# Agentic Delivery Framework (ADF) v0.6.0 Specification

> **Conventions used in this spec.** The key words **MUST**, **MUST NOT**, **SHOULD**, **SHOULD NOT**, and **MAY** are to be interpreted as described in RFC 2119. ADF remains **tool-agnostic**; platform “Profiles” are **informative** bindings and MUST NOT be required to claim conformance.

_Related:_ See **[ADF Roadmap to 24×7 Autonomous Delivery](../roadmaps/adf-roadmap-autonomous-delivery.md)** for adoption steps, and the **[Autonomy-with-Accountability](../vision/autonomy-principle.md)** principle for the north star.

> **Status:** Latest (v0.6.0). v0.5.0 and v0.4.0 remain normative references for teams pinned to prior minor versions.

## Table of Contents
- [0. Scope and Context](#0-scope-and-context)
- [1. Spec-Driven Workflow](#1-spec-driven-workflow)
- [2. Sequential Subtask Pipeline (SSP) Multi-Agent Handoffs](#2-sequential-subtask-pipeline-ssp-multi-agent-handoffs)
- [3. Change Request Gates](#3-change-request-gates)
- [4. Prompt Hygiene Requirements](#4-prompt-hygiene-requirements)
- [5. Trust Metrics and Kill-Switch](#5-trust-metrics-and-kill-switch)
- [6. Delivery Pulse Metrics](#6-delivery-pulse-metrics)
- [7. Compliance and DORA Integration](#7-compliance-and-dora-integration)
- [8. Recommendations Mapping](#8-recommendations-mapping)
- [Glossary](#glossary)
- [Appendices](#appendices)
- [Change History](#change-history)

## 0. Scope and Context

This specification defines the normative requirements for the Agentic Delivery Framework (ADF) v0.6.0. It applies to delivery teams composed of humans, agents, or hybrid pairs building software or documentation artifacts under governance. Non-normative rationale and implementation guidance live in the [handbook](../handbook/README.md) and associated profiles.

ADF v0.6.0 is backward compatible with v0.5.0. Teams MAY remain on v0.5.0 artifacts while assessing the upgrade. The upgrade path is detailed in the [changelog](../CHANGELOG.md) and [handbook conformance guide](../handbook/conformance.md).

## 1. Spec-Driven Workflow

1. Every initiative **MUST** originate from a current ADF specification section or formally referenced appendix clause. Stories **MUST** cite the relevant section identifier (for example `v0.6.0 §3`) within the Change Request (CR) description.
2. Deviations from the specification **MUST** be logged as `spec-variance` records in the Evidence Bundle together with a mitigation plan and owner.
3. Specification updates **MUST** follow the change control path described in [Section 3](#3-change-request-gates) and **MUST** be represented as Story branches.
4. Teams **SHOULD** maintain a `spec-map.md` artifact (informative) linking backlog items to specification clauses to aid audits.

The spec-driven workflow keeps governance explicit and avoids undocumented changes to the framework.

> **Implementation guidance (informative):** See the [Spec-Driven Story Guide](../guides/spec-driven-story.md) for backlog hygiene, spec map management, and variance handling patterns.

## 2. Sequential Subtask Pipeline (SSP) Multi-Agent Handoffs

### 2.1 Concepts

- **Lease Steward:** Principal accountable for Story Lease continuity and safe agent handoffs.
- **Handoff Packet:** Checklist capturing state, risks, and pending subtasks when control passes between agents or humans.
- **Guard Timer:** Maximum idle duration between subtasks before the Lease Steward **MUST** intervene.

### 2.2 Normative Algorithm Extensions

The Sequential Subtask Pipeline defined in v0.5.0 remains in force with the following additional requirements for multi-agent execution:

1. **Lease Steward Assignment** — Each Story **MUST** designate a Lease Steward before the first subtask begins.
2. **Handoff Packet Preparation** — Prior to transferring execution, the current executor **MUST** update the Handoff Packet with:
   - Subtask status and remaining work.
   - Pending gate actions.
   - Risk notes, especially data access and permissions concerns.
3. **Dual Verification** — Both the outgoing and incoming executors **MUST** acknowledge the Handoff Packet within the Story Preview log.
4. **Guard Timer Enforcement** — If no checkpoint occurs within the configured Guard Timer window, the Lease Steward **MUST** re-evaluate scope, optionally reassign, or pause the Story.
5. **Attribution Logging** — The Evidence Bundle **MUST** record executor transitions with timestamps and principal identifiers.

### 2.3 Anti-Collision Controls

- Concurrent editing on the Story branch **MUST NOT** occur. Automation **MUST** block parallel pushes when a lease is active.
- Informative Kanban visualizations **MAY** depict handoffs but **MUST** keep SSP sequential semantics intact.

> **Implementation guidance (informative):** Follow the [Multi-Agent SSP Patterns guide](../guides/multi-agent-patterns.md) for Handoff Packet templates, Guard Timer enforcement, and attribution logging.

## 3. Change Request Gates

ADF v0.6.0 defines the canonical Change Request (CR) gates. Every CR **MUST** pass the following gates, in any order consistent with organizational automation, before merge:

1. `tests-ci` — Unit, integration, or scenario tests **MUST** run with a green result aligned to the Story scope.
2. `security-static` — Static analysis and secret scanning **MUST** report no open Critical or High severities without documented risk acceptance.
3. `deps-supply-chain` — Dependency and SBOM checks **MUST** confirm a clean supply chain posture with pinned versions and no disallowed licenses.
4. `perf-budget` — Performance budget verification **MUST** demonstrate adherence to agreed budgets for primary user journeys.
5. `spec-verify` — Specification trace validation **MUST** reconcile requirements, Evidence Bundle, and documentation updates with the Story scope.
6. `mode-policy` — Policy-as-code checks **MUST** enforce workspace guardrails, prompt hygiene, and Edit Locality boundaries.
7. `preview-accept` — Product Owner or delegate **MUST** accept the Story Preview artifacts prior to merge.

**Gate Glossary**
- `tests-ci`: unit/integration tests passed.
- `security-static`: static analysis/secret scans passed.
- `deps-supply-chain`: dependency audit clean (no High/Critical).
- `perf-budget`: performance budgets met.
- `spec-verify`: specification/docs drift checks passed.
- `mode-policy`: policy-as-code rules satisfied (incl. mode/preset guardrails).
- `preview-accept`: Product Owner acceptance of Story Preview.

**Break-glass.** May be invoked **only** by the Delivery Lead for time-critical remediation. When used, the CR **MUST** (a) record `break_glass.used=true` in the Evidence Bundle with reason; (b) open a **CAPA** issue within 24 hours; (c) pass all gates retroactively within 72 hours or revert.

**Related:**
- Templates: [Story Spec YAML](../templates/story-spec.yaml) · [Verification Checklist](../templates/verification-checklist.yaml) · [Story Preview](../templates/story-preview.md)
- Guides: [Spec-Driven Story](../guides/spec-driven-story.md) · [Multi-Agent Patterns](../guides/multi-agent-patterns.md) · [Prompt Hygiene](../guides/prompt-hygiene.md) · [Trust Metrics](../guides/trust-metrics.md) · [Delivery Pulse](../guides/delivery-pulse.md) · [Kill-Switch Runbook](../guides/kill-switch-runbook.md) · [Enterprise Mapping](../guides/enterprise-mapping.md)
- Appendices: [Compliance Mapping](../appendix/compliance-mapping.md) · [DORA Alignment](../appendix/dora-alignment.md) · [Example CI](../appendix/example-ci.md)
- Mapping: [Recommendations → Challenges](../mappings/recommendations-vs-challenges.md)

## 4. Prompt Hygiene Requirements

1. Every autonomous or co-pilot agent prompt **MUST** reference the Story scope, the associated specification clause, and the current gate state.
2. Prompts **MUST NOT** contain credentials, access tokens, or production secrets. Sanitization checks **MUST** run inside the `mode-policy` gate.
3. Teams **MUST** maintain a prompt version log capturing author, purpose, and last review date.
4. Prompt edits **MUST** undergo peer review equivalent to code changes and adhere to the SSP workflow.
5. Informative prompt templates MAY reside under `docs/prompts/` but MUST declare their informative status and exclude organization-specific data.

> **Implementation guidance (informative):** The [Prompt Hygiene guide](../guides/prompt-hygiene.md) documents lifecycle controls, sanitization scans, and version log expectations.

**Related:**
- Templates: [Story Spec YAML](../templates/story-spec.yaml) · [Verification Checklist](../templates/verification-checklist.yaml) · [Story Preview](../templates/story-preview.md)
- Guides: [Spec-Driven Story](../guides/spec-driven-story.md) · [Multi-Agent Patterns](../guides/multi-agent-patterns.md) · [Prompt Hygiene](../guides/prompt-hygiene.md) · [Trust Metrics](../guides/trust-metrics.md) · [Delivery Pulse](../guides/delivery-pulse.md) · [Kill-Switch Runbook](../guides/kill-switch-runbook.md) · [Enterprise Mapping](../guides/enterprise-mapping.md)
- Appendices: [Compliance Mapping](../appendix/compliance-mapping.md) · [DORA Alignment](../appendix/dora-alignment.md) · [Example CI](../appendix/example-ci.md)
- Mapping: [Recommendations → Challenges](../mappings/recommendations-vs-challenges.md)

## 5. Trust Metrics and Kill-Switch

### 5.1 Trust Metrics

- Each CR **MUST** compute a **Trust Score** combining gate pass history, SSP adherence, and prompt hygiene compliance.
- **Lease Continuity** and **Edit Locality** metrics **MUST** feed into the Trust Score calculation.
- Trust metric thresholds **MUST** be stored in policy configuration and versioned with the repository.

> **Implementation guidance (informative):** Use the [Trust Metrics Implementation guide](../guides/trust-metrics.md) for scoring models, gate automation, and remediation workflows.

See: [Metrics Glossary](../guides/metrics-glossary.md) for definitions and formulas.

**Related:**
- Templates: [Story Spec YAML](../templates/story-spec.yaml) · [Verification Checklist](../templates/verification-checklist.yaml) · [Story Preview](../templates/story-preview.md)
- Guides: [Spec-Driven Story](../guides/spec-driven-story.md) · [Multi-Agent Patterns](../guides/multi-agent-patterns.md) · [Prompt Hygiene](../guides/prompt-hygiene.md) · [Trust Metrics](../guides/trust-metrics.md) · [Delivery Pulse](../guides/delivery-pulse.md) · [Kill-Switch Runbook](../guides/kill-switch-runbook.md) · [Enterprise Mapping](../guides/enterprise-mapping.md)
- Appendices: [Compliance Mapping](../appendix/compliance-mapping.md) · [DORA Alignment](../appendix/dora-alignment.md) · [Example CI](../appendix/example-ci.md)
- Mapping: [Recommendations → Challenges](../mappings/recommendations-vs-challenges.md)

### 5.2 Kill-Switch Protocol

1. A global **Kill-Switch** control **MUST** exist for each delivery environment, enabling immediate suspension of autonomous execution.
2. Kill-switch activation **MUST** be logged in the Evidence Bundle and Delivery Pulse with timestamp, initiator, and rationale.
3. Following activation, new CRs **MUST NOT** merge until a remediation plan is documented and reviewed via the `preview-accept` gate (or an equivalent manual approval recorded in the Evidence Bundle).
4. Reactivation of autonomous execution **MUST** require an explicit Trust Score review and Delivery Lead approval.

> **Implementation guidance (informative):** The [Kill-Switch & Rollback Runbook](../guides/kill-switch-runbook.md) covers activation criteria, rollback coordination, and reactivation steps.

See operational details in the [Kill-Switch & Rollback Runbook](../guides/kill-switch-runbook.md).

## 6. Delivery Pulse Metrics

- Delivery Pulse remains daily. Each Pulse Increment **MUST** include:
  - Aggregated Trust Scores and trend deltas for the period.
  - Guard Timer breach counts and disposition notes.
  - Prompt hygiene audit results and remediation tasks.
  - DORA metrics snapshot (see [Section 7](#7-compliance-and-dora-integration)).
  - Break-glass events and CAPA status.
- Teams **MUST** retain the last 21 Pulse Increment artifacts for auditability.
- Delivery Pulse minutes **SHOULD** link to the `spec-map.md` artifact when reviewing backlog alignment.

> **Implementation guidance (informative):** Refer to the [Delivery Pulse Operations guide](../guides/delivery-pulse.md) for telemetry packages, preparation workflow, and retention practices.

**Related:**
- Templates: [Story Spec YAML](../templates/story-spec.yaml) · [Verification Checklist](../templates/verification-checklist.yaml) · [Story Preview](../templates/story-preview.md)
- Guides: [Spec-Driven Story](../guides/spec-driven-story.md) · [Multi-Agent Patterns](../guides/multi-agent-patterns.md) · [Prompt Hygiene](../guides/prompt-hygiene.md) · [Trust Metrics](../guides/trust-metrics.md) · [Delivery Pulse](../guides/delivery-pulse.md) · [Kill-Switch Runbook](../guides/kill-switch-runbook.md) · [Enterprise Mapping](../guides/enterprise-mapping.md)
- Appendices: [Compliance Mapping](../appendix/compliance-mapping.md) · [DORA Alignment](../appendix/dora-alignment.md) · [Example CI](../appendix/example-ci.md)
- Mapping: [Recommendations → Challenges](../mappings/recommendations-vs-challenges.md)

## 7. Compliance and DORA Integration

1. Conformance Levels defined in v0.5.0 remain, with Level 3 now requiring Trust Score monitoring and kill-switch validation evidence.
2. Compliance mapping **MUST** reference applicable regulations or internal policies. The [Compliance Appendix](appendix-enterprise-mapping.md) remains informative; teams **SHOULD** extend it locally.
3. DORA metrics **MUST** be computed at least weekly and stored with Pulse artifacts. Calculation methods **MUST** be documented in the Evidence Bundle (`metrics/` directory).
4. Organizations pursuing audit-ready status **SHOULD** link DORA metrics to risk registers and compliance control IDs.

**Related:**
- Templates: [Story Spec YAML](../templates/story-spec.yaml) · [Verification Checklist](../templates/verification-checklist.yaml) · [Story Preview](../templates/story-preview.md)
- Guides: [Spec-Driven Story](../guides/spec-driven-story.md) · [Multi-Agent Patterns](../guides/multi-agent-patterns.md) · [Prompt Hygiene](../guides/prompt-hygiene.md) · [Trust Metrics](../guides/trust-metrics.md) · [Delivery Pulse](../guides/delivery-pulse.md) · [Kill-Switch Runbook](../guides/kill-switch-runbook.md) · [Enterprise Mapping](../guides/enterprise-mapping.md)
- Appendices: [Compliance Mapping](../appendix/compliance-mapping.md) · [DORA Alignment](../appendix/dora-alignment.md) · [Example CI](../appendix/example-ci.md)
- Mapping: [Recommendations → Challenges](../mappings/recommendations-vs-challenges.md)

## 8. Recommendations Mapping

The following recommendations are **informative** mappings between specification obligations and supporting materials. See the [Recommendations vs Challenges mapping](../mappings/recommendations-vs-challenges.md) for rationale on how each reference mitigates adoption risks:

| Spec Clause | Recommended Material | Notes |
|-------------|----------------------|-------|
| §1 | `handbook/README.md` | Maintains spec-driven backlog alignment playbooks. |
| §1 | `guides/spec-driven-story.md` | Informative spec-map maintenance and variance handling. |
| §2 | `handbook/ssp.md` | Includes multi-agent handoff checklist templates. |
| §2 | `guides/multi-agent-patterns.md` | Informative Handoff Packet and Guard Timer operations. |
| §3 | `handbook/cr-gates.md` | Details gate operations and sample policies. |
| §4 | `prompts/initial-agent-prompt.md` | Informative prompt baseline incorporating hygiene requirements. |
| §4 | `guides/prompt-hygiene.md` | Lifecycle controls and sanitization practices (informative). |
| §5 | `handbook/safety-rails.md` | Documents trust metrics, kill-switch deployment patterns. |
| §5 | `guides/trust-metrics.md` | Informative scoring, gate automation, and remediation guidance. |
| §5 | `guides/kill-switch-runbook.md` | Informative kill-switch activation and rollback procedures. |
| §6 | `handbook/pulse-increment.md` | Provides reporting cadence examples. |
| §6 | `guides/delivery-pulse.md` | Informative telemetry package and retention checklist. |
| §7 | `handbook/metrics.md` | Connects DORA metrics to compliance registers. |
| §7 | `specs/appendix-enterprise-mapping.md` | Informative compliance references. |
| §8 | `guides/enterprise-mapping.md` | Informative enterprise control translation tips. |

Recommendations **MAY** be adapted locally; adaptations **SHOULD** preserve tool-agnostic language.

> **Implementation guidance (informative):** The [Enterprise Mapping Playbook](../guides/enterprise-mapping.md) illustrates neutral control mappings, audit preparation steps, and stakeholder communication tips.

**Related:**
- Templates: [Story Spec YAML](../templates/story-spec.yaml) · [Verification Checklist](../templates/verification-checklist.yaml) · [Story Preview](../templates/story-preview.md)
- Guides: [Spec-Driven Story](../guides/spec-driven-story.md) · [Multi-Agent Patterns](../guides/multi-agent-patterns.md) · [Prompt Hygiene](../guides/prompt-hygiene.md) · [Trust Metrics](../guides/trust-metrics.md) · [Delivery Pulse](../guides/delivery-pulse.md) · [Kill-Switch Runbook](../guides/kill-switch-runbook.md) · [Enterprise Mapping](../guides/enterprise-mapping.md)
- Appendices: [Compliance Mapping](../appendix/compliance-mapping.md) · [DORA Alignment](../appendix/dora-alignment.md) · [Example CI](../appendix/example-ci.md)
- Mapping: [Recommendations → Challenges](../mappings/recommendations-vs-challenges.md)

## Glossary

- **CAPA:** Corrective and Preventive Action record.
- **Guard Timer:** Maximum idle duration before Lease Steward intervention.
- **Lease Steward:** Accountable principal ensuring safe SSP progression.
- **Trust Score:** Aggregated metric combining gate, SSP, and hygiene signals.

## Appendices

- [Appendix A — Autonomy Levels](appendix-autonomy-levels.md) _(normative definitions for autonomy capabilities)_
- [Appendix B — Compliance Mapping](../appendix/compliance-mapping.md) _(normative control alignment requirements)_
- [Appendix C — DORA Alignment](../appendix/dora-alignment.md) _(normative Delivery Pulse metric guidance)_
- [Appendix D — Enterprise Compliance Mapping](appendix-enterprise-mapping.md) _(informative mappings to regulatory frameworks)_
- [Appendix E — Informative CI Workflow](../appendix/example-ci.md) _(informative optional CI pattern)_
- [Appendix F — Informative Spec Tooling](../appendix/example-spec-tooling.md) _(informative optional maintenance practices)_
- [Appendix G — Historical Specifications](archive/) _(informative references to legacy versions)_

## Change History

- **v0.6.0 (Latest):** Introduced spec-driven workflow, multi-agent SSP handoffs, trust metrics with kill-switch requirements, expanded Delivery Pulse metrics, and compliance/DORA alignment updates.
- **v0.5.0:** See [ADF v0.5.0 Specification](adf-spec-v0.5.0.md).
- **v0.4.0:** See [ADF v0.4.0 Specification](spec.v0.4.0.md).

---

This work is licensed under CC BY-SA 4.0.
