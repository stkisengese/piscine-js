// strings with atleast 5 characters
const longWords = (arrStr) => {
    return arrStr.every(element => typeof element === 'string' && element.length >= 5);
  };
  
// atleast 1 element 10 plus characters string
const oneLongWord = (arrStr) => {
    return arrStr.some(element => typeof element === 'string' && element.length >= 10);
  };
  
 // no element is a string with 7 characters 
const noLongWords = (arrStr) => {
    return arrStr.every(element => typeof element !== 'string' || element.length < 7);
  };
  