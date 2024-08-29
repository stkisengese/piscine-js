function flat(arr, depth = 1) {
  if (depth < 1 || !Array.isArray(arr)) {
    return arr;
  }

  return arr.reduce((acc, val) => {
    return acc.concat(Array.isArray(val) ? flat(val, depth - 1) : val);
  }, []);
}

const nestedArray = [
  1,
  [2, 3, [4, 5]],
  6,
  [7, 8, [9, 10, [11, 12]]],
  13,
  14,
  15,
];

console.log("depth1", flat(nestedArray, 1));
console.log("depth2", flat(nestedArray, 2));
// console.log("infinity depth", flat(nestedArray, Infinity));
