const languages = document.querySelectorAll(".nav__img");
const allLanguages = ["ru", "en"];

languages.forEach((lang) => {
  lang.classList.remove("nav__img--active");

  lang.addEventListener("click", function (e) {
    e.preventDefault();

    let langValue = this.dataset.lang;
    changeUrlLanguage(langValue);
  });
});

function changeUrlLanguage(hash) {
  location.href = window.location.pathname + "#" + hash;
  location.reload();

  // context.classList.add("nav__img--active");
}

function changeLanguage() {
  let hash = window.location.hash;
  hash = hash.substr(1);
  if (!allLanguages.includes(hash)) {
    changeUrlLanguage("en");

    languages.forEach((lang) => {
      let langValue = lang.dataset.lang;

      if (langValue === hash) {
        lang.classList.add("nav__img--active");
      }
    });
  }
}

changeLanguage();
