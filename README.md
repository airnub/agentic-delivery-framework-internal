# Agentic Delivery Framework (ADF) — Methodology

**Licensed under CC BY-SA 4.0.**

The Agentic Delivery Framework (ADF) is a vendor-neutral methodology for human + AI teams to ship software safely. It centers three Scrum-friendly accountabilities—**Delivery Lead**, **Product Owner**, and **Developers**—who collaborate through a governed planning and delivery flow. Every change moves through a **Change Request (CR)** with Definition of Done (DoD) and gate evidence so Sprints stay auditable.

## Few simple rules
- **CR-first**: Every code or content change merges via a Change Request.
- **DoD + CR gates**: CI/tests, QA, security, automated review, human approval, and **Performance Budget** (when performance-sensitive paths change) must pass before merge.
- **One Sprint Goal**: Keep focus; scope may flex, the goal does not.
- **Daily Pulse Increment**: Produce a demo build of merged, green work ahead of the Delivery Pulse.
- **Make it inspectable**: Story Previews, Pulse Increment reports, and telemetry stay visible to humans and agents.

> **Delivery Pulse** combines an automated overnight run with a 10–15 minute human sync to inspect progress, surface risks, and agree on next actions using the latest **Pulse Increment**.

## Core vocabulary
- **Delivery Lead** – steers flow outside the workspace runtime; facilitates Sprint events, enforces WIP limits, and upholds CR gates.
- **Product Owner** – maintains the Product Backlog and Product Goal; partners on Story Previews and Sprint Review outcomes.
- **Developers** – plan, build, and verify increments inside the governed workspace runtime (Humans / AI / Hybrid pairs).
- **Artifacts** – Product Backlog, Sprint Backlog, Increment, **Story Preview**, **Pulse Increment**.
- **Events** – Sprint (aka Iteration), Sprint Planning, Delivery Pulse, Sprint Review, Sprint Retrospective, Backlog Refinement.

## Specification & naming
- [ADF Specification v0.3.0](docs/specs/spec.v0.3.0.md)
- [Specification Changelog](docs/specs/changelog.md)
- [Enterprise-friendly naming v0.0.3](docs/naming/enterprise-friendly-naming.v0.0.3.md)
- [Conformance Levels (L1–L3)](docs/conformance.md)
- [Profiles overview](docs/profiles/overview.md) and [GitHub profile](docs/profiles/github.md)

## Method diagram

```mermaid
flowchart TD
  PO[Product Owner] --> SP[Sprint Planning]
  DL[Delivery Lead] --> SP
  SP --> SB[Sprint Backlog]
  SB --> DEV[Development (Developers: Human/AI/Hybrid)]
  DEV --> CR[Change Request]
  CR --> G{{CR Gates\nCI/Tests | QA | Security | Automated | Human | Performance Budget}}
  G -->|pass| INC[Increment (meets DoD)]
  G -->|changes requested| DEV
  INC --> REV[Sprint Review]
  REV --> REF[Backlog Refinement]
  DL --> DP[Delivery Pulse]
  INC -. daily aggregate .-> PI[Pulse Increment (daily demo build)]
  DP --> PI
  REV --> RET[Retrospective]
```

## What’s inside
- `AGENTS.md` – modality charter and guardrails for Delivery Lead, Product Owner, and Developers.
- `docs/overview.md` – consolidated problem statement, vision, goals, and roadmap with Story Preview and Pulse Increment focus.
- `docs/specs/spec.v0.3.0.md` – normative specification (v0.3.0) with Delivery Pulse and new artifacts.
- `docs/specs/changelog.md` – release notes for specification revisions.
- `docs/naming/enterprise-friendly-naming.v0.0.3.md` – vocabulary set for enterprise alignment.
- `docs/glossary.md` – quick reference for Delivery Lead, Story Preview, Pulse Increment, and core terms.
- `docs/conformance.md` – normative conformance levels (L1–L3).
- `docs/guide/handbook.md` – delivery handbook covering CR gates, Story Previews, Pulse Increments, and no-code guardrails.
- `docs/profiles/overview.md` – platform profile entry point.
- `docs/profiles/github.md` – informative mapping for GitHub implementations; links to example tooling.
- `docs/adrs/0001-architecture-planning-delivery-flow.md`, `docs/adrs/0002-adopt-enterprise-naming-adf.md`, `docs/adrs/0002-methodology-reframe.md`, `docs/adrs/0003-delivery-pulse-and-artifacts.md` – architectural decisions and vocabulary history.
- `docs/templates/cr-checklist.md` – CR template snippet with Story Preview and Performance Budget reminders (if present).
- `docs/prompts/initial-methodology-prompt.md` – initial operator prompt for neutral methodology adoption.

## Governance & contribution
- [Governance](docs/governance.md) – editors, decision process, and release cadence.
- [Contributing](docs/contributing.md) – propose changes via change requests and RFCs.
- [RFC Process](docs/rfcs/process.md) – submit RFCs using the provided template.
- [Trademarks](TRADEMARKS.md) – usage guidelines for the Agentic Delivery Framework name and marks.
- [ADF Delivery Handbook](docs/guide/handbook.md) – no-code guardrails, CR gates, and cadence expectations.

## Policies & legal
- [LICENSE](LICENSE) – Creative Commons Attribution-ShareAlike 4.0 International.
- [NOTICE](NOTICE) – scope of licensed artifacts and reference implementations.
- [TRADEMARKS](TRADEMARKS.md) – non-endorsement and quality requirements for mark usage.

## Status
Documentation scaffold for the vendor-neutral methodology. Platform-specific implementations live in companion repositories and profiles; use the GitHub profile for the `adf-github-suite` example stack.

---

This methodology/spec is licensed under CC BY-SA 4.0.
