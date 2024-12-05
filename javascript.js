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
const buttons = document.querySelectorAll('button');
const numBtns = document.querySelectorAll('num');
const opBtns = document.querySelectorAll('operator');
const equalsBtn = document.querySelector('.equals');
const clearBtn = document.querySelector('clear');

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

operationDisplay();

function clickButton() {
    buttons.forEach(btn => {
        btn.addEventListener(('click'), () => {
            if(btn.classList.contains('num')) {
                numberInput(btn.value);
                operationDisplay();
            }
            else if(btn.classList.contains('operator')) {
                operatorInput(btn.value);
                operationDisplay();
                console.log(operator);
                console.log(firstNumber);
            }
        })
    })
}

clickButton();

function numberInput(num) {
    if(displayValue === 0 || displayValue === '0') {
        displayValue = num;
    }
    else {
        displayValue += num;
    }
}

function operatorInput(op) {
    operator = op;
    firstNumber = displayValue;
    displayValue += op;
}