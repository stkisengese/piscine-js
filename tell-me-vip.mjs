#!/usr/bin/env node

import { readdir, readFile, writeFile } from "fs";
import { promisify } from "util";
import { resolve, join } from "path";

const readdirAsync = promisify(readdir);
const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);

async function readGuestFile(directoryPath, filename) {
  const filePath = join(directoryPath, filename);
  try {
    const content = await readFileAsync(filePath, "utf-8");
    const data = JSON.parse(content);
    const [lastname, firstname] = filename.slice(0, -5).split("_");
    return { lastname, firstname, answer: data.answer };
  } catch (error) {
    console.error(`Error reading file ${filename}: ${error.message}`);
    return null;
  }
}

async function getVIPGuests(directoryPath) {
  const files = await readdirAsync(directoryPath);
  const guestPromises = files
    .filter((file) => file.endsWith(".json"))
    .map((file) => readGuestFile(directoryPath, file));

  const guests = (await Promise.all(guestPromises)).filter(
    (guest) => guest !== null
  );

  return guests
    .filter((guest) => guest.answer === "YES")
    .sort((a, b) => {
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
 // const outputPath = join(resolvedPath, "vip.txt");

  try {
    const vipGuests = await getVIPGuests(resolvedPath);
    const formattedList = formatGuestList(vipGuests);

    await writeFileAsync('vip.txt', formattedList);
    console.log(`VIP list has been saved to vip.txt`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

main().catch((error) => {
  console.error(`Unexpected error: ${error.message}`);
  process.exit(1);
});
