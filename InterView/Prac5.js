var a = {};
var b = { name: "John" };
var c = { age: 30 };
a[b] = 1;
a[c] = 2;

console.log(a[b]);
console.log(a[c]);

// When objects are used as keys in another object, they are converted to strings using their toString() method.