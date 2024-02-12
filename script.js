let number1 = 0;
let number2 = 0;
let operator = "";

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

const operate = function (number1, operator, number2) {
  return operator(number1, number2);
};
