# Governance

## Editors & Stewards

- **Program Director Stewards**: maintain the methodology, curate releases, and coordinate profile updates.
- **Delivery Team Stewards**: evaluate tooling changes, ensure workspace runtime guidance stays current.
- Editors are appointed by the maintainers of the Agentic Delivery Framework repositories. Additions or removals are proposed via change request and confirmed through the RFC process.

## Decision Process

1. **Proposal** — Contributors open a change request referencing an RFC (when required) or a documentation update.
2. **Review** — Editors assign reviewers from both steward groups to ensure methodology and execution perspectives are covered.
3. **Consensus** — Changes are merged when at least one Program Director Steward and one Delivery Team Steward approve, and all required gates pass.
4. **Appeals** — Unresolved disagreements escalate to the maintainer group, which issues a final decision documented in an ADR.

## Release Cadence

- Specification releases follow semantic versioning. Minor bumps (v0.x.y) capture terminology or structural updates; major bumps introduce normative changes.
- Editors target a quarterly review of open RFCs and profile updates.
- Emergency releases MAY occur to address security or governance issues with immediate effect.

## Transparency

- Meeting notes, release plans, and governance updates MUST be recorded in the repository (docs/governance-notes/ when needed).
- Profiles and conformance clarifications SHOULD reference the RFC that introduced them.
- Historical documents remain accessible to show the evolution from platform-specific framing to the vendor-neutral methodology.
