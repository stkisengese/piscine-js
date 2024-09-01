function getURL(dataSet) {
  const urlPattern = /https?:\/\/[^\s]+/g;
  return dataSet.match(urlPattern) || [];
}

// greedyQuery//returns URLs from the dataSet, with at least 3 query parameters.
function greedyQuery(dataSet) {
  const greedyPattern =
    /(https?:\/\/[^\s]+\?(?:[^&\s]+&){2,}[^&\s]+)/g;
  return dataSet.match(greedyPattern) || [];
}

//notSoGreedy: returns URLs from the dataSet, with at least 2, but not more then 3 query parameters.
function notSoGreedy(dataSet) {
  const notSoGreedyRegex = 
    /(https?:\/\/[^\s]+\?(?:[^&\s]+&){2,}[^&\s]+)/g;
  return dataSet.match(notSoGreedyRegex) || [];
}

// Example usage:
const dataSet = `qqq http:// qqqq q qqqqq https://something.com/hello qqqqqqq qhttp://example.com/hello?you=something&something=you
http://hummm/how?how=come&same=[123,21]&you=nextperso
http://www.example.com/mypage.html?crcat=test&crsource=test&crkw=buy-a-loteasy
http://example.com/path?name=Branch&products=[Journeys,Email,Universal%20Ads]interact
https://192.168.1.123?something=nothing&pro=[23]
https://www.notherExample.com/catalog.asp?itemid=232&template=fresh&crcat=pp
http://www.example.com/catalog.asp?itemid=232&template=fresh&crcat=pp`;


console.log("All URLs:", getURL(dataSet));
console.log("URLs with at least 3 query parameters:", greedyQuery(dataSet));
console.log("URLs with 2 or 3 query parameters:", notSoGreedy(dataSet));
