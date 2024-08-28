function multiply(a, b) {
  if (b === 0) return 0;
  if (b < 0) return -multiply(a, -b);
  return a + multiply(a, b - 1);
}

function divide(a, b) {
  if (b === 0) return "Division by zero";
  if (a < 0 && b < 0) return divide(-a, -b);
  if (a < 0) return -divide(-a, b);
  if (b < 0) return -divide(a, -b);

  if (a < b) return 0;

  return 1 + divide(a - b, b);
}

function modulo(a, b) {
  if (b === 0) return "Modulo zero";
  if (a < 0) return -modulo(-a, b);
  if (b < 0) return modulo(a, -b);

  if (a < b) return a;
  return modulo(a - b, b);
}

console.log(multiply(10, 0));
console.log(divide(-10, -3));
console.log(modulo(-10, -3));
