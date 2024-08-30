function getURL(dataSet) {
    // Regular expression to match URLs
    const urlPattern = /https?:\/\/[^\s]+/g;
    const urls = dataSet.match(urlPattern) || [];
    return urls;
  }
  
  function greedyQuery(dataSet) {
    // Regular expression to match URLs with at least 3 query parameters
    const urlPattern = /https?:\/\/[^\s?]+\?[^&]+(&[^&]+){2,}/g;
    const urls = dataSet.match(urlPattern) || [];
    return urls;
  }
  
  function notSoGreedy(dataSet) {
    // Regular expression to match URLs with at least 2 but not more than 3 query parameters
    const urlPattern = /https?:\/\/[^\s?]+\?[^&]+(&[^&]+){1,2}/g;
    const urls = dataSet.match(urlPattern) || [];
    
    // Further filtering out the URLs with more than 3 parameters
    const filteredUrls = urls.filter(url => (url.match(/&/g) || []).length <= 2);
    
    return filteredUrls;
  }

// const dataSet =
//   "qqq http:// qqqq q qqqqq https://something.com/hello qqqqqqq qhttp://example.com/hello?you=something&something=you";
// console.log("All URLs:", getURL(dataSet));
// console.log("Greedy URLs:", greedyQuery(dataSet));
// console.log("Not So Greedy URLs:", notSoGreedy(dataSet));
