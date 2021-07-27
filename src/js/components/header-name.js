"use strict";
function fancyText(strSplit, strText) {}

const heroContainer = document.querySelector(".hero__container");
heroContainer.addEventListener("click", (event) => {
  const target = event.target;
  if (target.classList.contains("fancy")) {
    const strText = target.textContent;
    const strSplit = strText.split("");
    for (let i = 0; i < strSplit.length; i++) {
      target.innerHTML += "<span>" + strSplit[i] + "</span>";
    }
  }
});
