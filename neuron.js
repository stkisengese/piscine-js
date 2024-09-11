function neuron(data) {
  const result = {
    questions: {},
    orders: {},
  };

  // Process each entry in the input data
  data.forEach((entry) => {
    // Split the entry into type and response
    const [typePart, responsePart] = entry.split(" - Response: ");
    const type = typePart.split(": ")[0].trim();
    const response = responsePart.trim();

    // Extract the key and query or order
    if (type === "Questions") {
      const key = typePart
        .split(": ")[1]
        .trim()
        .toLowerCase()
        .replace(/ /g, "_")
        .replace(/\?/g, "");
      if (!result.questions[key]) {
        const question = typePart.split(": ")[1].trim();
        result.questions[key] = {
          question: question,
          responses: [],
        };
      }
      result.questions[key].responses.push(response);
    } else if (type === "Orders") {
      const key = typePart
        .split(": ")[1]
        .trim()
        .toLowerCase()
        .replace(/ /g, "_")
        .replace(/!/g, "");
      if (!result.orders[key]) {
        const order = typePart.split(": ")[1].trim();
        result.orders[key] = {
          order: order,
          responses: [],
        };
      }
      result.orders[key].responses.push(response);
    }
  });
  // Clean up empty sections
  if (Object.keys(result.questions).length === 0) {
    delete result.questions;
  }
  if (Object.keys(result.orders).length === 0) {
    delete result.orders;
  }

  return result;
}

// Example usage
const data = [
  "Questions: what is ounces? - Response: Ounce, unit of weight in the avoirdupois system",
  "Questions: what is ounces? - Response: equal to 1/16 pound (437 1/2 grains)",
  "Questions: what is Mud dauber - Response: Mud dauber is a name commonly applied to a number of wasps",
  "Orders: shutdown! - Response: Yes Sr!",
  "Orders: Quote something! - Response: Pursue what catches your heart, not what catches your eyes.",
];

console.log(JSON.stringify(neuron(data), null, 2));
