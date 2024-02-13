let number1 = 0;
let number2 = 0;
let operator = "";

const screenDisplay = document.querySelector("#display");
screenDisplay.textContent = `0000000000`;
console.log(`initial screen ${screenDisplay.textContent}`);

// Creating variables for each of the number buttons
const oneButton = document.querySelector("#one");
const twoButton = document.querySelector("#two");
const threeButton = document.querySelector("#three");
const fourButton = document.querySelector("#four");
const fiveButton = document.querySelector("#five");
const sixButton = document.querySelector("#six");
const sevenButton = document.querySelector("#seven");
const eightButton = document.querySelector("#eight");
const nineButton = document.querySelector("#nine");
const zeroButton = document.querySelector("#zero");

//Addition function
const add = function (input1, input2) {
  return input1 + input2;
};

//Subtraction function
const subtract = function (input1, input2) {
  return input1 - input2;
};

//Multiplication function
const multiply = function (input1, input2) {
  return input1 * input2;
};

//Division function
const divide = function (input1, input2) {
  return input1 / input2;
};

// Operation division - inputs 2 numbers and uses the operator chosen on them
const operate = function (number1, operator, number2) {
  return operator(number1, number2);
};

const updateDisplay = function (number) {
  console.log(`Update display initialised with ${number}`);
  if (screenDisplay.textContent.length > 10) {
    console.log(`Update display did nothing as string too long`);
  } else {
    if (screenDisplay.textContent === `0000000000`) {
      console.log(`Update Display adding only one number`);
      screenDisplay.textContent = `${number}`;
    } else {
      screenDisplay.textContent += number;
      console.log(`Screen display updated to ${screenDisplay.textContent}`);
    }
  }
};

oneButton.addEventListener("click", function () {
  updateDisplay(1);
});
twoButton.addEventListener("click", function () {
  updateDisplay(2);
});
threeButton.addEventListener("click", function () {
  updateDisplay(3);
});
fourButton.addEventListener("click", function () {
  updateDisplay(4);
});
fiveButton.addEventListener("click", function () {
  updateDisplay(5);
});
sixButton.addEventListener("click", function () {
  updateDisplay(6);
});
sevenButton.addEventListener("click", function () {
  updateDisplay(7);
});
eightButton.addEventListener("click", function () {
  updateDisplay(8);
});
nineButton.addEventListener("click", function () {
  updateDisplay(9);
});
zeroButton.addEventListener("click", function () {
  updateDisplay(0);
});
