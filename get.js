function get(src, path) {
  const keys = path.split(".");
  let result = src;
  for (const key of keys) {
    if (result === undefined || !result.hasOwnProperty(key)) {
      return undefined;
    }
    result = result[key];
    if (typeof result === "function") {
      result = result();
    }
  }
  return result;
}

const src = { nested: { key: "peekaboo" } };
const path = "nested.ke";
console.log(get(src, path)); // -> 'peekaboo'
