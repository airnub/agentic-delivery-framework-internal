# Contributing

The Agentic Delivery Framework (ADF) repository is a methodology and specification reference. Contributions should improve documentation, governance clarity, or platform profiles—**no executable code belongs here**.

## Before You Start

- Review the [Governance model](GOVERNANCE.md) and the latest [Specification](specs/spec.v0.0.21.md).
- Check open RFCs in [docs/RFCs](RFCs/README.md) to avoid duplicating proposals.
- Align terminology with the neutral glossary in [AGENTS.md](../AGENTS.md) and the [No-Code Policy](NO-CODE-POLICY.md).

## Contribution Paths

1. **Documentation Updates** — Fix typos, clarify language, add diagrams, or improve guidance. Reference related issues in your change request.
2. **Spec or Conformance Changes** — Require an RFC. Draft the RFC using [RFCs/0000-template.md](RFCs/0000-template.md), open it in `docs/RFCs/`, and link it in your change request.
3. **Profiles & Informative Guides** — Platform mappings, prompts, or adoption playbooks should live in the appropriate docs directory. Normative terminology changes require an RFC.
4. **Policy & Governance** — Updates to licensing, trademarks, or governance processes must cite prior decisions and may require maintainer approval.

## Change Request Expectations

- Use descriptive branches (e.g., `docs/<topic>` or `policy/<area>`).
- Reference related issues, RFC IDs, or ADRs.
- Ensure documentation checks (lint, link, optional no-code workflow) pass before requesting review.
- Obtain approval from at least one Program Director Editor and one Delivery Team Editor for normative changes.

## After Merge

- Update follow-on issues or roadmap items.
- Coordinate with editors to announce specification releases in the changelog and versioned spec files.
- If work impacts external implementations, open or update issues in the relevant reference repositories.

By contributing, you agree that all submissions are licensed under CC BY-SA 4.0 and comply with the no-code policy.

---

This methodology/spec is licensed under CC BY-SA 4.0.
