# Agentic Delivery Framework Changelog

## v0.6.0 — 2026-02-15
### Added
- Published [ADF v0.6.0 specification](docs/specs/adf-spec-v0.6.0.md) introducing the spec-driven workflow mandate, expanded gate
  coverage, and sequential verification guidance across the Evidence Bundle lifecycle.
- Documented multi-agent collaboration patterns covering SSP role handoffs, escalation protocols, and neutral delegation
  templates for Story Previews.
- Expanded trust and safety metrics with Delivery Pulse instrumentation, data retention rules, and transparency guardrails for
  evidence review.
- Delivered compliance and DORA outcome mapping playbooks, including normative traceability checkpoints and informative
  crosswalk tables.
- Added template updates for Story Preview, Evidence Bundle, onboarding checklists, and gate configuration briefs in
  [docs/templates](docs/templates/).
- Introduced onboarding guidance for new teams, covering initial Pulse Increment setup, gate readiness milestones, and safety
  reviews.

### Changed
- Elevated Delivery Pulse to first-class cadence guidance with explicit inputs, outputs, and escalation policy hooks.
- Updated gate catalog to require spec-driven verification ordering for `spec-verify`, `tests-ci`, and `security-static` before
  `human-approval`.

### Upgrade Notes
- Teams upgrading from v0.5.0 SHOULD review the new trust metrics and Delivery Pulse instrumentation to ensure data governance
  policies remain compliant.
- Update automation to align with the spec-driven workflow rules before enabling expanded gate sequencing in branch protection.

## v0.5.0 — 2025-10-05
### Added
- Published [ADF v0.5.0 specification](docs/specs/adf-spec-v0.5.0.md) with CR-first invariant, Sequential Subtask Pipeline algorithm, expanded CR gates, Story Preview schema, Delivery Pulse rules, conformance levels, Evidence Bundle format, metrics vocabulary, platform profiles, and agent safety rails.
- Introduced [ADF v0.5.0 handbook](docs/handbook/README.md) covering SSP, gates, Story Preview, Pulse Increment, conformance, Evidence Bundle, metrics, and safety rails.
- Added templates for PRs, Story Previews, labels, CODEOWNERS, and conformance tracking in [docs/templates](docs/templates/).
- Refreshed [GitHub platform profile](docs/profiles/github.md) and provided illustrative examples under [docs/examples/github](docs/examples/github/).
- Documented Mermaid diagrams for method overview, SSP flow, and Pulse Increment.

### Changed
- Updated repository README files to highlight v0.5.0 as the latest release and provide quickstart guidance.

### Editorial clarifications
- Reinforced tool-agnostic scope and added gate-to-profile mapping guidance.
- Standardized the neutral example evidence filename to `requirements-trace.json` across documentation.

### Upgrade Notes
- v0.4.0 specification remains available at [docs/specs/spec.v0.4.0.md](docs/specs/spec.v0.4.0.md).
- Teams should adopt the new Story Preview template and gate names before enabling branch protection updates.
- Evidence Bundles are now required for L3 conformance; align automation before enabling compliance gates.

## v0.4.0 — 2024-02-01
- Previous baseline covering Story Previews, Pulse Increment, and SSP foundations. See [docs/specs/spec.v0.4.0.md](docs/specs/spec.v0.4.0.md).

---

This work is licensed under CC BY-SA 4.0.
