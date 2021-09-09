const languages = document.querySelectorAll(".nav__img");
const documentTitle = document.querySelector("title");
const allLanguages = ["ru", "en"];
const docTitleLang = {
  en: "Bogorodsky Konstantin Portfolio",
  ru: "Богородский Константин Портфолио",
};

const langData = {
  home: {
    en: "home",
    ru: "главная",
  },
  about: {
    en: "about",
    ru: "обо мне",
  },
  skills: {
    en: "skills",
    ru: "навыки",
  },
  projects: {
    en: "projects",
    ru: "проекты",
  },
  contact: {
    en: "contact",
    ru: "контакты",
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
  documentTitle.textContent = docTitleLang[hash];

  for (const key in langData) {
    document.querySelector(`.lang__${key}`).textContent = langData[key][hash];
  }
}

changeLanguage();

// languages.forEach((lang) => {
//   let langValue = lang.dataset.lang;

//   if (langValue === hash) {
//     lang.classList.add("nav__img--active");
//   }
// });
