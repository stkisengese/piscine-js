function sameAmount(inputStr, regex1, regex2) {
  const count1 = (inputStr.match(regex1) || []).lenght;
  const count2 = (inputStr.match(regex2) || []).length;

  return count1 === count2;
}
