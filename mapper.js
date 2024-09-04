function map(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i], i, arr));
    }
    return result;
  }
  
  function flatMap(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      const mappedValue = callback(arr[i], i, arr);
      if (Array.isArray(mappedValue)) {
        for (let j = 0; j < mappedValue.length; j++) {
          result.push(mappedValue[j]);
        }
      } else {
        result.push(mappedValue);
      }
    }
    return result;
  }