## JavaScript

## 04-03-2025

Promise:A Promise is in one of these states: (Promise Code Folder)

- pending: initial state, neither fulfilled nor rejected.
- fulfilled: meaning that the operation was completed successfully.
- Rejected: meaning that the operation failed.

## 24-02-2025

Memory Allocation in JS | Stack and Heap Storage |

- Primitive type has Seperate memory location
- Reference Type, memory location point same loction.

## Primitive DataTypes

- String
- Number
- bigint
- Boolean
- undefined
- symbol
- null
- let a =100; // Primitive data type, number 100 will be stored STACK MEMORY
- a =200 // 100 will be replaced by 200 in STACK MEMORY
  // Similiar for string, boolean, null, undefined, symbol, bigint

## Reference Type

- Arrays
- Functions
- All Object - math,date
- Will be Stored in HEAP MEMORY

## 19-02-2025

## // Method aslo a function but it is invoked with the dot.

arrFamily = ["Varghese", "Serah", "Evan", "Shannon"]; // object
arrFamily.forEach(familylist); // we invoked arrFamily object wiht the dot is caled Method. called here the function familylist

function familylist(namelist) { // familylist is function and namelist is argumet.
console.log(namelist);
}

<!--
Uncaught TypeError: Cannot set properties of null (setting 'innerHTML') .
Because in index.html file. include this (<script src="script.js"></script>)  line below. Error will go.. akka didn't mentioned in her tutorial...

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Call Back</title>
  </head>
  <body>
    <h1></h1>
  </body>
</html>
<script src="script.js"></script> // include this line-->

## InterView Question 14-02-2025

true = 1
false = 0

console.log(true+true+true\*5)

true 1 \* 5 = 5
true 1 + 1 true = 2

outPut is console.log(7)

## hoisting

- JavaScript Interpeter moves evething upWord Input writen ahead of declaration.
- Dont worry about Order Of the code . Any type we can define & we can call the function any where

- Example
  console.log('Hositing',findProductNew(6,6)); // hositig , input first

function findProductNew(a, b){ // function delecation or called as defination
return a \* b; //outPut
}

---

https://edabit.com/challenges/javascript

## Loop - for ..of / for ..in only in JavaScript.

console.log("Heading: for ...of loop");
// for ...of

let tijuArray = ['evan','shannon','serah','varghese'] // tijuArry is variable where name stored
for(i=0; i<tijuArray.length; i++) // arrary length is 4
console.log(tijuArray[i].toUpperCase()) // i list nameArray names in upperCase

console.log("Heading Example: for ...of loop");
for(let nameList of tijuArray) // nameList variable where list of name stored
console.log(nameList)

    console.log("Heading Example: for ...in loop");

    // for ..in


    // object
    item={
      name:'phone',
      Quantity:'1',
      price:25000
    }

for(let tiju in item) // tiju is variable object item stored
console.log(item[tiju]) // to access item give [tiju]

<---------------------------------------------------------------------------------------------------->

## 11-02-2025

- JavaScript is the Programming Language for the Web.

- JavaScript can update and change both HTML and CSS.

- JavaScript can calculate, manipulate and validate data.

ECMAScript 5 stands for "ECMA Script Version 5", where ECMA refers to the European Computer Manufacturers Association. ECMAScript is the standardized scripting language specification on which JavaScript is based.

<------------------------------------------------------------------------------------------------->

-- https://www.codechef.com/learn/course/java/DEBUGJBEG/problems/DEBUGJP11?tab=statement

- Object :
  Properties & Methods

- Exp Computer: "Properties" are Make,color,ScreenSize,RAM
  "Methods" : Things it can do like browse,buildPorjects,Play,Games,Watchmovies

             ## Object / method / Function

item ={ Object
name: 'Google phone',
quantity: 1,
price: 50000,

    buy: function() { method
        console.log('item add to cart')
    }

}
item.buy() function buy is called Method because its inside the item (Object) . Using Object Invoked method.

if buy function writen outSide (object) is called function
buy: function() { Function
console.log('item add to cart')
}

}

- JavaScript (JS) is a cross-platform, object-oriented programming language used by developers to make web pages interactive. It allows developers to create dynamically updating content, use animations, pop-up menus, clickable buttons, control multimedia, etc.

# Javascript Topics

## Introduction

- **Duration**: 1
- **Sub Topics**:
  - Variables
  - Data Types

## Operators

- **Duration**: 2
- **Sub Topics**:
  - Arithmetic Operators
  - Assignment Operators
  - Scope

## Function

