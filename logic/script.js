/* External Script linked with <script src="/logic/script.js"></script>*/ 
 
 
 // console.log("Happy Learning 2025!");//alert box is statement
        // alert("Happy Learning 2025!"); //alert box is statement

        //variables
        // let score = 0; // initialize the variable
        // score = 100; // assignment
        // // console.log(score); // print the value of the variable in the console is 10;
        // console.log("score is " + score); // print the value of the variable in the console is 10 "score is " inside the double quotes is string;
        
      
      // //Exercise 1
      //   let amount = 1000;
      // console.log("Your bill amout is Rs." + amount);

    // const pi = 3.14; // constant variable cannot be changed 
    // pi = 3 


    // Day 3
    // // USER Input
    // let name = prompt("Enter your name..?"); // prompt is a function that takes input from the user
    // console.log("Hello" , name); // concatenation can be done using comma(,).

    // let ticket = prompt("How manu tickets do you want..?"); // data stored in the variable ticket 
    // console.log("You want pay",Number(ticket)*20 ); // Number() is a function that converts string to number

    // let a = prompt("Enter a number..?");
    // console.log(Number(a)+10);
    //----------------------------------------------------------------

    // Day 5

    // let st1 = "Hello Welcom to the world of JavaScript "; // string index starts from 0.
    // let st2 = "Learning JavaScript is fun";// string index starts from 0.

    //Google Console st1.concat(st2)  .concat means dot means invoking a function;
    //Google Console st1 + st2;
   
/* Partioning String
Slice(start, end)
substring(start, end)
substr(start, length)


let st2 = " Learning JavaScript is fun";
st2.slice(4,10) // ouput: ring. index starts from 0. which calculates spaces also
st2.slice(4) //  ouput : rning JavaScript is fun"

Negative index
st2.slice(-4) // ouput : " fun"


substring(start, end)
st2.substring(4) // output: 'rning JavaScript is fun'


substr(start, length)
let st1 = "Hello Welcom to the world of JavaScript"; 
st1.substr(4,10) // output: "o Welcom t"


replcace();
st1.replace('Welcom','Welcome')
output: 'Hello Welcome to the world of JavaScript'


replcaceall()
st1.replaceall('Welcom','Welcome')

st1.toUpperCase()
'HELLO WELCOM TO THE WORLD OF JAVASCRIPT'

st1.toLowerCase()
'hello welcom to the world of javascript'


st1.length // is property not a function
39

st1.trim() // removes the spaces from the start and end of the string
'   Hello Welcom to the world of JavaScript '

str1.trimstart() // removes the spaces from the start of the string
str1.trimend() // removes the spaces from the end of the string


Console Output
> let bill = 'Rs 10' 
<. undefined
> bill.length
<.5
> bill.padEnd(7,'0')
<.'Rs.1000'




Accessing the characters of a string
 let st1 = "Hello Welcom to the world of JavaScript ";
st1[1] // output: 'e'


st1.charAt(1) // output: 'e' ; same output as above


unicode of character e
st1.charCodeAt(1) // output: 101


indexOf('e')
st1.indexOf('e') // output: 1

lastIndexOf('t')
st1.lastIndexOf('t') // output: 38;


st1.lastIndexOf('q') // output: -1; if the character is not found in the string then it returns -1

search ('JavaScript') word in the string
 "Hello Welcom to the world of JavaScript ";

 st1.search('JavaScript') // 29 position


 search ('tiju') word in the string

  st1.search('tiju') // -1; if the word is not found in the string then it returns -1



  includes('JavaScript') word in the string (True or False)

  st1.includes('JavaScript') // true; if the word is found in the string then it returns true.


  st1.includes('tiju') // false; if the word is not found in the string then it returns false.



 stratsWit,endsWith  word in the string (True or False)
  st1.stratsWith('Hello') // true; if the string starts with the word then it returns true.
  st1.endsWith('JavaScript') // true; if the string ends with the word then it returns true.

  st1.stratsWith('tiju') // false; if the string does not start with the word then it returns false.
  st.endsWith('tiju') // false; if the string does not end with the word then it returns false. 



 */ 
// let name = "Tiju";

// ----------------------------------------------------------------------------------------
// Day 6 Template Literals (backticks belwo esc key ``)

// let firstName = "Varghese ";
// let lastName = "Baby";
// let city = "Kitchener";

// console.log(firstName + lastName + " Lives in " + city); // concatenation

// backticks `` Two ways we can use template literals
// let msg = `${firstName} ${lastName}${city}`;  // template literals 


// console.log(`${firstName} ${lastName} lives in ${city}`); // Sting interpolation

//multiline string Using backticks
// let msg = `hello Varghese Baby how are you`
// console.log(msg);

//  single and double quotes in the string using backticks

// let msg = `my name is 'Tiju' and I am a "Developer"`;
// console.log(msg);

// Exercise 1 bactick and template literals
let itemCount = 5;
let total =  95; 
let msg = (`You have ${itemCount} items in your cart. Your bill amount is $${total}`); 
console.log(msg);

// ----------------------------------------------------------------------------------------