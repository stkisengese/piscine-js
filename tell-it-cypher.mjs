#!/usr/bin/env node
import { readFile, writeFile } from "fs";
import { promisify } from "util";

const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);

async function readInputFile(filePath) {
  try {
    return await readFileAsync(filePath, "utf8");
  } catch (error) {
    console.error(`Error reading file: ${error.message}`);
    process.exit(1);
  }
}

async function writeOutputFile(content, fileName) {
  try {
    await writeFileAsync(fileName, content);
    console.log(`Result saved to ${fileName}`);
  } catch (error) {
    console.error(`Error writing file: ${error.message}`);
    process.exit(1);
  }
}

function encodeBase64(input) {
  return Buffer.from(input).toString("base64");
}

function decodeBase64(base64String) {
  return Buffer.from(base64String, "base64").toString("utf8");
}

async function main() {
  const [, , inputFile, action, outputFile] = process.argv;

  if (!inputFile || !action) {
    console.error(
      "Usage: tell-it-cypher.mjs <input-file> <encode|decode> [output-file]"
    );
    process.exit(1);
  }

  const input = await readInputFile(inputFile);
  let result;
  let defaultOutputFile;

  if (action.toLowerCase() === "encode") {
    result = encodeBase64(input);
    defaultOutputFile = "cypher.txt";
  } else if (action.toLowerCase() === "decode") {
    result = decodeBase64(input);
    defaultOutputFile = "clear.txt";
  } else {
    console.error('Invalid action. Use "encode" or "decode".');
    process.exit(1);
  }

  const finalOutputFile = outputFile || defaultOutputFile;
  await writeOutputFile(result, finalOutputFile);

  // Print the result to stdout
  console.log(result);
}

main().catch((error) => {
  console.error(`Unexpected error: ${error.message}`);
  process.exit(1);
});
