let a = { value: 10 };
let b = a;
b.value = 20;
console.log(a.value, b.value);
b = { value: 30 };
console.log(a.value, b.value);