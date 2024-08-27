// const is = {};

// Add fuction properties to is object to check value type
is.num = (value) => typeof value === 'number' && !isNaN(value) && !Array.isArray(value);
is.nan = (value) => typeof value === 'number' && isNaN(value);
is.str = (value) => typeof value === 'string' && !Array.isArray;
is.bool = (value) => typeof value === 'boolean';
is.obj = (value) => typeof value === 'object' && value !== null && !Array.isArray(value);
is.fun = (value) => typeof value === 'function';
is.undef = (value) => value === undefined;
is.def = (value) => typeof value !== undefined;
is.arr = (value) => Array.isArray(value);
is.truthy = (value) => !!value;
is.falsy = (value) => !value;


// console.log(is.num(5)); // true
// console.log(is.num('ciao')); // false
// console.log(is.nan(NaN)); // true
// console.log(is.str('hello')); // true
// console.log(is.bool(true)); // true
// console.log(is.undef(undefined)); // true
// console.log(is.def(null)); // true
// console.log(is.arr([1, 2, 3])); // true
// console.log(is.obj({ a: 1 })); // true
// console.log(is.fun(function() {})); // true
// console.log(is.truthy(1)); // true
// console.log(is.falsy(0)); // true