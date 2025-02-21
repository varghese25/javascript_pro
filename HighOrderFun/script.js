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
// lessThan100 is a outer array
console.log(lessThan100); // [35, 12, 34, 54 moved to outer array lessThan100]  




// reduce - executes reducer callback and returns accumalated result
// can add initial value as second argument reduce((totalCost, item) => totalCost+item, 100) 100 is the initial value


console.log(
  "============Example1: Reduce withOut inital Value it consider as zero==================="
);
cost = [35, 234, 12, 34, 54, 123];
let totalCost = cost.reduce((totalCost, item) => totalCost+item) // callback function ((totalCost, item) => totalCost+item)
console.log(totalCost) // 492

// totalCost , is accumalator [35, 234, 12, 34, 54, 123] calculate whole element of the array // 492
// item, is the value of each element or single elment  in the array [35, 234, 12, 34, 54, 123]

console.log("============Example2: Reduce with inital value 100==================");
let totalCost2 = cost.reduce((totalCost2, item) => totalCost2+item, 100) // callback function ((totalCost, item) => totalCost+item,100) 100 is the initial value
console.log(totalCost2) // 592

console.log(
  "============Example3: Reduce with inital value/ Index and Array=================="
);
 // Finding the duplicate letter  in array

 // created 2d array
 arr2d = [['a', 'b', 'c']
        ,['c', 'd', 'f']
        ,['d', 'f', 'g']]

        // result = {a:1 , b:1, c:2, d:2, f:2, g:1} // object with occurance of each letter
        console.log(arr2d.flat()) // ['a', 'b', 'c', 'c', 'd', 'f', 'd', 'f', 'g'] // flat() method is used to convert 2d array to 1d array

        let result = {'a':1, 'b':2}
        result['c']=1
        console.log(result) // {a:1, b:2, c:1}

        //Method chaining arr2d.flat().reduce()
         // call back fun
      let count = arr2d.flat().reduce((accumalator,currentValue) => {
        if(accumalator[currentValue]){
            accumalator[currentValue]++;
        } else {
            accumalator[currentValue]=1;
        }
        return accumalator;
      }, {}) // {} First it will initizalie empty object for the initial value, Result will add the occurance of each letter

      console.log(count) // {a:1, b:1, c:2, d:2, f:2, g:1}


//currentValue, ['a', 'b', 'c', 'c', 'd', 'f', 'd', 'f', 'g']
// accumalator, {} empty object will be empty object
        