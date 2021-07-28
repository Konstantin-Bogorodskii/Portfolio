"use strict";

const heroContainer = document.querySelector(".hero__container");
heroContainer.addEventListener("click", (event) => {
  const target = event.target;
  const strText = target.textContent;
  const strSplit = strText.split("");
  if (target.classList.contains("fancy") || target == strText) {
    target.textContent = "";
    console.log(target);
    strSplit.forEach((item) => {
      target.innerHTML += "<span>" + item + "</span>";
    });
    let char = 0;
    let timer = setInterval(onTick, 50);

    function onTick() {
      const span = target.querySelectorAll("span")[char];
      span.classList.add("fancy--active");

      char++;
      if (char === strSplit.length) {
        complete();
        return;
      }
    }

    function complete() {
      clearInterval(timer);
      timer = null;
    }
  }
});
