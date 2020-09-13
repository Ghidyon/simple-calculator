const input = document.querySelector('#input');

const clearAll = () => input.value = "0";

//for number keys
const getNumber = (num) => {
  if (input.value === "0") {
    input.value = num;
  }
  else {
    input.value += num;
  }
}

const button00 = () => {
  if (input.value === "0") {
    input.value += "";
  }
  else {
    input.value += "00";
  }
}

//for decimal point
const point = () => {
  let lastInput = input.value.charAt(input.value.length - 1);
  if (lastInput === ".") {
    input.value += "";
  }
  else {
    input.value += ".";
  }
}

//for division operator
const divide = () => {
  let lastInput = input.value.charAt(input.value.length - 1);
  if (input.value === "" || lastInput === "\u00f7" || lastInput === "\u00d7" || lastInput === "+" || lastInput === "-") {
    input.value += "";
  }
  else {
    input.value += "\u00f7";
  }
}

//for multiplication operator
const multiply = () => {
  let lastInput = input.value.charAt(input.value.length - 1);
  if (input.value === '' || lastInput === "\u00d7" || lastInput === "\u00f7" || lastInput === "+" || lastInput === "-") {
    input.value += "";
  }
  else {
    input.value += "\u00d7";
  }
}

//for subtraction operator
const minus = () => {
  let lastInput = input.value.charAt(input.value.length - 1);
  if (lastInput == "-" || lastInput === "+") {
    input.value += "";
  }
  else {
    input.value += "-";
  }
}

//for addition operator
const add = () => {
  let lastInput = input.value.charAt(input.value.length - 1);
  if (input.value === '' || lastInput == "+" || lastInput === "\u00f7" || lastInput === "\u00d7" || lastInput == "-") {
    input.value += "";
  }
  else {
    input.value += "+";
  }
}

//for calculations
const equals = () => {
  let calculate = input.value.replace(/\u00f7/g, "/");
  calculate = calculate.replace(/\u00d7/g, "*");
  input.value = eval(calculate);
}

