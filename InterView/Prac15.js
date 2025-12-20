const numbers = ["1", "7", "11"].map(parseInt);
console.log(numbers);


// """


// Explanation; 

// Out put -> [ 1, NaN, 3 ]
// Array.prototype.map() passes three arguments to the callback: 
// element, index, array
// .map(parseInt) -> .map((value, index) => parseInt(value, index))
// parseInt takes two arguments: 
// String -> the number to parse
// radix -> the base (number system)
// 2 = binary
// 8 = octal
// 10 = decimal
// 16 = hexadecimal

// 1) parseInt('1', 0)
//  // Radix 0 -> JavaScript defaults to base 10
//  // Result -> 1

// 2) parseInt('7', 1) 
// // Radix 1 is invalid
// // Valid radix range is 2-36
// // Result -> NaN

// 3) parseInt('11', 2)
// // Radix 2 = binary
// // '11' in binary = 3 in decimal
// // Result -> 3

// ""