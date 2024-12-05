//Basic Math functions

const add = ((a, b) => { return Number(a) + Number(b) });

const subtract = ((a, b) => { return Number(a) - Number(b)});

const multiply = ((a, b) => { return Number(a) * Number(b)});

const divide = ((a, b) => { return Number(a) / Number(b)});

//Calculator operation variables

let firstNumber = null;
let secondNumber = null;
let operator = null;
let displayValue = '0';
let result = null;
const buttons = document.querySelectorAll('button');

function operate(a, b, op) {
    if(op === '+') {
        return add(a, b);
    }
    else if(op === '-') {
        return subtract(a, b);
    }
    else if(op === '*') {
        return multiply(a, b);
    }
    else if(op === '/') {
        return divide(a, b);
    }
}

function updateDisplay() {
    const display = document.getElementById('display');
    display.textContent = displayValue;
}

updateDisplay();

function clickButton() {
    buttons.forEach(btn => {
        btn.addEventListener(('click'), () => {
            if(btn.classList.contains('num')) {
                numberInput(btn.value);
                updateDisplay();
            }
            else if(btn.classList.contains('operator')) {
                operatorInput(btn.value);
                updateDisplay();
            }
            else if(btn.classList.contains('equals')) {
                equals();
                updateDisplay();
            }
            else if(btn.classList.contains('clear')) {
                clearDisplay();
                updateDisplay();
            }
        })
    })
}

clickButton();

function numberInput(num) {
    if(operator !== null) {
        if(displayValue === firstNumber) {
            displayValue = num;
        }
        else {
            displayValue += num;
        }
    }
    else if(displayValue === 0 || displayValue === '0') {
        displayValue = num;
    }
    else {
        displayValue += num;
    }
}

function operatorInput(op) {
    operator = op;
    firstNumber = displayValue;
}

function equals() {
    secondNumber = displayValue;
    result = operate(firstNumber, secondNumber, operator);
    displayValue = result;
}

function clearDisplay() {
    firstNumber = null;
    secondNumber = null;
    operator = null;
    result = null;
    displayValue = '0';
}