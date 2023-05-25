getAll();
function getAll(){
  fetch("http://localhost:3000/user")
    // Converting received data to JSON
    .then((response) => response.json())
    .then((json) => {
      // Create a variable to store HTML
      let li = ``;
      console.log(json);
      // Loop through each data and add a table row
      json.forEach((user) => {
        li += `
            <tr class="table-secondary">
                <td scope="row" style="width: 100px !important;  ">${user.user_id}</th>
                <td style="color : black; background-color : white">${user.data}</td>
            </tr>
            `;
      })
      // Display result
      document.getElementById("users").innerHTML = li;
  });
}