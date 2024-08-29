function pyramid(char, height) {
  let result = "";
  let i = 1;
  let j = 1;
  while (i <= height) {
    result += " ".repeat(height - i) + char.repeat(j);
    i++;
    j += 2;
    if (i <= height) {
      result += "\n";
    }
  }
  return result;
}

console.log(pyramid("#", 5));
console.log(pyramid("*", 7));
