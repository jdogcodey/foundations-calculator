let number1 = 0;
let number2 = 0;
let operator = ``;
let lastButtonPressed = ``;
let calculationComplete = false;
let shortAnswer = 111111111111111;

const screenDisplay = document.querySelector("#display");
screenDisplay.textContent = ``;
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
const decimalButton = document.querySelector(`#decimal`);
const clearButton = document.querySelector(`#clear`);

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
const operateFunc = function (firstNo, operation, secondNo) {
  let answer = operation(firstNo, secondNo);
  console.log(answer);
  console.log(answer.toString().length);
  if (answer.toString().length > 11) {
    console.log(answer % 1);
    if (answer % 1 != 0) {
      console.log(`short answer ${shortAnswer.toString().length}`);
      //      shortAnswer = answer.toFixed(3);
      console.log(`short answer fixed - ${shortAnswer}`);
      for (let i = 11; i >= 1; i--) {
        console.log(`beginning of loop ${answer}`);
        shortAnswer = answer.toFixed(i);
        console.log(`to fixed ${shortAnswer}`);
        if (shortAnswer.toString().length <= 11) {
          break;
        }
      }
    }
  } else {
    shortAnswer = answer;
  }
  screenDisplay.textContent = shortAnswer;
  number1 = screenDisplay.textContent;
  number2 = 0;
};

const updateDisplay = function (number) {
  console.log(`Update display initialised with ${number}`);
  // prettier-ignore
  if ((screenDisplay.textContent === ``) || (lastButtonPressed === `operator`)) {
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
  console.log(lastButtonPressed);
});
threeButton.addEventListener("click", function () {
  updateDisplay(3);
  lastButtonPressed = "number";
  console.log(lastButtonPressed);
});
fourButton.addEventListener("click", function () {
  updateDisplay(4);
  lastButtonPressed = "number";
  console.log(lastButtonPressed);
});
fiveButton.addEventListener("click", function () {
  updateDisplay(5);
  lastButtonPressed = "number";
  console.log(lastButtonPressed);
});
sixButton.addEventListener("click", function () {
  updateDisplay(6);
  lastButtonPressed = "number";
  console.log(lastButtonPressed);
});
sevenButton.addEventListener("click", function () {
  updateDisplay(7);
  lastButtonPressed = "number";
  console.log(lastButtonPressed);
});
eightButton.addEventListener("click", function () {
  updateDisplay(8);
  lastButtonPressed = "number";
  console.log(lastButtonPressed);
});
nineButton.addEventListener("click", function () {
  updateDisplay(9);
  lastButtonPressed = "number";
  console.log(lastButtonPressed);
});
zeroButton.addEventListener("click", function () {
  updateDisplay(0);
  lastButtonPressed = "number";
  console.log(lastButtonPressed);
});
decimalButton.addEventListener("click", function () {
  console.log(`Update display initialised with decimal`);
  // prettier-ignore
  if ((screenDisplay.textContent === ``) || (lastButtonPressed === `operator`) || (screenDisplay.textContent.includes(`.`))) {
      console.log(`Decimal with no numbers`);
    }
  else if (screenDisplay.textContent.length > 10) {
    console.log(`Update display did nothing as string too long`);
  }
    else {
      screenDisplay.textContent += `.`;
      console.log(`Screen display updated to ${screenDisplay.textContent}`);
    }
});

divideButton.addEventListener("click", function () {
  console.log(`number 1 i s${number1}`);
  console.log(`number 2 i s${number2}`);
  lastButtonPressed = "operator";
  if (number1 != 0) {
    number2 = screenDisplay.textContent;
    operateFunc(number1, operator, number2);
  } else {
    number1 = screenDisplay.textContent;
    operator = divideFunc;
  }
  console.log(operator);
  console.log(`number 1${number1}`);
  console.log(`number 2${number2}`);
});
multiplyButton.addEventListener("click", function () {
  lastButtonPressed = "operator";
  if (number1 != 0) {
    number2 = screenDisplay.textContent;
    operateFunc(number1, operator, number2);
  } else {
    number1 = screenDisplay.textContent;
    operator = multiplyFunc;
  }
  console.log(operator);
});
subtractButton.addEventListener("click", function () {
  lastButtonPressed = "operator";
  if (number1 != 0) {
    number2 = screenDisplay.textContent;
    operateFunc(number1, operator, number2);
  } else {
    number1 = screenDisplay.textContent;
    operator = subtractFunc;
  }
  console.log(operator);
});
addButton.addEventListener("click", function () {
  lastButtonPressed = "operator";
  if (number1 != 0) {
    number2 = screenDisplay.textContent;
    operateFunc(number1, operator, number2);
  } else {
    number1 = screenDisplay.textContent;
    operator = addFunc;
  }
  console.log(operator);
});
equalsButton.addEventListener("click", function () {
  number2 = screenDisplay.textContent;
  operateFunc(number1, operator, number2);
  lastButtonPressed = `operator`;
  number1 = 0;
  number2 = 0;
  console.log(`number 1 is ${number1}`);
  console.log(`number2 is ${number2}`);
});
clearButton.addEventListener("click", function () {
  screenDisplay.textContent = ``;
  number1 = 0;
  number2 = 0;
});
