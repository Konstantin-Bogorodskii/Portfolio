const sections = document.querySelectorAll("section[id]");
const anchors = document.querySelectorAll(".nav__link");

function scrollActive() {
  document.activeElement.blur();

  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 80;
    let sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__list a[href*=" + sectionId + "]")
        .classList.add("nav__active");
    } else {
      document
        .querySelector(".nav__list a[href*=" + sectionId + "]")
        .classList.remove("nav__active");
    }
  });
}

window.addEventListener("scroll", scrollActive);

for (const anchor of anchors) {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();
    e.target.classList.add("nav__active");
    const blockId = anchor.getAttribute("href");
    const yOffset = -60;
    let y =
      document.querySelector("" + blockId).getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    setTimeout(function () {
      window.scrollTo({ left: 0, top: y, behavior: "smooth" });
    }, 150);
  });
}

const heroBtnAnchor = document.querySelector(".hero__btn");
heroBtnAnchor.addEventListener("click", (e) => {
  e.preventDefault();
  const btn = e.target;
  const blockId = btn.getAttribute("href");
  const yOffset = -60;

  let y =
    document.querySelector("" + blockId).getBoundingClientRect().top +
    window.pageYOffset +
    yOffset;

  setTimeout(function () {
    window.scrollTo({ left: 0, top: y, behavior: "smooth" });
  }, 150);
});
