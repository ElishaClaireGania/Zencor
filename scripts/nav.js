// MOBILE MENU TOGGLE
const menuToggle = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active"); // animate bars → X
  navLinks.classList.toggle("active"); // slide menu in/out
});

// Close menu when a link is clicked
document.querySelectorAll(".nav-links a").forEach((link) =>
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.classList.remove("active");
  }),
);

// SCROLL TO TOP BUTTON
const scrollBtn = document.getElementById("scrollToTop");

window.onscroll = function () {
  // Increased threshold slightly to account for the taller mobile Hero
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    scrollBtn.style.display = "flex";
  } else {
    scrollBtn.style.display = "none";
  }
};

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
