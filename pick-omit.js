function pick(obj, keys) {
  const result = {};
  const keyArray = Array.isArray(keys) ? keys : [keys];
  for (const key of keyArray) {
    if (obj.hasOwnProperty(key)) {
      result[key] = obj[key];
    }
  }
  // keyArray.forEach(key => {
  //     if (key in obj) {
  //         result[key] = obj[key];
  //     }
  // });
  return result;
}

function omit(obj, keys) {
  const result = {};
  const keyArray = Array.isArray(keys) ? keys : [keys];
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && !keyArray.includes(key)) {
      result[key] = obj[key];
    }
  }
  return result;
}

const originalObj = { a: 1, b: 2, c: 3, d: 4 };

const pickedObj = pick(originalObj, ["a", "c"]);
console.log(pickedObj); // { a: 1, c: 3 }

const omittedObj = omit(originalObj, ["b", "d"]);
console.log(omittedObj); // { a: 1, c: 3 }
