// Hero
const heroContainer = document.querySelector(".hero__container");

heroContainer.addEventListener("click", (event) => {
  const target = event.target;
  const strText = target.textContent;
  const strSplit = strText.split("");

  let char = 0;
  let timer = setInterval(onTick, 50);

  function complete() {
    clearInterval(timer);
    timer = null;
  }

  function onTick() {
    const span = target.querySelectorAll("span")[char];
    span.classList.add("fancy--active");

    char++;
    if (char === strSplit.length) {
      complete();
      return;
    }
  }

  if (target.classList.contains("fancy")) {
    target.textContent = "";
    strSplit.forEach((item) => {
      if (item === " ") {
        target.innerHTML += "<span>" + "&nbsp;" + "</span>";
      } else {
        target.innerHTML += "<span>" + item + "</span>";
      }
    });
  }
});
