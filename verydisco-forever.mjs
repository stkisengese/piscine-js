// import process from 'process';
import fs from "fs";

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
async function main() {
  const input = process.argv[2];

  if (!input) {
    console.error("Error: Please provide a sentence as an argument.");
    process.exit(1);
  }

  const discoSentence = processInput(input);

  fs.writeFile("verydisco-forever.txt", discoSentence, (err) => {
    if (err) {
      console.error(`Error writing to file: ${err.message}`);
      process.exit(1);
    } else {
      console.log(`Disco-ified sentence saved to verydisco-forever`);
    }
  });
}
// run the main function
main().catch((error) => console.error(error));
