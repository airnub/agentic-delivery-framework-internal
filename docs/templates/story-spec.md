---
title: Story Spec Template
---

_Normative._ Use this template to capture the agreed story scope, canonical gate coverage, and evidence plan before work enters Sequential Subtask Pipeline (SSP) execution.

- Teams MUST instantiate [`story-spec.yaml`](./story-spec.yaml) for every committed story and keep gate names (`spec-verify`, `tests-ci`, `security-static`, `deps-supply-chain`, `perf-budget`, `framework-guard`, `mode-policy`, `preview-build`, `human-approval`) unchanged.
- The YAML MUST reference the corresponding Story Preview, Verification Checklist, and Evidence Bundle (`requirements-trace.json`) so reviewers can trace commitments across artifacts.
- Updates SHOULD be versioned via pull requests to retain visibility into risk changes, rollout strategies, and dependencies.

Use the raw YAML file when copying the template into your repository or tooling. The rendered view below mirrors the canonical structure for quick reference.

```yaml title="story-spec.yaml"
# Story Specification Template (Normative)
# Version history MUST be updated when template structure changes.
version: 1

metadata:
  story_id: ""
  title: ""
  lease:
    start: ""
    end: ""
  authors:
    - name: ""
      role: ""
  stakeholders:
    - name: ""
      responsibility: ""
  related_artifacts:
    preview_template: "docs/templates/story-preview.md"
    verification_checklist_template: "docs/templates/verification-checklist.yaml"
    evidence_bundle_example: "requirements-trace.json"

context:
  problem_statement: ""
  background: ""
  goals:
    - id: goal-1
      description: ""
  non_goals:
    - ""
  assumptions:
    - ""
  dependencies:
    - description: ""
      owner: ""

scope:
  included:
    - path: ""
      rationale: ""
    - path: ""
      rationale: ""
  excluded:
    - path: ""
      rationale: ""

scenarios:
  - id: scenario-1
    title: ""
    type: functional # functional | data | api | resilience | experience
    description: ""
    preconditions:
      - ""
    steps:
      - action: ""
        expected_result: ""
    acceptance_criteria:
      - ""
    evidence_expectations:
      - artifact: ""
        link: ""
        gate: spec-verify

risks_and_controls:
  security: ""
  privacy: ""
  compliance: ""
  migrations: ""
  rollout_strategy: ""

verification_alignment:
  checklist_ref: "docs/templates/verification-checklist.yaml"
  gates:
    - gate: spec-verify
      rationale: ""
    - gate: tests-ci
      rationale: ""
    - gate: security-static
      rationale: ""
    - gate: deps-supply-chain
      rationale: ""
    - gate: perf-budget
      rationale: ""
    - gate: framework-guard
      rationale: ""
    - gate: mode-policy
      rationale: ""
    - gate: preview-build
      rationale: ""
    - gate: human-approval
      rationale: ""

change_log:
  - date: ""
    description: ""
    author: ""

# End of template.
```

---

This work is licensed under CC BY-SA 4.0.
