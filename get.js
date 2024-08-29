function get(src, path) {
  const keys = path.split(".");
  let result = src;
  keys.forEach((key) => {
    result = result[key];
  });
  return result;
}

const src = { nested: { key: "peekaboo" } };
const path = "nested.key";
console.log(get(src, path)); // -> 'peekaboo'
