/* The slice() method of Array instances returns a shallow copy of a portion of 
an array into a new array object selected from start to end (end not included) where 
start and end represent the index of items in that array.
*/

function slice(array, start = 0, end = array.length) {
  let newArray = [];
  if (start < 0) start += array.length;
  if (end < 0) end += array.length;
  
  for (let i = start; i < end; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(slice(animals, 2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(slice(animals, 2, 4));
// Expected output: Array ["camel", "duck"]

console.log(slice(animals, 1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(slice(animals, -2));
// Expected output: Array ["duck", "elephant"]

console.log(slice(animals, 2, -1));
// Expected output: Array ["camel", "duck"]

console.log(slice(animals));
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
