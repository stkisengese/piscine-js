const neuron = (dataset) => {
  const result = {};

  dataset.forEach((item) => {
    // Split the item into type and content
    const [typePart, responsePart] = item.split(" - Response: ");
    const type = typePart.split(": ")[0].trim().toLowerCase();
    const input = typePart.split(": ")[1].trim();
    const response = responsePart.trim();

    // Generate the category and key for the result object
    const category = type.toLowerCase();
    const key = input
      .toLowerCase()
      .replace(/\?/g, "")
      .replace(/\s+/g, "_")
      .replace(/[!]/g, "");

    // Initialize the category if not already present
    if (!result[category]) {
      result[category] = {};
    }

    // Initialize the key if not already present
    if (!result[category][key]) {
      result[category][key] = {
        [category.slice(0, -1)]: input, // Use the category name without the trailing 's'
        responses: [],
      };
    }

    // Add the response to the appropriate entry
    result[category][key].responses.push(response);
  });

  return result;
};

// Example usage
const data = [
  "Questions: how are you? - Response: well thanks, and you?",
  "affirmats: i am fine - Response: cool",
  "affirmats: i am fine - Response: awesome",
  "Orders: turn on the lights! - Response: done",
];

console.log(JSON.stringify(neuron(data), null, 2));

// // Example usage
// const data = [
//   "Questions: what is ounces? - Response: Ounce, unit of weight in the avoirdupois system",
//   "Questions: what is ounces? - Response: equal to 1/16 pound (437 1/2 grains)",
//   "Questions: what is Mud dauber - Response: Mud dauber is a name commonly applied to a number of wasps",
//   "Orders: shutdown! - Response: Yes Sr!",
//   "Orders: Quote something! - Response: Pursue what catches your heart, not what catches your eyes.",
// ];

// console.log(JSON.stringify(neuron(data), null, 2));
