#!/usr/bin/env node

import { readdir, readFile } from "fs";
import { promisify } from "util";
import { resolve, join } from "path";

const readdirAsync = promisify(readdir);
const readFileAsync = promisify(readFile);

async function readGuestName(directoryPath, filename) {
  const filePath = join(directoryPath, filename);
  const content = await readFileAsync(filePath, "utf-8");
  const [lastname, firstname] = content.trim().split("_");
  return { lastname, firstname };
}

async function getGuestList(directoryPath) {
  const files = await readdirAsync(directoryPath);
  const guestPromises = files.map((file) => readGuestName(directoryPath, file));
  const guests = await Promise.all(guestPromises);

  return guests.sort((a, b) => {
    if (a.lastname === b.lastname) {
      return a.firstname.localeCompare(b.firstname);
    }
    return a.lastname.localeCompare(b.lastname);
  });
}

function formatGuestList(guests) {
  return guests
    .map((guest, index) => {
      return `${index + 1}. ${guest.lastname} ${guest.firstname}`;
    })
    .join("\n");
}

async function main() {
  const directoryPath = process.argv[2] || ".";
  const resolvedPath = resolve(directoryPath);

  try {
    const guests = await getGuestList(resolvedPath);
    const formattedList = formatGuestList(guests);
    console.log(formattedList);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

main().catch((error) => {
  console.error(`Unexpected error: ${error.message}`);
  process.exit(1);
});
