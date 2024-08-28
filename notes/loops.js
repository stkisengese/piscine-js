/*
  while

  While is the first loop statement that we will learn to use.
  It allows you to repeat a block of code while the condition is truthy.

  Here is the basic syntax :
  while (condition) {
    // code
  }
 */

// The most common while loop is a simple counter
let count = 0; // `count` value will change so it needs to be declared with let !

while (count < 10) {
  count = count + 1; // we update the value of count to it's previous value + 1
  console.log("counter at", count);
  // Here we can add all the code we want to repeat !
}

// Let's create a function that add the given argument 5 times with while
const times5 = (n) => {
  let result = 0; // create for holding the result or our operation
  let count = 0; // create a counter to keep track of how many loops we did

  while (count < 5) {
    // check the condition, see if we have made enough loops
    count = count + 1; // increment our loop counter variable by one
    result = result + n; // add our given value `n` to our result
  }
  // loop is over !
  return result; // return our result
};

/*

  for..of

  For..Of is a cleaner way to iterate over an iterable (Array, Strings, etc...)
  It's the most usefull type of loops.

  Here is the basic syntax :
  for (const element of iterable) {
    // code
  }

 */

// Let's see how we could count how many letter O are in this sentence :
const sentence = "How are you today ?";

let countOfTheLetterO = 0; // this will hold our total

// for each element of our string
// we assign it's value to a const variable named letter
for (const letter of sentence) {
  // our loop will stop on reaching the end
  if (letter === "o") {
    // we have a match ! better add it to our total now...
    countOfTheLetterO = countOfTheLetterO + 1;
  }
}

// and that's all there is to it !
/*
  Recursion

  It's when a a function call itself, this way you can avoid the need for while.

  Here is the basic syntax :
  const recursive = (arg) => condition ? recursive(arg) : arg
 */

// The most common while loop is a simple counter

// ***********Recursion***************

const countTo10 = (count) => {
  if (count < 10) {
    console.log("counter at", count);
    countTo10(count + 1); // call itself with the updated value of count
  }
};

countTo10(0); // we need to call it to start the recursion with an initial value

// const count6 = (count) => (count < 66 ? count6(count + 1) : count); //

// console.log("recursive six", count6(0)); // 5!

// As you can see, looping this way we were able to remove the need for mutable
// variables (let)

// Let's create a function that add the given argument 5 times with recursion
const times5R = (n, count, result) =>
  count < 5 // we test our count
    ? times5R(n, count + 1, result + n) // we call ourself with the new values
    : result; // we return our results
// this function need 3 arguments as we need to start with an initial count and result

// so we can create a wrapper function that call it with the initial parameters
const time5 = (n) => times5R(n, 0, 0);

console.log(time5(5)); // 25 !
