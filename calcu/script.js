let displayValue = '';

function appendValue(val) {
  displayValue += val;
  document.getElementById('display').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = displayValue;
}

function operate(operator) {
  if (displayValue !== '' && displayValue.slice(-1) !== operator) {
    displayValue += operator;
    document.getElementById('display').value = displayValue;
  }
}

function calculate() {
  try {
    const result = eval(displayValue);
    displayValue = result.toString();
    document.getElementById('display').value = displayValue;
  } catch (error) {
    displayValue = 'Error';
    document.getElementById('display').value = displayValue;
  }
}
