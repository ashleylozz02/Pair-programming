//MEDIUM 2
// // Create a function that accepts two strings, then determines whether or not the first string is an anagram of the second string by returning a boolean.
const takeAway = (string) => {
  const punc = [".", "'", "!", ":", ";", " ", ",", "@"];

  for (i = 0; i < punc.length; i++) {
    string = string.replaceAll(punc[i], "");
  }
  return string;
};
const anagramChecker = (a, b) => {
  firstParam = a.toLowerCase().split("").sort().join(""); // im a dot in place
  secondParam = b.toLowerCase().split("").sort().join(""); // a decimal point
  puncRmv1 = takeAway(firstParam);
  puncRmv2 = takeAway(secondParam);
  let result = puncRmv1 === puncRmv2;
  return result;
};
