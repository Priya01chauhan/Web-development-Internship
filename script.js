// script.js
document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    let currentInput = '';
    let operator = '';
    let previousInput = '';

    function updateDisplay(value) {
        display.textContent = value;
    }

    document.querySelectorAll(".number").forEach(function (button) {
        button.addEventListener("click", function () {
            currentInput += this.id;
            updateDisplay(currentInput);
        });
    });

    document.getElementById("clear").addEventListener("click", function () {
        currentInput = '';
        operator = '';
        previousInput = '';
        updateDisplay('');
    });

    document.getElementById("backspace").addEventListener("click", function () {
        currentInput = currentInput.slice(0, -1);
        updateDisplay(currentInput);
    });

    document.getElementById("decimal").addEventListener("click", function () {
        if (!currentInput.includes(".")) {
            currentInput += ".";
            updateDisplay(currentInput);
        }
    });

    function setOperator(op) {
        if (currentInput === '') return;
        if (previousInput !== '') {
            calculate();
        }
        operator = op;
        previousInput = currentInput;
        currentInput = '';
    }

    document.getElementById("add").addEventListener("click", function () {
        setOperator('+');
    });

    document.getElementById("subtract").addEventListener("click", function () {
        setOperator('-');
    });

    document.getElementById("multiply").addEventListener("click", function () {
        setOperator('*');
    });

    document.getElementById("divide").addEventListener("click", function () {
        setOperator('/');
    });

    document.getElementById("equals").addEventListener("click", function () {
        calculate();
    });

    function calculate() {
        let result;
        const prev = parseFloat(previousInput);
        const curr = parseFloat(currentInput);

        if (isNaN(prev) || isNaN(curr)) return;

        switch (operator) {
            case '+':
                result = prev + curr;
                break;
            case '-':
                result = prev - curr;
                break;
            case '*':
                result = prev * curr;
                break;
            case '/':
                result = prev / curr;
                break;
            default:
                return;
        }

        currentInput = result.toString();
        operator = '';
        previousInput = '';
        updateDisplay(currentInput);
    }
});
