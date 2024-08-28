const str = "This is a string";
const num = 42;
const bool = true;
const undef = undefined;

// console.log(str);
// console.log(num);
// console.log(bool);
// console.log(undef);

let pouet
console.log(pouet); // Output: undefined

pouet = 10;
console.log(pouet); // Output: 10

pouet = "Hello, World!";
console.log(pouet); // Output: Hello, World!

let POUET_pouet
let pouet4 = "Hello"
let pouet_5 = "World"

console.log(POUET_pouet); // Output: undefined
console.log(pouet4 + " " + pouet_5); // Output: Hello World

let someVar = 5

someVar += 5
console.log(someVar); // Output: 10

someVar *=100
console.log(someVar); // Output: 100

console.log(42 - 21);
console.log(10/3);
console.log(10 % 3);
console.log(10 + 20 * 3);
console.log(4.2 + (42 - 21)); // Output:

console.log("It's like")
console.log("it's " + "like " + "this");
console.log('Hello\nWorld!');
console.log(`Hello
World!`);

console.log(true && true); // Output: true
console.log(true && false); // Output: false
console.log(false && true); // Output: false

// mixing types
console.log(true + 10); // Output: 11
console.log(true + "10"); // Output: true10

console.log(10 + true); // Output: 11
console.log("10" + true); // Output: 10true

console.log(true - 10); // Output: -9
console.log(true * "10"); // Output: 10

console.log(true + false); // true is considered 1 while false is 0
console.log(10 + false); // Output: 10


console.log(true + " " + false); // Output: true false
console.log('21' + 21); // Output: 2121

// Not a Number literal
console.log(NaN);
console.log('21' * pouet); // Output:NaN

//Infinity is not a Number literal
console.log(Infinity);
console.log(-10 / 0); // Output: -Infinity


// Comparaisons always return a boolean :

// Equality is ===
console.log(1 === 1) // true
console.log(1 === 2) // false

// Inequality is !==
console.log(1 !== 1) // = false
console.log(1 !== 2) // = true

// You can use the Negation ! symbol to get the inverse boolean of any value
console.log(!true) // = false
console.log(!false) // = true

// Greater than and lesser than
console.log(1 < 10) // = true
console.log(1 > 10) // = false
console.log(2 <= 2) // = true
console.log(2 >= 2) // = true

// and it works for strings
console.log('a' < 'b') // = true
console.log('aba' < 'abc') // = true

// THE MORE YOU KNOW :

// Non boolean values are either 'truthy' or 'falsy'
console.log(!0) // = true
console.log(!1) // = false
console.log(!123) // = false
console.log(!'') // = true
console.log(!'pouet') // = false

// Type coercion is performed for comparisons with double equals...
console.log('5' == 5) // = true
console.log(null == undefined) // = true

// ...avoid loosing your hairs and you use the strict === instead... please...
console.log('5' === 5) // = false
console.log(null === undefined) // = false

// JavaScript has one number type (which is a 64-bit IEEE 754 double).
// Doubles have a 52-bit mantissa, which is enough to store integers
// up to about 9✕10¹⁵ precisely.

// Float have limited precision, this is why :
console.log(0.1 + 0.2) // is not precisly 0.3 but 0.30000000000000004