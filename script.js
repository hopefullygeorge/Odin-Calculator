let resultsScreen = document.querySelector("#resultsContainer");
let buttons = document.querySelectorAll("button");

let firstNum = 0;
let secondNum = 0;
let operator = null;

const add = function () {
  return firstNum + secondNum;
};

const subtract = function () {
  return firstNum - secondNum;
};

const multiply = function () {
  return firstNum * secondNum;
};

const divide = function () {
  return firstNum / secondNum;
};

function operation(num1, num2, operator) {
  if (operator == add) {
    return add();
  } else if (operator == subtract) {
    return subtract();
  } else if (operator == multiply) {
    return multiply();
  } else if (operator == divide) {
    return divide();
  }
}

function updateResults(string) {
  resultsScreen.innerText += string;
}

for (btn of buttons) {
  let btnValue = btn.innerText;
  btn.addEventListener("click", () => {
    updateResults(btnValue);
  });
}
