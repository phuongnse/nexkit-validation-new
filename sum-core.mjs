const INTEGER_ARGUMENT = /^[+-]?[0-9]+$/;

export function sumIntegerArguments(arguments_) {
  if (arguments_.length === 0) {
    throw new Error("Provide at least one integer operand.");
  }

  let total = 0n;
  for (const argument of arguments_) {
    if (!INTEGER_ARGUMENT.test(argument)) {
      throw new Error(`Invalid integer operand: ${JSON.stringify(argument)}.`);
    }

    total += BigInt(argument);
  }

  return total.toString();
}
