console.log(
  [1, 2, 3].map((num) => {
    if (num % 2 === 0) return;
    return num * 2;
  })
);
//
// The map function processes each element of the array [1, 2, 3]:
// - For 1: 1 % 2 !== 0, so it returns 1 * 2 = 2.
// - For 2: 2 % 2 === 0, so it hits the if condition true and (without a value) returns undefined.
// - For 3: 3 % 2 !== 0, so it returns 3 * 2 = 6.
// The resulting array is [2, undefined, 6].
