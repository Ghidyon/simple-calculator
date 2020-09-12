const input = document.querySelector('#input');

const button0 = () => input.value += 0;
const button1 = () => {
  forNumbers(3);
};
const button2 = () => input.value += 2;
const button3 = () => input.value += 3;
const button4 = () => input.value += 4;
const button5 = () => input.value += 5;
const button6 = () => input.value += 6;
const button7 = () => input.value += 7;
const button8 = () => input.value += 8;
const button9 = () => input.value += 9;
const clearAll = () => input.value = "";

const forNumbers = (num) => {
  if (input.value === "0" || Math.max(input.value) === 0) {
    input.value = num;
  }
  else {
    input.value += num;
  }
}

const button00 = () => {
  if (input.value === "") {
    input.value += "0";
  }
  else {
    input.value += "00";
  }
}

const point = () => {
  let lastInput = input.value.charAt(input.value.length - 1);
  if (input.value === "") {
    input.value += "0.";
  }
  else if (lastInput === ".") {
    input.value += "";
  }
  else {
    input.value += ".";
  }
}

const divide = () => {
  let lastInput = input.value.charAt(input.value.length - 1);
  if (input.value === '' || lastInput === "\u00f7" || lastInput === "\u00d7" || lastInput === "+" || lastInput === "-") {
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
  let calculate = input.value.replace(/\u00f7/gi, "/");
  calculate = calculate.replace(/\u00d7/gi, "*");
  input.value = eval(calculate);
}