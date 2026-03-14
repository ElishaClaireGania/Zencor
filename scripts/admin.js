fetch("http://localhost:3000/users")

.then(res => res.json())

.then(users => {

const table = document.getElementById("userTable");

users.forEach(user => {

const row = document.createElement("tr");

row.innerHTML = `
<td>${user.firstName}</td>
<td>${user.lastName}</td>
<td>${user.email}</td>
<td>${new Date(user.dateRegistered).toLocaleDateString()}</td>
`;

table.appendChild(row);

});

});