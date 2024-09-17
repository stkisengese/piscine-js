#!/usr/bin/env node

import { readdir, readFile, writeFile } from "fs";
import { promisify } from "util";
import { join } from "path";

const readdirAsync = promisify(readdir);
const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);

async function readGuestFile(filePath, fileName) {
  try {
    const content = await readFileAsync(join(filePath, fileName), "utf8");
    const obj = JSON.parse(content);
    return obj.answer.toLowerCase() === "yes" ? fileName : null;
  } catch (err) {
    console.error(`Error reading file ${fileName}: ${err.message}`);
    return null;
  }
}

function formatGuestName(fileName) {
  const [lastName, firstName] = fileName.split("_");
  return `${firstName.slice(0, -5)} ${lastName}`;
}

async function getVIPGuests(filePath) {
  try {
    const files = await readdirAsync(filePath);
    const vipGuests = await Promise.all(
      files.map((file) => readGuestFile(filePath, file))
    );
    return vipGuests
      .filter((guest) => guest !== null)
      .map(formatGuestName)
      .sort((a, b) => a.localeCompare(b));
  } catch (err) {
    console.error(`Error reading directory: ${err.message}`);
    return [];
  }
}

async function main() {
  const filePath = process.argv[2] || ".";

  try {
    const vipGuests = await getVIPGuests(filePath);
    const list = vipGuests
      .map((guest, index) => `${index + 1}. ${guest}`)
      .join("\n");

    await writeFileAsync("vip.txt", list);
    console.log("VIP list has been saved to vip.txt");
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}

main();
