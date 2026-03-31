let x = [1, 2, 3];
let y = x;

y.push(4);

const result = x.length + y[3];
console.log(result);


// Eplanantion:

/*This modifies the shared array.

Now both x and y are:

[1, 2, 3, 4]
*/
// x.length = 4
// y[3] = 4 (the element at index 3)