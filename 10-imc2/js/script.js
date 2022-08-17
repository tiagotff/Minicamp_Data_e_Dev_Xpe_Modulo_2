function start() {
  var buttonCalculeteImc = document.querySelector('#button-calculate-imc');
  buttonCalculeteImc.addEventListener('click', handleButtonClick);

  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');

  inputWeight.addEventListener('input', handleButtonClick);
  inputHeight.addEventListener('input', handleButtonClick);

  handleButtonClick();
}

function calculateImc(weight, height) {
  return weight / (height * height);
}

function handleButtonClick() {
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');
  var imcResult = document.querySelector('#imc-result');
  var imcFrase = document.querySelector('#imc-frase');

  var weight = Number(inputWeight.value);
  var height = Number(inputHeight.value);

  var imc = calculateImc(weight, height);
  var formattedImc = imc.toFixed(2).replace('.', ',');

  if (imc >= 16 && imc < 17) {
    console.log((imcFrase.innerHTML = 'Muito abaixo do peso'));
  } else if (imc >= 17 && imc < 18.5) {
    console.log((imcFrase.innerHTML = 'Abaixo do peso'));
  } else if (imc >= 18.5 && imc < 25) {
    console.log((imcFrase.innerHTML = 'Peso normal'));
  } else if (imc >= 25 && imc < 30) {
    console.log((imcFrase.innerHTML = 'Acima do peso'));
  } else if (imc >= 30 && imc < 35) {
    console.log((imcFrase.innerHTML = 'Obesidade grau I'));
  } else if (imc >= 35 && imc <= 40) {
    console.log((imcFrase.innerHTML = 'Obesidade grau II'));
  } else if (imc > 40) {
    console.log((imcFrase.innerHTML = 'Obesidade grau III'));
  } else {
    console.log(
      (imcFrase.innerHTML =
        'Valor inválido. O IMC não se encontra na faixa de valores.')
    );
  }

  imcResult.textContent = formattedImc;
}

start();
