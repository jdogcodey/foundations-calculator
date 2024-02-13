let number1 = 0;
let number2 = 0;
let operator = ``;
let lastButtonPressed = ``;

const screenDisplay = document.querySelector("#display");
screenDisplay.textContent = `00000000000`;
console.log(`initial screen ${screenDisplay.textContent}`);

// Creating variables for each of the buttons
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
const divideButton = document.querySelector("#division");
const multiplyButton = document.querySelector(`#multiplication`);
const subtractButton = document.querySelector(`#subtraction`);
const addButton = document.querySelector(`#addition`);
const equalsButton = document.querySelector(`#equals`);

//Addition function
const addFunc = function (input1, input2) {
  return Number(input1) + Number(input2);
};

//Subtraction function
const subtractFunc = function (input1, input2) {
  return input1 - input2;
};

//Multiplication function
const multiplyFunc = function (input1, input2) {
  return input1 * input2;
};

//Division function
const divideFunc = function (input1, input2) {
  return input1 / input2;
};

// Operation division - inputs 2 numbers and uses the operator chosen on them
const operateFunc = function (number1, operator, number2) {
  screenDisplay.textContent = operator(number1, number2);
};

const updateDisplay = function (number) {
  console.log(`Update display initialised with ${number}`);
  // prettier-ignore
  if ((screenDisplay.textContent === `00000000000`) || (lastButtonPressed === `operator`)) {
      console.log(`Update Display adding only one number`);
      screenDisplay.textContent = `${number}`;
    }
  else if (screenDisplay.textContent.length > 10) {
    console.log(`Update display did nothing as string too long`);
  }
    else {
      screenDisplay.textContent += number;
      console.log(`Screen display updated to ${screenDisplay.textContent}`);
    }
};

oneButton.addEventListener("click", function () {
  updateDisplay(1);
  lastButtonPressed = "number";
  console.log(lastButtonPressed);
});
twoButton.addEventListener("click", function () {
  updateDisplay(2);
  lastButtonPressed = "number";
});
threeButton.addEventListener("click", function () {
  updateDisplay(3);
  lastButtonPressed = "number";
});
fourButton.addEventListener("click", function () {
  updateDisplay(4);
  lastButtonPressed = "number";
});
fiveButton.addEventListener("click", function () {
  updateDisplay(5);
  lastButtonPressed = "number";
});
sixButton.addEventListener("click", function () {
  updateDisplay(6);
  lastButtonPressed = "number";
});
sevenButton.addEventListener("click", function () {
  updateDisplay(7);
  lastButtonPressed = "number";
});
eightButton.addEventListener("click", function () {
  updateDisplay(8);
  lastButtonPressed = "number";
});
nineButton.addEventListener("click", function () {
  updateDisplay(9);
  lastButtonPressed = "number";
});
zeroButton.addEventListener("click", function () {
  updateDisplay(0);
  lastButtonPressed = "number";
});
divideButton.addEventListener("click", function () {
  if (number1 != 0) {
    number2 = screenDisplay.textContent;
    operateFunc(number1, operator, number2);
  } else {
    number1 = screenDisplay.textContent;
    operator = divideFunc;
    lastButtonPressed = "operator";
  }
  console.log(operator);
  console.log(`number 1${number1}`);
  console.log(`number 2${number2}`);
});
multiplyButton.addEventListener("click", function () {
  if (number1 != 0) {
    number2 = screenDisplay.textContent;
    operateFunc(number1, operator, number2);
  } else {
    number1 = screenDisplay.textContent;
    lastButtonPressed = "operator";
    operator = multiplyFunc;
  }
  console.log(operator);
});
subtractButton.addEventListener("click", function () {
  if (number1 != 0) {
    number2 = screenDisplay.textContent;
    operateFunc(number1, operator, number2);
  } else {
    number1 = screenDisplay.textContent;
    lastButtonPressed = "operator";
    operator = subtractFunc;
  }
  console.log(operator);
});
addButton.addEventListener("click", function () {
  if (number1 != 0) {
    number2 = screenDisplay.textContent;
    operateFunc(number1, operator, number2);
  } else {
    number1 = screenDisplay.textContent;
    lastButtonPressed = "operator";
    operator = addFunc;
  }
  console.log(operator);
});
equalsButton.addEventListener("click", function () {
  number2 = screenDisplay.textContent;
  operateFunc(number1, operator, number2);
  console.log(screenDisplay.textContent);
});
