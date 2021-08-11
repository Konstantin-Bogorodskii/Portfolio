"use strict";

// Header-Sticky
const header = document.querySelector(".header");
const sticky = header.offsetTop;
const scrollUpBtn = document.querySelector(".scroll-up");

window.onscroll = function () {
  myFunction();
};

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("header__sticky");
    scrollUpBtn.classList.add("scroll-up__show");
  } else {
    header.classList.remove("header__sticky");
    scrollUpBtn.classList.remove("scroll-up__show");
  }
}

scrollUpBtn.addEventListener("click", (item) => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
