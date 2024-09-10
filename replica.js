function isObject(obj) {
  return (
    obj &&
    typeof obj === "object" &&
    !Array.isArray(obj) &&
    !(obj instanceof RegExp)
  );
}

function replica(target, ...sources) {
  sources.forEach((source) => {
    if (isObject(source)) {
      Object.keys(source).forEach((key) => {
        if (isObject(source[key])) {
          if (!target[key]) {
            Object.assign(target, { [key]: {} });
          }
          replica(target[key], source[key]);
        } else if (source[key] instanceof RegExp) {
          Object.assign(target, { [key]: new RegExp(source[key]) });
        } else {
          Object.assign(target, { [key]: source[key] });
        }
      });
    }
  });
  return target;
}

// Example usage:
const target = { a: 1, b: { c: 2 } };
const source = { reg: /hello/ };
const source1 = { b: { d: 3 } };
const source2 = { e: 4 };

const result = replica(target, source, source1, source2);
console.log(result); // { a: 1, b: { c: 2, d: 3 }, e: 4 }

const targetA = { a: 1, b: { c: 2 } };
const sourceA1 = { b: { d: 3 }, e: 4 };
const sourceA2 = { f: 5, g: { h: 6 } };

const resultA = replica(targetA, sourceA1, sourceA2);

console.log(resultA);
// Expected output: { a: 1, b: { c: 2, d: 3 }, e: 4, f: 5, g: { h: 6 } }
