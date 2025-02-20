// map - executes callback each array element and returns a new array

let priceUSD = [20, 35, 13];
let priceINR = priceUSD.map((price) => price * 83); //here price is variable that holds the value of each elemet of the array
console.log(priceINR); // [1660, 2905,1079]

priceINR = priceUSD.map(convert); // convert is call back function

function convert(price) {
  return price * 83;
}
console.log(priceINR); //[1660, 2905,1079

// array of objects [] array , {} object name and age are key value pair
// map function is used to get the age of the person
const input = [
  { name: "varghese", age: 38 },
  { name: "serah", age: 35 },
  { name: "evan", age: 6 },
  { name: "shannon", age: 5 },
];

const age = input.map((personAge) => personAge.age); // personAge(Callback) is variable that holds the value of each element of the array
console.log(age);

// filter - returns a new array by checking each value of original array using call back fuction

let costOfitems = [35, 234, 12, 34, 54, 123]; // filtering items which is lesser than 100
let lessThan100 = costOfitems.filter((item) => item < 100); // call back function item => item < 100. cossOfitems.filter is a method()
console.log(lessThan100); // [35, 12, 34, 54]
