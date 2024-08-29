function findExpression(target) {
  function helper(current, expression) {
    if (current === target) {
      return expression;
    }
    if (current > target || /[5-9]/.test(expression)) {
      return undefined;
    }
    return (
      helper(current + 4, expression + "+4") ||
      helper(current * 2, expression + "*2")
    );
  }
  return helper(1, "1");
}
