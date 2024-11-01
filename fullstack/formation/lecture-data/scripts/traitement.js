function traitement() {
  const numbers = [49, 22, 78, 10, 49];

  console.log("Traitement map()");
  const dataMap = numbers.map(operation);
  console.log(dataMap);

  console.log("Traitement filter()");
  const dataFilter = numbers.filter(numbrePaire);
  console.log(dataFilter);

  console.log("Traitement find()");
  const dataFind = numbers.find(numberSearch);
  console.log(dataFind);

  console.log("Traitement sort()");
  const dataSort = numbers.sort();
  console.log("Avant : " + numbers);
  console.log("Apres : " + dataSort);
}

function operation(num) {
  return num + 10;
}

function numbrePaire(nombre) {
  return nombre % 2 == 0;
}

function numberSearch(nombre) {
  return nombre > 50;
}
