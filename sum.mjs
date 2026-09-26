import { sumIntegerArguments } from "./sum-core.mjs";

try {
  process.stdout.write(`${sumIntegerArguments(process.argv.slice(2))}\n`);
} catch (error) {
  process.stderr.write(`Error: ${error.message}\n`);
  process.exitCode = 2;
}
