// console.log(fetch("https://official-joke-api.appspot.com/jokes/programming/random"))

// fetch("https://official-joke-api.appspot.com/jokes/programming/random")
// //   .then((result) => console.log(result.json()))
//     .then((result) =>result.json())
//    .then((msg)=> console.log(msg[0].setup, msg[0].punchline))
//   // .then((msg) => msg[0].setup)
//   .catch((error) => console.log(error));



// Practise Api in Jsonplaceholder

// Get,Post,Put,Delete
//get
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// fake post it wont insert
// post
fetch("https://jsonplaceholder.typicode.com/todos", {
  method: "post",
  headers: { "content-type": "application/json" },
  body: JSON.stringify({
    userId: 86,
    id: 2512,
    title: "implementation Engineer",
    completed: true,
  }),
})
  .then((response) => response.json())
  .then((json) => console.log(json));

