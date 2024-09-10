function deepCopy(obj) {
  // null or undefined
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // Date objects
  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }

  // Array objects
  if (Array.isArray(obj)) {
    return obj.map(deepCopy);
  }

  // Object literals
  if (obj.constructor === Object) {
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [key, deepCopy(value)])
    );
  }

  // For other types of objects, we return a new instance
  return Object.assign(Object.create(Object.getPrototypeOf(obj)), obj);
}

// Example usage:
const original1 = {
  a: 1,
  b: {
    c: 2,
    d: [3, 4, { e: 5 }],
  },
  f: new Date(),
  g: [6, 7, 8],
};
const original2 = {
  a: 1,
  b: [2, 3, { d: 4 }],
  c: { e: 5, f: [6, 7] },
};

const copied = deepCopy(original2);
console.log(copied);

const copy = deepCopy(original1);

console.log(copy);
