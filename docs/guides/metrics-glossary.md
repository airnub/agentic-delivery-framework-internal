# Metrics Glossary (ADF v0.6.0)

> Standard definitions used in ADF scorecards and Delivery Pulse. Formulas are intentionally simple, auditable, and tool-agnostic.

| Metric | Definition | Formula | Notes |
|---|---|---|---|
| ReqCoverage | Fraction of Story requirements (FR/AC) addressed by the change | addressed_requirements / total_requirements | Source: requirements trace + PR diff/tests. |
| BacktrackRatio | Degree of retries/errors during agent run | (error_steps + retry_steps) / total_steps | Lower is better; indicates smooth execution. |
| ToolPrecision | Success rate of tool/API operations | successful_tool_ops / total_tool_ops | Count per run; exclude no-ops. |
| EditLocality | % of edits confined to intended scope | scoped_diff_lines / total_diff_lines | Scope derived from Story Spec context/paths. |
| GateFirstPassRate | % of CR updates passing all gates first time | passes_first_try / total_cr_updates | Feed from CI check runs. |
| DefectReopenRate | % of merged CRs reopened for defects | reopened_crs / merged_crs | Rolling window (e.g., 3 sprints). |

**Autonomy thresholds (excerpt):**
- **A1→A2:** GateFirstPass ≥ 0.80; DefectReopenRate ≤ 0.10; 0 Critical security fails over 3 sprints.
- **A2→A3:** GateFirstPass ≥ 0.90; DefectReopenRate ≤ 0.05; ReqCoverage ≥ 0.75; ToolPrecision ≥ 0.80.

> If thresholds regress for two consecutive sprints or a P1 incident occurs, **rollback** to the lower autonomy level until metrics recover.
