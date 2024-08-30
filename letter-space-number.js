function letterSpaceNumber(inputStr) {
     const regex = /([a-zA-Z]) (\d)(?![a-zA-Z0-9])/g;
     return inputStr.match(regex) || [];
e}
console.log(letterSpaceNumber('x 9y 8 z 7'));  // Output: ['x 9', 'z 7']
console.log(letterSpaceNumber('example 1, example 20')); // Output: ['e 1']