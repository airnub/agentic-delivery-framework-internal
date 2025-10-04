# Contributing

The Agentic Delivery Framework (ADF) is a vendor-neutral methodology. Contributions help refine the core spec, conformance guidance, and platform profiles.

## Before You Start

- Review the [Governance](GOVERNANCE.md) model and the latest [Specification](specs/spec.v0.0.20.md).
- Check open RFCs in [docs/RFCs](RFCs/README.md) to avoid duplicating proposals.
- Align proposed terminology with the neutral glossary in [AGENTS.md](../AGENTS.md).

## Contribution Paths

1. **Minor Documentation Updates** — Fix typos, clarify language, or add non-normative examples. Open a change request referencing any related issues.
2. **Spec or Conformance Changes** — Require an RFC. Draft the RFC using [RFCs/0000-template.md](RFCs/0000-template.md), open it in `docs/RFCs/`, and link it in your change request.
3. **New or Updated Profiles** — May require an RFC if they introduce new terminology or workflow assumptions. Reference the profile in your change request and document platform-specific mappings clearly.

## Change Request Expectations

- Use feature branches (e.g., `feat/<work-item>` or `docs/<topic>`).
- Reference related work items or RFC IDs in the change request description.
- Ensure CI, linting, and other required gates pass before requesting review.
- Obtain approval from at least one Program Director Steward and one Delivery Team Steward for normative changes.

## After Merge

- Update any follow-on issues or work items to reflect the merged change.
- If your change impacts roadmap items or profiles, coordinate with editors to publish release notes.

Thank you for strengthening the Agentic Delivery Framework methodology.
