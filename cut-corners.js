// // Usage
// const nums = [3.7, -3.7, 3.1, -3.1];
// console.log(nums.map(round)); // [ 4, -4, 3, -3 ]
// console.log(nums.map(floor)); // [ 3, -4, 3, -4 ]
// console.log(nums.map(trunc)); // [ 3, -3, 3, -3 ]
// console.log(nums.map(ceil)); // [ 4, -3, 4, -3 ]

// Custom round function
function round(number) {
  const integerPart = trunc(number);
  const fractionalPart = number - integerPart;
  if (number >= 0) {
    return fractionalPart < 0.5 ? integerPart : integerPart + 1;
  } else {
    return fractionalPart <= -0.5 ? integerPart - 1 : integerPart;
  }
}

// Custom ceil function
function ceil(number) {
  const integerPart = trunc(number);
  return number > integerPart ? integerPart + 1 : integerPart;
}

// Custom floor function
function floor(number) {
  const integerPart = trunc(number);
  return number < integerPart ? integerPart - 1 : integerPart;
}

// Custom trunc function
function trunc(number) {
  return number < 0 ? -trunc(-number) : customPositiveTrunc(number);
}

// Helper function for trunc
function customPositiveTrunc(number) {
  let result = 0;
  let multiplier = 1;
  while (multiplier <= number) {
    multiplier *= 2;
  }
  multiplier /= 2;

  while (multiplier >= 1) {
    if (number >= multiplier) {
      result += multiplier;
      number -= multiplier;
    }
    multiplier /= 2;
  }
  return result;
}
