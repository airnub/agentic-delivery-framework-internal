# Adoption Guide

_Informative._ ADF adoption follows a three-level ladder. Each level builds on Scrum without adding ceremonies. Use the checklists to stage your rollout.

## Level 1 — Foundations
- Enable the [PR template](../templates/pr-template.md) and Story Preview checklist.
- Require `tests-ci` and `spec-verify` signals per [Specification §3](../specs/adf-spec-v0.5.0.md#3-change-request-gates).
- Schedule a daily Delivery Pulse (≤10 minutes) and nominate a Delivery Lead.
- Capture Pulse Increment notes in your Evidence Bundle (`requirements-trace.json`).

✅ Completion signal: Product Owner accepts Stories using Story Preview before merge.

## Level 2 — Hardened
- Add `security-static` and `deps-supply-chain` signals with automated evidence.
- Run SSP for every Story: sequential subtask execution, exclusive lease, single CR.
- Track conformance with the [L2 checklist](../templates/conformance-checklist.md) and archive evidence bundles.
- Extend Delivery Pulse to review guardrail drift and backlog risk.

✅ Completion signal: Every merged CR contains Story Preview, signal evidence, and a linked Evidence Bundle.

## Level 3 — Compliance
- Enforce remaining signals (`perf-budget`, `framework-guard`, `mode-policy`, `preview-build`, `human-approval`).
- Implement audit trails using [profiles](../profiles/github.md) or your platform equivalent.
- Integrate risk reviews into Sprint Review and maintain audit-ready logs in `docs/audits/`.
- Align with governance requirements defined in the [Handbook Conformance chapter](../handbook/conformance.md).

✅ Completion signal: Independent auditors can replay Delivery Pulse, CR evidence, and compliance decisions from your repository.

Need to tailor per platform? Consult the [Profiles](../profiles/github.md) and [Examples](../examples/github/labels.md) (informative).

---

This work is licensed under CC BY-SA 4.0.
