// split string by spaces
function words(str) {
  return str.split(" ");
}

// join array of strings by spaces
function sentence(arr) {
  return arr.join(" ");
}

// write string to upper case
function yell(str) {
  return str.toUpperCase();
}
// write string to lower case sorrounded by '*'
function whisper(str) {
  return `*${str.toLowerCase()}*`;
  // return "*" + str.toLowerCase + "*";
}

// upper case first letter and lowercase the rest in a string
function capitalize(str) {
  if (str.lenght === 0) return str;
  //return str[0].toUpperCase + str.slice(1).toLowerCase;
  //return str.charAt(0).toUpperCase + str.substring(1).toLowerCase;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
