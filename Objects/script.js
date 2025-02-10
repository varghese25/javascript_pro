// let item = {
//   // object is item
//   name: "Iphone", // key, value: name(otherword properites) is key, Phone is value.
//   price: 25000,
//   quantity: 1,
// };
// console.log(item);

// another way to create Object

// let item2 = new Object();
// {
//   (item2.name = "charger"), (item2.price = "150"), (item2.quantity = "10");
// }
// console.log(item2);

// accessing object Using dot Notation
// console.log(item.name);

// changing object value
// item.price = 2600; // from 2500 to 2600
// console.log(item.price);

// i want add 4th property in the item object
// item.returnable = true;
// console.log(item);

// {name: 'Iphone', price: 2600, quantity: 1, returnable: true}
/*name
: 
"Iphone"
price
: 
2600
quantity
: 
1
returnable
: 
true */

// square bracket notation
// console.log(item["price"]);
// console.log(item["returnable"]);

// item["returnable"] = false; // chaged to false
// console.log(item["returnable"]);

// let key = "price";
// item[key] = 3000;
// console.log(item); // full item display
// console.log(item.price); // spicfic item displays

// Nesting Objects

let item = {
  name: "Iphone",
  price: 25000,
  quantity: 1,
  category: ["electroincs", "phone"], // array in the object ',' is important category & dimesion
  dimension: {
    // second object
    length: 7,
    breath: 3.5,
    height: 0.5,
  },
};
console.log(item);
console.log(item.category[0]); // accessing arrary 0 th value
console.log(item.dimension.length); // accessing dimension object Output is 7

//Adding Method in Objects. Inside object called Method's

item = {
  // Object
  name: "Google phone",
  quantity: 1,
  price: 50000,

  buy: function () {
    // method or fucntion both are correct
    console.log("item add to cart_1");
  },
  addToList() {
    // function method or fucntion both are correct
    console.log("item add to cart_2");
  },
};

//called function buy & addToList function is dummy or (Defination) code if we dint call it wont give out put
item.buy(); // function buy is called Method because its inside the item (Object) . Using Object Invoked method.
item.addToList();

// if buy function writen outSide object is called function
//  buy: function() { // Function
//         console.log('item add to cart')
//     }

// }
