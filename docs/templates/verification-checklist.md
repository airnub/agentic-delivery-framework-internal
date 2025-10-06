---
title: Verification Checklist Template
---

_Normative._ This checklist records gate evidence against each Story Spec scenario during review.

- Teams MUST instantiate [`verification-checklist.yaml`](./verification-checklist.yaml) alongside the Story Spec to log gate outcomes and approvals.
- Scenario IDs MUST mirror the Story Spec and Story Preview so evidence remains traceable across artifacts.
- Reviewers SHOULD update statuses as gates transition from `pending` to `satisfied` or `rejected` and document notes for audit readiness.

```yaml title="verification-checklist.yaml"
# Verification Checklist Template (Normative)
# Update `version` when structure or required gates change.
version: 1

story:
  id: ""
  title: ""
  spec_path: "docs/templates/story-spec.yaml"
  preview_path: "docs/templates/story-preview.md"
  evidence_bundle: "requirements-trace.json"

review_window:
  opened: ""
  closed: ""
  approvers:
    - name: ""
      role: ""

scenarios:
  - id: scenario-1
    title: ""
    evidence_links:
      - label: ""
        url: ""
    gates:
      spec-verify:
        status: pending # pending | satisfied | rejected
        notes: ""
      tests-ci:
        status: pending
        notes: ""
      security-static:
        status: pending
        notes: ""
      deps-supply-chain:
        status: pending
        notes: ""
      perf-budget:
        status: pending
        notes: ""
      framework-guard:
        status: pending
        notes: ""
      mode-policy:
        status: pending
        notes: ""
      preview-build:
        status: pending
        notes: ""
      human-approval:
        status: pending
        notes: ""

open_issues:
  - id: ""
    description: ""
    owner: ""
    due: ""

signoff:
  verifier:
    name: ""
    date: ""
  approver:
    name: ""
    date: ""

# End of template.
```

---

This work is licensed under CC BY-SA 4.0.
