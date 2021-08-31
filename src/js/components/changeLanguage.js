const languages = document.querySelectorAll(".nav__img");
const documentTitle = document.querySelector("title");
const allLanguages = ["ru", "en"];

const langData = {
  title: {
    en: "Bogorodsky Konstantin Portfolio",
    ru: "Богородский Константин Портфолио",
  },

  home: {
    en: "home",
    ru: "главная",
  },
};

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
}

function changeLanguage() {
  let hash = window.location.hash;
  hash = hash.substr(1);
  if (!allLanguages.includes(hash)) {
    changeUrlLanguage("en");
  }
  documentTitle.textContent = langData.title[hash];
}

changeLanguage();

// languages.forEach((lang) => {
//   let langValue = lang.dataset.lang;

//   if (langValue === hash) {
//     lang.classList.add("nav__img--active");
//   }
// });
