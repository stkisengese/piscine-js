function sign(number) {
    return number > 0 ? 1 : number < 0 ? -1 : number === 0 ? 0 : NaN
}

function sameSign(num1, num2) {
    return sign(num1) === sign(num2);
}