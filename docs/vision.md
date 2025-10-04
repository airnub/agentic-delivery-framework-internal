# Vision

Build a **safe, vendor-neutral Agentic Delivery Framework (ADF)** that:
- Treats **ADF Iterations** (Sprint/Cycle) as the primary unit of planning and execution.
- Runs **all code changes inside a managed workspace runtime**, never on unmanaged developer laptops.
- Uses **change request-first governance** with automated and human review gates.
- Stays **model-agnostic** by calling industry LLMs (OpenAI/Anthropic/Google/etc.).
- Scales from solo repos to multi-team programs while remaining auditable and compliant.

The end state: a repeatable two-loop system where product intent (Epics/Stories) flows into a ready workspace runtime, the Delivery Team ships increments under transparent gates, and the Program Director plans the next Iteration from observed outcomes. Neutral terminology keeps directors, PMO, and engineering aligned without vendor lock-in while allowing profiles to map into specific platforms.

## Dual-Loop Overview
```mermaid
sequenceDiagram
  %% Agentic Delivery Framework — Dual-Loop Sequence (Neutral)
  participant PD as Program Director (Outer)
  participant WM as Work Management System (Iteration)
  participant WR as Workspace Runtime
  participant DT as Delivery Team (Inner)
  participant CR as Change Request Gates

  PD->>WM: Select active Iteration & Stories
  PD->>WR: Create/Resume Workspace Runtime (warm starts, secrets)
  PD->>WR: Start Delivery Team session
  DT->>WR: git switch -c feat/<work-item>
  DT->>WR: Implement Tasks (plan/edit/run/test)
  DT->>CR: Open Change Request ("Closes <work-item>")
  CR->>CR: CI / QA Verification / Security Review / Automated Review / Human Review
  alt All gates pass
    CR->>WR: Merge to protected branch
    PD->>WM: Move work item to Done
    PD->>WR: Hibernate/Stop Workspace Runtime
  else Any gate fails
    CR->>DT: Feedback & failing checks
    DT->>WR: Iterate fixes on branch
  end
  PD->>WM: Iteration Review & Plan Next
```

Embedding the sequence clarifies how enterprise teams de-risk autonomous edits: the Program Director controls environments and work intake while the Delivery Team ships inside governed workspace runtimes with explicit change request gates.

_Figure: Sequence diagram traces the outer Program Director loop and inner Delivery Team loop with neutral terminology. Formerly Agentic-Agile dual-loop._
