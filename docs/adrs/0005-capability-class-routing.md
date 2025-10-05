# ADR-0005: Capability-Class Routing

## Status
Accepted

## Context
Different models excel at different tasks. We need a vendor-neutral way to map ADF activities (outer orchestration + inner SSP phases) to the right model capabilities, not model brand names.

## Decision
ADF prescribes **Capability-Class Routing**.

### Capability classes (normative)
- `reasoning` — deep/step-by-step reasoning & analysis
- `debugging` — multi-file debugging, log/perf analysis
- `code_gen` — code generation/completion/implementation
- `code_refactor` — targeted restructures/large codebase changes
- `code_review` — diff/PR review & summarization
- `vision` — screenshots/diagrams/UI reasoning (multimodal)
- `agent_mode` — tool/agent execution for automated, multi-file edits

### Role/phase binding (normative)
- Teams **bind ADF activities** to capability classes (not specific vendors).
- Implementations **MUST** select a concrete model that satisfies the bound class.
- Implementations **SHOULD** publish a routing policy with preferred → fallback candidates.

### Evidence (normative)
- For agent-produced changes, record `{ capability_class, model_id }` in Story Preview or build logs when feasible.

### Selection traits (informative)
- Routing policies **MAY** use non-functional traits (latency, accuracy/hallucinations, premium cost multipliers, context length) as constraints or tie-breakers.

## Consequences
- Method remains vendor-neutral while enabling best-of-breed routing.
- Profiles (e.g., GitHub) carry the concrete wiring; teams can swap models without spec edits.
- Audits can attribute outputs to capability classes and concrete models.

## Alternatives considered
- Pinning to vendor models (too brittle; frequent churn).
- One-size-fits-all model (underperforms across task types).
