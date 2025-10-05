# Agile/Scrum Map

_Informative._ ADF preserves the Scrum skeleton. Use this alignment to explain the overlay quickly.

| Scrum Element | ADF Alignment | Notes |
| --- | --- | --- |
| **Roles** | Product Owner, Delivery Lead (Scrum Master), Developers | Same roles. Delivery Lead enforces CR-First and gate evidence. |
| **Events** | Sprint Planning, Daily Scrum → Delivery Pulse (≤10 min), Sprint Review, Sprint Retrospective | Daily Scrum becomes Delivery Pulse focused on Pulse Increment evidence and WIP health. No new ceremonies. |
| **Artifacts** | Product Goal, Product Backlog, Sprint Backlog, Increment → Pulse Increment evidence bundle | Keep existing artifacts; add Story Preview and CR gate evidence per [spec](../specs/adf-spec-v0.5.0.md#3-change-request-gates). |

### What Stays the Same
- Timeboxes and Sprint rhythm remain unchanged.
- Product Owner still accepts work during Story Preview and Sprint Review.
- Developers self-manage how to meet the Sprint Goal within SSP guardrails.

### What ADF Adds
- **CR-First** ensures every Increment is reviewable, auditable, and merge-gated.
- **Story Preview + Evidence Bundle** make acceptance ready before merge.
- **Pulse Increment** surfaces merged value daily for inspection.

Need detail? Dive into the [Handbook](../handbook/ssp.md) and [CR Gates playbook](../handbook/cr-gates.md).

---

This work is licensed under CC BY-SA 4.0.
