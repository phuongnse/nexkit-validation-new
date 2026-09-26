import assert from "node:assert/strict";
import test from "node:test";

import { sumIntegerArguments } from "../sum-core.mjs";

test("sums signed integers", () => {
  assert.equal(sumIntegerArguments(["2", "-5", "+1"]), "-2");
});

test("normalizes zero and signed, padded operands", () => {
  assert.equal(sumIntegerArguments(["-000", "+000"]), "0");
  assert.equal(sumIntegerArguments(["+00042"]), "42");
});

test("sums integers beyond Number precision exactly", () => {
  assert.equal(
    sumIntegerArguments(["90071992547409931234567890", "-1"]),
    "90071992547409931234567889",
  );
});

test("requires at least one integer operand", () => {
  assert.throws(() => sumIntegerArguments([]), /at least one integer operand/);
});

test("rejects non-integer, whitespace, and non-ASCII digit operands", () => {
  for (const argument of ["1.5", "1e3", "words", "two words", "1\n", "+", "１２"]) {
    assert.throws(() => sumIntegerArguments([argument]), /Invalid integer operand/);
  }
});
