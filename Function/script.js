//  Functions - Performs specific task
//           Can be called multiple times
//           optionally takes input as
//           parameter and optionally returns value

// Function Declaration
function isPostive(num) {
  // function name is isPostive. () is parameter , num is argument
  return num > 0;
}
console.log(isPostive(-4)); // Argument. Which passed from parameter is Argument (-4)

// 1. Argument & return is Optionl Example Not it might vary to sceanrio

function varghese() {
  // inside parameter i dint not give any argument
  console.log("Developer");
  // i have not give return value
}
varghese(); // just called varghese function

// 2. Example
function findProduct(a, b) {
  // Function name findProduct & Declaration . // () Parameter . a, b Argument
  return a * b; // returns function outPut
}

console.log(findProduct(5, 5)); // function Input is 5,5
console.log(findProduct); //function name Act as Variable in console in Whole function stored which is below 2.Example
// ƒ findProduct(a, b) {
// // Function name findProduct & Declaration . // () Parameter . a, b Argument
// return a * b; // returns function outPut
// }

console.log(typeof findProduct); // Console it says as Function

// hoisting
// JavaScript Interpeter moves evething upWord Input writen ahead of declaration.
// Dont worry about Order Of the code . Any type we can define & we can call the function

console.log("Hositing", findProductNew(6, 6)); // hositig , input first

function findProductNew(a, b) {
  // function delecation
  return a * b; //outPut
}

// Default parameter

function greet(name = "there") {
  //  senarion 3 , wann avoid undifined add default paramenter 'there'. Remove there to check for senario 2
  console.log("hi", name);
}
greet("tiju"); // scenarion 1 OutPut is hi tiju
greet(); // senario 2 is OutPut is hi undefined
greet("benia"); // senarion 3

// recursion - Function calling itself
// factorial https://www.youtube.com/watch?v=6f_xknepG8Q&list=PLYM2_EX_xVvWA3nMtsoLclwDtVS_rLk6O&index=14

// 5! = 5 * 4 * 3 * 2 * 1 = 120

// function delcaration
function factorial(n) {
  if (n == 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(5));



// function expression ,
// assigned to a variable as object

let a = 100;
// console.log(isEven(5)); // script.js:78  Uncaught ReferenceError: Cannot access 'isEven' before initialization.
// // Note Hositing is not possible in function expression . Possible in function declaration
let isEven = function (num) {
  return num % 2 === 0;
}
console.log(isEven(5)); // false
console.log(isEven); // function is stored in isEven variable



let arr = [2,3,5,6,10]; // value of array is 26
let findSum = function (arr) {
let sum = 0
for (let value of arr) {
  sum += value;
}
return sum;
}
console.log(findSum(arr)); // 26



// Arrow Function


// let  volume = function (l, b, h) {
//   return l * b * h;
// }
// console.log(volume(2,3,4)); // 24


  // Arrow Function 
let volume = (l,b,h) => l * b * h;
console.log(volume(5,5,5)); // 125

//Arrow Function  findsum of numbers
let findSumeNew = (arr) => {
  let sum = 0;
for (let value of arr) {
  sum += value;
}
return sum;
}
console.log(findSumeNew(arr));

// area of circle
let area = (r) => Math.PI * r * r;
console.log(area(5)); // 78.54



console.clear(); //  clear console

// variable arguments - Rest parameter
// ...args - rest parameter

let prod = function (...args) {
  let result = 1;
  for (let value of args) {
    result *= value
  }
  return result;
}
console.log(prod(7,6,5,4));//840



let prod2 = function (...args) {
  let result = 1;
  for (let i = 0; i < args.length; i++) {
    result *= args[i];
  }
  return result;
}
console.log(prod2(7,6,5,4)) //840


// Generator - generate value one at a time

function* generate() {
  let index = 1
  while (true) {
    yield index ++; // yield is used to return value (yield keyword Used for generator)
  }
}
const gen = generate(); // generator function is stored in gen variable
console.log(gen.next().value); //1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().value); //4






