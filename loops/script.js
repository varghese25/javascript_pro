console.log("Heading: For Loop");
// for loop
for (let i = 1; i <= 5; i++) {
  console.log("Hello World"); // Print 5 times in round shapes it shows 5
}

console.log("For Loop Ex Two");
for (let i = 1; i <= 5; i++) {
  console.log("iteration", i);
}

console.log("Heading: Experirement");
// Experiment Loop Say till 6 it try it Six is greater than so Loop exited
let i;
for (i = 1; i <= 5; i++) {
  console.log(i);
}
console.log("OutSide Loop", i);

console.log("Heading: Reverse Order");
//ReVerse Order 10 to 1
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

console.log("Heading: While Loop");
// While Loop: fails if condition is not true it stop immeadity
// Do while : Execute once before it fails

// while loop Condition Fails it wont work
i = 10; // conditon is i=10. If give i=0 Conditon failed  // out Put Show's outside loop//
while (i >= 1) {
  console.log("while Loop", i);
  i--;
}
console.log("OutSide Loop", i); // End's in 0

console.log("Heading: Do While Loop");
// do while , At least once it will Execute.  Condition Fails still it works
i = 10; // Condition i=0 it will execute as Zero. then it will goes while loop // OutPut is Zero
do {
  console.log("do While", i);
  i--;
} while (i >= 1);
console.log("OutSide Loop", i);

console.log("Heading: Break - Stops Loop");
// break - stops loop

//isNaN('a') true ,IsNaN means is Not a Number
//isNaN(1) false , Because it number

// while (true) {
//   let num = Number(prompt("Enter the Number"));
//   if (!isNaN(num)) break;
// }

console.log(
  "Heading: Continue - Skips the current iteration 3,6,9 used Moudlo divisible by 3"
);
// Continue - Skips the current iteration
for (i = 1; i <= 10; i++) {
  if (i % 3 == 0) continue; // 3 % 3 =0 , 6 %3 =0 , 9 % 3 = 0; OutPut 1,2,4,5,7,8,10
  console.log(i);
}




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
