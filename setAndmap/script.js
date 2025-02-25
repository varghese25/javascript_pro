// Set is a Object : Collection of Values.
// Repeated value can't stored on the Unique values are stored

console.log("<<<<Set>>>>");
console.log(
  "<<<<Set is a Object : Collection of Values. Stores Unique Values>>"
);
let arr = [1, 1, 2, 3, 4, 5, 5, 5, 5, 10, 8];
let mySet = new Set(arr); // unique values display
console.log(mySet); // unique values display. Remove duplicates
console.log(arr); // whole arr display

console.log("<<<<Primitive follows striclty uniqu>>>");
let mySetOne = new Set();
mySetOne.add(8); // Primitive follows striclty unique
mySetOne.add(10);
mySetOne.add("Varghese");
mySetOne.add({ a: 1, b: 2 }); // Reference type even its duplicate it will allows
mySetOne.add(8);
console.log(mySetOne);

console.log("<<<<Reference type even its duplicate it will allows>>>");
let Object = { a: 1, b: 2 };
mySetOne.add(Object);
console.log(mySetOne);
console.log(mySetOne.size); // 5 element

console.log(mySetOne.has(5)); // false  did not add 5 in mySetOne

console.log(mySetOne.has(8)); // True added 8 in mySetOne

console.log(mySetOne.delete(8)); // True it will delete 8 from mySetone
console.log(mySetOne.has(8)); // It will show false deleted

console.log(mySetOne.delete(4)); // False 4 is Not add in the mySetone

console.log("<<<<Changed the mySetone into a Arry>>>");

// {} set [] array
// Changed the mySetone into a Arry
let arrNew = Array.from(mySetOne);
console.log(arrNew);

console.log("<<<<Map>>>");

// Map is a Object: Collection's of Key-Value Pairs , Key must be unique.
// key-value can be object.

let map1 = new Map();
map1.set("a", 1);
map1.set("b", 2);
map1.set("a", 3); // Duplicate will not insert only pair changes to 3
console.log(map1);
console.log(map1.size); // only two element
console.log(map1.has("a")); // true
console.log(map1.has("c")); // false
console.log(map1.delete("a")); // True its deleted

map1.set("d", 2);
map1.set("e", 3);

for (let i of map1) {
  console.log(i);
}

// k-key,v-value of map1
for (let [k, v] of map1) {
  console.log(k); // gives k-key only, what v-value dispalys
}
// result same
for (let k of map1.keys()) {
  console.log(k);
}

// for Each
map1.forEach((v, k) => {
  console.log("key", k, "value", v);
});

//2d Array To Map Required Key-Value Pair. Unlike Set
// ky key-value Array

let kyArray = [
  ["a", 1],
  ["b", 1],
];
let map2 = new Map(kyArray);
console.log(map2);

console.log(...map2, "2D Array"); // spread operator will change to 2D array
