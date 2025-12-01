var x; // Global variable
//cosole.log(x === undefinged);
x = 3;

// this function will hoisted in the top so Output will be undefined
function v() {
  var x; // Global variable, if remove this Global x will be printed as output as 3
  console.log(x);
}
v();
