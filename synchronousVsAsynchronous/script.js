// synchronous: Step by step
// JavaScript Basic form is synchronus 

console.log("<<<synchronous>>>");
console.log('step 1')
console.log("step 2")
console.log("step 3")



console.log("<<<Asynchronous, JS give to Web Broser will Track the time of Mill seconds>>>");
//Asynchronous non Blocking

setTimeout(() => console.log('step 1'), 4000) // callback Function , 4000 millSeconds is minimumTime
setTimeout(() => console.log("step 2"), 2000);
setTimeout(() => console.log("step 3"), 1000);

console.log('bye') // synchronous & bye execute afterWard Asynchronous will take care by Web Browser


// Global Scope get empty then it will call stack


console.log('Hello..')//f1
function sync(){
    console.log('step 1')//f3
    console.log('step 2')//f4
    console.log('step 3')//f5
}
sync()//f2
let a = 100
let b=20
let c=a+b

setTimeout(()=>console.log('step1'),0)//f6
setTimeout(()=>console.log('step2'),2000)//f7
setTimeout(()=>console.log('step3'),1000)//f8

console.log('bye')//f9


// setInterval(() => console.log('Varghese'), 2000) // Console every 2 second count increas

// Asynchronous Event
// Call Stack : 
// Browser :
// call back queue: