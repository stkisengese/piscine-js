// const add4 = '+4'
// const mul2 = '*2'

function findExpression(number, current = 1, expression = '1') {
  // Base cases
  if (current === number) {
    return expression;
  }
  if (current > number) {
    return undefined;
  }
  const addResult = findExpression(number, current + 4, `${expression} ${add4}`);
  if (addResult) {
    return addResult;
  }

  const mulResult = findExpression(number, current * 2, `${expression} ${mul2}`);
  if (mulResult) {
    return mulResult;
  }

  return undefined;
}

// // Test cases
// console.log(findExpression(8));  // Expected: 1 *2 *2 +4
// console.log(findExpression(14)); // Expected: 1 *2 +4 *2
// console.log(findExpression(17)); // Expected: 1 +4 *2 +4 +4
// console.log(findExpression(2));  // Expected: 1 *2
// console.log(findExpression(4));  // Expected: 1 +4
// console.log(findExpression(1));  // Expected: 1
// console.log(findExpression(23)); // Expected: undefined