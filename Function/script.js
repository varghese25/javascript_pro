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


console.log('Hositing',findProductNew(6,6)); // hositig , input first 

function findProductNew(a, b){ // function delecation
return a * b; //outPut
}
    



// Default parameter

function greet(name='there') {//  senarion 3 , wann avoid undifined add default paramenter 'there'. Remove there to check for senario 2 
  console.log("hi", name);
}
greet('tiju') // scenarion 1 OutPut is hi tiju
greet() // senario 2 is OutPut is hi undefined
greet('benia') // senarion 3 




// recursion - Function calling itself
// factorial https://www.youtube.com/watch?v=6f_xknepG8Q&list=PLYM2_EX_xVvWA3nMtsoLclwDtVS_rLk6O&index=14

