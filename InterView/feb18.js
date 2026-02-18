const original = [1, 2, 3];
const copy = original;

function clear(arr) {
  arr = [];
}

clear(original);

console.log(original, copy);
