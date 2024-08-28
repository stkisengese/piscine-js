/*The reverse() method of Array instances reverses an array in place and returns the reference 
to the same array, the first array element now becoming the last, and the last array element becoming 
the first. In other words, elements order in the array will be turned towards the direction opposite 
to that previously stated.
*/

function reverse(input) {
    const end = input.length-1
    if (end < 0) end += input.length;
  
    let result = input instanceof Array ? [] : "";
    for (let i = end; i >= 0; i--) {
      result = input instanceof Array ? [...result, input[i]] : result + input[i];
    }
    return result;
  }

  const array1 = ['one', 'two', 'three'];
console.log('array1:', array1);
// Expected output: "array1:" Array ["one", "two", "three"]

const reversed = reverse(array1);
console.log('reversed:', reversed);
// Expected output: "reversed:" Array ["three", "two", "one"]

const array2 = [1, 2, 3, 4, 5];
console.log('array2:', reverse(array2));
console.log('string:', reverse("sentence"));

