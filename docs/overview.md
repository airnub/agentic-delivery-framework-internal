# Agentic Delivery Framework Overview

The Agentic Delivery Framework (ADF) solves the disconnect between intent and delivery by combining CR-first governance, Delivery Pulse cadences, and inspectable evidence (Story Previews + Pulse Increments). This overview consolidates the problem framing, vision, measurable goals, and roadmap so Delivery Leads, Product Owners, and Developers (Human / AI / Hybrid) share the same baseline.

## Problem statement

Current “AI builds my app” approaches feel **waterfall**: one giant plan, one giant run. They struggle with:

- **Unsafe execution**: agents edit unmanaged laptops; changes are hard to recover.
- **Opaque progress**: no crisp linkage between intent (requirements) and delivered artifacts.
- **Environment drift**: agents run in ad-hoc sandboxes that don’t match team stacks.
- **Vendor lock-in**: closed IDEs or pipelines limit container choice and self-hosting.
- **Weak governance**: merges without rigorous Change Request gates, Performance Budget guardrails, or WIP control.

We require a system that:

- Executes **only in a governed workspace runtime**, under enterprise policies and audit.
- Is **ADF-first** (Product Goal, Sprint Goal, Epics/Stories/Tasks) with observable state in the work management system and Change Requests.
- Provides **Story Previews** before marking Stories Done and publishes a daily **Pulse Increment** for transparency.
- Uses **automated review** + branch protection + security review + Performance Budget verification as guardrails.
- Allows **multi-model** reasoning across commercial and open models.
- Speaks enterprise language—**Delivery Lead**, **Product Owner**, **Developers**—so PMO, product, security, and engineering stay aligned with the Agentic Delivery Framework.
- Applies **WIP limits** (e.g., ≤3 active Stories per team/agent) to maintain flow and avoid overload.

## Vision

Build a **safe, vendor-neutral Agentic Delivery Framework (ADF)** that:

- Treats **Sprints (aka Iterations)** as the primary unit of planning and inspection.
- Runs **all code changes inside a governed workspace runtime**, never on unmanaged developer laptops.
- Uses **Change Request-first governance** with automated and human review gates plus Performance Budget checks when needed.
- Stays **model-agnostic** by calling best-fit LLMs and automation services.
- Scales from solo repos to multi-team programs while remaining auditable, observable, and compliant.

The end state: a repeatable planning and delivery flow where the **Delivery Lead** and **Product Owner** align on goals, **Developers** (Human / AI / Hybrid) ship increments inside the workspace runtime, and Story Previews + Pulse Increments keep stakeholders informed every day.

## Goals

### MVP (v0.3.x)

- ✅ Planning & delivery flow documented with Delivery Lead, Product Owner, Developers accountabilities.
- ✅ Delivery Lead can **create/reuse/stop** a workspace runtime, start Developers, and facilitate Delivery Pulse.
- ✅ Developers work on a single Story, open a Change Request with “Closes &lt;story&gt;”, and attach a Story Preview.
- ✅ Change Request gates include branch protection, required checks, automated review, security review, human approval, and Performance Budget verification when applicable.
- ✅ Secrets stored in managed vaults; **no unmanaged local execution**.

### Near-term (next increments)

- 🔶 Work management Sprints drive cadence automatically with Delivery Pulse summaries.
- 🔶 Warm-start images enabled; under five minutes cold-start target for workspace runtimes.
- 🔶 Story templates highlight Story Preview requirements and Performance Budget expectations.
- 🔶 Budget/usage telemetry, WIP limit tracking, and idle workspace runtime shutdown instrumentation.
- 🔶 Automated publication of the daily Pulse Increment for stakeholders.

### Success metrics

- **Safety**: 0 direct pushes to protected branches; 100% changes via Change Requests with Story Previews attached.
- **Flow**: ≤3 active Stories per team/agent (WIP limit) with median time Story → merged CR < 24h, CI pass rate > 95%.
- **Transparency**: Daily Pulse Increment available before the Delivery Pulse; Story Preview evidence accessible in CR history.
- **Reproducibility**: new workspace runtime yields green CI on fresh clone; Performance Budget checks green or exception documented.
- **Cost**: idle workspace runtimes stopped within 30 minutes; Delivery Lead telemetry within budget signals.

## Roadmap

### P0 — Documentation & conventions

- Land this methodology scaffold; define branch naming, Change Request templates, and work item templates aligned to ADF (Delivery Lead + Product Owner + Developers).

### P1 — Delivery Lead orchestration (manual)

- Lightweight service or script that:
  - Reads the active **Sprint** from the work management system and upholds one Sprint Goal.
  - Creates/reuses a workspace runtime; injects secrets; briefs Developers on Story Preview expectations and WIP limits.
  - Monitors Change Request status; verifies Performance Budget evidence when applicable; moves the work item to Done on merge; hibernates the workspace runtime.
  - Publishes daily Pulse Increment snapshots ahead of the Delivery Pulse.

### P2 — Managed Delivery Lead tooling

- Replace personal credentials with managed auth (app/service principal).
- Add budget controls, WIP dashboards, and automatic warm starts.
- Multi-repo program view and cross-team story planning with Story Preview visibility.

### P3 — Advanced

- Multi-agent Developer team (test agent, docs agent, fixit agent) collaborating with humans.
- Risk-based gates (e.g., extra reviewers for migrations/infra changes, deeper Performance Budget analysis).
- Runbooks for rollbacks and hotfix Sprints integrated into Delivery Pulse updates.

### Sprint flow

```mermaid
flowchart TD
  PO[Product Owner] --> SP[Sprint Planning]
  DL[Delivery Lead] --> SP
  SP --> SB[Sprint Backlog]
  SB --> DEV[Development (Developers: Human/AI/Hybrid)]
  DEV --> CR[Change Request]
  CR --> G{{DoD Signals\nCI/Tests | QA | Security | Automated | Human | Performance Budget}}
  G -->|pass| INC[Increment (meets DoD)]
  G -->|changes requested| DEV
  INC --> REV[Sprint Review]
  REV --> REF[Backlog Refinement]
  DL --> DP[Delivery Pulse]
  INC -. daily aggregate .-> PI[Pulse Increment (daily demo build)]
  DP --> PI
  REV --> RET[Retrospective]
```

Telemetry and budget controls attach when the Delivery Lead creates/resumes the workspace runtime and during Delivery Pulse inspection so spend, WIP, and Performance Budgets stay visible throughout the Sprint.

---

This work is licensed under CC BY-SA 4.0.
