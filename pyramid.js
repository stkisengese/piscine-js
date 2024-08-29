function pyramid(char, height) {
  let result = "";
  let i = char.length;
  let j = 1;
  while (i <= height * char.length) {
    result += " ".repeat(height * char.length - i) + char.repeat(j);
    i += char.length;
    j += 2;
    if (i <= height * char.length) {
      result += "\n";
    }
  }
  return result;
}

console.log(pyramid("#", 5));
console.log(pyramid("{}", 12));
