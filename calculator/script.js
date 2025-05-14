const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let currentInput = '';
let resetNext = false;

function updateDisplay(value) {
    display.textContent = value;
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
        if (button.id === 'clear') {
            currentInput = '';
            updateDisplay('0');
        } else if (button.id === 'equals') {
            try {
                // Evaluate the expression
                let result = eval(currentInput);
                if (result === undefined) result = '';
                updateDisplay(result);
                currentInput = result.toString();
                resetNext = true;
            } catch {
                updateDisplay('Error');
                currentInput = '';
                resetNext = true;
            }
        } else {
            if (resetNext) {
                if ('0123456789.'.includes(value)) {
                    currentInput = value;
                } else {
                    currentInput += value;
                }
                resetNext = false;
            } else {
                currentInput += value;
            }
            updateDisplay(currentInput);
        }
    });
}); 