# Frequently Asked Questions

_Informative._ Use this FAQ to clarify common adoption and operations questions.

**Is ADF more complex than Scrum?**
No. Scrum roles, events, and artifacts remain intact. ADF adds guardrails (CR-First, SSP, Delivery Pulse) without new ceremonies. See the [Agile/Scrum map](overview/agile-scrum-map.md).

**Do we need extra meetings?**  
No. The Delivery Pulse replaces the Daily Scrum with a ≤10 minute evidence review anchored on the Pulse Increment.

**Can we adopt ADF without AI agents today?**  
Yes. The framework is platform neutral and improves human-only teams while preparing for AI contributors.

**What is “CR-First”?**  
Every change flows through one Change Request that must pass the normative DoD Signals defined in the [Specification](specs/adf-spec-v0.5.0.md#3-change-request-gates).

**How do Story Previews fit with Sprint Reviews?**  
Story Preview happens before merge, giving the Product Owner confidence that Sprint Review demos will succeed. Sprint Review remains a Sprint-level inspection.

**Does Delivery Pulse replace Sprint Review?**  
No. Delivery Pulse is a daily checkpoint. Sprint Review stays as the formal end-of-Sprint inspection.

**What evidence do we archive?**  
At minimum keep the Evidence Bundle (`requirements-trace.json`), signal outputs, and Delivery Pulse notes. Details live in the [Handbook Evidence chapter](handbook/evidence-bundle.md).

**How do we involve security or compliance?**  
Use the conformance ladder in the [Adoption Guide](overview/adoption-guide.md). L2/L3 introduce security-static, deps-supply-chain, and compliance signals without changing Scrum cadences.

**Will agents break our Definition of Done?**  
No. ADF requires that agents follow the same DoD enforced by DoD Signals, Story Preview, and human approval when needed.

**What happens if a signal fails?**
Treat it like any failing check: resolve inside the CR before merge. The Delivery Lead monitors status during Delivery Pulse.

**Can we run multiple Stories in parallel?**  
Yes, but keep SSP constraints: one Story per branch with exclusive lease. Use WIP limits to prevent overload.

**How fast can we reach L1?**  
Most teams complete L1 in a day using the [Quickstart](overview/quickstart-l1.md). It focuses on PR templates, minimum signals, and the first Delivery Pulse.

**Where do we log audits?**  
Store audit reports under `docs/audits/` using the provided template. Reference them in the [Audits sidebar](audits/).

---

This work is licensed under CC BY-SA 4.0.
