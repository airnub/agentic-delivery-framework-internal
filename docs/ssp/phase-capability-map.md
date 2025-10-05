# SSP Phase → Capability-Class Map (Informative)

Use this map to bind SSP and orchestration phases to capability classes. Implementations then select concrete models that satisfy these classes.

| ADF phase (outer/inner)                 | Capability class (primary → fallback) |
|---|---|
| Backlog refinement / planning           | reasoning → agent_mode |
| Complex refactor plan (multi-file)      | reasoning → debugging |
| Implement feature / small edits         | code_gen → reasoning |
| Refactor (targeted/large)               | code_refactor → agent_mode / reasoning |
| Review diffs / summarize CR             | code_review → reasoning |
| QA visual check (screens/demos/UI)      | vision → reasoning |
| Tool-driven scripted change             | agent_mode → code_refactor |

**Notes**
- Use `vision` whenever analyzing screenshots, diagrams, UI states, or recorded demos.
- Tests remain under `code_gen` until a dedicated class is formally introduced by the methodology.
- Non-functional routing traits (latency/accuracy/cost/context length) MAY be applied by profiles as constraints or tie-breakers.
