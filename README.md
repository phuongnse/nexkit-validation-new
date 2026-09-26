# Integer sum CLI

A small Node.js command-line tool that sums signed integers exactly.

## Usage

```sh
node sum.mjs INTEGER [INTEGER ...]
```

Each operand must contain an optional leading `+` or `-` followed by one or
more ASCII digits. The command uses arbitrary-precision integers. On success,
it prints the normalized decimal sum and a newline to stdout, then exits with
status 0. For example:

```sh
node sum.mjs 2 -5 1
# -2
```

With no operands or an invalid operand, it prints an English diagnostic to
stderr, leaves stdout empty, and exits with status 2. Zero is printed as `0`,
positive sums have no leading plus sign, and results have no unnecessary
leading zeros.

## Accepted setup

- Native Node.js modules and node:test; no third-party runtime dependency.
- Separate unit tests and E2E that launches the actual CLI as a subprocess.
- Project-owned runner and Codex ChatGPT login, with gpt-6-luna and max reasoning.
- Project decisions, usage limits and runner labels in `.nexkit/project.json`.
- English artifacts, no production data and no configured release.

## Verification

```sh
node --test --test-reporter=tap tests/test.test.mjs
node --test --test-reporter=tap tests/e2e.test.mjs
```

The first command checks the sum logic. The second launches `sum.mjs` as a real
subprocess and checks its output and exit status.

## Workflow

Use the NexKit request skill to submit a GitHub work item. Actions clarifies its
specification and provides the exact approval comment for the owner. After that
approval, Actions implements, verifies, independently reviews and merges within
the configured limits. Track progress in the issue, pull request and Actions runs.
