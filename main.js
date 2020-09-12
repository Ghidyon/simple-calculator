const input = document.querySelector('#input');
const clearAll = () => input.value = "0";

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

const point = () => {
  let lastInput = input.value.charAt(input.value.length - 1);
  if (lastInput === ".") {
    input.value += "";
  }
  else {
    input.value += ".";
  }
}

const divide = () => {
  let lastInput = input.value.charAt(input.value.length - 1);
  if (input.value === "" || lastInput === "\u00f7" || lastInput === "\u00d7" || lastInput === "+" || lastInput === "-") {
    input.value += "";
  }
  else {
    input.value += "\u00f7";
  }
}

const multiply = () => {
  let lastInput = input.value.charAt(input.value.length - 1);
  if (input.value === '' || lastInput === "\u00d7" || lastInput === "\u00f7" || lastInput === "+" || lastInput === "-") {
    input.value += "";
  }
  else {
    input.value += "\u00d7";
  }
}

const minus = () => {
  let lastInput = input.value.charAt(input.value.length - 1);
  if (lastInput == "-" || lastInput === "+") {
    input.value += "";
  }
  else {
    input.value += "-";
  }
}

const add = () => {
  let lastInput = input.value.charAt(input.value.length - 1);
  if (input.value === '' || lastInput == "+" || lastInput === "\u00f7" || lastInput === "\u00d7" || lastInput == "-") {
    input.value += "";
  }
  else {
    input.value += "+";
  }
}

const equals = () => {
  let calculate = input.value.replace(/\u00f7/g, "/");
  calculate = calculate.replace(/\u00d7/g, "*");
  input.value = eval(calculate);
}