function handleResponse(response) {
  return response.json();
}

const handleData = (data, choice) => {
  let tableLines = "";
  let cardLines = "";
  for (let index = 0; index < data.length; index++) {
    const user = data[index];
    if (choice == 1) {
      const tableLine = ` 
        <thead>
            <th>Id</th>
            <th>Nom</th>
            <th>Telephone</th>
            <th>Courriel</th>
        </thead>
        <tbody>
          <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.phone}</td>
            <td>${user.email}</td>
          </tr>
        </tbody>
        <tfoot>
        
        </tfoot>
      `;
      tableLines = tableLines + tableLine;
    } else if (choice == 2) {
      const cardLine = `
        <div class="col-sm-12 col-md-6 col-lg-6 mb-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${user.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${user.phone}</h6>
              <p class="card-text">${user.email}</p>
            </div>
          </div>
        </div>
      `;
      cardLines = cardLines + cardLine;
    }
  }
  document.getElementById("cardBody").innerHTML = cardLines;
  document.getElementById("tableUser").innerHTML = tableLines;
  /*  if (choice == 1) {
    console.log("Tableau");
    document.getElementById("tbody").innerHTML = tableLines;
    document.getElementById("gridUserClose").innerHTML = ` `;
  } else if (choice == 2) {
    console.log("Grille");
    document.getElementById("cardBody").innerHTML = cardLines;
    document.getElementById("tableUserClose").innerHTML = ` `;
  }*/
};

const handleDataGrid = (data) => {};

function fetchUsers(choix) {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => handleResponse(response))
    .then((data) => handleData(data, choix));
}
