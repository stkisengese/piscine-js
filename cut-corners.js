function modulo(a, b) {
    if (b === 0) return "Modulo zero";
    if (a < 0) return -modulo(-a, b);
    if (b < 0) return modulo(a, -b);
  
    if (a < b) return a;
    return modulo(a - b, b);
  }

// Custom round function
function round(num) {
  return floor(num + 0.5);
}

function ceil(num) {
  if (num < 0) return -floor(-num);
  const intPart = num - modulo(num, 1);
  return num > intPart ? intPart + 1 : intPart;
}

function floor(num) {
  if (num < 0) return -ceil(-num);
  const intPart = num - modulo(num, 1);
  return intPart;
}

function trunc(num) {
  if (num < 0) return -trunc(-num);
  const intPart = num - modulo(num, 1);
  return intPart;
}

// Usage
const nums = [3.7, -3.7, 3.1, -3.1];
console.log(nums.map(round)); // [ 4, -4, 3, -3 ]
console.log(nums.map(floor)); // [ 3, -4, 3, -4 ]
console.log(nums.map(trunc)); // [ 3, -3, 3, -3 ]
console.log(nums.map(ceil)); // [ 4, -3, 4, -3 ]
