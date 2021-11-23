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

    smoothScroll(blockId, 1000);
  });
}

const heroBtnAnchor = document.querySelector(".hero__btn");
heroBtnAnchor.addEventListener("click", (e) => {
  e.preventDefault();
  const btn = e.target;
  const blockId = btn.getAttribute("href");

  smoothScroll(blockId, 1000);
});

const scrollUpBtn = document.querySelector(".scroll-up");
scrollUpBtn.addEventListener("click", (e) => {
  e.preventDefault();
  scrollToTop();
});

const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};

const smoothScroll = function smoothScroll(targetEl, duration) {
  const headerElHeight = document.querySelector("#header").clientHeight;
  const target = document.querySelector(targetEl);
  const targetPosition =
    target.getBoundingClientRect().top - headerElHeight + 10;

  let startPosition = window.pageYOffset;
  let startTime = null;

  let ease = function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  let animation = function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    let timeElapsed = currentTime - startTime;
    let run = ease(timeElapsed, startPosition, targetPosition, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  };

  requestAnimationFrame(animation);
};
