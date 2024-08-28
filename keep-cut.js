const cutFirst = (str) => str.length > 2 ? slice(str, 2) : '';
const cutLast = (str) => str.length > 2 ? slice(str, 0, -2): '';
const cutFirstLast = (str) => str.length > 4 ? slice(str, 2, -2) : '';
const keepFirst = (str) => str.length > 2 ? slice(str, 0, 2) : str;
const keepLast = (str) => str.length > 2 ? slice(str, -2) : str;
const keepFirstLast = (str) => str.length > 4 ? keepFirst(str) + keepLast(str) : str;


console.log(cutFirst("l")) // "llo"
console.log(cutLast("lo")); // Output: hell
console.log(cutFirstLast("heworldlo")); // Output: world
console.log(keepFirstLast("233")); // Output: Helo
console.log(keepFirst("Hello")); // Output: H
console.log(keepLast("H")); // Output: lo



function slice(input, start = 0, end = input.length) {
    if (start < 0) start += input.length;
    if (end < 0) end += input.length;
  
    let result = input instanceof Array ? [] : "";
    for (let i = start; i < end; i++) {
      result = input instanceof Array ? [...result, input[i]] : result + input[i];
    }
    return result;
  }
