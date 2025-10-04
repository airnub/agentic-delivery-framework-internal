# Problem Statement

Current “AI builds my app” approaches feel **waterfall**: one giant plan, one giant run. They struggle with:

- **Unsafe execution**: agents edit local machines; changes are hard to recover.
- **Opaque progress**: no crisp linkage between intent (requirements) and artifacts.
- **Environment drift**: agents run in ad‑hoc sandboxes that don’t match team stacks.
- **Vendor lock‑in**: closed IDEs or agents limit container choice and self‑hosting.
- **Weak governance**: merges without rigorous PR checks and security scanning.

We require a system that:
- Executes **only in Codespaces**, under org policies and NDA already in place with GitHub.
- Is **Agile‑first** (stories/tasks/iterations) with observable state in Issues/Projects/PRs.
- Provides **full container control** (devcontainer, Docker‑in‑Docker, Supabase optional).
- Uses **Copilot Code Review** + branch protection + Code Scanning as guardrails.
- Allows **multi‑model** reasoning through **GitHub Models**.
