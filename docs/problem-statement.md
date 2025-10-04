# Problem Statement

Current “AI builds my app” approaches feel **waterfall**: one giant plan, one giant run. They struggle with:

- **Unsafe execution**: agents edit unmanaged laptops; changes are hard to recover.
- **Opaque progress**: no crisp linkage between intent (requirements) and delivered artifacts.
- **Environment drift**: agents run in ad-hoc sandboxes that don’t match team stacks.
- **Vendor lock-in**: closed IDEs or pipelines limit container choice and self-hosting.
- **Weak governance**: merges without rigorous change request checks and security scanning.

We require a system that:
- Executes **only in a governed workspace runtime**, under enterprise policies and audit.
- Is **ADF-first** (Epics/Stories/Tasks, Iterations) with observable state in the work management system and change requests.
- Provides **full environment control** (devcontainer, Docker-in-Docker, Supabase optional) regardless of platform vendor.
- Uses **automated review** + branch protection + security review as guardrails.
- Allows **multi-model** reasoning across commercial and open models.
- Speaks enterprise language—**Program Director** and **Delivery Team**—so PMO, product, security, and engineering stay aligned with the Agentic Delivery Framework.

---

This methodology/spec is licensed under CC BY-SA 4.0.
