function nasa(N) {
  let result = [];
  for (let i = 1; i <= N; i++) {
    result.push(
      i % 15 === 0 ? "NASA" : 
      i % 3 === 0  ? "NA" : 
      i % 5 === 0  ? "SA" :
      i
    );
  }
  return result.join(" ");
}

console.log(nasa(16));
console.log(typeof nasa(9));
