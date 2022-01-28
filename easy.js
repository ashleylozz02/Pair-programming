//Pair programming//
///easy///
///Write a JavaScript function that takes in a random array and outputs two new arrays of odd numbers and even numbers.////
/*function(){
    return ;
}

let input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let ouputevenNum = [2, 4, 6, 8, 10];
let ouputoddnum = [1, 3, 5, 7, 9, 10];
console.log();

function isEven(n) {
   return n % 2 == 0;
}

function isOdd(n) {
   return Math.abs(n % 2) == 1;
}
 for(let i = 0; <  i input.length; i=1) 
*/
/*let evennum =() => {
   const array = [2,3,4,5,6,78,88];
   for ( i = 0; i < arr.length; i++)
   */
///let getEvenNumbers = () => {
///const arr = [1, 2, 3, 4, 5, 6];

///for (num of arr) {
///if (num % 2 === 0) {
/// }
/// }
///};

//getEvenNumbers();//
////console.log(getEvenNumbers());

let input = [1, 4, 6, 7, 24, 27, 11, 97];

const oddNum = input.filter((number) => {
  return number % 2 !== 0;
});

let evenNum = input.filter((number) => {
  return number % 2 !== 1;
});

console.log(oddNum);
console.log(evenNum);

const arraySplitter = (inputArray) => {
  const evenArray = [];
  const oddArray = [];
  for (i = 0; i < inputArray.length; i++) {
    if (inputArray[i] % 2 === 0) {
      evenArray.push(inputArray[i]);
    }

    if (inputArray[i] % 2 !== 0) {
      oddArray.push(inputArray[i]);
    }
  }
  console.log(`Even array: ${evenArray}`);
  console.log(`Odd array:  ${oddArray}`);
};

/*const evenAndOdds = (input)=>{
  let even = [];
  let odd = [];
  for (let i=0; i<input.length;i++){
    if(input[i] % 2 !==0){
   odd.push(input[i])
    if (inputArray[i] % 2 === 0) {
      even.push(inputArray[i]);
    }
  }
}
}*/
// using for loop for easy 1 //

const arraySplitter = (inputArray) => {
  const evenArray = [];
  const oddArray = [];
  for (i = 0; i < inputArray.length; i++) {
    if (inputArray[i] % 2 === 0) {
      evenArray.push(inputArray[i]);
    }

    if (inputArray[i] % 2 !== 0) {
      oddArray.push(inputArray[i]);
    }
  }
  console.log(`Even array: ${evenArray}`);
  console.log(`Odd array:  ${oddArray}`);
};
//Easy 1//
let input = [1, 4, 6, 7, 24, 27, 11, 97];
let oddNum = input.filter((number) => {
  return number % 2 !== 0;
});

let evenNum = input.filter((number) => {
  return number % 2 !== 1;
});

console.log(oddNum);
console.log(evenNum);
