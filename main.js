const input = document.querySelector('#input');
const button0 = () => input.value += 0;
const point = () => input.value += ".";
const button00 = () => input.value += 00;
const button1 = () => input.value += 1;
const button2 = () => input.value += 2;
const button3 = () => input.value += 3;
const button4 = () => input.value += 4;
const button5 = () => input.value += 5;
const button6 = () => input.value += 6;
const button7 = () => input.value += 7;
const button8 = () => input.value += 8;
const button9 = () => input.value += 9;
const divide = () => input.value += "/" //"\u00f7";
const multiply = () => input.value += "*";//"\u00d7";
const minus = () => input.value += "-";
const add = () => input.value += "+";
const equals = () => input.value = eval(input.value);
const clearAll = () => input.value = "";



