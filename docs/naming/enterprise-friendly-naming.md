# Enterprise‑friendly naming schemes (method‑agnostic)
*Goal: offer naming that resonates with large orgs (directors, PM/PMO, product, scrum, dev, QA) while staying future‑proof across Agile, Kanban, Shape Up, or custom governance.*

---

## Recommended set (conservative, PMO‑friendly)
- **Framework (repo/project name):** **Agentic Delivery Framework** *(ADF)*
- **Outer orchestrator (service/GitHub App):** **Program Director** *(component codename: `director`)*
- **Inner team (agents inside Codespaces):** **Delivery Team** *(component codename: `delivery-team`)*
- **Timebox:** **Iteration** *(configurable to Sprint/Cycle)*
- **Work items:** **Epic → Story → Task** *(with optional Change Request)*
- **Quality gates:** **QA Verification** + **Security Review** + **PR Governance**

> Rationale: “Delivery,” “Program,” and “Director” are familiar to enterprises; “Iteration” is GitHub‑native and methodology‑neutral. “Team” avoids “Crew” (conflicts) and reads well alongside Dev/QA roles.

### Role alignment (examples)
| Traditional role            | ADF term / capability                                              |
|---|---|
| Director / Senior Manager   | Oversees **Program Director** service configuration & budgets      |
| Product Manager / Owner     | Owns **Epics/Stories**, acceptance criteria, roadmap in Projects   |
| Project/Program Manager     | Operates **Program Director** (orchestration), schedules Iterations|
| Scrum Master / Iteration Mgr| Facilitates **Iteration** ceremonies; monitors PR flow             |
| Developers                  | Part of **Delivery Team** (inner agents + humans)                  |
| QA / SDET                   | **QA Verification** checks, test plans, test agents                |
| Security / Compliance       | **Security Review** checks, code scanning gates                    |

---

## Alternative naming sets
Pick the aesthetic that fits your culture; each keeps the same dual‑loop model.

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
- `/conductor/` → `/director/` or `/orchestrator/` (outer service)
- `/crew/` → `/delivery-team/` or `/workstream-team/` (inner)
- Docs: keep **Iteration**; allow synonyms in a glossary.
- Issues/PR templates: use **Epic/Story/Task**, **QA Verification**, **Security Review**.

---

## Glossary (for the docs)
- **Agentic Delivery Framework (ADF):** The overall system and conventions.
- **Program Director:** The outer orchestrator that manages Codespaces lifecycle, planning, and PR governance.
- **Delivery Team:** Inner automation + humans working inside Codespaces to implement Stories via PRs.
- **Iteration:** A timeboxed period; synonymous with Sprint/Cycle depending on org preference.
- **QA Verification:** Test plan execution (automated + manual) before merge.
- **Security Review:** Code scanning, dependency checks, policy gates.

---

## Messaging snippets for enterprise decks
- *“ADF keeps all autonomous work inside GitHub Codespaces, with PR‑first governance and your existing QA/Sec gates.”*
- *“Program Director orchestrates Iterations and enforces branch protection, Copilot Code Review, and required checks.”*
- *“Delivery Teams (agents + devs) iterate safely; merges happen only when definition‑of‑done and gates pass.”*

---

## Recommendation
Adopt **Agentic Delivery Framework (ADF)** with **Program Director** (outer) and **Delivery Team** (inner), using **Iteration** for the timebox and **Epic/Story/Task** for work items. It reads naturally for directors, PM/PMO, product, scrum, dev, and QA—without locking you into a single methodology.
