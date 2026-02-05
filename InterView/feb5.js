const orginal = [1, 2, 3]
const copy = orginal;
copy.length = 0;
console.log(orginal)
console.log(copy);
console.log(orginal === copy);