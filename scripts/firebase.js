import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAamoOM3CBpYn-hMrR4WE7h0DMf8ZXFALM",
  authDomain: "zencor-auth.firebaseapp.com",
  projectId: "zencor-auth",
  storageBucket: "zencor-auth.firebasestorage.app",
  messagingSenderId: "731777876317",
  appId: "1:731777876317:web:9855c0e1563ba9c46de8b4",
  measurementId: "G-6KVWPQ2VMF"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

window.googleLogin = function () {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;

      localStorage.setItem("zencorUser", JSON.stringify({
        email: user.email
      }));

      alert("Logged in with Google!");
      window.location.href = "index.html";
    })
    .catch((error) => {
      console.error(error);
      alert("Google login failed");
    });
};