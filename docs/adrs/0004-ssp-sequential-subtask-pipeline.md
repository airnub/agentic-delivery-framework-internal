# ADR 0004: Sequential Subtask Pipeline (SSP)

- Status: Accepted (spec v0.4.0 / naming v0.0.4)
- Date: 2025-10-05

## Context

Parallel sub-task execution by multiple agents on the same Story branch repeatedly caused divergent edits, rebases, and failed Change Requests. Delivery teams reported that sequentializing sub-tasks removed most conflicts but lacked a shared prescription in ADF. To ensure deterministic Story outcomes and predictable reviews, the framework needs a normative method that governs decomposition, branch control, and evidence capture.

## Decision

1. **Adopt Sequential Subtask Pipeline (SSP) as the normative method for decomposed Stories.**
   - All sub-tasks share one Story branch managed through an exclusive lease; only the lease holder may push changes.
   - Sub-tasks execute strictly in queued order, each producing a checkpoint commit with tests, verification notes, and a Story Preview.
   - A single Change Request opens after all checkpoints are green, aggregating Story-level evidence.
2. **Document SSP in method, spec, naming, and conformance references.**
   - Publish `docs/method/ssp-sequential-subtask-pipeline.v0.1.0.md` with detailed flow, queue format, and informative implementation guidance.
   - Integrate SSP requirements into spec v0.4.0, naming v0.0.4 terminology, conformance levels, and glossary entries.

## Consequences

- Decomposed Stories now follow one predictable pipeline, reducing intra-Story merge conflicts.
- Delivery Pulse reports surface SSP status (lease holder, queue position, last checkpoint, blockers) for transparency.
- Implementations must support exclusive leases, queue orchestration, and SSP telemetry to reach higher conformance levels.
- Story Preview checkpoints become standard for sub-task verification, while Pulse Increments continue to reflect merged work only.

## Related Documents

- [Spec v0.4.0](../specs/spec.v0.4.0.md)
- [Sequential Subtask Pipeline method v0.1.0](../method/ssp-sequential-subtask-pipeline.v0.1.0.md)
- [Enterprise-friendly naming v0.0.4](../naming/enterprise-friendly-naming.v0.0.4.md)
- [Conformance](../conformance.md)

---

This work is licensed under CC BY-SA 4.0.
