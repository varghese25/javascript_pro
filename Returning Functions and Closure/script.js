let a = 100; // globale variable
function func1() {
  let a, b; // Local vairable which is inside the fuction
  console.log("a is " + a);
}
func1(); // a is 100

a = 200;
func1(); // a is 200 // a is globale variable updated reuslt is 200 printed in console

// function returing function - higher order function
// lexical scoping - inner function has access to the outer function

function outterFuction(name) {
  let outterVariable = "bread";

  // nested function
  function innerFunction() {
    let innerVariable = "butter";
    console.log("innerVariable is " + innerVariable);
    console.log("outterVariable is " + outterVariable);
    console.log("a is " + a); // parent function has access to the global variable
    console.log("hello", name); // outter Variable binded available it called closure
  }
  // call the inner function in between the {}
  //  innerFunction()
  return innerFunction;
}
// call the outter function Outside the {}
// outterFuction() // innerVariable is butter // outterVariable is bread

let call1 = outterFuction("varghese");
call1(); // a is 200 // innerVariable is butter // outterVariable is bread
let call2 = outterFuction("shannon");
call2();
call1();

// closure - bind the result in innerFunction and return the result when the outterFunction is called

// Example 2 Closure will remember the value of the variable x is 5 which will add to y when inner fuction called

function makeAdder(x) { // x is the 5
  return function (y) {
    return x + y;
  };
}

let add5 = makeAdder(5); // x is 5 whihc is passed to makeAdder function and stored in x and return the inner function 
console.log(add5(10)); // 15 // 5+10 , add5 is a function

let add100 = makeAdder(100); // add100 is a function
console.log(add100(20));
console.log(add100(45));    
console.log(add5(22));

// makeAdder(x) Runned and completed even  inner function x value is binned stored  is called closure
console.log('makeAdder(x) Runned and completed even  inner function x value is binned stored  is called closure')