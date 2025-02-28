// Json - String should be in String

// const { stringify } = require("uuid");

let json1 = "Dave";
let json2 = 4;
let json3 = true;
let json4 = [4, 5, 6, 7];
let json5 = {
  "Stock": "TCS", // key sting should be in ""
  Price: 3500,
};

let json6 = [
  {
    "Stock": "TCS",
    Price: 3500,
  },

  {
    "Stock": "HUL",
    Price: 2500,
  },

  {
    "Stock": "SBI",
    "Price": 550,
  },

  {
    "Stock": "Tangerine",
    "Price": 350,
  },

  {
    "Stock": "RBC",
    "Price": 350,
  },

  {
    "Stock": "FNB",
    "Price": 250,
  },
];
console.log(json6);
// Back Tick it will become string . From API will receive it in String from String we can Convert JavaScript can get desire Result 

// json7 is become string by Back Tick '[]'
let json7 = `[
  {
    "Stock": "TCS",
    "Price": 3500
  },
  {
    "Stock": "HUL",
    "Price": 2500
  }
]`;
// console.log(json7); 
// Going to Parse get in Js format

let varghese = JSON.parse(json7)
console.log(varghese) // Parased in Js Format
console.log(varghese[1]) // {Stock: 'HUL', Price: 2500} , [1] index will display

console.log(varghese[1].Price); // [1] Price display 2500

console.log(JSON.stringify(varghese))