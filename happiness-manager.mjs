#!/usr/bin/env node

import { readdir, readFile, writeFile } from "fs/promises";
import { join } from "path";

const [, , guestDir, outputFile] = process.argv;

async function main() {
  try {
    const guests = await getGuestInfo(guestDir);
    const vipGuests = guests.filter((guest) => guest.answer === "yes");

    if (vipGuests.length === 0) {
      console.log("No one is coming.");
      process.exit(0);
    }

    const shoppingList = calculateShoppingList(vipGuests);
    await updateShoppingListFile(outputFile, shoppingList);
  } catch (error) {
    console.error("An error occurred:", error.message);
    process.exit(1);
  }
}

async function getGuestInfo(dir) {
  const files = await readdir(dir);
  const guestInfo = await Promise.all(
    files.map(async (file) => {
      const content = await readFile(join(dir, file), "utf-8");
      return JSON.parse(content);
    })
  );
  return guestInfo;
}

function calculateShoppingList(guests) {
  const drinks = guests.map((guest) => guest.drink).filter(Boolean);
  const food = guests.map((guest) => guest.food).filter(Boolean);

  const beerDrinkers = drinks.filter((drink) => drink === "beer").length;
  const wineDrinkers = drinks.filter((drink) => drink === "wine").length;
  const waterDrinkers = drinks.filter((drink) => drink === "water").length;
  const softDrinkers = drinks.filter((drink) => drink === "soft").length;

  const veggiesAndVegans = food.filter((f) =>
    ["veggies", "vegan"].includes(f)
  ).length;
  const carnivores = food.filter((f) => f === "carnivore").length;
  const fishLovers = food.filter((f) => f === "fish").length;
  const omnivores = food.filter((f) => f === "all").length;

  const shoppingList = {
    "6-packs-beers": Math.ceil(beerDrinkers / 6),
    "wine-bottles": Math.ceil(wineDrinkers / 4),
    "water-bottles": Math.ceil(waterDrinkers / 4),
    "soft-bottles": Math.ceil(softDrinkers / 4),
    eggplants: Math.ceil(veggiesAndVegans / 3),
    courgettes: Math.ceil(veggiesAndVegans / 3),
    mushrooms: Math.ceil(veggiesAndVegans / 3) * 3,
    hummus: Math.ceil(veggiesAndVegans / 3),
    burgers: carnivores,
    sardines: fishLovers,
    kebabs: omnivores,
    potatoes: guests.length,
  };

  // Remove items with zero quantity
  return Object.fromEntries(
    Object.entries(shoppingList).filter(([, value]) => value > 0)
  );
}

async function updateShoppingListFile(fileName, newList) {
  let existingList = {};
  try {
    const fileContent = await readFile(fileName, "utf-8");
    existingList = JSON.parse(fileContent);
  } catch (error) {
    // File doesn't exist or is empty, start with an empty object
  }

  const updatedList = { ...existingList, ...newList };
  await writeFile(fileName, JSON.stringify(updatedList, null, 2));
}

main();
