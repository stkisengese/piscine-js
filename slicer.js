/* The slice() method of Array instances returns a shallow copy of a portion of 
an array into a new array object selected from start to end (end not included) where 
start and end represent the index of items in that array.
*/

function slice(input, start = 0, end = input.length) {
  if (start < 0) start += input.length;
  if (end < 0) end += input.length;

  let result = input instanceof Array ? [] : "";
  for (let i = start; i < end; i++) {
    result = input instanceof Array ? [...result, input[i]] : result + input[i];
  }
  return result;
}

const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(slice(animals, 2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(slice("animals", 2, 7));
// Expected output: Array ["camel", "duck"]

console.log(slice(animals, 1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(slice(animals, -2));
// Expected output: Array ["duck", "elephant"]

console.log(slice(animals, 2, -1));
// Expected output: Array ["camel", "duck"]

console.log(slice(animals));
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