- **Duration**: 1
- **Sub Topics**:
  - Objects
  - Arrow Functions

## String Methods

- **Methods**:
  - `length()`
  - `slice()`
  - `substring()`
  - `substr()`
  - `replace()`
  - `toLowerCase()` & `toUpperCase()`
  - `concat()`
  - `trim()`
  - `padStart()`
  - `padEnd()`
  - `charAt()`
  - `charCodeAt()`
  - `split()`

## String Search Methods

- **Methods**:
  - `indexOf()`
  - `lastIndexOf()`
  - `search()`
  - `match()`

## Day9 31-01-2025

City Stats

- Major city population , literacyRate, language. Using drop down , Event Listener, fucnction & Switch Case statement
  simple cityStatTool

## Day10 05-02-2025

Cont 7:54 Selected value from dropdown

## Day8 28-01-2025

- FD Rate Calcuator

Condition
Fd rates
<3 months - 5.8 %
3-6 months - 6.5%
7-9 months - 6.8%

> = 10 months - 7%
> get tenure months as input and display the FD rate as output

 <!--Day7 27-01-2025-->

- Array index start from 0
- let marks = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]; Array length is 10

## Example 1 mix of int and string in the array

let mix = [10, "Varghese", 20, "Baby"];  
 console.log(mix);

- Console Out Put below
  (4) array length [10, 'Varghese', 20, 'Baby']
  0 index:10
  1 index: "Varghese"
  2 index: 20
  3 index: "Baby"
  length:4

## Example 2 mix of int and string in the array

- let mix = [10, "Varghese", 20, "Baby", [3,4]]; // Array length is 5
  console.log(mix); // (5) [10, 'Varghese', 20, 'Baby', Array(2)]

- Console Out Put below
  (5) [10, 'Varghese', 20, 'Baby', Array(2)]
  0 index: 10
  1 index: "Varghese"
  2 index: 20
  3 index: "Baby"
  4 index: (2)
  0 index: 3
  1 index: 4
  length:
  2
  length: 5

 <!--Day4 23-01-2025-->

Function perform well defined task
example
Console.log("Hello World");

> Math.sqrt(55) // argument or parameter passed , when we call math.sqrt
> <7.416 // return value

LengthConvert Code we have give function

DOM: Document object model

Document is in tree structure inside every element is called Node.

#Document is root other child

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">  <!-- Elemet is called node-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- Elemet is called node-->
    <link rel="stylesheet" href="/logic/style.css"> <!-- Elemet is called node-->
    <script src="/logic/script.js"></script> <!-- Elemet is called node-->
    <title>Java Script Training</title> <!-- Elemet is called node-->
</head> <!-- Elemet is called node-->
<body> <!-- Elemet is called node-->
    <h1 id="message"></h1> <!-- Elemet is called node-->
    <script> <!-- Elemet is called node-->
       
    // Internal Script

    </script> <!-- Elemet is called node-->

</body> <!-- Elemet is called node-->

</html> <!-- Elemet is called node-->

## JavaScript <!--Day2 21-01-2025-->

JS is dynamically typed language (instant result displayed in Chrome browser -> inspect->console) also function language reason is doesn't need class.

Java & c Statically typed language

<!--Day1 20-01-2025-->

## JavaScript

    - HTML Representing a web page
    HTML = Webpage

JavaScript programming connects the HTML & Programming Laguage
Document Object Model (DOM) connects Webpage to scripts or programming languages

## DOM - Representing HTML with scripting / programming.

- Object - Physical Entity
- Action - Funtion / Methods

## variables = Modeling: sampling means data

Modularity is the idea of breaking a system down into separate parts, or modules, that work independently
HTML - linking css & js  
CSS -
JS -

Document Object Model (DOM) Represents the page so that programs can change the document structure, style, and content

Ex: demoPage.html & demo.js here

## Web Elements Locators: Expertise in this we achive the path in Automation testing like

- Automation Testing Selenium / QTP / UFT / JMeter (Or)
- UI Developer (or)
- Java Developer any one we can achive if we come across web elements locator.

Web Element Locators Real Time Example (https://automationpanda.com/2019/01/15/web-element-locators-for-test-automation/)
Student
Name: Varghese
ID:001
Style: Tall or short
Link: Father is MP
Partial Link: From Canada
XPath(Executable path): lives ontario

Github link: https://github.com/muthu1809/Web-Designing-Materials/blob/main/DOM

## Learning Channel: https://www.youtube.com/watch?v=akCsUTYnHwo&list=PLgWpUXNR_WCf59_d70o2Y-6lRoub-zU8X&index=16
