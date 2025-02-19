console.log("===Call back :  Function is passed as an argument===");

function greetConsole(name) {
  console.log('hello', name);
}
function greetHeading(name) {
  const heading = document.querySelector("h1")
  heading.innerHTML = 'hello ' + name;
}

function greet(callback) { // function argument can be any Anything we can pass
  callback('Varghese tiju');
//   console.log(callback) // we can able to see the function of greet(greetHeading) in console. Not before seeing fuction comment the greet(greetConsole) i can able to see the fucntion in console. if you want to see the fuction commet both 
}

// greet(greetConsole) // Calling the function
greet(greetHeading) // Calling the fuction


// Using Arror Function 
greet (name => { // Arrow function we call the greetHeading function
  const heading = document.querySelector("h1")
  heading.innerHTML = 'hello ' + name;
})

greet( name => {
 console.log("hello", name);
})

console.log("===Call back :  Function is passed as an argument End===");


console.log("============================================================================");



// For Each:  To under the More about call back fucntion
arrFamily = ["Varghese", "Serah", "Evan", "Shannon"]; // object

arrFamily.forEach(familylist); // familyList is callBack fuction.
// we  invoked  arrFamily object wiht the  dot is caled Method. called here the function familylist

function familylist(namelist) {
  // familylist is function and namelist is argumet.
  console.log(namelist.toUpperCase());
}

// arrow function
arrFamily.forEach((namelist) => {
  console.log(namelist.toUpperCase());
});
console.log(arrFamily); // We can see the array list in Console but it is not in uppercase.

// UpperCase the array list
arrFamily.forEach((namelist, index, arrFamily) => {
  // (())
  arrFamily[index] = namelist.toUpperCase();
});
console.log(arrFamily);

console.log(
  "=================Array values in dropdown using foreach===================================="
);

// Select in HTML , Going to add Branch name in the select option using JavaScript

arr = ["CSE", "IT", "MECH", "MBA"];
arr.forEach((val) => { // val is call back function below
  const opt = document.createElement("option"); // option is the tag
  opt.textContent = val; // what should display this  "Select">Select</>
  opt.value = val; // <option value="Select">Select</option> // value is the attribute

  document.getElementById("branch").appendChild(opt); // appendChild is the method
});

// for each collect the value from array and display in the dropdown list