const vowels = /[aeiou]/gi;
function vowelDots(inputStr) {
  return inputStr.replace(vowels, (match) => match + ".");
}

console.log(vowelDots("hEllo"));
console.log(vowelDots("javascript"));
