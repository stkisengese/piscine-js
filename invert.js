function invert(obj) {
  const invertedObj = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      invertedObj[obj[key]] = key;
    }
  }
  return invertedObj;
}

// Example usage:
const originalObj = { a: 1, b: 2, c: 3 };
const invertedObj = invert(originalObj);
console.log(invertedObj); // { '1': 'a', '2': 'b', '3': 'c' }
