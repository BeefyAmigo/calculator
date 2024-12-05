//Basic Math functions

const add = ((a, b) => { return Number(a) + Number(b) });

const subtract = ((a, b) => { return Number(a) - Number(b)});

const multiply = ((a, b) => { return Number(a) * Number(b)});

const divide = ((a, b) => { return Number(a) / Number(b)});

//Calculator operation variables

let firstNumber = null;
let secondNumber = null;
let operator = null;
let mainDisplayValue = '0';
let opDisplayValue = null;
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

function operationDisplay() {
    const opDisplay = document.querySelector('.op-display');
    opDisplay.innerText = opDisplayValue;
}

operationDisplay();

function resultDisplay() {
    const mainDisplay = document.querySelector('.result');
    mainDisplay.innerText = mainDisplayValue;
}

resultDisplay();

function clickButton() {
    buttons.forEach(btn => {
        btn.addEventListener(('click'), () => {
            if(btn.classList.contains('num')) {
                opDisplayValue = btn.value;
                operationDisplay();
            }
            else if(btn.classList.contains('operator')) {
                opDisplayValue += btn.value;
                operationDisplay();
            }
        })
    })
}

clickButton();