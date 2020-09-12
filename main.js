const input = document.querySelector('#input');
const button0 = () => input.value += 0;
const point = () => input.value += ".";
const button00 = () => input.value += "00";
const button1 = () => input.value += 1;
const button2 = () => input.value += 2;
const button3 = () => input.value += 3;
const button4 = () => input.value += 4;
const button5 = () => input.value += 5;
const button6 = () => input.value += 6;
const button7 = () => input.value += 7;
const button8 = () => input.value += 8;
const button9 = () => input.value += 9;

const divide = () => {
  let lastInput = input.value.length - 1;
  if (input.value === '' || input.value.charAt(lastInput) === "\u00f7" || input.value.charAt(lastInput) === "\u00d7" || input.value.charAt(lastInput) === "+" || input.value.charAt(lastInput) === "-") { }
  else {
    input.value += "\u00f7";
  }
}

const multiply = () => {
  let lastInput = input.value.length - 1;
  if (input.value === '' || input.value.charAt(lastInput) == "\u00d7" || input.value.charAt(lastInput) === "\u00f7" || input.value.charAt(lastInput) === "+" || input.value.charAt(lastInput) === "-") { }
  else {
    input.value += "\u00d7";
  }
}

const minus = () => {
  let lastInput = input.value.length - 1;
  if (input.value.charAt(lastInput) == "-" || input.value.charAt(lastInput) === "+") { }
  else {
    input.value += "-";
  }
}

const add = () => {
  let lastInput = input.value.length - 1;
  if (input.value === '' || input.value.charAt(lastInput) == "+") { }
  else {
    input.value += "+";
  }
}

const clearAll = () => input.value = "";

const equals = () => {
  let evaluate = input.value.replace(/\u00f7/gi, "/");
  evaluate = evaluate.replace(/\u00d7/gi, "*");
  input.value = eval(evaluate);
};