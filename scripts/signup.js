document.getElementById("signupForm").addEventListener("submit", function(e){

  e.preventDefault();

  const data = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value
  };

  fetch("http://localhost:3000/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(response => {

    if(response.message === "Account created successfully"){

      alert("Welcome to Zencor! 🎉");

      localStorage.setItem("zencorUser", JSON.stringify({
        email: data.email
      }));

      window.location.href = "index.html";
    }

  });

});
