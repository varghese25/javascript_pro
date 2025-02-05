

// if else - conditional Statements
let pwd_correct = false;

if (pwd_correct) {
    console.log("You are logged in");
}

else {
    console.log("Incorrect password");
}

console.log("bye")


// comparison operators: ==, ===, !=, !==, >, <, >=, <=
// logical operators: &&, ||, !

age = 17;
// voter_id = false;
voter_id = true;


if (age >= 18 && voter_id === true) {
    console.log("You are eligible to vote");
}
else {
    console.log("You are not eligible to vote");
}
console.log("bye")


// max of two numbers
let a = 10;
let b = 20;
let MAX;

// if (a > b) {
//     MAX = a;
// }
// else {
//     MAX = b;
// }


// ternary operator Alertnative to if else
MAX = a>b ? a:b; /*condition ? expr1 : expr2. Explation if condition is true, expr1 is executed, else expr2 is executed. 
// ? : is operator it used two operand and one condition  true what it should and False */

console.log("MAX: " + MAX);


