document.getElementById("loginForm").addEventListener("submit", function(e){

e.preventDefault();

const data = {

email: document.getElementById("email").value,
password: document.getElementById("password").value

};

fetch("http://localhost:3000/login",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(data)

})

.then(res => res.json())
.then(data => {

alert(data.message);

if(data.message === "Login successful"){
window.location.href = "index.html";
}

});

});