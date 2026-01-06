console.log(1); 
setTimeout(() => console.log(2), 0);
Promise.resolve().then(() => console.log(3)); 
console.log(4); 


//1,4,3,2


// ""
// Explanation
// It follows the order of Synchronous code (1, 4) first, 
// then Microtasks (Promises 3), and 
// finally Macrotasks (setTimeout 2)
// ""