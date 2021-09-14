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
    ru: "Мои проекты",
  },
  hero__text: {
    en: "I&rsquo;m a&nbsp;Frontend Developer.",
    ru: "Я - Frontend Разработчик.",
  },
  hero__title: {
    en: "Hello, I&rsquo;m Konstantin Bogorodsky.",
    ru: "Привет! Меня зовут Константин Богородский.",
  },
  info__text1: {
    en: "Once tempting world of&nbsp;websites made me&nbsp;curious about Web Development. With time, my&nbsp;interest in&nbsp;programming has grown into a&nbsp;passion of&nbsp;my&nbsp;life. Step by&nbsp;step, research after research I&rsquo;ve immersed myself into coding.",
    ru: "Однажды я&nbsp;открыл для себя новый мир&nbsp;&mdash; мир Веб-разработки. Со&nbsp;временем интерес к&nbsp;программированию перерос в&nbsp;хобби, а&nbsp;увлечение в&nbsp;профессию.",
  },
  info__text2: {
    en: "Now, I&rsquo;m devoted to&nbsp;build eye-catching and user-friendly websites. Among the technologies that I&rsquo;ve being working with HTML&nbsp;&amp; CSS, JavaScript (ES6+) and React.",
    ru: "К&nbsp;данному моменту времени я&nbsp;обладаю всеми необходимыми навыками для создания веб-сайтов с&nbsp;нуля. В&nbsp;своей практике я&nbsp;безусловно использую HTML&nbsp;&amp; CSS, JavaScript(ES6+) и&nbsp;React. Мои личностные качества также играют немаловажную роль в&nbsp;достижении целей проекта.",
  },
  info__text3: {
    en: "I&rsquo;m really into the entire front-end spectrum,so&nbsp;I&nbsp;do my&nbsp;best to&nbsp;be&nbsp;involved in&nbsp;the international high/medium-scale challenging projects by&nbsp;learning English, actively developing my&nbsp;social-media, acquiring programming languages that are spread all other the world.",
    ru: "Мне действительно нравится многогранность Frontend разработки, что даёт возможность постоянно развиваться и&nbsp;профессионально расти.",
  },
  info__btn: {
    en: "Download CV",
    ru: "Скачать резюме",
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
    en: "If&nbsp;you prefer to&nbsp;send me&nbsp;a&nbsp;message, simply fill out the feedback form or&nbsp;send me&nbsp;an&nbsp;email and I&rsquo;ll get back to&nbsp;you as&nbsp;soon as&nbsp;possible. You can also give me&nbsp;a&nbsp;call.",
    ru: "Вы&nbsp;можете связаться со&nbsp;мной заполнив форму обратной связи или&nbsp;же отправив сообщение на&nbsp;адрес электронной почты. Я&nbsp;постараюсь вернусь к&nbsp;Вам с&nbsp;ответом в&nbsp;кратчайшие сроки. Я&nbsp;также доступен для общения по&nbsp;номеру телефона, указанному ниже.",
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
