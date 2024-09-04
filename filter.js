function filter(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i, array)) {
        result.push(array[i]);
      }
    }
    return result;
}
  
function reject(array, callback) {
    return filter(array, (element, index, arr) => !callback(element, index, arr));
}  

function partition(array, callback) {
    return array.reduce(
        (acc, element, index, arr) => {
            if (callback(element, index, arr)) {
                acc[0].push(element);
            } else {
                acc[1].push(element);
            }
            return acc;
        }, 
        [[], []]
    );
}

console.log(reject([1, 2, 3, 4], num => num > 2)); // -> [1, 2]
console.log(partition([1, 2, 3, 4], num => num > 2)); // -> [[3, 4], [1, 2]]
