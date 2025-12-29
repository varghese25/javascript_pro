console.log("subtracting:", [] - []);
console.log("multiplying:", [] * []);
console.log("dividing :", [] / []);



/*
JavaScript, arrays are objects, so when you use arithmetic operators on them, JS first tries to convert them to numbers.
[] → converted to "" (empty string) → then to 0 (number)

[] - []   // 0 - 0 = 0
[] * []   // 0 * 0 = 0
[] / []   // 0 / 0 = NaN


subtracting: 0

multiplying: 0

dividing: NaN (because 0 divided by 0 is not a valid number)

 */