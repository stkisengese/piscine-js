// split function that acts like String.split
function split(str, delimiter='') {
  let result = [];
  let currentSegment = "";
  for (let i = 0; i <= str.length; i++) {
    if (str[i] === delimiter || i === str.length) {
      result.push(currentSegment);
      currentSegment = "";
    } else {
      currentSegment += str[i];
    }
  }
  return result;
}

// join function that acts like Array.join
function join(arr, delimiter=',') {
  if (arr.length === 0) return "";
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
    if (i < arr.length - 1) {
      result += delimiter;
    }
  }
  return result;
}

console.log(split("set the correct line endings", ));
console.log(join(["set", "the", "correct", "line", "endings"], ", "));
console.log(split("ele ment"))
const elements = ['Fire', 'Air', 'Water'];

console.log(join(elements));
// Expected output: "Fire,Air,Water"

console.log(join(elements, ''));
// Expected output: "FireAirWater"

console.log(join(elements, '-'));
// Expected output: "Fire-Air-Water"
