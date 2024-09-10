function filterKeys(obj, callback) {
  return Object.fromEntries(
    Object.entries(obj)
      .filter(([key, value]) => callback(key, value, obj))
      .map(([key, value]) => [key, value])
  );
}

function mapKeys(obj, callback) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [
      callback(key, value, obj),
      value,
    ])
  );
}

function reduceKeys(obj, callback, initialValue) {
  const keys = Object.keys(obj);
  if (initialValue === undefined) {
    return keys.reduce(callback);
  }
  return Object.keys(obj).reduce(callback, initialValue);
}

const nutrients = { carbohydrates: 12, protein: 20, fat: 5 };

console.log(filterKeys(nutrients, (key) => /protein/.test(key)));
// output: { protein: 20 }

console.log(mapKeys(nutrients, (k) => `-${k}`));
// output: { -carbohydrates: 12, -protein: 20, -fat: 5 }

console.log(reduceKeys(nutrients, (acc, cr) => acc.concat(", ", cr)));
// output: carbohydrates, protein, fat
