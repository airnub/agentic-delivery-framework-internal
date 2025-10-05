---
title: "GitHub Profile — ADF v0.5.0"
summary: "Mapping ADF v0.5.0 controls to GitHub features, with references to examples and templates."
---

# GitHub Platform Profile

_Informative._ This profile explains how to implement the [ADF v0.5.0 specification](../specs/adf-spec-v0.5.0.md) using GitHub features. It is informative and **MUST NOT** be interpreted as normative configuration. Use it as a guide when tailoring repository settings.

> **Informative guidance:** All mappings below illustrate one way to fulfill the specification on GitHub. Teams MAY implement equivalent controls on any platform.

## Table of Contents
- [Repository Topology](#repository-topology)
- [Branch Protection & Merge Policy](#branch-protection--merge-policy)
- [Required Status Checks](#required-status-checks)
- [Story Preview & PR Templates](#story-preview--pr-templates)
- [CODEOWNERS & Approvals](#codeowners--approvals)
- [Environment & Deployment Protections](#environment--deployment-protections)
- [Labels & Automation](#labels--automation)
- [Evidence Bundle & Pulse Hooks](#evidence-bundle--pulse-hooks)
- [Examples](#examples)

## Repository Topology

- Adopt a protected `main` branch for production-ready code.
- Create Story branches using `story/<id>-<slug>` naming to align with [Appendix A](../specs/adf-spec-v0.5.0.md#appendix-a-naming-and-labels).
- Use GitHub Projects for Sprint planning; link Issues to Story branches and CRs to maintain traceability.

## Branch Protection & Merge Policy

Configure the following on the `main` branch via **Settings → Branches → Branch Protection Rules**:

- Require pull request reviews before merging.
- Enable **Require status checks to pass before merging** and list the gates from [Section 3](../specs/adf-spec-v0.5.0.md#3-change-request-gates).
- Enforce **Require branches to be up to date** to ensure SSP checkpoints are merged on fresh heads.
- Allow only squash merges to preserve single-story history (aligns with CR-first invariant).
- Enable **Automatically delete head branches** after merge to keep Story branch lifecycle clean.

## Required Status Checks

Define the following required checks (names are normative). Example names are provided in [`docs/examples/github/required-checks.list`](../examples/github/required-checks.list).

1. `spec-verify`
2. `tests-ci`
3. `security-static`
4. `deps-supply-chain`
5. `perf-budget`
6. `framework-guard`
7. `mode-policy`
8. `preview-build`
9. `human-approval`

Implement these checks using GitHub Actions or external CI providers. Ensure gate outputs are archived into Evidence Bundles post-merge.

### spec-verify

- Run schema or requirements lint jobs via GitHub Actions or external CI.
- Fail the check when required metadata files or Story Preview sections are missing.
- Surface links to the generated `requirements-trace.json` artifact in the Evidence Bundle.

### tests-ci

- Execute unit and integration test suites.
- Enforce minimum coverage thresholds using reporters compatible with GitHub.
- Publish summaries back to the pull request for reviewer visibility.

### security-static

- Integrate secret scanning and SAST tools (e.g., GitHub Advanced Security or external scanners).
- Require findings to be resolved or explicitly risk accepted before merge.
- Export SARIF or equivalent reports into the Evidence Bundle `gates/` directory.

### deps-supply-chain

- Generate SBOM artifacts using build jobs and attach them as workflow artifacts.
- Run dependency vulnerability scans; require approvals for deferrals.
- Record SBOM paths in the Evidence Bundle metadata.

### perf-budget

- Automate performance tests for critical journeys or bundle sizes.
- Compare results against stored baselines and fail on regression.
- Store performance reports alongside other gate outputs.

### framework-guard

- Enforce organization-specific safety patterns (e.g., authentication hooks, RLS checks) through automation scripts.
- Validate required configuration files or policy bundles before merge.
- Log enforcement outcomes for Evidence Bundle ingestion.

### mode-policy

- Run Edit Locality analyzers and file-scope policy checks via CI.
- Fail when changes exceed declared scope or touch restricted paths without labels.
- Attach locality percentage outputs to the pull request for reviewer inspection.

### preview-build

- Build Story Preview assets (static sites, demo packages) within CI workflows.
- Upload artifacts for reviewers; ensure links remain accessible until merge.
- Sync preview outputs into the Evidence Bundle `preview/` directory.

### human-approval

- Combine CODEOWNERS rules with branch protection requiring approving reviews.
- Block merge until required reviewers respond; include fallback reviewers when primary owners unavailable.
- Track approval timestamps for Evidence Bundle summaries.

## Story Preview & PR Templates

- Place the [PR template](../templates/pr-template.md) at `.github/pull_request_template.md` to enforce Story Preview content.
- Encourage teams to maintain standalone Story Preview documents using [`docs/templates/story-preview.md`](../templates/story-preview.md) for larger Stories.
- Configure repository settings to require PR body completion before review (e.g., using form fields or automation bots).

## CODEOWNERS & Approvals

- Store CODEOWNERS at `/.github/CODEOWNERS` (reference [`docs/templates/codeowners.example`](../templates/codeowners.example)).
- Map sensitive paths (e.g., `db/migrations/`, `services/auth/**`) to appropriate review teams.
- Combine CODEOWNERS with branch protection requiring review from code owners.
- Use the `human-approval` gate to fail when required reviewers have not approved. GitHub can enforce this via protected branch review count.

## Environment & Deployment Protections

- Use **Environments** to gate deployments behind manual approvals or required checks, mirroring Pulse Increment promotion flows.
- Configure **Deployment Branch Policies** to restrict who can deploy to production environments, aligning with risk labels.
- For preview environments, integrate with GitHub Actions to publish Story Preview assets and link them in the PR.

## Labels & Automation

- Seed repository labels using [`docs/templates/labels.md`](../templates/labels.md) and the CSV in [`docs/examples/github/labels.csv`](../examples/github/labels.csv).
- Automate label application based on file paths or Issue metadata (e.g., using Actions).
- Use GitHub Actions or third-party apps to enforce Edit Locality metrics and populate the `mode-policy` gate result.

## Evidence Bundle & Pulse Hooks

- Configure a post-merge GitHub Action to assemble Evidence Bundles using guidance from the [Evidence Bundle procedures](../handbook/evidence-bundle.md).
- Schedule a daily workflow to build the Pulse Increment artifact from `main`, publish to storage, and notify stakeholders (see [Pulse guide](../handbook/pulse-increment.md)).
- Emit metrics to GitHub Insights or external dashboards to satisfy the [Metrics guide](../handbook/metrics.md).

## Examples

All examples are illustrative and should be adapted before use:

- [`docs/examples/github/required-checks.list`](../examples/github/required-checks.list) — plain text list of gate names for branch protection.
- [`docs/examples/github/pr-template.example.md`](../examples/github/pr-template.example.md) — example `.github/pull_request_template.md` referencing Story Preview sections.
- [`docs/examples/github/labels.csv`](../examples/github/labels.csv) — label seeds with descriptions and color suggestions.
- [`docs/examples/github/repo-settings.md`](../examples/github/repo-settings.md) — step-by-step instructions for configuring branch protection and environments via UI/CLI.

For additional background on platform-neutral requirements, review the [specification](../specs/adf-spec-v0.5.0.md) and [handbook](../handbook/README.md).

---

This methodology/spec is licensed under CC BY-SA 4.0.
