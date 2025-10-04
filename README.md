# Agentic Delivery Framework (ADF) — Methodology

A vendor-neutral methodology for **agentic software delivery** that enterprises can adopt without changing governance.

> Formerly positioned as a GitHub-native delivery framework; historic references remain in prior spec versions and profiles.

The Agentic Delivery Framework brings together two collaborating roles:

- **Program Director (outer orchestration)** operates outside the workspace runtime to select Iterations, manage work items, govern change requests, and monitor cost/safety.
- **Delivery Team (inner execution)** works inside a workspace runtime to implement Stories/Tasks, run tests, and iterate on change requests until acceptance.

## Core Concepts

- **Program Director** – orchestrates Iterations, manages the workspace runtime lifecycle, and enforces change request gates.
- **Delivery Team** – implements work inside a controlled workspace runtime using agent tooling and human oversight.
- **Iteration** – a timeboxed planning window managed in a work management system.
- **Change Request Gates** – CI/tests, QA verification, security review, automated review, and human review before merge.
- **Workspace Runtime** – any managed development environment (devcontainer, cloud IDE, ephemeral VM, VDI) used by the Delivery Team.

## Spec & Conformance

- [ADF Specification v0.0.20](docs/specs/spec.v0.0.20.md)
- [Conformance Levels (L1–L3)](docs/CONFORMANCE.md)

## Platform Profiles

- [Profiles Overview](docs/PROFILES.md)
- [GitHub Profile Mapping](docs/profiles/github.md)

## Implementations

- [ADF GitHub Suite](https://github.com/airnub/adf-github-suite) — example implementation aligned with the GitHub profile (informative).

## Method Diagram

```mermaid
flowchart TD
  PD[Program Director (outer)] --> P1{Select Iteration \n in Work Management System}
  P1 -->|For each Story| WR{Workspace Runtime available?}
  WR -->|No| C1[Create Workspace Runtime \n (warm start, secrets, retention)]
  WR -->|Yes| C2[Resume Workspace Runtime]
  C1 --> DT[Start Delivery Team inside workspace]
  C2 --> DT
  DT --> B1[Branch feat/<work-item>]
  B1 --> W[Implement Tasks \n plan → edit → run → test]
  W --> CR[Open Change Request \n with checklists ("Closes <work-item>")]
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
- `docs/specs/spec.v0.0.20.md` – semver-tracked specification for orchestration and Delivery Team loop.
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

## Status

Documentation scaffold for the vendor-neutral methodology. Platform-specific implementations live in companion repositories and profiles; use the GitHub profile for the `adf-github-suite` example stack.
