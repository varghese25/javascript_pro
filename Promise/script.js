// The Promise Object represents the eventual completion (or failure) of an asynchrous operation)

// callback function

//Tatkal Book example 1
/*const tatkalBook = new Promise((resolve, reject) => {
  let bookingSuccess = true; // booking true, OutPut "Thanks I will transefer the Amout". False "Thanks for trying! I will book a bus Ticket"
  if (bookingSuccess)
    resolve(900); // add the Amount
  else reject();
});

// Short way to Using callBack Function
tatkalBook
  .then(
    (
      Amount // Amout stored here in call back function
    ) =>
      console.log(
        `Thanks buddy! I have transferred the Amount ${Amount} Rupess`
      )
  ) // template literal displayed output
  .catch(() => console.log("Thanks for trying! I will book a bus Ticket")); */

// On way of Writing

//   .then(success) // resolve function, inOrder aviod confusion .then(sucess) or i can add same function name as resolve
//   .catch(failure);

// function success() {
//   console.log("Thanks I will transefer the Amout");
// }

// function failure() {
//   console.log("Thanks for trying! I will book a bus Ticket");
// }

//-----------------------Tatkal Book example 2

/* function tatkalBook() {
  return new Promise((resolve, reject) => {
    let bookingSuccess = true;
    if (bookingSuccess)
      resolve(900); // add the Amount
    else reject();
  });
}
tatkalBook()
  .then((amt) =>
    console.log(`Thanks buddy! I have transferred the Amount ${amt} Rupees`)
  ) // template literal displayed output
  .catch(() => console.log("Thanks for trying! I will book a bus Ticket")); */

// Coin Toss example

function tossCoin() {
  return new Promise((resolve, reject) => {
    //0-head(success) 1 -tail(failure)
    // rand 0 & 1 stored
    const rand = Math.floor(Math.random() * 2);
    if (rand == 0) resolve();
    else reject();
  });
}

// tossCoin()
// .then(()=>console.log("Congrats!Its head!You won"))
// .catch(()=>console.log("Sorry!You lost!Its"))

let reachA = new Promise((resolve, reject) => {
  const reached = true;
  if (reached) setTimeout(resolve, 3000, "Varghese Reached");
  else reject("varghese not reached");
});

let reachB = new Promise((resolve, reject) => {
  const reached = false; // True to False Console outPut is Serah not reached , Remaining sucess not shown
  if (reached) setTimeout(resolve, 1000, "Serah Reached");
  else reject("Serah not reached");
});

let reachC = new Promise((resolve, reject) => {
  const reached = true;
  if (reached) setTimeout(resolve, 2000, "Evan Reached");
  else reject("Evan not reached");
});

// Static Methods Called Promise.all() Refer: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
// Promise.all() If its reject anyOne it will Rejcet all
// Promise.all execute all if its sucess
// Promise.all wait for all reached A,reached B, reached C if it's in true
// Promise.all if any promise is failed it show that in conolse remaing wont show in serah not reached alone displayed Remaining Reach A, & C not displayed

/* Promise.all([reachA, reachB, reachC])
  .then((message) => console.log(message))
  .catch((message) => console.log(message));*/

// Promise.allSettled will display all result and Show the reject
/*Promise.allSettled([reachA, reachB, reachC])
  .then((message) => console.log(message))
  .catch((message) => console.log(message))*/

// Promise: It will be Three State 1.Pending, 2.ReSolved 3.Reject
// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

// Promise.any, Alleast any one get Resovled. Everything Reject it reject all
/* Promise.any([reachA, reachB, reachC])
    .then((message) => console.log(message))
    .catch((message) => console.log(message));*/

// Promise.race(), Any Failure it show in console here Serah not reached coz i made it false so in race rejceted displayed
// Refer MDN Doc
// Everything True i will take of millisecode display the result
Promise.race([reachA, reachB, reachC])
  .then((message) => console.log(message))
  .catch((message) => console.log(message));
