const cutFirst = (str) => slice(str, 2);
const cutLast = (str) => slice(str, 0, -2);
const cutFirstLast = (str) => slice(str, 2, -2);
const keepFirst = (str) => slice(str, 0, 2);
const keepLast = (str) => slice(str, -2);
const keepFirstLast = (str) => keepFirst(str) + keepLast(str);

console.log(cutFirst("hello")) // "llo"
console.log(cutLast("hello")); // Output: hell
console.log(cutFirstLast("heworldlo")); // Output: world
console.log(keepFirstLast("23Hegfafdllo23")); // Output: Helo
console.log(keepFirst("Hello")); // Output: H
console.log(keepLast("Hello")); // Output: lo



function slice(input, start = 0, end = input.length) {
    if (start < 0) start += input.length;
    if (end < 0) end += input.length;
  
    let result = input instanceof Array ? [] : "";
    for (let i = start; i < end; i++) {
      result = input instanceof Array ? [...result, input[i]] : result + input[i];
    }
    return result;
  }
