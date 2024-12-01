
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
console.log(operate('5', '*', '5'));
