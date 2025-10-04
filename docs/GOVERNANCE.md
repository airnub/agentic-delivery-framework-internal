# Governance

## Maintainers & Editors
- **Maintainers** steward the methodology direction, approve editor appointments, and ensure trademark and licensing obligations are met.
- **Program Director Editors** focus on orchestration, governance, and conformance materials.
- **Delivery Team Editors** focus on workspace runtime guidance, change-request execution, and safety rails.
- Editor updates (additions/removals) are proposed via pull request and require approval from the maintainers plus consensus from both editor groups.

## Decision Process
1. **Proposal** — Open a pull request describing the change and referencing an RFC when normative updates are proposed.
2. **Review** — At least one Program Director Editor and one Delivery Team Editor must review normative changes; non-normative updates require a single editor sign-off.
3. **Consensus** — Agreement is recorded via approvals. Disagreements escalate to the maintainer group for resolution with a documented decision (e.g., ADR or governance note).
4. **Publication** — On merge, editors update the specification version, changelog, and relevant roadmap items as needed.

## Release Cadence
- The specification follows semantic versioning. **Patch releases** cover legal, licensing, or clarifying documentation updates with no normative change. **Minor releases** introduce terminology or structural updates. **Major releases** introduce new normative behavior.
- Editors aim to bundle accepted RFCs into at least quarterly releases; urgent governance or safety updates may ship out-of-band.

## Transparency
- Meeting notes, editor decisions, and release plans are documented in this repository (e.g., `docs/governance-notes/` when required).
- RFC dispositions and roadmap changes cite the relevant pull request or ADR for traceability.

## Stewardship Changes
- Community members may nominate new editors via RFC. Maintainers review nominations alongside documented participation and adherence to the methodology.
- Editors may be removed for inactivity, policy violations, or repeated failure to uphold the no-code policy. Removals are documented with rationale.

This methodology/spec is licensed under CC BY-SA 4.0.
