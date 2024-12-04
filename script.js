
// Basic Math functions

// const add = ((a, b) => { return Number(a) + Number(b) });

// const subtract = ((a, b) => { return Number(a) - Number(b)});

// const multiply = ((a, b) => { return Number(a) * Number(b)});

// const divide = ((a, b) => { return Number(a) / Number(b)});

// Calculator operations
let displayValue = '0';
let firstNumber = null;
let secondNumber = null;
let firstOperator = null;
let result = null;

// Operate function

const buttons = document.querySelectorAll('button');

// console.log(operate('5', '*', '5'));

// Function that populates the display

function updateDisplay() {
    const display = document.getElementById('display')
    display.innerText = displayValue;
}

updateDisplay();

function clickButton() {
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener(('click'), () => {
            if(buttons[i].classList.contains('num')) {
                inputNumber(buttons[i].value);
                updateDisplay();
            }
            else if(buttons[i].classList.contains('operator')) {
                inputOperator(buttons[i].value);
                updateDisplay();
            }
            else if(buttons[i].classList.contains('equals')) {
                inputEquals();
                updateDisplay();
            }
            else if(buttons[i].classList.contains('clear')) {
                clearDisplay();
                updateDisplay();
            }
        })
    }
}

clickButton();

function inputNumber(number) {
    if(firstOperator === null) {
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
    secondNumber = displayValue;
    result = operate(Number(firstNumber), Number(secondNumber), firstOperator);
    displayValue = result
    firstNumber = displayValue;
}

function clearDisplay() {
    displayValue = '0';
    firstNumber = null;
    secondNumber = null;
    firstOperator = null;
    result = null;
}

function operate(a, b, op) {
    if(op === '+') {
        return a + b;
    } else if(op === '-') {
        return a - b;
    } else if(op === '*') {
        return a * b;
    } else if(op === '/') {
        return a / b;
    } else {return 'ERROR';}
};

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

