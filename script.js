
// Basic Math functions

const add = ((a, b) => { return Number(a) + Number(b) });

const subtract = ((a, b) => { return Number(a) - Number(b)});

const multiply = ((a, b) => { return Number(a) * Number(b)});

const divide = ((a, b) => { return Number(a) / Number(b)});

//console.log(divide(10, 2));

// Calculator operations

let firstNumber = '';
let secondNumber = '';
let operator = '';

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

const numButtons = document.querySelectorAll('.num');
const operatorButtons= document.querySelectorAll('.operator');
const display = document.querySelector('.content');
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
let numbers = '0123456789*-+/';
const displayContent = display.textContent;

const NumInput = numButtons.forEach((button) => {
        button.addEventListener('click', () => {
            return display.textContent += Number(button.id)
        });
    });

const operatorInput = operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if(button.id === 'add') {
            return display.textContent += '+';
        } else if(button.id === 'subtract') {
            return display.textContent += '-';
        } else if(button.id === 'multiply') {
            return display.textContent += '*';
        } else if(button.id === 'divide') {
            return display.textContent += '/';
        } else if(button.id === 'clear') {
            return display.textContent = '';
        }
    })
})


