# Vision

Build a **safe, vendor-neutral Agentic Delivery Framework (ADF)** that:
- Treats **Sprints (aka Iterations)** as the primary unit of planning and inspection.
- Runs **all code changes inside a governed workspace runtime**, never on unmanaged developer laptops.
- Uses **Change Request-first governance** with automated and human review gates plus Performance Budget checks when needed.
- Stays **model-agnostic** by calling best-fit LLMs and automation services.
- Scales from solo repos to multi-team programs while remaining auditable, observable, and compliant.

The end state: a repeatable planning and delivery flow where the **Delivery Lead** and **Product Owner** align on goals, **Developers** (Human / AI / Hybrid) ship increments inside the workspace runtime, and Story Previews + Pulse Increments keep stakeholders informed every day.

## Planning & Delivery Flow Overview
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

Embedding the sequence clarifies how enterprise teams de-risk autonomous edits: the Delivery Lead steers Sprint events and governance, the Product Owner maintains intent, and Developers deliver inside the workspace runtime with explicit Change Request gates, Story Previews, and daily Pulse Increment evidence.

---

This methodology/spec is licensed under CC BY-SA 4.0.
