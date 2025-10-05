# Enterprise-friendly naming — Agentic Delivery Framework (ADF)  
**Version:** v0.0.2 (methodology, implementation-agnostic)

> This document provides a compact, Scrum-friendly, agent-aware vocabulary for the Agentic Delivery Framework (ADF).  
> All roles can be fulfilled by **Humans**, **AI Assistants**, or **Hybrid Pairs**. ADF defines *what* must happen, not *who* must be human.

---

## 1) Principles carried forward
- **Empiricism:** Transparency → Inspection → Adaptation.
- **Few simple rules:** Use only what’s necessary to ship safe, valuable increments quickly.
- **Method ≠ implementation:** This doc avoids runtime details (e.g., orchestration service specifics). Those live in platform profiles/implementations.

---

## 2) Role Modality Charter (who can do the work)
- **Allowed modalities:** Human, AI, or Hybrid Pair for every role.
- **Provenance:** Record actor identity (human or agent id), reasoning summary, and artifacts (CRs, tests, scans).
- **Risk policy knobs (org-level):** Certain changes (e.g., schema/PII/infra) MAY require human sign-off; ADF does not mandate human-only steps by default.

---

## 3) Accountabilities (method core)
ADF uses three familiar accountabilities (Scrum-aligned). All can be Human / AI / Hybrid.

| Accountability | Mandate (one line) | Typical activities |
|---|---|---|
| **Delivery Lead** | Facilitate flow & Events; uphold DoD & gates; remove impediments. | Facilitation, WIP control, impediment removal, telemetry, risk escalation. |
| **Product Owner (PO)** | Own Product Goal & Backlog; maximize value; accept outcomes. | Ordering PBIs, clarifying outcomes/acceptance, stakeholder alignment. |
| **Developers (the Team)** | Plan, build, test; raise **Change Requests**; meet DoD. | Slicing, implementation, verification, docs, CR iteration to Done. |

> Many responsibilities commonly attributed to QA, Security, Release, etc. are provided through **capabilities** that the Team applies (next section).

---

## 4) Capabilities (service lanes the team applies)
Capabilities are specialized skills/gates—staffed by Humans and/or AI.

- **Quality Verification** (test plans, evidence, defect triage)  
- **Security Review** (deps review, SAST/DAST, policy exceptions with audit)  
- **Automated Review** (static analysis, coding standards, AI review summaries)  
- **Release Orchestration** (cut releases, tags, changelogs, rollback readiness)  
- **Research & Analysis** (spikes, RFC drafts, design comparisons)  
- **Platform & Environment** (runnable demos, seeded data, preview deployments)

---

## 5) Artifacts & commitments
| Artifact | Commitment | Purpose |
|---|---|---|
| **Product Backlog** | **Product Goal** | Ordered outcomes and scope for the product. |
| **Sprint Backlog** | **Sprint Goal** | One clear intent; scope may flex, goal does not. |
| **Increment** | **Definition of Done (DoD)** | Potentially shippable when merged. |
| **Story Preview** *(ADF add)* | **Reviewable-by-Design** | **Per-story demo** (branch/env/local) with evidence before a story is marked Done. |
| **Pulse Increment** *(ADF add)* | **DoD** | **Daily demo build** aggregating all merged, green changes; fuels feedback during Delivery Pulse. |

### Story Preview — acceptance rules (tool-neutral)
A story cannot be set to Done unless its **Change Request** includes:
1. **Runnable demo** — preview env URL **or** local run recipe (e.g., `make demo` or `docker compose up`) with seeded data/fixtures.  
2. **Evidence** — relevant CI/tests green; QA notes; security checks (or documented exception).  
3. **Reviewability** — “what changed” summary, steps to test, and rollback/disable note.  
4. **Rejection path** — reviewers (human/AI) can request changes; CR stays open until accepted.

---

## 6) Events (Scrum-friendly, agent-aware)
| Event | Default duration | Purpose |
|---|---:|---|
| **Sprint** *(aka Iteration)* | 2–5 days (allow 1-day) | One Sprint Goal; multiple stories may complete per day. |
| **Sprint Planning** | 30–90 min (short sprints) | Set Sprint Goal; forecast PBIs; plan first slices. |
| **Delivery Pulse** *(replaces the Scrum Daily event)* | 10–15 min human + **overnight automated pulse** | Inspect status/risks; publish **Pulse Increment**; set next actions and WIP adjustments. |
| **Sprint Review** | 30–60 min | Demo Increment with stakeholders; adapt Backlog. |
| **Sprint Retrospective** | 20–40 min | Improve ways of working, tools, guardrails. |
| **Backlog Refinement** | continuous | Prepare PBIs: clarify, split, size, add acceptance tests. |

**Delivery Pulse modalities**
- **Automated Pulse (overnight):** agents run tests/scans, summarize *what moved / what’s risky / next actions*, produce **Pulse Increment** to demo env.  
- **Human Pulse (morning):** team reviews demo/report, confirms plan, surfaces impediments, adjusts tasks.

---

## 7) Few simple rules (tool-neutral)
1. **All work merges via a Change Request (CR)** — PR/MR/CL depending on platform.  
2. **Nothing merges unless Definition of Done (DoD) Signals pass:** CI/tests, QA verification, security review, automated review, **Performance Budget**, required human approval (as policy sets).
3. **Every Story ships a Story Preview** before Done (runnable demo + evidence).  
4. **Every day ends with a Pulse Increment** (daily demo env = merged + green).  
5. **Make it inspectable** — Pulse reports and CR histories provide transparency for humans and agents.
6. **Respect WIP limits** — Keep ≤3 active Stories per team/agent unless governance grants an exception.

### Suggested DoD Signals (copy into templates)
- Lint/type/static analysis  
- Unit/integration/e2e tests (scope-appropriate)  
- Security: dependency review + SAST/DAST (or documented exception)  
- Automated code review summary  
- Required human approval(s) per policy
- Performance Budget verification (or documented exception when not applicable)
- Docs updated when applicable; rollout/rollback notes when relevant

---

## 8) Vocabulary map (for enterprises)
| ADF term | Common synonyms / platform terms |
|---|---|
| **Change Request (CR)** | Pull/Merge Request, Change List (PR/MR/CL) |
| **Sprint** | Iteration |
| **Developers (the Team)** | Engineering team, Dev/QA/Research/Release working together |
| **Story (PBI)** | Ticket, Work Item |
| **Story Preview** | Preview environment, story demo branch, local demo recipe |
| **Pulse Increment** | Nightly build/demo, daily green build |

---

## 9) Versioning & migration notes
- **This doc:** v0.0.2 — introduces **Delivery Lead**, **Delivery Pulse**, **Story Preview**, **Pulse Increment**; consolidates roles as **3 accountabilities** + **capabilities**; clarifies Human/AI/Hybrid modalities for all roles.  
- Prior naming docs remain for history; implementations should prefer the vocabulary herein moving forward.

---

---

This work is licensed under CC BY-SA 4.0.
