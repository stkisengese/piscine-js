// const add4 = '+4';
// const mul2 = '*2';

function findExpression(target) {
    function helper(current, expression) {
        if (current === target) {
            return expression;
        }
        if (current > target) {
            return undefined;
        }
        return helper(current * 2, expression + mul2) || helper(current + 4, expression + add4);
    }
    return helper(1, '1');
}

console.log(findExpression(12)) 