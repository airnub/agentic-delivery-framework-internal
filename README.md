# Agentic Delivery Framework (ADF) — Methodology

**Licensed under CC BY-SA 4.0.**

The Agentic Delivery Framework (ADF) is a vendor-neutral methodology for agentic software delivery. It pairs a Program Director operating outside the workspace runtime with a Delivery Team working inside the runtime to plan Iterations, implement Stories, and route every change request through auditable gates.

## Core Concepts

- **Program Director** – orchestrates Iterations, manages the workspace runtime lifecycle, and enforces change request gates.
- **Delivery Team** – implements work inside a controlled workspace runtime using agent tooling and human oversight.
- **Iteration** – a timeboxed planning window managed in a work management system.
- **Change Request Gates** – CI/tests, QA verification, security review, automated review, and human review before merge.
- **Workspace Runtime** – any managed development environment (devcontainer, cloud IDE, ephemeral VM, VDI) used by the Delivery Team.

## Specification & Conformance

- [ADF Specification v0.0.21](docs/specs/spec.v0.0.21.md)
- [Specification Changelog](docs/specs/CHANGELOG.md)
- [Conformance Levels (L1–L3)](docs/CONFORMANCE.md)

## Implementations & Code

This repository hosts the methodology and specification only—no executable code lives here. Reference implementations are maintained separately:

- [ADF GitHub Suite](https://github.com/airnub/adf-github-suite) — example stack aligned with the GitHub profile.

See [docs/PROFILES.md](docs/PROFILES.md) and [docs/profiles/github.md](docs/profiles/github.md) for informative mappings to specific platforms.

## Method Diagram

```mermaid
flowchart TD
  PD[Program Director (outer)] --> P1{Select Iteration \n in Work Management System}
  P1 -->|For each Story| WR{Workspace Runtime available?}
  WR -->|No| C1[Create Workspace Runtime \n (warm start, secrets, retention)]
  WR -->|Yes| C2[Resume Workspace Runtime]
  C1 --> DT[Start Delivery Team inside workspace]
  C2 --> DT
  DT --> B1[Branch feat/&lt;work-item&gt;]
  B1 --> W[Implement Tasks \n plan → edit → run → test]
  W --> CR[Open Change Request \n with checklists ("Closes &lt;work-item&gt;")]
  CR --> G{{Change Request Gates}}
  G --> G1[CI / Tests]
  G --> G2[QA Verification]
  G --> G3[Security Review]
  G --> G4[Automated Review]
  G --> G5[Human Review]
  G -->|All pass| M[Merge → Close Work Item]
  G -->|Fail| DT
  M --> R{More Stories in Iteration?}
  R -->|Yes| P1
  R -->|No| H[Hibernate/Stop Workspace \n Generate Metrics]
```

Program Director (outer loop) orchestrates Iterations and workspace runtimes; the Delivery Team (inner loop) delivers change requests through transparent gates.

## What’s Inside

- `AGENTS.md` – roles, capabilities, and safety rails for the Program Director and Delivery Team.
- `docs/vision.md` – long-term method outcomes (safety, auditability, iterative delivery).
- `docs/problem-statement.md` – challenges with waterfall agents, unsafe local writes, and vendor lock-in.
- `docs/goals.md` – measurable methodology goals and guardrails.
- `docs/roadmap.md` – evolution of conformance, governance, and profile support.
- `docs/specs/spec.v0.0.21.md` – semver-tracked specification for orchestration and Delivery Team loop.
- `docs/specs/CHANGELOG.md` – release notes for specification revisions.
- `docs/CONFORMANCE.md` – normative conformance levels (L1–L3).
- `docs/PROFILES.md` – platform profiles and mappings to neutral terminology.
- `docs/profiles/github.md` – informative mapping for GitHub implementations; links to example tooling.
- `docs/adrs/0001-architecture-dual-loop.md` & `docs/adrs/0002-methodology-reframe.md` – architectural decisions and methodology evolution.
- `docs/prompts/initial_methodology_prompt.md` – initial operator prompt for neutral methodology adoption.

## Governance & Contribution

- [Governance](docs/GOVERNANCE.md) – editors, decision process, and release cadence.
- [Contributing](docs/CONTRIBUTING.md) – propose changes via change requests and RFCs.
- [RFC Process](docs/RFCs/README.md) – submit RFCs using the provided template.
- [Trademarks](TRADEMARKS.md) – usage guidelines for the Agentic Delivery Framework name and marks.
- [No-Code Policy](docs/NO-CODE-POLICY.md) – this repository hosts methodology/spec artifacts only.

## Policies & Legal

- [LICENSE](LICENSE) – Creative Commons Attribution-ShareAlike 4.0 International.
- [NOTICE](NOTICE) – scope of licensed artifacts and reference implementations.
- [TRADEMARKS](TRADEMARKS.md) – non-endorsement and quality requirements for mark usage.

## Status

Documentation scaffold for the vendor-neutral methodology. Platform-specific implementations live in companion repositories and profiles; use the GitHub profile for the `adf-github-suite` example stack.

---

This methodology/spec is licensed under CC BY-SA 4.0.
