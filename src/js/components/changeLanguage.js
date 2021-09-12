const languages = document.querySelectorAll(".nav__img");
const documentTitle = document.querySelector("title");
const allLanguages = ["ru", "en"];
const docTitleLang = {
  en: "Bogorodsky Konstantin Front-End Developer",
  ru: "Богородский Константин Front-End Разработчик",
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
  hero__btn: {
    en: "View My Projects",
    ru: "Показать Мои Проекты",
  },
  hero__text: {
    en: "I&rsquo;m a&nbsp;Front-End Developer.",
    ru: "И я&nbsp;Front-End Разработчик.",
  },
  hero__title: {
    en: "Hello, I&rsquo;m Konstantin Bogorodsky.",
    ru: "Привет! Я Константин Богородский.",
  },
  info__text1: {
    en: "Once tempting world of&nbsp;websites made me&nbsp;curious about Web Development. With time, my&nbsp;interest in&nbsp;programming has grown into a&nbsp;passion of&nbsp;my&nbsp;life. Step by&nbsp;step, research after research I&rsquo;ve immersed myself into coding.",
    ru: "Однажды пленительный мир веб-сайтов заставил меня заинтересоваться Веб-Разработкой. Со временем интерес к программированию перерос в дело всей моей жизни. Шаг за шагом, исследование за исследованием я погружался в мир веб-разработки.",
  },
  info__text2: {
    en: "Now, I&rsquo;m devoted to&nbsp;build eye-catching and user-friendly websites &amp;&nbsp;apps. Among the technologies that I&rsquo;ve being working with HTML&nbsp;&amp; CSS, JavaScript (ES6+) and React.",
    ru: "На данный момент я обладаю навыками создания эффектных и удобных для пользования сайтов и проложений. В своей практике я использую следующие технологии: HTML & CSS, JavaScript и React.",
  },
  info__text3: {
    en: "I&rsquo;m really into the entire front-end spectrum,so&nbsp;I&nbsp;do my&nbsp;best to&nbsp;be&nbsp;involved in&nbsp;the international high/medium-scale challenging projects by&nbsp;learning English, actively developing my&nbsp;social-media, acquiring programming languages that are spread all other the world.",
    ru: "Я в действительности заинтересован в полном спектре front-end разработки, поэтому я стараюсь быть вовлеченным в международные проекты высокого/среднего уровней. Для этого я изучаю английский язык, активно веду профессиональные страницы в социальных сетях, развиваю языки программирования популярные во всём мире.",
  },
  info__btn: {
    en: "Download CV",
    ru: "Скачать Резюме",
  },
  about__title: {
    en: "About me",
    ru: "Обо мне",
  },
  abilities__title: {
    en: "my skills",
    ru: "навыки",
  },
  projects__title: {
    en: "projects",
    ru: "проекты",
  },
  contact__title: {
    en: "contact me",
    ru: "контакты",
  },
  contact__get: {
    en: "Get In Touch",
    ru: "Свяжитесь со мной",
  },
  contact__text: {
    en: "If&nbsp;you&rsquo;d like to&nbsp;send me&nbsp;a&nbsp;message, I&nbsp;can be&nbsp;reached through various ways! If&nbsp;you prefer email, simply fill out the form or&nbsp;send me&nbsp;a&nbsp;message and I&rsquo;ll get back to&nbsp;you as&nbsp;soon as&nbsp;possible.",
    ru: "Вы&nbsp;можете связаться со&nbsp;мной заполнив форму обратной связи, которая находиться справа или&nbsp;же отправить сообщение на&nbsp;адрес моей электронной почты. Я&nbsp;вернусь к&nbsp;вам с&nbsp;ответом в&nbsp;кратчайшие сроки. Вы&nbsp;также можете позвонить мне.",
  },
  info__name: {
    en: "Name:",
    ru: "Имя:",
  },
  info__fullname: {
    en: "Konstantin Bogorodsky",
    ru: "Константин Богородский",
  },
  info__address: {
    en: "Address:",
    ru: "Адрес:",
  },
  info__fulladdress: {
    en: "Russia, Moscow",
    ru: "Россия, Москва",
  },
  info__email: {
    en: "Email:",
    ru: "Адрес электронной почты:",
  },
  info__phone: {
    en: "Phone:",
    ru: "Телефон:",
  },
  contact__message: {
    en: "Message me",
    ru: "Форма обратной связи",
  },
  form__btn: {
    en: "Send",
    ru: "Отправить",
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
    document.querySelector(`.${key}--lang`).innerHTML = langData[key][hash];
  }
}

changeLanguage();

// languages.forEach((lang) => {
//   let langValue = lang.dataset.lang;

//   if (langValue === hash) {
//     lang.classList.add("nav__img--active");
//   }
// });
