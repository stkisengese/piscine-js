function triangle(char, height) {
  let i = 1;
  let result = "";
  while (i <= height) {
    result += char.repeat(i);
    if (i < height) {
      result += "\n";
    }
    i++;
  }
  return result;
}

console.log(triangle("#", 5));
