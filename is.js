// const is = {};

// Add fuction properties to is object to check value type
is.num = (value) => typeof value === 'number' && !isNaN(value) && !Array.isArray(value);
is.nan = (value) => isNaN(value);
is.str = (value) => typeof value === 'string';
is.bool = (value) => typeof value === 'boolean';
is.obj = (value) => typeof value === 'object' && value !== null && !Array.isArray(value);
is.fun = (value) => typeof value === 'function';
is.undef = (value) => value === undefined;
is.def = (value) => typeof value !== undefined;
is.arr = (value) => Array.isArray(value);
is.truthy = (value) => !!value; // Double negation to convert to boolean
is.falsy = (value) => !value;   //Direct negation to check falsy


console.log(is.num(5)); // true
console.log(is.num('ciao')); // false
console.log(is.nan(NaN)); // true
console.log(is.str('hello')); // true
console.log(is.bool(true)); // true
console.log(is.undef(undefined)); // true
console.log(is.def(null)); // true
console.log(is.arr([1, 2, 3])); // true
console.log(is.obj({})); // true
console.log(is.fun(function() {})); // true
console.log(is.truthy(1)); // true
console.log(is.falsy(0)); // true