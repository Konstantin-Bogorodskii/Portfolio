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
    document.querySelector("" + blockId).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
