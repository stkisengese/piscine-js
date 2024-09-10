// // small database with nutrition facts, per 100 grams
// const nutritionDB = {
//     tomato:  { calories: 18,  protein: 0.9,   carbs: 3.9,   sugar: 2.6, fiber: 1.2, fat: 0.2   },
//     vinegar: { calories: 20,  protein: 0.04,  carbs: 0.6,   sugar: 0.4, fiber: 0,   fat: 0     },
//     oil:     { calories: 48,  protein: 0,     carbs: 0,     sugar: 123, fiber: 0,   fat: 151   },
//     onion:   { calories: 0,   protein: 1,     carbs: 9,     sugar: 0,   fiber: 0,   fat: 0     },
//     garlic:  { calories: 149, protein: 6.4,   carbs: 33,    sugar: 1,   fiber: 2.1, fat: 0.5   },
//     paprika: { calories: 282, protein: 14.14, carbs: 53.99, sugar: 1,   fiber: 0,   fat: 12.89 },
//     sugar:   { calories: 387, protein: 0,     carbs: 100,   sugar: 100, fiber: 0,   fat: 0     },
//     orange:  { calories: 49,  protein: 0.9,   carbs: 13,    sugar: 9,   fiber: 0.2, fat: 0.1   },
//   }

function filterEntries(obj, callback) {
  return Object.fromEntries(
    Object.entries(obj).filter(([key, value]) => callback([key, value]))
  );
}

function mapEntries(obj, callback) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => callback([key, value]))
  );
}

function reduceEntries(obj, callback, initialValue) {
  const entries = Object.entries(obj);
  if (initialValue === undefined) {
    return entries.reduce(callback);
  }
  return entries.reduce(callback, initialValue);
}

function totalCalories(cart) {
  const total = reduceEntries(
    cart,
    (total, [item, quantity]) =>
      total + (nutritionDB[item].calories * quantity) / 100,
    0
  );
  return Number(total.toFixed(1));
}

function lowCarbs(cart) {
  return filterEntries(
    cart,
    ([item, quantity]) => (nutritionDB[item].carbs * quantity) / 100 < 50
  );
}

function cartTotal(cart) {
  return mapEntries(cart, ([item, quantity]) => {
    const itemNutrition = nutritionDB[item];
    const scaledNutrition = Object.fromEntries(
      Object.entries(itemNutrition).map(([nutrient, value]) => [
        nutrient,
        Number((value * quantity) / 100).toFixed(1),
      ])
    );
    return [item, scaledNutrition];
  });
}

// const groceriesCart = { orange: 500, oil: 20, sugar: 480 };

// console.log("Total calories:");
// console.log(totalCalories(groceriesCart));
// console.log("Items with low carbs:");
// console.log(lowCarbs(groceriesCart));
// console.log("Total cart nutritional facts:");
// console.log(cartTotal(groceriesCart));

/* Expected output:

Total calories:
2112.2
Items with low carbs:
{ oil: 20 }
Total cart nutritional facts:
{
  orange: {
    calories: 245,
    protein: 4.5,
    carbs: 65,
    sugar: 45,
    fiber: 1,
    fat: 0.5
  },
  oil: {
    calories: 9.6,
    protein: 0,
    carbs: 0,
    sugar: 24.6,
    fiber: 0,
    fat: 30.2
  },
  sugar: {
    calories: 1857.6,
    protein: 0,
    carbs: 480,
    sugar: 480,
    fiber: 0,
    fat: 0
  }
}
*/
