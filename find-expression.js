// const add4 = '+4'
// const mul2 = '*2'

function findExpression(target) {
  function helper(current, expression) {
    if (current === target) {
      return expression;
    }
    if (current > target) {
      return undefined;
    }
    return (
      helper(current + 4, expression + " " + add4) ||
      helper(current * 2, expression + " " + mul2)
    );
  }
  return helper(1, "1");
}

// // Test cases
// console.log(findExpression(8));  // Expected: 1 *2 *2 +4
// console.log(findExpression(14)); // Expected: 1 *2 +4 *2
// console.log(findExpression(17)); // Expected: 1 +4 *2 +4 +4
// console.log(findExpression(2));  // Expected: 1 *2
// console.log(findExpression(4));  // Expected: 1 +4
// console.log(findExpression(1));  // Expected: 1
// console.log(findExpression(23)); // Expected: undefined
