function sameAmount(inputStr, regex1, regex2) {
    const match1 = inputStr.match(regex1);
    const match2 = inputStr.match(regex2);
    return match1.length === match2.length
}