
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

const buttons = document.querySelectorAll('button');

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

function clickButton() {
    buttons.forEach((button) => {
        button.addEventListener(('click'), () => {
            if(buttons.classList.contains('num')) {
                inputNumber(buttons.value);
                updateDisplay();
            }
        })
    })
}

clickButton();

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
    firstOperator = operator;
    firstNumber = displayValue;
}

function inputEquals() {
displayValue = secondNumber;
result = operate(firstNumber, firstOperator, secondNumber);
firstNumber = displayValue;
secondNumber = null;
firstOperator = null;
result= null;

}

function clearDisplay() {
    displayValue = '0';
    firstNumber = null;
    secondNumber = null;
    operator = null;
    result = null;
}

// numButtons.forEach((button) => {
//         button.addEventListener('click', () => {
//             //if(operator[1] === '+')
//             if(display.textContent === '0') {
//                 return display.textContent = Number(button.id);
//             } else {
//                 return display.textContent += Number(button.id);
//             }
//         });
//     });

// operatorButtons.forEach((button) => {
//     button.addEventListener('click', () => {
//         if(button.id === 'add') {
//             let firstNumber = display.textContent;
//             let operator = '+';
//             console.log(operator);
//             console.log(firstNumber);
//         } else if(button.id === 'subtract') {
//             return displayContent;
//         } else if(button.id === 'multiply') {
//             return displayContent;
//         } else if(button.id === 'divide') {
//             return displayContent;
//         } else if(button.id === 'clear') {
//             return display.textContent = '';
//         }
//     })
// })
// console.log(firstNumber);

