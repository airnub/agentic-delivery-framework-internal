---
title: "Agentic Delivery Framework v0.5.0"
summary: "Normative specification for ADF v0.5.0 including CR-first invariant, SSP algorithm, CR Gates, Story Preview, Pulse Increment, conformance levels, evidence, metrics, platform profiles, and agent safety rails."
---

# Agentic Delivery Framework (ADF) v0.5.0 Specification

_Related: See the non-normative [ADF Roadmap to 24×7 Autonomous Delivery](../roadmaps/adf-roadmap-autonomous-delivery.md) for an adoption path and design intent._

> **Status:** Latest (v0.5.0). v0.4.0 remains normative for teams pinned to the previous minor version.

## Table of Contents
- [0. Scope and Context](#0-scope-and-context)
- [1. Core Rules — CR-First and Evidence](#1-core-rules--cr-first-and-evidence)
- [2. Sequential Subtask Pipeline (SSP)](#2-sequential-subtask-pipeline-ssp)
- [3. Change Request Gates](#3-change-request-gates)
- [4. Story Preview](#4-story-preview)
- [5. Delivery Pulse and Pulse Increment](#5-delivery-pulse-and-pulse-increment)
- [6. Conformance Levels](#6-conformance-levels)
- [7. Evidence Bundle](#7-evidence-bundle)
- [8. Metrics Vocabulary](#8-metrics-vocabulary)
- [9. Platform Profiles](#9-platform-profiles)
- [10. Safety Rails for Agents](#10-safety-rails-for-agents)
- [Glossary](#glossary)
- [Appendix A. Naming and Labels](#appendix-a-naming-and-labels)
- [Appendix B. Security and Compliance Posture](#appendix-b-security-and-compliance-posture)
- [Change History](#change-history)

## 0. Scope and Context

This specification defines the normative requirements for the Agentic Delivery Framework (ADF) v0.5.0. It applies to delivery teams composed of humans, agents, or hybrid pairs building software or documentation artifacts under governance. Non-normative rationale and implementation guidance live in the [handbook](../handbook/README.md) and associated profiles.

ADF v0.5.0 is backward compatible with v0.4.0. Teams MAY remain on v0.4.0 artifacts while assessing the upgrade. The upgrade path is detailed in the [changelog](../CHANGELOG.md) and [handbook conformance guide](../handbook/conformance.md).

> **Tool-agnostic scope.** ADF is a vendor-neutral methodology. Profiles and templates in this repository are **informative** (non-normative) examples; adopters MAY implement equivalent checks and artifacts on any platform.

## 1. Core Rules — CR-First and Evidence

1. All changes **MUST** land via a **Change Request (CR)** raised against a **single Story branch**.
2. Every CR **MUST** attach a **Story Preview** and pass all mandated **CR Gates** prior to merge.
3. Every merged change **MUST** be captured in the **Pulse Increment** for the next Delivery Pulse.
4. Human approval **MAY** be required by policy (for example via CODEOWNERS) for risk-tagged paths.
5. Teams **MUST** retain CR artifacts according to the Evidence Bundle requirements in [Section 7](#7-evidence-bundle).

The CR-first invariant supersedes ad-hoc merge practices and is enforced independently of the hosting platform. Deviations **MUST** be recorded via the `break-glass` protocol defined in [Section 3](#3-change-request-gates).

## 2. Sequential Subtask Pipeline (SSP)

### 2.1 Concepts

- **Story Lease:** Exclusive claim on a Story branch with a time-to-live (TTL) of two hours, renewable by the active executor.
- **Subtask Queue:** Ordered list of minimal, non-overlapping subtasks derived from the Story scope.
- **Checkpoint:** Reproducible, green build/test state capturing the Story branch after each subtask completion.

### 2.2 Normative Algorithm

The Sequential Subtask Pipeline **MUST** implement the following algorithm:

1. **Acquire Lease** — Obtain the Story Lease before editing. Renew prior to expiry when work continues.
2. **Decompose & Queue** — Break the Story into minimal subtasks. Populate the Subtask Queue in execution order and declare scope.
3. **Execute Subtask** — Perform only the work associated with the next subtask. Maintain locality to the declared scope.
4. **Checkpoint** — Achieve a reproducible, green build/test state. Document results.
5. **Update Story Preview** — Record the subtask outcome, evidence, and any new risks.
6. **Push to Story Branch** — Push changes to the single Story branch. Do not fan out to multiple branches.
7. **Run CR Gates** — Trigger the CR Gates pipeline on the Story CR.
8. **Handle Outcomes**:
   - On gate failure, **MUST** pause new work, create a fix subtask, and resume from Step 3 for that subtask.
   - On gate success, continue with the next subtask or proceed to merge when all subtasks are complete.
9. **Merge & Release** — Merge the Story branch when all gates are green and approvals satisfied. Release the Story Lease.
10. **Include in Pulse** — Ensure the merged CR is included in the upcoming Pulse Increment.

### 2.3 Anti-Collision Controls

- Only one executor **MAY** hold the Story Lease at a time.
- The **Edit Locality Guard** **MUST** fail the CR if more than the configured percentage of changes occur outside the declared scope.
- Repository-wide refactors **MUST NOT** occur unless the Story is explicitly classified as a refactor and has its own CR.

## 3. Change Request Gates

The following gates are normative required status checks for each CR. Names are normative.

1. `spec-verify` — Specification, requirements traceability, and schema lint. Confirms required fields are present.
2. `tests-ci` — Unit and integration tests. Coverage **MUST** meet or exceed the organizational threshold.
3. `security-static` — Static application security testing (SAST) and secret scanning. Policy deviations **MUST** be risk-accepted.
4. `deps-supply-chain` — Software bill of materials (SBOM) generation, vulnerability policy compliance, and pinned dependencies.
5. `perf-budget` — Performance budget enforcement for key journeys.
6. `framework-guard` — Framework or platform safety controls (for example authentication or row-level security patterns).
7. `mode-policy` — Organizational policy enforcement, including Edit Locality and restricted file scopes.
8. `preview-build` — Build and attach Story Preview assets.
9. `human-approval` — Required reviewers approve the CR when mandated by policy.

**Break-Glass Protocol:** Applying the `break-glass` label **MAY** bypass Gates 3–7. Usage **MUST** be approved by a designated lead and **MUST** auto-file a corrective and preventive action (CAPA) item for the next Sprint. The Delivery Pulse **MUST** flag all break-glass merges.

## 4. Story Preview

Each CR **MUST** include a Story Preview containing the following elements:

- **Change Summary:** Concise description of what changed, why it changed, and the impacted areas.
- **Evidence Clips:** Screenshots, API traces, or demo links showing the change in action.
- **Schema/Migration Diff:** Explicit callouts for schema, row-level security (RLS), and permissions changes.
- **Before/After Metrics:** Performance or bundle size comparisons relevant to the change.
- **Risk Notes:** Specific notes covering data, authentication, PII handling, and feature flag implications.

Story Previews **SHOULD** be updated after each SSP checkpoint. Risk-intensive previews **MUST** include rationale blocks for schema and security adjustments.

## 5. Delivery Pulse and Pulse Increment

- Delivery Pulse occurs daily at a fixed time. The team **MUST** produce a demoable artifact built from the `main` branch.
- The Pulse Increment **MUST** aggregate merged CRs, gate outcomes, break-glass usage, DORA metrics snapshot, and surfaced risk items.
- Teams **MUST** retain the last 14 Pulse Increment artifacts for auditability.
- Primary audience includes the Product Owner, Delivery Lead, auditors, and participating agents.

## 6. Conformance Levels

ADF defines three conformance levels. Each level inherits obligations from lower levels.

- **Level 1 — Foundations:** Requires CR-first workflow, Story Preview attachment, `tests-ci` gate, and human approval when mandated.
- **Level 2 — Hardened:** Adds full SSP adherence, Gates 1–8, daily Delivery Pulse, and CODEOWNERS-based policy enforcement.
- **Level 3 — Compliance-grade:** Builds upon L2 with Evidence Bundles, supply-chain attestations (documented in guidance), a maintained risk register, and periodic internal audits.

Organizations **MUST** document their current conformance level and the roadmap to higher levels using the [conformance checklist](../templates/conformance-checklist.md).

## 7. Evidence Bundle

Each merged CR **MUST** generate an Evidence Bundle stored at `/artifacts/evidence/<cr-id>.zip`. The bundle **MUST** contain:

- `requirements-trace.json` slice referencing relevant requirements.
- `gates/` directory containing outputs such as JUnit results, SARIF files, SBOM documents, performance reports, and policy enforcement logs.
- `preview/` directory with Story Preview assets.
- `provenance/` directory with attestations and signatures (examples documented; implementations MAY vary).
- `summary.md` capturing the change summary, approvals, and key outcomes.
- `sanitized-logs/` directory (optional per policy) containing redacted execution logs.

Evidence Bundles **MUST** be referenced during audits and Delivery Pulse reviews.

## 8. Metrics Vocabulary

ADF standardizes the following metrics:

- **DORA Metrics:** Lead Time for Changes, Deployment Frequency, Change Failure Rate (CFR), Mean Time to Restore (MTTR).
- **Agent-Specific Metrics:** Edit Locality percentage, Lease Churn rate, Story Preview to Merge ratio, and Gate Failure taxonomy distribution.

Teams **MUST** use these terms when reporting or automating dashboards. Calculations are detailed in the [metrics handbook](../handbook/metrics.md).

> **Informative note:** Section 9 profiles describe example implementations and are non-normative. Equivalent controls on other platforms satisfy the specification when they achieve the same intent.

## 9. Platform Profiles

Platform profiles map this specification to platform-specific controls. Teams **MUST** treat profiles as configuration guides rather than normative requirements unless explicitly adopted. The GitHub profile is provided in [docs/profiles/github.md](../profiles/github.md). Profiles for other platforms MAY be added under `docs/profiles/` as they are developed.

## 10. Safety Rails for Agents

Agents participating in delivery **MUST** adhere to the following safety rails:

1. Respect declared scope and Edit Locality controls. Avoid repository-wide refactors unless executing a dedicated refactor Story.
2. Provide explicit rationale blocks within the Story Preview for schema or security changes.
3. Prefer idempotent scripts and deterministic reruns for repeatable execution.
4. Honor Story Lease semantics, including acquisition, renewal, and release.
5. Surface limitations and assumptions in the Story Preview or CR description.

Human or hybrid teams **SHOULD** monitor agent actions through the Evidence Bundle and Pulse telemetry.

## Glossary

- **Break-Glass:** Temporary bypass of select controls under controlled approval.
- **Change Request (CR):** Platform-specific merge request (e.g., PR, MR, CL) gated by this specification.
- **Delivery Pulse:** Daily ceremony producing the Pulse Increment artifact.
- **Edit Locality Guard:** Automated check measuring adherence to declared scope.
- **Pulse Increment:** Daily artifact aggregating merged, green work.
- **Story Lease:** Exclusive lock controlling Story branch edits within the SSP.
- **Story Preview:** Evidence package attached to each CR summarizing the change.
- **Subtask Queue:** Ordered backlog of minimal work items inside the SSP.

## Appendix A. Naming and Labels

Teams **SHOULD** adopt consistent naming to improve traceability:

| Item | Recommended Pattern | Notes |
| --- | --- | --- |
| Story Branch | `story/<id>-<slug>` | Aligns with work item identifiers. |
| Change Request Title | `[Story <id>] <concise summary>` | Include Story reference. |
| Labels | `story:*`, `risk:*`, `break-glass`, `preview-ready` | Definitions in [labels template](../templates/labels.md). |
| Required Checks | See [Section 3](#3-change-request-gates) | Use names verbatim. |

## Appendix B. Security and Compliance Posture

ADF v0.5.0 retains the security posture of v0.4.0 while clarifying Evidence Bundle expectations. The framework:

- Operates under CC BY-SA 4.0 licensing.
- Emphasizes least privilege via Story Leases and Edit Locality Guards.
- Supports supply-chain attestation workflows without prescribing specific vendors.
- Provides safety rails for agents to minimize unauthorized refactors and ensure audit trails.
- Encourages risk-aware policies through `break-glass` tracking and Pulse reporting.

## Change History

- **v0.5.0:** Introduced CR-first invariant, SSP algorithm, expanded CR Gates, Story Preview schema, Pulse Increment requirements, conformance levels, Evidence Bundles, metrics vocabulary, platform profiles, and agent safety rails.
- **v0.4.0:** See [previous specification](spec.v0.4.0.md) for historical requirements.

---

This work is licensed under CC BY-SA 4.0.
