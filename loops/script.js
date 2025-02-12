// for loop
for (let i = 1; i <= 5; i++) {
  console.log("Hello World");
}

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Experiment Loop Say till 6 it try it Six is greater than so Loop exited
let i;
for (i = 1; i <= 5; i++) {
  console.log(i);
}
console.log("OutSide Loop", i);

//ReVerse Order 10 to 1
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// While Loop: fails if condition is not true it stop immeadity
// Do while : Execute once before it fails

// while loop Condition Fails it wont work
i = 10; // conditon is i=10. If give i=0 Conditon failed  // out Put Show's outside loop//
while (i >= 1) {
  console.log("while Loop", i);
  i--;
}
console.log("OutSide Loop", i); // End's in 0

// do while , At least once it will Execute.  Condition Fails still it works
i = 10; // Condition i=0 it will execute as Zero. then it will goes while loop // OutPut is Zero
do {
  console.log("do While", i);
  i--;
} while (i >= 1);
console.log("OutSide Loop", i);



// break - stops loop

//isNaN('a') true ,IsNaN means is Not a Number
//isNaN(1) false , Because it number

while (true) {
  let num = Number(prompt("Enter the Number"));
  if (!isNaN(num)) break;
}

