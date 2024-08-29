function get(src, path) {
  const keys = path.split(".");
  let result = src;
  for (let key of keys) {
    if (result == null) return undefined;
    result = result[key];
  }
  return result;
}

const src = { nested: { key: "peekaboo" } };
const path = "nested.ke";
console.log(get(src, path)); // -> 'peekaboo'
