# Governance

ADF governance balances neutrality with traceability. Editors steward the methodology, specification, and supporting documentation while keeping executable code in separate reference repositories.

## Editors & Maintainers

- **Delivery Lead Editors** oversee Sprint planning guidance, conformance expectations, and Delivery Lead responsibilities.
- **Developer Editors** focus on workspace runtime practices, safety rails, Story Preview requirements, and Change Request lifecycle content.
- **Maintainers** (appointed by Airnub) delegate editor seats, manage security disclosures, and ensure trademark and licensing policies remain current.
- Editor appointments or removals are proposed via change request, recorded through an RFC or ADR when substantive, and ratified by the maintainers.

## Decision Process

1. **Proposal** — Open a change request that cites relevant issues or RFCs. Normative updates REQUIRE an RFC using the repository template.
2. **Review** — At least one Delivery Lead Editor and one Developer Editor review each normative change. Additional subject-matter reviewers (e.g., trademark counsel) join when policy updates are involved.
3. **Approval** — Changes merge after both editor groups approve and all documentation checks (lint, link, policy enforcement) succeed. Non-normative edits may be merged by a single editor when consensus is clear.
4. **Appeals** — Disagreements escalate to the maintainer group, which issues a written decision captured in an ADR or governance note.

## Release Cadence

- Specification releases follow semantic versioning. Patch releases capture policy, licensing, and clarifying edits without changing normative behavior.
- Editors target a quarterly review of pending RFCs, conformance clarifications, and profile updates.
- Out-of-band releases may occur to address urgent legal, security, or terminology issues.

## Transparency & Records

- Publish meeting notes, editor rosters, and governance updates under `docs/governance-notes/` (create as needed) or within RFCs/ADRs.
- Link normative decisions back to the approving RFC, ADR, or changelog entry.
- Maintain historical documents for context while clearly marking superseded guidance.

---

This methodology/spec is licensed under CC BY-SA 4.0.
