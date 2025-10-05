---
title: "Conformance Levels Guide"
summary: "Adoption roadmap and checklists for ADF v0.5.0 conformance levels L1–L3."
---

# Conformance Levels Guide

Use this guide to plan adoption of the [ADF conformance levels](../specs/adf-spec-v0.5.0.md#6-conformance-levels). Each level builds on the previous one and introduces additional controls.

## Table of Contents
- [Overview](#overview)
- [Level 1 — Foundations](#level-1--foundations)
- [Level 2 — Hardened](#level-2--hardened)
- [Level 3 — Compliance-grade](#level-3--compliance-grade)
- [Adoption Roadmap](#adoption-roadmap)
- [Assessment Cadence](#assessment-cadence)
- [Resources](#resources)

## Overview

| Level | Focus | Key Outcomes |
| --- | --- | --- |
| L1 | Establish CR-first discipline and Story Preview basics. | Consistent gating and review hygiene. |
| L2 | Harden automation, enforce SSP, and standardize telemetry. | Predictable flow with daily Pulse coverage. |
| L3 | Deliver compliance-ready evidence and risk governance. | Auditable delivery with provenance artifacts. |

## Level 1 — Foundations

**Scope:** Teams new to ADF or modernizing from ad-hoc practices.

**Requirements:**

- CR-first workflow for all changes.
- Story Preview attached to every CR using [PR template](../templates/pr-template.md).
- `tests-ci` gate passing with minimum coverage threshold.
- Human approval when mandated by policy (CODEOWNERS or risk tagging).

**Checklist:** Use the [Conformance checklist template](../templates/conformance-checklist.md) section for L1 to confirm:

- [ ] Story branches follow naming convention.
- [ ] Story Preview template adopted.
- [ ] CI pipeline running `tests-ci` on every push.
- [ ] Approval rules enforced for protected areas.

**Exit Criteria:** Zero undocumented merges and consistent Story Preview completion for two consecutive sprints.

## Level 2 — Hardened

**Scope:** Teams with baseline discipline ready to enforce automation and telemetry.

**Requirements:**

- Full SSP adoption including Story Lease management.
- Gates 1–8 enforced with automated status checks.
- Daily Delivery Pulse and Pulse Increment artifacts retained for 14 days.
- CODEOWNERS file ensuring appropriate reviewers for risky paths.

**Checklist Highlights:**

- [ ] SSP guide socialized; leases tracked in tool of choice.
- [ ] CI configured with gate names from the spec.
- [ ] Pulse Increment build documented (see [Pulse guide](pulse-increment.md)).
- [ ] CODEOWNERS example reviewed and adapted (see [template](../templates/codeowners.example)).

**Exit Criteria:** No break-glass usage without CAPA for two sprints, and Pulse artifacts accessible to stakeholders.

## Level 3 — Compliance-grade

**Scope:** Regulated industries or teams requiring rigorous audit trails.

**Requirements:**

- Evidence Bundle produced for each merge, stored at `/artifacts/evidence/<cr-id>.zip`.
- Supply-chain attestations documented (even if third-party tooling varies).
- Risk register maintained with linkage to CRs and CAPA items.
- Periodic internal audits (quarterly recommended) reviewing gate efficacy and policy adherence.

**Checklist Highlights:**

- [ ] Evidence Bundle SOP implemented (see [Evidence guide](evidence-bundle.md)).
- [ ] Supply-chain attestations referenced in Story Preview or Evidence Bundle.
- [ ] Risk register template populated and reviewed during Pulse.
- [ ] Audit cadence scheduled with governance stakeholders.

**Exit Criteria:** Successful internal audit demonstrating traceability from Story request to Evidence Bundle.

## Adoption Roadmap

1. **Assess current state:** Map existing controls to L1–L3 requirements.
2. **Prioritize gaps:** Use risk impact to prioritize L1 controls first, then L2 automation, then L3 governance.
3. **Pilot:** Run a single squad through the desired level before broader rollout.
4. **Institutionalize:** Document standard operating procedures and incorporate into onboarding.
5. **Measure:** Track adoption metrics (see [Metrics guide](metrics.md)) and report progress during Delivery Pulse.

## Assessment Cadence

- **Monthly:** Review conformance checklist status and address regressions.
- **Quarterly:** Perform deeper audits, verify Evidence Bundles, and evaluate metric trends.
- **Ad hoc:** After incidents or break-glass usage, reassess level adherence.

## Resources

- [Conformance checklist template](../templates/conformance-checklist.md)
- [GitHub profile mapping](../profiles/github.md)
- [Evidence Bundle procedures](evidence-bundle.md)
- [Safety Rails handbook](safety-rails.md)
