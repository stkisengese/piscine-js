const arrToSet = (arr) => new Set(arr);
const arrToStr = (arr) => arr.join("");
const setToArr = (set) => Array.from(set);
const setToStr = (set) => Array.from(set).join("");
const strToArr = (str) => str.split("");
const strToSet = (str) => new Set(str);
const mapToObj = (map) => Object.fromEntries(map);
const objToArr = (obj) => Object.values(obj);
const objToMap = (obj) => new Map(Object.entries(obj));
const arrToObj = (arr) => Object.assign({}, arr);
const strToObj = (str) => Object.assign({}, str);

function superTypeOf(value) {
  if (value === null) return "null";
  if (value === undefined) return "undefined";
  if (value instanceof Set) return "Set";
  if (value instanceof Map) return "Map";
  if (Array.isArray(value)) return "Array";
  if (typeof value === "function") return "Function";
  if (typeof value === "object") return "Object";

  const type = typeof value; // Capitalize primitive types
  return type.charAt(0).toUpperCase() + type.slice(1);
}

// Examples:
const str = "hello";
const arr = [1, 2, 1, 3];
const obj = { x: 45, y: 75, radius: 24 };
const set = new Set();
const map = new Map();
set.add(1);
set.add(2);
set.add(1);
set.add(3);
map.set("a", 1);
map.set("b", 2);
map.set(3, "c");
map.set(4, "d");

console.log(arrToSet(arr)); // -> Set { 1, 2, 3 }
console.log(arrToStr(arr)); // -> '1213'
console.log(setToArr(set)); // -> [1, 2, 3]
console.log(setToStr(set)); // -> '123'
console.log(strToArr(str)); // -> ['h', 'e', 'l', 'l', 'o']
console.log(strToSet(str)); // -> Set { 'h', 'e', 'l', 'o' }
console.log(mapToObj(map)); // -> { a: 1, b: 2, '3': 'c', '4': 'd' }
console.log(objToArr(obj)); // -> [45, 75, 24]
console.log(objToMap(obj)); // -> Map { 'x' => 45, 'y' => 75, 'radius' => 24 }
console.log(arrToObj(arr)); // -> { '0': 1, '1': 2, '2': 1, '3': 3 }
console.log(strToObj(str)); // -> { '0': 'h', '1': 'e', '2': 'l', '3': 'l', '4': 'o' }

console.log(superTypeOf(map)); // -> 'Map'
console.log(superTypeOf(set)); // -> 'Set'
console.log(superTypeOf(obj)); // -> 'Object'
console.log(superTypeOf(str)); // -> 'String'
console.log(superTypeOf(666)); // -> 'Number'
console.log(superTypeOf(NaN)); // -> 'Number'
console.log(superTypeOf(arr)); // -> 'Array'2
console.log(superTypeOf(null)); // -> 'null' 1
console.log(superTypeOf(undefined)); // -> 'undefined'
console.log(superTypeOf(superTypeOf)); // -> 'Function'
