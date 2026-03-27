const form = document.getElementById("dataForm");
const tableBody = document.querySelector("#dataTable tbody");

form.addEventListener("submit", function(e) 
{
    e.preventDefault();

    const name = document.getElementById("name");
    const age = document.getElementById("age");
    const gender = document.getElementById("gender");

    if (name.value === "" || age.value === "" || gender.value === "") 
    {
        alert("Please fill all fields");
        return;
    }

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${name.value}</td>
        <td>${age.value}</td>
        <td>${gender.value}</td>
        <td><button class="delete-btn">Delete</button></td>
    `;

    row.querySelector(".delete-btn").addEventListener("click", function() 
    {
        row.remove();
    });

    tableBody.appendChild(row);

    form.reset();
});
