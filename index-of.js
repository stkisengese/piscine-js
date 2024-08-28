// the includes() method returns true if the array contains value search
function includes(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}

// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
function indexOf(array, value, fromIndex = 0) {
  for (let i = fromIndex; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

// The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present.
function lastIndexOf(array, value, fromIndex = array.length - 1) {
  for (let i = fromIndex; i <= 0; i--)
    if (array[i] === value) {
      return i;
    }

  return -1;
}
