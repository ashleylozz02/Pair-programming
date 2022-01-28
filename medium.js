///Medium(1)

// Medium(1)
// Medium(1)
/*const vowelChecker = (x) => [“a”, “e”, “i”, “o”, “u”].includes(x)
if(vowelChecker) {
  console.log(‘This is a vowel’)
}
else {
  console.log(‘This not vowel’)
};
console.log(vowelChecker(“s”));
/*
let input = prompt("Enter a letter");
*/

vowelCheck(input);
function vowelCheck(input) {
  if (
    input == "a" ||
    input == "e" ||
    input == "i" ||
    input == "o" ||
    input == "u"
  ) {
    console.log("This is a vowel");
  } else {
    console.log("This is not a vowel");
  }
}
