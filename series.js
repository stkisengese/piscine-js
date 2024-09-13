async function series(asyncFunctions) {
  const results = [];

  for (const asyncFunc of asyncFunctions) {
    try {
      const result = await asyncFunc();
      results.push(result);
    } catch (error) {
      // If any function throws an error, we add to result
      results.push(error);
    }
  }

  return results;
}
