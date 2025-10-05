# Enterprise‑friendly naming schemes (method‑agnostic)
*Goal: offer naming that resonates with large orgs (directors, PM/PMO, product, scrum, dev, QA) while staying future‑proof across Agile, Kanban, Shape Up, or custom governance.*

---

## Recommended set (conservative, PMO‑friendly)
- **Framework (repo/project name):** **Agentic Delivery Framework** *(ADF)*
- **Outer orchestrator (service/GitHub App):** **Delivery Lead** *(component codename: `delivery-lead`)*
- **Inner team (agents inside Codespaces):** **Developers** *(component codename: `developers`)*
- **Timebox:** **Sprint (aka Iteration)** *(configurable to Cycle)*
- **Cadence:** **Delivery Pulse** with daily **Pulse Increment** updates and published WIP limits (e.g., ≤3 in-progress Stories).
- **Work items:** **Epic → Story → Task** *(with optional Change Request)*
- **DoD Signals:** **CI/Tests**, **QA Verification**, **Security Review**, **Automated Review**, **Performance Budget**, **Human Approval**

> Rationale: “Delivery” and “Lead” are familiar to enterprises; “Iteration” is GitHub‑native and methodology‑neutral. “Developers” keeps the Scrum-friendly label and reads well alongside Dev/QA roles while supporting Human / AI / Hybrid modalities.

### Role alignment (examples)
| Traditional role            | ADF term / capability                                              |
|---|---|
| Director / Senior Manager   | Oversees **Delivery Lead** service configuration & budgets      |
| Product Manager / Owner     | Owns **Epics/Stories**, acceptance criteria, roadmap in Projects   |
| Project/Program Manager     | Operates **Delivery Lead** orchestration; schedules Sprints |
| Scrum Master / Iteration Mgr| Facilitates **Sprint (aka Iteration)** events; monitors CR flow             |
| Developers                  | Part of the **Developers** accountability (inner agents + humans)                  |
| QA / SDET                   | **QA Verification** checks, test plans, test agents                |
| Security / Compliance       | **Security Review** checks, code scanning gates                    |

---

## Alternative naming sets
Pick the aesthetic that fits your culture; each preserves the same planning and delivery flow.

### Set A — “Workstreams” (classic enterprise)
- **Framework:** **Agentic Workstreams**
- **Outer:** **Program Orchestrator** (`orchestrator`)
- **Inner:** **Workstream Team** (`workstream-team`)
- **Timebox:** **Iteration** (alt: **Cycle**)
- **Pros:** instantly familiar to PMO; **Cons:** a bit formal.

### Set B — “Loop/Squad/Lead” (modern enterprise)
- **Framework:** **Agentic Loop**
- **Outer:** **Program Lead** (`lead`)
- **Inner:** **Squad** (`squad`)
- **Timebox:** **Iteration**
- **Pros:** common in large tech; **Cons:** “Squad” has Spotify associations.

### Set C — “Delivery Lines” (release‑centric, SAFe‑compatible language without trademarks)
- **Framework:** **Agentic Delivery Lines**
- **Outer:** **Release Manager** (`release-manager`)
- **Inner:** **Feature Team** (`feature-team`)
- **Timebox:** **Release Window** (or **Iteration**)
- **Pros:** maps to release/PI planning; **Cons:** implies release cadence by default.

### Set D — “Mission Control” (clear separation of roles)
- **Framework:** **Agentic Mission Control**
- **Outer:** **Mission Control** (`mission-control`)
- **Inner:** **Flight Team** (`flight-team`)
- **Timebox:** **Flight Window** (or **Iteration**)
- **Pros:** memorable; **Cons:** slightly metaphorical for conservative orgs.

---

## Artifact & folder naming suggestions
- `/conductor/` → `/delivery-lead/` or `/orchestrator/` (outer service)
- `/crew/` → `/developers/` or `/workstream-team/` (inner)
- Docs: keep **Sprint (aka Iteration)**; allow synonyms in a glossary when cross-referencing platforms.
- Issues/CR templates: use **Epic/Story/Task**, **QA Verification**, **Security Review**, **Performance Budget**, and **WIP limit** reminders.

---

## Glossary (for the docs)
- **Agentic Delivery Framework (ADF):** The overall system and conventions.
- **Delivery Lead:** The outer orchestrator that manages workspace runtime lifecycle, planning, Delivery Pulse cadences, and CR governance (including Performance Budget review).
- **Developers:** Inner automation + humans working inside workspace runtimes to implement Stories via Change Requests and uphold Story Preview expectations.
- **Iteration:** A timeboxed period; synonymous with Sprint/Cycle depending on org preference.
- **QA Verification:** Test plan execution (automated + manual) before merge.
- **Security Review:** Code scanning, dependency checks, policy gates.

---

## Messaging snippets for enterprise decks
- *“ADF keeps all autonomous work inside GitHub Codespaces, with PR‑first governance and your existing QA/Sec gates.”*
- *“Delivery Lead orchestrates Sprints and enforces DoD Signals, Performance Budget checks, and Delivery Pulse telemetry.”*
- *“Developers (agents + devs) iterate safely; merges happen only when Definition of Done, Story Preview, and gates pass.”*

---

## Recommendation
Adopt **Agentic Delivery Framework (ADF)** with **Delivery Lead** (outer) and **Developers** (inner), using **Sprint (aka Iteration)** for the timebox and **Epic/Story/Task** for work items. It reads naturally for directors, PM/PMO, product, scrum, dev, and QA—without locking you into a single methodology.

---

This work is licensed under CC BY-SA 4.0.
