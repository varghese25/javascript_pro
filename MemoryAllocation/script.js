// Memory Allocation
let bigNum = 9007199254740991n; // n is used to declare a BigInt number
const bigNum2 = BigInt(9007199254740991);

let a = 100; // Primitive data type,  number 100 will be stored STACK MEMORY
a = 200; // 100 will be replaced by 200 in STACK MEMORY
// Similiar for string, boolean, null, undefined, symbol, bigint
let b = a;
b = 300; // only B changed , A remain same value

console.log("a is", a);
console.log("b is", b);

// unlike Reference Type , Primitive type has Seperate  memory location

let obj1 = { name: "Varghese", age: 38 }; // Object data type,  obj1 will be stored in STACK MEMORY and the object will be stored in HEAP MEMORY

let obj2 = obj1; //
obj1.age = 39; // obj2 age changed Obj1 & Obj2 point same memory location Refer image
obj2.name = "Evan"; // obj 1 & Obj 2 name changed from varghese to evan

console.log("obj1", obj1);
console.log("obj2", obj2);

// Reference Type, memory location point same loction

// Array, Reference Type 

let arr1 = [2, 3, 4];
let arr2 = arr1;
arr2[0] = 10;
console.log(arr1, arr2);
