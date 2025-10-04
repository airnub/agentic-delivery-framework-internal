# Contributing

The Agentic Delivery Framework (ADF) is a vendor-neutral methodology. Contributions focus on documentation, governance, conformance guidance, and platform profiles—no executable code is accepted in this repository.

## Before You Start
- Review the [Governance](GOVERNANCE.md) model and the latest [Specification](specs/spec.v0.2.1.md).
- Check open RFCs in [docs/RFCs](RFCs/README.md) to avoid duplicating proposals.
- Align terminology with the neutral glossary in [AGENTS.md](../AGENTS.md) and the current profiles.

## Contribution Paths
1. **Minor Documentation Updates** — Fix typos, clarify language, or refine diagrams. Open a pull request referencing related issues or discussions.
2. **Spec or Conformance Changes** — Require an RFC. Draft the RFC using [RFCs/0000-template.md](RFCs/0000-template.md), place it in `docs/RFCs/`, and link it in your pull request.
3. **New or Updated Profiles** — Use the RFC process when introducing new terminology or workflow assumptions. Reference the profile file(s) in your pull request and document platform-specific mappings clearly.

## Pull Request Expectations
- Use topic branches (e.g., `docs/<topic>`).
- Reference related issues, RFC IDs, or governance items in the description.
- Confirm markdown lint and link checks pass (run locally if CI is unavailable).
- Obtain review from at least one Program Director Editor and one Delivery Team Editor for normative updates; non-normative updates need one editor approval.
- Do not add executable files; changes introducing code will be redirected to reference implementation repositories (e.g., `adf-github-suite`).

## After Merge
- Update any follow-on issues or roadmap entries to reflect the merged change.
- Coordinate with editors to include the change in the next spec release notes when applicable.

Thank you for strengthening the Agentic Delivery Framework methodology.

This methodology/spec is licensed under CC BY-SA 4.0.
