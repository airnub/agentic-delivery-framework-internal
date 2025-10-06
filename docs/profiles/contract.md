# Profiles contract

A platform profile **MUST** document how each required gate is realized or mark it **N/A** with rationale mapped to the governing policy.

**Required fields per gate:**
- `gate`
- `mechanism` (action, app, or policy that enforces the gate)
- `enforcement` (required or optional)
- `evidence` (artifact URI and hash)
- `failure-handling`
- `ownership`

**Minimum sections for every profile:**
- Repositories or projects in scope
- Runner trust model
- Secrets policy
- Isolation model
- Audit retention commitments

See the [GitHub profile](github.md) as an informative example of how to express this contract.
