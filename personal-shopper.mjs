#!/usr/bin/env node

import { readFile, writeFile, unlink } from "fs";
import { promisify } from "util";
import { existsSync } from "fs";

const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);
const unlinkAsync = promisify(unlink);
const [, , filename, action, item, quantity] = process.argv;

const actions = {
  create: createFile,
  delete: deleteFile,
  add: addItem,
  rm: removeItem,
  help: printHelp,
  ls: listItems,
};

async function main() {
  if (!action) {
    return printHelp();
  }

  if (!actions[action]) {
    console.error('Invalid action. Use "help" to see available commands.');
    return;
  }

  await actions[action]();
}

async function createFile() {
  if (!filename.endsWith(".json")) {
    console.error("Filename should have .json extension");
    return;
  }
  await writeFileAsync(filename, "{}", "utf8");
  console.log(`File ${filename} created.`);
}

async function deleteFile() {
  if (existsSync(filename)) {
    await unlinkAsync(filename);
    console.log(`File ${filename} deleted.`);
  } else {
    console.error(`File ${filename} does not exist.`);
  }
}

async function addItem() {
  if (!item) {
    console.error("No elem specified.");
    return;
  }

  let list = await readList();
  let count = Number(quantity) || 1;

  if (isNaN(count)) {
    count = 1;
  }

  list[item] = (list[item] || 0) + count;

  if (list[item] <= 0) {
    delete list[item];
  }

  await writeList(list);
}

async function removeItem() {
  if (!item) {
    console.error("No elem specified.");
    return;
  }

  let list = await readList();

  if (!(item in list)) {
    return;
  }

  if (!quantity) {
    delete list[item];
  } else {
    let count = Number(quantity);
    if (isNaN(count)) {
      console.error("Unexpected request: nothing has been removed");
      return;
    }
    list[item] -= count;
    if (list[item] <= 0) {
      delete list[item];
    }
  }

  await writeList(list);
}

async function listItems() {
  let list = await readList();
  if (Object.keys(list).length === 0) {
    console.log("Empty list.");
  } else {
    for (let [item, count] of Object.entries(list)) {
      console.log(`- ${item} (${count})`);
    }
  }
}

function printHelp() {
  console.log(`
Commands:
- create: takes a filename as argument and create it (should have .json extension specified)
- delete: takes a filename as argument and delete it
- add: adds a new element to the list or increases its quantity
- rm: removes an element from the list or decreases its quantity
- ls: prints the current list
- help: prints this help message
  `);
}

async function readList() {
  try {
    const data = await readFileAsync(filename, "utf8");
    return JSON.parse(data);
  } catch (error) {
    return {};
  }
}

async function writeList(list) {
  await writeFileAsync(filename, JSON.stringify(list, null, 2), "utf8");
}

main().catch(console.error);
