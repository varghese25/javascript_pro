// Which part of code gets error we have use this try catch block

// Exception Handling

try {
  num = prompt("Enter the number");
  if (num === "") throw "Cannot be empty enter the vaild number"; // Another possible error
  if (isNaN(num)) throw "Enter the vaild numer"; // we have to find issue and mention like this

  console.log(num ** 2);
} catch (error) {
  console.log(error);
} finally {
  console.log("bye");
} // finally used success or failure will display 'bye'
