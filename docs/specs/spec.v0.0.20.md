# Spec v0.0.20 — Methodology Terminology Refactor

## Changelog

- Structural/terminology update: reframed ADF as a vendor-neutral methodology with platform profiles. No behavioral change relative to v0.0.13.
- Introduced references to [Conformance Levels](../CONFORMANCE.md) and [Platform Profiles](../PROFILES.md).

## 1. Architecture
- **Program Director** manages Iterations in a work management system and controls the workspace runtime lifecycle.
- **Delivery Team** operates inside a managed workspace runtime using approved tooling (agents + humans).
- **Change Request Gates** provide layered assurance: CI/tests, QA verification, security review, automated review, and human review.

## 2. Required Capabilities
### Program Director
- **Select work**: ingest Epics/Stories/Tasks and maintain the active Iteration backlog.
- **Workspace runtime lifecycle**: create, reuse, or stop workspace runtimes programmatically or via automation.
- **Start Delivery Team**: initiate sessions in the workspace runtime with seeded context and secrets.
- **Governance**: enforce branch protection, required change request gates, and audit trails.
- **Secrets**: provision credentials through managed vaults; avoid logging sensitive values.

### Delivery Team
- **Environment**: workspace runtime includes stack dependencies, tooling, and automation required for the work item.
- **Behavior**: branch from protected default, implement acceptance criteria, run tests/linters, and open a change request referencing the work item; iterate until all gates pass.

## 3. Workspace Runtime Baseline
- Provide reproducible environments (e.g., devcontainer, VM image) with source control tooling, runtime dependencies, and optional services (e.g., databases, Supabase, Docker-in-Docker).
- Configure network exposure according to policy; prefer least privilege.
- Install selected Delivery Team tooling (Aider, Cline, Continue, OpenHands, or equivalents) and bootstrap scripts to brief agents.

## 4. Governance Expectations
- Branch protection on the primary branch with required CI/tests, automated review, security scanning, and human approval.
- Document gate results and retain change request history for audit.
- Apply idle shutdown policies and telemetry consistent with [L3 Conformance](../CONFORMANCE.md).

## 5. Acceptance Criteria
- From a clean repository, the Program Director can select a work item, provision or resume a workspace runtime, start the Delivery Team, obtain a change request that passes required gates, merge it, update the work management system, and hibernate/stop the workspace runtime.

## 6. Conformance & Profiles
- **Conformance**: Implementations **SHOULD** map to [L1–L3 requirements](../CONFORMANCE.md) based on organizational goals.
- **Profiles**: Platform-specific terminology and automation belong in [docs/PROFILES.md](../PROFILES.md) and related files (e.g., [GitHub profile](../profiles/github.md)).

## 7. References
- Previous spec versions (v0.0.10–v0.0.13) retain GitHub-centric language for historical context.
- Companion implementations: see [airnub/adf-github-suite](https://github.com/airnub/adf-github-suite) for an example aligned with the GitHub profile.
