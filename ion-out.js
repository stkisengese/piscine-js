function ionOut(inputStr) {
   // const regex = /\b\w*tion\b/g;
    const regex = /\b\w*(?<=t)ion\b/g;
    const matches = inputStr.match(regex) || [];

    return matches.map(match => match.replace('ion', ''));
}

console.log(ionOut("The nation is in motion with a notion of action.")); // ["nat", "mot", "not", "act"]
console.log(ionOut("This funtcion should return an array.")); // []