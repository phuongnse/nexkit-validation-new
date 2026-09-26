import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import test from "node:test";

const cliPath = fileURLToPath(new URL("../sum.mjs", import.meta.url));

function runCli(arguments_) {
  return spawnSync(process.execPath, [cliPath, ...arguments_], {
    encoding: "utf8",
  });
}

test("prints the normalized mixed-sign sum and exits successfully", () => {
  const result = runCli(["2", "-5", "1"]);

  assert.equal(result.status, 0);
  assert.equal(result.stdout, "-2\n");
  assert.equal(result.stderr, "");
});

test("prints normalized zero for a single signed, padded operand", () => {
  const result = runCli(["-000"]);

  assert.equal(result.status, 0);
  assert.equal(result.stdout, "0\n");
  assert.equal(result.stderr, "");
});

test("prints arbitrary-precision sums exactly", () => {
  const result = runCli(["90071992547409931234567890", "-1"]);

  assert.equal(result.status, 0);
  assert.equal(result.stdout, "90071992547409931234567889\n");
  assert.equal(result.stderr, "");
});

test("rejects missing or invalid operands with only a diagnostic on stderr", () => {
  for (const arguments_ of [[], ["1.5"], ["1e3"], ["text"], ["two words"], ["1\t2"], ["1\n"]]) {
    const result = runCli(arguments_);

    assert.equal(result.status, 2, `arguments: ${JSON.stringify(arguments_)}`);
    assert.equal(result.stdout, "", `arguments: ${JSON.stringify(arguments_)}`);
    assert.match(result.stderr, /^Error: .+\n$/, `arguments: ${JSON.stringify(arguments_)}`);
  }
});
