/////let primeNum = (num) => {
///for (let i = 2; i < num; i++) if (num % i === 0) return false;
/// return num > 1;
//};
///console.log(num);

/*function primeNum (Number){
  if (number <= 1) {
      return false;
  } else{
      for (let i =2; i<number; i++){
          if (Number % i == 0 ){
             return false; 
          }
      }
  }
}
*/

/*let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 103];
const prime = numbers.filter(primePrint);

console.log(prime);

function primePrint(numbers) {
  for (let i = 2; numbers> i; i++) {
    if (numbers % i == 0) {
      return false;
    }
  }
  return numArray;
}
*/
///const isPrime = (num) => {
//for (let i = 2; i < num; i++) {
//if (num % i === 0) {
// return false;
// }
//}
//// return num !== 1;
//};
console.log(isPrime(5));
let arr = [1, 5, 17, 15, 30];

let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let primeArray = [];
function isPrime(number = []) {
  for (let i = 0; i < number.length; i++) {
    if (number[i] === 2 && number[i] != 1) {
      primeArray.push(number[i]);
      console.log("This is a prime number");
      console.log(number[i]);
    } else if (number[i] % 2 != 0 && number[i] != 1) {
      primeArray.push(number[i]);
      console.log("This is a prime number");
      console.log(number[i]);
    } else {
      console.log("This is not a prime number");
      console.log(number[i]);
    }
  }
}

isPrime(numArray);
console.log("\n");

console.log("Prime Array");
console.log(primeArray);
