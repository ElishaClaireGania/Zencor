const menuToggle = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navLinks.classList.toggle("active");
});
document.querySelectorAll(".nav-links a").forEach((link) =>
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.classList.remove("active");
  }),
);
const scrollBtn = document.getElementById("scrollToTop");
window.onscroll = function () {
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
  window.scrollTo({ top: 0, behavior: "smooth" });
});
