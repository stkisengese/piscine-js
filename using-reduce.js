
const adder = (numbers) => {
    let initialValue = 0
    return numbers.reduce((sum, num) => sum + num, initialValue);
  };
  
const sumOrMul = (numbers, initialValue = 1) => {
    return numbers.reduce((result, num) => {
      return num % 2 === 0 ? result * num : result + num;
    }, initialValue);
  };
  

const funcExec = (functions, initialValue) => {
    return functions.reduce((result, func) => func(result), initialValue);
  };
  
console.log(sumOrMul([1, 2, 3, 5, 8], 5)); // 160