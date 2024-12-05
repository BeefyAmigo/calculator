//Basic Math functions

const add = ((a, b) => { return Number(a) + Number(b) });

const subtract = ((a, b) => { return Number(a) - Number(b)});

const multiply = ((a, b) => { return Number(a) * Number(b)});

const divide = ((a, b) => { return Number(a) / Number(b)});

//Calculator operation variables

let firstNumber = null;
let secondNumber = null;
let operator = null;
const buttons = document.querySelectorAll('button');
const opDisplay = document.getElementById('.op-display');
const resultDisplay = document.querySelector('.result');
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

}

function resultDisplay() {

}