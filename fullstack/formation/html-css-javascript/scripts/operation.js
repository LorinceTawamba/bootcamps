console.log("Formation Javascript");

let age = 25;
console.log(age);

let poids = 18.35;
console.log(poids);

const PI = 22 / 7;
console.log(PI);

console.log(typeof age, age);

let test = false;
console.log(typeof test, test);

let numbers = [22, 68, 79, 45];
console.log(typeof numbers, numbers);

let premierNombre = 15.83;
let secondNombre = 47;
let resultat;

resultat = premierNombre + secondNombre;
console.log(typeof resultat, resultat);

const data = document.getElementById("titleOfH1First");
console.log(data.innerText);

const all = document.getElementsByTagName("h1");
console.log(all);

function calculer() {
  const valueOfFirstNumberInput = document.getElementById("firstNumber").value;
  const valueOfSecondNumberInput =
    document.getElementById("secondNumber").value;
  console.log(valueOfFirstNumberInput);
  console.log(valueOfSecondNumberInput);
}
