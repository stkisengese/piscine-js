function currify(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...nextArgs) {
        return curried(...args, ...nextArgs);
      };
    }
  };
}

const mult2 = (el1, el2) => el1 * el2;
console.log(mult2(2, 2)); // result expected 4

const mult2Curried = currify(mult2);

console.log(mult2Curried(2)(2)); // result expected 4
// (same result, with a function that has technically only one argument)
