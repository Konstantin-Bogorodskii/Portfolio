// Hero
const heroContainer = document.querySelector(".hero__container");

heroContainer.addEventListener("click", (event) => {
  const target = event.target;
  const strText = target.textContent;
  const strSplit = strText.split("");
  let char = 0;
  let timer = setInterval(onTick, 70);
  let isComplete = false;

  function complete() {
    clearInterval(timer);
    timer = null;
  }

  function onTick() {
    if (
      target.classList.contains("container") ||
      target.classList.contains("btn") ||
      target.innerHTML == strText ||
      target.innerHTML == "&nbsp;"
    )
      return;

    const span = target.querySelectorAll("span")[char];
    span.classList.add("fancy--active");
    char++;
    if (char === strSplit.length) {
      complete();
      target.innerHTML = strText;
      return target.innerHTML;
    }
  }

  if (target.classList.contains("fancy")) {
    if (!target.innerHTML == strText) return;
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
