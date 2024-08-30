function sameAmount(inputStr, regex1, regex2) {
  const r1 = new RegExp(regex1, "g");
  const r2 = new RegExp(regex2, "g");

  const count1 = (inputStr.match(r1) || []).length;
  const count2 = (inputStr.match(r2) || []).length;

  return count1 === count2;
}
