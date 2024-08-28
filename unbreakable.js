function split(str, separator) {
  if (separator === undefined) return [str];

  const result = [];
  let startIndex = 0;
  let sepIndex = str.indexOf(separator);

  if (separator === "") {
    for (let i = 0; i < str.length; i++) {
      result.push(str[i]);
    }
    return result;
  }

  while (sepIndex !== -1) {
    result.push(str.slice(startIndex, sepIndex));
    startIndex = sepIndex + separator.length;
    sepIndex = str.indexOf(separator, startIndex);
  }

  // Push the remaining part of the string
  result.push(str.slice(startIndex));

  return result;
}
// join function that acts like Array.join
function join(arr, separator) {
  if (separator === undefined) separator = ",";

  let result = "";
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
    if (i < arr.length - 1) {
      result += separator;
    }
  }

  return result;
}
console.log(split("set the correct line endings"));
console.log(split("ggg - ddd - b", " - "));
console.log(join(["set", "the", "correct", "line", "endings"], ", "));
console.log(split("ele ment"));
const elements = ["Fire", "Air", "Water"];

console.log(join(elements));
// Expected output: "Fire,Air,Water"

console.log(join(elements, ""));
// Expected output: "FireAirWater"

console.log(join(elements, "-"));
// Expected output: "Fire-Air-Water"
