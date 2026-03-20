document.getElementById("loginForm").addEventListener("submit", function (e) {

  e.preventDefault();

  const data = {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value
  };

  fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(response => {

    alert(response.message);

    if (response.message === "Login successful") {

      localStorage.setItem("zencorUser", JSON.stringify({
        email: data.email
      }));

      window.location.href = "index.html";
    }

  });

});
