# Integer sum CLI acceptance project

This public repository starts without application code. The owner selected a
small Node.js CLI for signed-integer sums as a NexKit acceptance consumer.
Application behavior will be implemented after a real GitHub requirement approval.

## Accepted setup

- Native Node.js modules and node:test; no third-party runtime dependency.
- Separate unit tests and E2E that launches the actual CLI as a subprocess.
- Project-owned runner and Codex ChatGPT login, with gpt-6-luna and max reasoning.
- Project decisions, usage limits and runner labels in `.nexkit/project.json`.
- English artifacts, no production data and no configured release.

## Planned verification commands

```sh
node --test --test-reporter=tap tests/test.test.mjs
node --test --test-reporter=tap tests/e2e.test.mjs
```

These commands cannot pass until the approved delivery creates the application
and meaningful test cases. Setup readiness does not establish application behavior.

## Workflow

Use the NexKit request skill to submit a GitHub work item. Actions clarifies its
specification and provides the exact approval comment for the owner. After that
approval, Actions implements, verifies, independently reviews and merges within
the configured limits. Track progress in the issue, pull request and Actions runs.
