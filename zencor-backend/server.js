const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3000;

/* SIGNUP */
app.post("/signup", (req, res) => {

const user = {
firstName: req.body.firstName,
lastName: req.body.lastName,
email: req.body.email,
password: req.body.password,
dateRegistered: new Date()
};

let users = [];

if(fs.existsSync("users.json")){
const data = fs.readFileSync("users.json");
users = JSON.parse(data);
}

const existingUser = users.find(u => u.email === user.email);

if(existingUser){
return res.json({message:"Email already registered"});
}

users.push(user);

fs.writeFileSync("users.json", JSON.stringify(users,null,2));

res.json({message:"Account created successfully"});

});

/* LOGIN */

app.post("/login",(req,res)=>{

const {email,password} = req.body;

const data = fs.readFileSync("users.json");
const users = JSON.parse(data);

const user = users.find(u=>u.email===email && u.password===password);

if(user){
res.json({message:"Login successful"});
}else{
res.json({message:"Invalid email or password"});
}

});

app.listen(PORT, ()=>{
console.log("Zencor user system running on port 3000");
});

/* GET ALL USERS */

app.get("/users",(req,res)=>{

const data = fs.readFileSync("users.json");
const users = JSON.parse(data);

res.json(users);

});