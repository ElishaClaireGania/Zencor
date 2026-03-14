Zencor Agricultural Website
Project Overview

The Zencor Agricultural Website is a marketing and educational platform designed to provide farmers with crop protection insights, agricultural solutions, and product updates.

The website showcases Zencor's agricultural products while providing educational content through blog articles and farming guides.

The system also includes a user registration and login feature that allows visitors to join the Zencor community. Registered user data is stored in a backend database and can be viewed through an admin dashboard for audience analysis and marketing insights.

Features
Frontend Website

Responsive agricultural marketing website

Product showcase for crop protection solutions

Blog section with farming tips and crop care guides

Contact page for customer inquiries

Search Engine Optimization (SEO) features including:

Meta tags

Open Graph tags

Structured schema markup

Google Analytics integration for visitor tracking

User Authentication System

User Registration (Signup)

User Login Authentication

Secure storage of user information

Optional community membership for agricultural updates

Backend System

The backend system processes user registration and authentication.

It is built using:

Node.js

Express.js

CORS

The backend handles:

storing registered users

validating login credentials

retrieving registered users for the admin dashboard

Admin Dashboard

An admin dashboard displays registered users and allows administrators to analyze audience engagement.

Project Structure
zencor-project
│
├ css
├ img
├ scripts
│
├ index.html
├ about.html
├ product.html
├ blog.html
├ contact.html
├ signup.html
├ login.html
├ admin.html
│
└ zencor-backend
    ├ server.js
    ├ users.json
    ├ package.json
    └ package-lock.json
Backend Setup Instructions

The backend server handles user registration, login authentication, and retrieving registered users.

Step 1 — Install Node.js

Download and install Node.js (LTS version):

https://nodejs.org

After installation, verify Node.js is installed correctly by running:

node -v
npm -v
Step 2 — Navigate to the Backend Folder

Open Git Bash, Terminal, or Command Prompt and run:

cd zencor-backend
Step 3 — Initialize the Node.js Project

If running the backend for the first time, initialize the Node.js project:

npm init -y

This creates the file:

package.json
Step 4 — Install Required Dependencies

Install the backend libraries required to run the server:

npm install express cors

This installs:

Express → Node.js web server framework

CORS → Allows communication between frontend and backend

Running this command will create:

node_modules
package-lock.json
Step 5 — Start the Backend Server

Run the backend server using:

node server.js

If the server starts successfully, the terminal will display:

Zencor user system running on port 3000

The backend server will run at:

http://localhost:3000
Backend API Routes

The backend provides the following API endpoints:

Register User
POST /signup

Stores a new registered user in the database.

Login User
POST /login

Authenticates a registered user's login credentials.

Retrieve Registered Users
GET /users

Returns all registered users for the admin dashboard.

Database

Registered users are stored in a JSON file:

users.json

Example database structure:

[
  {
    "firstName": "Aira",
    "lastName": "Rosal",
    "email": "aira@test.com",
    "password": "123456",
    "dateRegistered": "2026-03-14"
  }
]
Running the Website

Start the backend server:

node server.js

Open the website by launching:

index.html

Register a user through:

signup.html

Login using:

login.html

View registered users through the admin dashboard:

admin.html
Important Notes

Do not upload the node_modules folder to GitHub because it is very large.

Anyone running the project can recreate it by installing dependencies with:

npm install express cors
Purpose of the System

This project demonstrates how a marketing website can integrate:

SEO optimization

user engagement tracking

authentication systems

backend data management

to support digital marketing strategies for agricultural businesses.

The registration system allows Zencor to analyze its audience and understand visitor engagement with its agricultural solutions.
