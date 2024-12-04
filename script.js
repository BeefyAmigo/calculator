
// Basic Math functions

const add = ((a, b) => { return Number(a) + Number(b) });

const subtract = ((a, b) => { return Number(a) - Number(b)});

const multiply = ((a, b) => { return Number(a) * Number(b)});

const divide = ((a, b) => { return Number(a) / Number(b)});

//console.log(divide(10, 2));

// Calculator operations
let displayValue = '0';
let firstNumber = null;
let secondNumber = null;
let firstOperator = null;
let result = null;

// Operate function

function operate(firstNumber, operator, secondNumber) {
    if(operator === '+') {
        return add(firstNumber, secondNumber);
    } else if(operator === '-') {
        return subtract(firstNumber, secondNumber);
    } else if(operator === '*') {
        return multiply(firstNumber, secondNumber);
    } else if(operator === '/') {
        return divide(firstNumber, secondNumber);
    } else {return ERROR;}
};
// console.log(operate('5', '*', '5'));

// Function that populates the display

function updateDisplay() {
    const display = document.getElementById('display')
    display.innerText = displayValue;
    if(displayValue.length > 9) {
        display.innerText = displayValue.substring(0,9);
    }
}

updateDisplay();

function inputNumber(number) {
    if(operator === null) {
        if(displayValue === '0' || displayValue === 0) {
            displayValue = number;
        }
        else if (displayValue === firstNumber) {
            displayValue = number;
        }
        else {
            displayValue += number;
        }
    }
    else {
        if(displayValue === firstNumber) {
            displayValue = number;
        }
        else {
            displayValue += number;
        }
    }
}

function inputOperator(operator) {

}

function inputEquals() {

}

function clearDisplay() {
    displayValue = '0';
    firstNumber = null;
    secondNumber = null;
    operator = null;
    result = null;
}

const buttons = document.querySelectorAll('button');
const operatorButtons= document.querySelectorAll('.operator');
//const display = document.querySelector('#display');
// const one = document.querySelector('#one');
// const two = document.querySelector('#two');
// const three = document.querySelector('#three');
// const four = document.querySelector('#four');
// const five = document.querySelector('#five');
// const six = document.querySelector('#six');
// const seven = document.querySelector('#seven');
// const eight = document.querySelector('#eight');
// const nine = document.querySelector('#nine');
// const zero = document.querySelector('#zero');

numButtons.forEach((button) => {
        button.addEventListener('click', () => {
            //if(operator[1] === '+')
            if(display.textContent === '0') {
                return display.textContent = Number(button.id);
            } else {
                return display.textContent += Number(button.id);
            }
        });
    });

operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if(button.id === 'add') {
            let firstNumber = display.textContent;
            let operator = '+';
            console.log(operator);
            console.log(firstNumber);
        } else if(button.id === 'subtract') {
            return displayContent;
        } else if(button.id === 'multiply') {
            return displayContent;
        } else if(button.id === 'divide') {
            return displayContent;
        } else if(button.id === 'clear') {
            return display.textContent = '';
        }
    })
})
console.log(firstNumber);

