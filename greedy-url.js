// returns all URLs present in the dataSet
function getURL(dataSet) {
  //const urlPattern = /(https?:\/\/)[^\s\/$.?#].[^\s]*\.[^\s]{2,}(?:\/[^\s]*)?(\?[^\s]{2,})?(?:\#[^\s]*)?/g;
  const urlPattern = /https?:\/\/[^\s]+/g;
  return dataSet.match(urlPattern) || [];
}

// greedyQuery//returns URLs from the dataSet, with at least 3 query parameters.
function greedyQuery(dataSet) {
  const greedyPattern = /(https?:\/\/[\w.]+\/?[\w-.~:/?#[\]@!$&'()*+,;=]+)\?(.+?)(?=&|=|$)/g;
  return dataSet.match(greedyPattern) || [];
}

//notSoGreedy: returns URLs from the dataSet, with at least 2, but not more then 3 query parameters.
function notSoGreedy(dataSet) {
  //const notSoGreedyPattern = /(https?:\/\/)[^\s\/$.?#].[^\s]*\.[^\s]{2,}(?:\/[^\s]*)?(\?[^\s]{2,})?(?:\#[^\s]*)?/g;
  const notSoGreedyPattern =
    /https?:\/\/[^\s]+\?([^&=]+=[^&=]+&){1,2}[^&=]+=[^&=]+/g;
  return dataSet.match(notSoGreedyPattern) || [];
}

// const dataSet =
//   "qqq http:// qqqq q qqqqq https://something.com/hello qqqqqqq qhttp://example.com/hello?you=something&something=you";
// console.log("All URLs:", getURL(dataSet));
// console.log("Greedy URLs:", greedyQuery(dataSet));
// console.log("Not So Greedy URLs:", notSoGreedy(dataSet));
