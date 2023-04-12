function calculate() {
    var operand1 = parseFloat(document.getElementById('operand1').value);
    var operand2 = parseFloat(document.getElementById('operand2').value);
    var operator = document.getElementById('operator').value;
    var result;

    if (operator == '+') {
      result = operand1 + operand2;
    } else if (operator == '-') {
      result = operand1 - operand2;
    } else if (operator == '*') {
      result = operand1 * operand2;
    } else if (operator == '/') {
      result = operand1 / operand2;
    }

    document.getElementById('result').value = result;
  }