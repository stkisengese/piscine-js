import { error } from "console";
import { readdir } from "fs";
import { promisify } from "util";
import { resolve, join } from "path";

const readdirAsync = promisify(readdir);

async function getGuestNames(directoryPath) {
  try {
    const files = await readdirAsync(directoryPath);
    const guests = files.map((file) => {
      const [firstName, lastName] = file.split(" ");
      return { firstName, lastName };
    });

    guests.sort((a, b) => {
      if (a.lastName < b.lastName) return -1;
      if (a.lastName > b.lastName) return 1;
      if (a.firstName < b.firstName) return -1;
      if (a.firstName > b.firstName) return 1;
      return 0;
    });

    guests.forEach((guest, index) => {
      console.log(`${index + 1}. ${guest.lastName} ${guest.firstName}`);
    });
  } catch (error) {
    console.error("Error reading directory:", error);
  }
}
async function main() {
  const directoryPath = process.argv[2] || ".";
  const resolvedPath = resolve(directoryPath);

  if (resolvedPath) {
    getGuestNames(resolvedPath);
  } else {
    console.error("Please provide a directory path as an argument.");
  }
}

main().catch((error) => {
  console.error(`Unexpected error: ${error.message}`);
  process.exit(1);
});
