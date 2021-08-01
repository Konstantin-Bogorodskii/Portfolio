const burger = document.querySelector(".burger");
const navbar = document.querySelector(".nav__list");

burger.addEventListener("click", (e) => {
  e.currentTarget.classList.toggle("burger--active");
  navbar.classList.toggle("nav__list--active");
});
