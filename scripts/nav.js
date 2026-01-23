// Mobile Menu Toggle
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".nav-links");

menu.addEventListener("click", () => {
  menuLinks.classList.toggle("active");
  menu.classList.toggle("is-active");
});

// Close menu when a link is clicked
document.querySelectorAll(".nav-links a").forEach((n) =>
  n.addEventListener("click", () => {
    menuLinks.classList.remove("active");
    menu.classList.remove("is-active");
  }),
);

// SCROLL TO TOP BUTTON
const scrollBtn = document.getElementById("scrollToTop");

window.onscroll = function () {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    scrollBtn.style.display = "block";
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
