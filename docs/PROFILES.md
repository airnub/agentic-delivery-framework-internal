# Platform Profiles

The Agentic Delivery Framework (ADF) specification is vendor-neutral. Platform profiles provide informative mappings between neutral terminology and platform-specific implementations. Profiles do not change the normative core spec; they help adopters translate ADF roles, artifacts, and gates into the services they operate.

## Using Profiles

1. Implement the neutral methodology by following the [ADF Specification](specs/spec.v0.2.0.md) and [Conformance Levels](CONFORMANCE.md).
2. Select a platform profile to understand how Iterations, workspace runtimes, and change request gates map to specific products.
3. Extend or author new profiles as your organization adopts additional platforms.

Profiles may include references to companion repositories, automation scripts, or configuration templates. These references are informative examples; organizations MAY adapt them to meet policy requirements.

## Available Profiles

- [GitHub](profiles/github.md) — mapping for Issues/Projects, Codespaces, change requests, and automated reviews; links to the `adf-github-suite` implementation.

## Planned Profiles

- GitLab — merge requests, Epics/Issues, and GitLab Remote Development.
- Bitbucket — Jira integration, pull requests, and Bitbucket Cloud/Datacenter workspaces.
- Azure DevOps — Boards, Repos, Environments, and Pipeline gates.

Community contributions are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md) for the RFC process to propose or update profiles.
