# AGENTS — Delivery Lead, Product Owner, Developers

> Mini-glossary:
> - **Agentic Delivery Framework (ADF)** = overall methodology.
> - **Delivery Lead** = accountability that steers the planning & delivery flow outside the workspace runtime.
> - **Product Owner** = accountability that curates outcomes and acceptance.
> - **Developers** = accountability that plans, builds, and verifies increments inside the workspace runtime (Humans / AI / Hybrid pairs).
> - **Sprint (aka Iteration)** = timebox for planning, Delivery Pulse, and inspection/adaptation.
> - **Delivery Pulse** = automated overnight pulse + short human sync to inspect progress and publish the Pulse Increment.
> - **Change Request (CR)** = PR/MR/CL depending on the platform; merges only when all gates + Definition of Done (DoD) pass.
> - **Story Preview** = per-story demo + evidence before setting a story to Done.
> - **Pulse Increment** = daily demo build of merged, green work used during the Delivery Pulse.

---

## Role Modality Charter (applies to all accountabilities)
- **Allowed modalities:** Human, AI, or Hybrid pair for Delivery Lead, Product Owner, and Developers.
- **Provenance:** Record actor identity (human id, agent id, or pair), reasoning summary, and outputs (CR links, test evidence, telemetry).
- **Policy knobs:** Organizations MAY require human sign-off for sensitive domains, set **WIP limits** (e.g., `wip_limits.active_stories_per_team: 3`), or restrict specific modalities per risk appetite.
- **Enablement:** Maintain tool access, security contexts, and guardrails so each modality can fulfill its accountability.

---

## 1) Delivery Lead (Flow steward)

**Lives**: Outside the workspace runtime (SaaS orchestration service, local daemon, or managed application).

**Responsible for**:
- Sprint cadences: facilitate Sprint Planning, Delivery Pulse, Review, and Retrospective.
- Backlog & flow: uphold a single Sprint Goal, monitor WIP limits, and remove impediments.
- Workspace runtime lifecycle: create/reuse/stop per Sprint or Story; seed tasks, secrets, and context.
- Change request governance: enforce CR-first policy, DoD, Performance Budget checks when applicable, and required gates before merge.
- Telemetry & budgets: track spend, cost of runbooks, and Delivery Pulse insights.

**Key tools**: work management system, orchestration hooks, automated review/security scanners, observability, budgeting/telemetry dashboards.

---

## 2) Product Owner (Outcome steward)

**Lives**: In product/backlog systems integrated with the workspace runtime.

**Responsible for**:
- Maintaining the Product Goal and Product Backlog.
- Ordering Product Backlog Items (PBIs) and clarifying acceptance criteria.
- Partnering during Story Preview and Sprint Review to confirm value and acceptance.
- Updating stakeholders based on Pulse Increment evidence and Sprint outcomes.

---

## 3) Developers (Team delivering increments)

**Lives**: Inside the governed workspace runtime (devcontainer, cloud IDE, ephemeral VM, VDI).

**Responsible for**:
- Branching from protected defaults, implementing acceptance criteria, running tests/linters, and opening CRs referencing Stories/Tasks.
- Producing Story Previews and ensuring CR gates (CI/tests, QA, security, automated review, human approvals, Performance Budget) pass.
- Publishing daily Pulse Increment telemetry and notes during the Delivery Pulse.
- Iterating with reviewers until merge, then updating documentation/runbooks as needed.

**Safety rails**:
- No direct pushes to protected branches.
- Follow CR templates (including Story Preview checklist and Performance Budget check when applicable).
- Keep environment reproducible; document local run recipes.

---

## Story Preview vs. Pulse Increment
- **Story Preview**: Per-story demo before marking Done. Lives on the feature branch or dedicated preview environment with run instructions, test evidence, and rollback notes inside the CR. Required for each Story.
- **Pulse Increment**: Daily aggregate demo build of merged, green work. Generated automatically (preferred) ahead of the Delivery Pulse and reviewed during the human sync for transparency.

---

## Planning & Delivery Flow
1. The Delivery Lead and Product Owner align on the Sprint Goal and ordered PBIs.
2. The Delivery Lead prepares or resumes a workspace runtime, briefs the Developers, and ensures WIP limits are respected.
3. Developers iterate (plan → edit → run → test) inside the runtime, raising Change Requests for every slice.
4. **CR gates** (CI/tests, QA verification, security review, automated review, Performance Budget, human approvals) plus the DoD govern merges.
5. Story Previews provide reviewers with runnable demos before Stories move to Done.
6. Delivery Pulse publishes the daily Pulse Increment, surfaces impediments, and steers next actions.
7. After merge, the Delivery Lead updates the work management system, captures telemetry, and may hibernate or stop the workspace runtime.

---

### Glossary
- **Workspace Runtime**: Any controlled development environment (cloud dev container, ephemeral VM, or VDI).
- **Change Request (CR)**: Platform-specific request to merge (PR/MR/CL).
- **Automated Review**: Tooling that summarizes code deltas, risks, and suggestions.
- **Security Review**: SAST/DAST/dependency scanning pipelines applicable to the selected platform.
- **Performance Budget**: Agreed-upon thresholds for latency, resource use, or throughput enforced at CR/DoD gates when performance-sensitive paths change.

---

This methodology/spec is licensed under CC BY-SA 4.0.
