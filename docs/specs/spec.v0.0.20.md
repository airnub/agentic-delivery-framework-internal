# Spec v0.0.20 — Methodology Terminology Refactor

## Changelog

- Structural/terminology update: reframed ADF as a vendor-neutral methodology with platform profiles. No behavioral change relative to v0.0.13.
- Introduced references to [Conformance Levels](../conformance.md) and [Platform Profiles](../profiles/overview.md).
- Normalized terminology to Delivery Lead, Product Owner, and Developers with Delivery Pulse, Story Preview, Pulse Increment, and Performance Budget guidance.

## 1. Architecture
- **Delivery Lead** manages Sprints (aka Iterations) in a work management system, controls the workspace runtime lifecycle, and publishes Delivery Pulse updates.
- **Developers** operate inside a managed workspace runtime using approved tooling (Human / AI / Hybrid pairs) and produce Story Previews + Pulse Increment contributions.
- **Change Request Gates** provide layered assurance: CI/tests, QA verification, security review, automated review, **Performance Budget**, and human review.

## 2. Required Capabilities
### Delivery Lead
- **Select work**: ingest Epics/Stories/Tasks and maintain the active Sprint (aka Iteration) backlog.
- **Workspace runtime lifecycle**: create, reuse, or stop workspace runtimes programmatically or via automation.
- **Start Developers**: initiate sessions in the workspace runtime with seeded context and secrets.
- **Governance**: enforce branch protection, required change request gates (including Performance Budget), and audit trails; uphold WIP limits (≤3 active Stories) and capture Delivery Pulse notes.
- **Secrets**: provision credentials through managed vaults; avoid logging sensitive values.

### Developers
- **Environment**: workspace runtime includes stack dependencies, tooling, and automation required for the work item.
- **Behavior**: branch from protected default, implement acceptance criteria, run tests/linters, open a change request referencing the work item, attach Story Preview evidence, document Performance Budget status, and iterate until all gates pass.

## 3. Workspace Runtime Baseline
- Provide reproducible environments (e.g., devcontainer, VM image) with source control tooling, runtime dependencies, and optional services (e.g., databases, Supabase, Docker-in-Docker).
- Configure network exposure according to policy; prefer least privilege.
- Install selected Developers tooling (Aider, Cline, Continue, OpenHands, or equivalents) and bootstrap scripts to brief agents.

## 4. Governance Expectations
- Branch protection on the primary branch with required CI/tests, automated review, security scanning, **Performance Budget** checks, and human approval.
- Document gate results (including Story Preview links and Pulse Increment notes) and retain change request history for audit.
- Apply idle shutdown policies and telemetry consistent with [L3 Conformance](../conformance.md).

## 5. Acceptance Criteria
- From a clean repository, the Delivery Lead can select a work item, provision or resume a workspace runtime, start the Developers, obtain a change request that passes required gates (CI/tests, QA, security, automated review, human approval, Performance Budget), merge it, update the work management system, publish the daily Pulse Increment note, and hibernate/stop the workspace runtime.

## 6. Conformance & Profiles
- **Conformance**: Implementations **SHOULD** map to [L1–L3 requirements](../conformance.md) based on organizational goals.
- **Profiles**: Platform-specific terminology and automation belong in [profiles overview](../profiles/overview.md) and related files (e.g., [GitHub profile](../profiles/github.md)).

## 7. References
- Previous spec versions (v0.0.10–v0.0.13) retain GitHub-centric language for historical context.
- Companion implementations: see [airnub/adf-github-suite](https://github.com/airnub/adf-github-suite) for an example aligned with the GitHub profile.

---

This work is licensed under CC BY-SA 4.0.
