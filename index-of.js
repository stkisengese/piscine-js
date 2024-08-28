// the includes() method returns true if the array contains value search
function includes(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}

// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
function indexOf(array, value, fromIndex = 0) {
  for (let i = fromIndex; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

// The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present.
function lastIndexOf(array, value, fromIndex = array.length - 1) {
  for (let i = fromIndex; i <= 0; i--)
    if (array[i] === value) {
      return i;
    }

  return -1;
}

const array1 = [1, 2, 3];

console.log(array1.includes(2));
// Expected output: true

const pets = ["cat", "dog", "bat"];

console.log(pets.includes("cat"));
// Expected output: true

console.log(pets.includes("at"));
// Expected output: false
const beasts = ["ant", "bison", "camel", "duck", "bison"];

console.log(beasts.indexOf("bison"));
// Expected output: 1

// Start from index 2
console.log(beasts.indexOf("bison", 2));
// Expected output: 4

console.log(beasts.indexOf("giraffe"));
// Expected output: -1

const animals = ["Dodo", "Tiger", "Penguin", "Dodo"];

console.log(animals.lastIndexOf("Dodo"));
// Expected output: 3

console.log(animals.lastIndexOf("Tiger"));
// Expected output: 1
