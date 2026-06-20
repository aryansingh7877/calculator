const display = document.getElementById("display");
const buttons = document.querySelector(".buttons");

let firstNumber = "";
let secondNumber = "";
let operator = "";

buttons.addEventListener("click", function (event) {

    let button = event.target;

    if (button.tagName !== "BUTTON") {
        return;
    }

    // Check for operators using data-operator attribute
    if (button.dataset.operator) {
        firstNumber = Number(display.innerText);
        operator = button.dataset.operator;
        display.innerText = "";
        return;
    }

    // Check for numbers using data-number attribute
    if (button.dataset.number) {
        display.innerText += button.dataset.number;
        return;
    }

    // Check for decimal
    if (button.dataset.decimal) {
        if (!display.innerText.includes(".")) {
            display.innerText += ".";
        }
        return;
    }

    // Check for actions using data-action attribute
    if (button.dataset.action) {
        if (button.dataset.action == "calculate") {
            secondNumber = Number(display.innerText);
            let answer = 0;

            if (operator == "+") {
                answer = firstNumber + secondNumber;
            }
            else if (operator == "-") {
                answer = firstNumber - secondNumber;
            }
            else if (operator == "*") {
                answer = firstNumber * secondNumber;
            }
            else if (operator == "/") {
                if (secondNumber == 0) {
                    answer = "Error";
                }
                else {
                    answer = firstNumber / secondNumber;
                }
            }

            display.innerText = answer;
        }
        else if (button.dataset.action == "delete") {
            display.innerText = display.innerText.slice(0, -1);
        }
        else if (button.dataset.action == "clear") {
            display.innerText = "0";
            firstNumber = "";
            secondNumber = "";
            operator = "";
        }
    }

});