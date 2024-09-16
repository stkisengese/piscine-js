const argv = process.argv;

// Function to discofy a single word
function discofy(word) {
  const chunks = Math.ceil(word.length / 2);
  return word.slice(chunks) + word.slice(0, chunks);
}

// Function to process the entire input
function processInput(input) {
  return input.split(" ").map(discofy).join(" ");
}

// Main function to run the program
function main() {
  const input = argv[2];

  if (argv.length < 3) {
    console.error("Please provide a sentence as an argument.");
    process.exit(1);
  }

  const discoSentence = processInput(input);
  console.log(discoSentence);
}
// run the main function
main();
