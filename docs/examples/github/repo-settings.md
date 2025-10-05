# GitHub Repository Settings Walkthrough (Example)

This example shows how a team might configure GitHub to align with ADF v0.5.0. Adjust names and approvers before applying.

## 1. Branch Protection (UI)
1. Navigate to **Settings → Branches**.
2. Add a rule for `main`.
3. Enable:
   - Require pull request reviews before merging (minimum 1, include code owners).
   - Require status checks to pass before merging → add checks from `required-checks.list`.
   - Require branches to be up to date before merging.
   - Allow squash merge only; disable merge commits and rebase merge.
   - Automatically delete head branches after merge.

## 2. Branch Protection (CLI via gh)
```bash
# Example only — replace ORG/REPO
checks=$(paste -sd, docs/examples/github/required-checks.list)
gh api \
  --method PUT \
  repos/ORG/REPO/branches/main/protection \
  -H "Accept: application/vnd.github+json" \
  -F required_status_checks.strict=true \
  -F required_status_checks.contexts="$checks" \
  -F enforce_admins=true \
  -F required_pull_request_reviews.dismiss_stale_reviews=true \
  -F required_pull_request_reviews.require_code_owner_reviews=true \
  -F restrictions=null
```

> **Note:** CLI parameters evolve; verify against latest GitHub API docs before use.

## 3. Labels
1. Import `labels.csv` using a script or the [GitHub CLI labels extension](https://cli.github.com/manual/gh_label).
2. Map labels to automation rules (e.g., apply `risk:` labels based on file paths).

## 4. PR Template
1. Copy [`pr-template.example.md`](pr-template.example.md) to `.github/pull_request_template.md`.
2. Commit to default branch so new PRs automatically include the Story Preview checklist.

## 5. CODEOWNERS
1. Copy [`docs/templates/codeowners.example`](../../templates/codeowners.example) to `/.github/CODEOWNERS` and edit teams.
2. Ensure branch protection requires CODEOWNER review.

## 6. Workflows & Automation
- Configure GitHub Actions to run signals (`tests-ci`, `security-static`, etc.).
- Add a post-merge workflow to assemble Evidence Bundles and upload to storage.
- Schedule a daily workflow to build Pulse Increment artifact and post summary to chat/email.

## 7. Environment Protections
1. Navigate to **Settings → Environments** and create `staging` and `production`.
2. Require reviewers or wait timers aligned with risk labels.
3. Reference environments in deployment workflows to enforce approvals.

## 8. Governance Tips
- Document who can apply the `break-glass` label and ensure automation opens CAPA issues.
- Track metrics via GitHub Insights or export to BI tools using the [Metrics guide](../../handbook/metrics.md).
- Review settings quarterly to maintain L2/L3 conformance.

---

This work is licensed under CC BY-SA 4.0.
