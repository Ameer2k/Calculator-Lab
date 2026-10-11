/*------------------------ Cached Element References ------------------------*/



/*-------------------------------- Constants --------------------------------*/
const display = document.querySelector('.display')
const numbers = document.querySelectorAll('.button.number')
const operators = document.querySelectorAll('.button.operator')
const equals = document.querySelector('.button.equals')
/*-------------------------------- Variables --------------------------------*/
let num1 = ""
let num2 = ""
let operator = ""
 let result;
/*-------------------------------- Functions --------------------------------*/


function clickNumber(event) {
  const number = event.target.textContent;

  if (operator === "") {
    num1 += number;
  } else {
    num2 += number;
  }
  display.textContent += number;
}
function clickOperator(event) {
  const value = event.target.textContent;

  if (value === "C") {
    clearCalculator();
  } else if (num1 !== "") {
    operator = value;
    num2 = "";
    display.textContent = num1 + operator;
  }
}
function clearCalculator() {
  num1 = "";
  num2 = "";
  operator = "";
  display.textContent = "";
}
function calculate() {
  if (num1 === "" || num2 === "") {
    return;
  }

  const a = Number(num1);
  const b = Number(num2);
  if (operator === "+") {
    result = a + b;
  } else if (operator === "-") {
    result = a - b;
  } else if (operator === "*") {
    result = a * b;
  } else if (operator === "/") {
    if (b === 0) {
      result = "Error";
    } else {
      result = a / b;
    }
  } else {
    return;
  }

  display.textContent = result;
  num1 = result === "Error" ? "" : String(result);
  num2 = "";
  operator = "";

}  


/*----------------------------- Event Listeners -----------------------------*/


for (const number of numbers) {
  number.addEventListener("click", clickNumber);
}

for (const button of operators) {
  button.addEventListener("click", clickOperator);
}

equals.addEventListener("click", calculate);
