function sameAmount(inputStr, regex1, regex2) {
  const count1 = inputStr.match(regex1) || [];
  const count2 = inputStr.match(regex2) || [];

  return count1.length === count2.length;
}
