#!/usr/bin/env node

import { readdir } from "fs";
import { promisify } from "util";
import { format, resolve } from "path";

const readdirAsync = promisify(readdir);

function parseAndFormatNames(files) {
  return files
    .filter((file) => file.includes("_") && file.endsWith(".json"))
    .map((file) => {
      const [lastname, firstname] = file.split("_");
      return `${firstname.slice(0, -5)} ${lastname}`;
    })
    .sort((a, b) => a.localeCompare(b));
}

async function listGuests(directoryPath) {
  try {
    const files = await readdirAsync(directoryPath);
    const formattedNames = parseAndFormatNames(files);

    if (formattedNames.length === 0) return;

    formattedNames.forEach((name, index) => {
      console.log(`${index + 1}. ${name}`);
    });
  } catch (error) {
    console.error(`Error reading directory: ${error.message}`);
    process.exit(1);
  }
}

function main() {
  const filePath = process.argv[2] || ".";
  const resolvedPath = resolve(filePath);
  listGuests(resolvedPath);
}

main();

function split(arr) {
  let result = [];
  for (let file of arr) {
    let store = file.split("_");
    store[1] = store[1].slice(0, -5);
    let conc = store[1] + " " + store[0];
    result.push(conc);
  }
  return result;
}

console.log(split(["Dotty_Dunlap.json"]));
let path = process.cwd();
// console.log(path);
