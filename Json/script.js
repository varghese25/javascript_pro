// Json - String should be in String

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
  }
]
console.log(json6);


// Back Tick it will become string

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
console.log(json7)