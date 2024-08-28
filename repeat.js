const repeat = (string, number, result = "") =>
  number <= 0 
  ? result 
  : repeat(string, number - 1, `${result}${string}`);

console.log(repeat("Hello", 3)); // 'HelloHelloHello'
