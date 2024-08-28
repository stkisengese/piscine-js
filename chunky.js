function chunk(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

// Usage example
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const chunkedArray = chunk(arr, 3);
console.log(chunkedArray); // [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
