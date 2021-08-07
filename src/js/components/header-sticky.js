"use strict";

// Header-Sticky
const header = document.querySelector(".header");
const sticky = header.offsetTop;

window.onscroll = function () {
  myFunction();
};

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("header__sticky");
  } else {
    header.classList.remove("header__sticky");
  }
}
