function addition(fisrtNumber, secondNumber) {
  return fisrtNumber + secondNumber;
}

function soustraction(fisrtNumber, secondNumber) {
  return fisrtNumber - secondNumber;
}

function multiplication(fisrtNumber, secondNumber) {
  return fisrtNumber * secondNumber;
}

function division(fisrtNumber, secondNumber) {
  return fisrtNumber / secondNumber;
}

function modulo(fisrtNumber, secondNumber) {
  return fisrtNumber % secondNumber;
}

function calculatrice() {
  const valueOfFisrtNumberInput = document.getElementById(
    "valueOfFisrtNumberInput"
  ).value;

  const valueOfSecondNumberInput = document.getElementById(
    "valueOfSecondNumberInput"
  ).value;

  const valueOfOperationSelect =
    document.getElementById("operationSelect").value;

  let result;

  switch (valueOfOperationSelect) {
    case "addition":
      result = addition(fisrtNumber, secondNumber);
      break;
    case "soustraction":
      result = soustraction(fisrtNumber, secondNumber);
      break;
    case "multiplication":
      result = multiplication(fisrtNumber, secondNumber);
      break;
    case "division":
      result = division(fisrtNumber, secondNumber);
      break;
    case "modulo":
      result = modulo(fisrtNumber, secondNumber);
      break;
  }

  document.getElementById("result").innerHTML = result;
}

console.log("Addition", addition(10, 15));
console.log("Soustraction", soustraction(10, 15));
console.log("Multiplication", multiplication(10, 15));
console.log("Division", division(10, 15));
console.log("Module", modulo(10, 15));
