const btn = document.getElementById("btn");
const colortext = document.getElementById("color");
const wrap = document.getElementById("wrap");
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// button event listener for click function change background
btn.addEventListener("click", function () {
  let hexColor = "#"; // in this string we are adding hex value, I want 6 value so im exeuting loop #ffffff 6 digit hex value
  for (let i = 1; i <= 6; i++) {
    hexColor += randHexValue(); // calling; function randHexValue() , short hand used hexColor +=randHexValue();
  }
  wrap.style.backgroundColor = hexColor;
  colortext.innerHTML = hexColor;
});
// randomly send hexdecicalvalue CONSOLE Try hex[0] hex[1] value
function randHexValue() {
  // when randHexValue function called it will random hex value
  let randomIndex = Math.floor(Math.random() * 16); // it will generate math random number index
  return hex[randomIndex];
}

// binary 0 1
// hex [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"] 16 number 100/16 will get hex number remainder
