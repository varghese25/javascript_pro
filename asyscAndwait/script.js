// function fn() {
//   return "hello Varghese Welcome back to Codding After a long time 10 days 03-25-2025";
// }

// console.log(fn()); // hello Varghese Welcome back to Codding

// add async keyword to the function which always returns a promise.
// Which has parameter resolve will return the value of the function.
// "hello Varghese Welcome back to Codding After a long time 10 days 03-25-2025";
// async function fn() {
//   return "hello Varghese Welcome back to Codding After a long time 10 days 03-25-2025";
// }

// console.log(fn()); // hello Varghese Welcome back to Codding

// fn().then((msg) => console.log(msg)); // hello Varghese Welcome back to Codding

let reachA = new Promise((resolve, reject) => {
  const reached = false; // change to true to see the output
  if (reached) setTimeout(resolve, 3000, "Shannon reached");
  else reject("Shannon not reached");
});

async function asyncstatus() {
  try {
    console.log("Hello...");
    res = await reachA;
    console.log(res);
    console.log("bye");
  } catch (error) {
    console.log(error);
  }
}

asyncstatus();

// await must be used inside an async function.
