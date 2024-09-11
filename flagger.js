function flags(input) {
  const result = {
    alias: {},
    description: [],
  };

  const keys = Object.keys(input);
  const longToShortMap = {};

  // Generate aliases and short descriptions
  keys.forEach((key) => {
    if (key !== "help") {
      const shortKey = key.replace(/[^a-zA-Z]/g, "").charAt(0); // Get the first letter for alias
      const formattedKey = `--${key}`;
      result.alias[shortKey] = key;
      result.description.push(`-${shortKey}, ${formattedKey}: ${input[key]}`);
      longToShortMap[key] = shortKey;
    }
  });

  // Always add the help flag alias
  result.alias["h"] = "help";

  // Handle 'help' flag to return specific descriptions
  if (input.help) {
    input.help.forEach((flag) => {
      if (input[flag]) {
        const shortFlag = longToShortMap[flag] || flag.charAt(0);
        const formattedFlag = `--${flag}`;
        result.description.push(
          `-${shortFlag}, ${formattedFlag}: ${input[flag]}`
        );
      }
    });
  } else {
    // Add descriptions for all flags
    result.description = result.description.join("\n");
  }

  return {
    alias: result.alias,
    description: result.description,
  };
}

// Example usage
const input2 = {
  invert: "inverts an object",
  "convert-map": "converts the object to an array",
  assign: "uses the function assign - assign to target object",
};

console.log(JSON.stringify(flags(input2), null, 2));

const input = {
  multiply: "multiply the values",
  divide: "divides the values",
  help: ["divide"],
};

console.log(JSON.stringify(flags(input), null, 2));
console.log(JSON.stringify(flags({}), null, 2));
