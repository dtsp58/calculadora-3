import { soma, subtracao, multiplicacao, divisao } from './calculator.js';

const form = document.getElementById('calculatorForm');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const number1 = parseFloat(document.getElementById('number1').value);
  const number2 = parseFloat(document.getElementById('number2').value);
  const operation = document.querySelector('input[name="operation"]:checked').value;

  let result;

  if (operation === 'add') {
    result = soma(number1, number2);
  } else if (operation === 'subtract') {
    result = subtracao(number1, number2);
  } else if (operation === 'multiply') {
    result = multiplicacao(number1, number2);
  } else if (operation === 'divide') {
    result = divisao(number1, number2);
  }

  resultDiv.textContent = `Resultado: ${result}`;
});
