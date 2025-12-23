//Netflix, Atlassian, Linkedin


console.log("1");



// microQue tas

setTimeout(function() {
console.log("2")

}, 0); // time 0 mill sec

// microQue task, Promise always priority first

promise.resolve().then(function() {

console.log("3");
)).then(function() {
console.log("4");

});

console.log("5");


//Output 1, 3, 4,2,5

