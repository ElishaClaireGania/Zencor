document.addEventListener("DOMContentLoaded", () => {

  const authArea = document.getElementById("authArea");
  const user = JSON.parse(localStorage.getItem("zencorUser"));

  if (!authArea) return;

  // ================================
  // IF USER IS LOGGED IN
  // ================================
  if (user) {

    const initial = user.email.charAt(0).toUpperCase();

    authArea.innerHTML = `
      <div class="user-menu" id="userMenu">
        <div class="user-icon">${initial}</div>

        <div class="user-dropdown" id="dropdown">
          <p>${user.email}</p>
          <button id="logoutBtn">Sign Out</button>
        </div>
      </div>
    `;

    const menu = document.getElementById("userMenu");
    const dropdown = document.getElementById("dropdown");

    // Toggle dropdown
    menu.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdown.classList.toggle("show");
    });

    // Close when clicking outside
    document.addEventListener("click", () => {
      dropdown.classList.remove("show");
    });

    // Logout
    document.getElementById("logoutBtn").addEventListener("click", () => {
      localStorage.removeItem("zencorUser");
      window.location.reload();
    });

  }

  // ================================
  // IF USER IS NOT LOGGED IN
  // ================================
  else {

    authArea.innerHTML = `
      <a href="login.html" class="login-btn">Log In</a>
    `;

  }

});