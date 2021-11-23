document.addEventListener("DOMContentLoaded", function (event) {
  const languages = document.querySelectorAll(".nav__img");
  const documentTitle = document.querySelector("title");
  const allLanguages = ["ru", "en"];
  const docTitleLang = {
    en: "Bogorodskii Konstantin Front-End Developer",
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
      en: "Hello, I&rsquo;m Konstantin Bogorodskii.",
      ru: "Привет! Меня зовут Константин Богородский.",
    },
    info__text1: {
      en: "Once tempting world of&nbsp;websites made me&nbsp;curious about Web Development. With time, my&nbsp;interest in&nbsp;programming has grown into a&nbsp;passion of&nbsp;my&nbsp;life. Step by&nbsp;step, research after research I&rsquo;ve immersed myself into coding.",
      ru: "Однажды я&nbsp;открыл для себя новый мир&nbsp;&mdash; мир Веб-разработки. Со&nbsp;временем интерес к&nbsp;программированию перерос в&nbsp;хобби, а&nbsp;увлечение в&nbsp;профессию.",
    },
    info__text2: {
      en: "Now, I&rsquo;m devoted to&nbsp;build eye-catching and user-friendly websites. Among the technologies that I&rsquo;ve being working with are HTML&nbsp;&amp; CSS, JavaScript (ES6+) and React.",
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
      en: "Konstantin Bogorodskii",
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
    circle__name1: {
      en: "Critical Thinking",
      ru: "Критическое мышление",
    },
    circle__name2: {
      en: "Teamwork",
      ru: "Работа в команде",
    },
    circle__name3: {
      en: "Communication",
      ru: "Коммуникативные навыки",
    },
    circle__name4: {
      en: "Problem Solving",
      ru: "Решение задач",
    },
    gallery__span3: {
      en: "Calculator",
      ru: "Калькулятор",
    },
    gallery__span4: {
      en: "Aim Training",
      ru: "Попади в цель",
    },
    gallery__span8: {
      en: "Tic Tac Toe",
      ru: "Крестики-нолики",
    },
    gallery__span9: {
      en: "My Posts",
      ru: "Мои посты",
    },
    gallery__span11: {
      en: "Racing Game",
      ru: "Гонки",
    },
    gallery__span12: {
      en: "To&nbsp;Do&nbsp;List ",
      ru: "Список задач",
    },
    filter__link3: {
      en: "Apps & Games",
      ru: "Приложения и игры",
    },
    filter__link2: {
      en: "Websites ",
      ru: "Веб-сайты",
    },
    gallery__hidden0: {
      en: "Tesla clone built with React, React-Router, Firebase for authentication, Redux for state management, and Material-UI.",
      ru: "Tesla клон, созданный с помощью React, React-Router, Firebase для аутентификации, Redux для управления состоянием и Material-UI.",
    },
    gallery__hidden1: {
      en: "An&nbsp;adaptive Website with modal window, slider and an&nbsp;opportunity to&nbsp;fill in&nbsp;the feedback form.",
      ru: "Адаптвиный под все устройства сайт с&nbsp;модальный окном, слайдером и&nbsp;возможностью заполнить форму обратной связи.",
    },
    gallery__hidden2: {
      en: "Website with an&nbsp;opportunity to&nbsp;add and delete products&nbsp;to (from) cart",
      ru: "Cайт с&nbsp;возможностью добавления и&nbsp;удаления товаров&nbsp;в (из) корзину(ы).",
    },
    gallery__hidden3: {
      en: "This calculator allows to&nbsp;perform all basic calculations",
      ru: "Данный калькулятор позволяет провести стандартные вычислительные  операции.",
    },
    gallery__hidden4: {
      en: "This game is&nbsp;specifically designed to&nbsp;improve mouse accuracy, reaction and quickness.",
      ru: "Данное игра позволяет проверить вашу точность, реакцию и скорость клика по цели.",
    },
    gallery__hidden5: {
      en: "One of&nbsp;my&nbsp;first projects ever. One page Website built with HTML&nbsp;&amp; CSS.",
      ru: "Один из первых тренировочных проектов. Одностраничный сайт, созданный с помощью HTML & CSS.",
    },
    gallery__hidden6: {
      en: "Multifunctional Webpage with an&nbsp;administrator&rsquo;s panel on&nbsp;the right and user&rsquo;s panel on&nbsp;the left.",
      ru: "Мультифункциональная веб-страница с&nbsp;панелью администратора справа и&nbsp;панелью пользователя слева.",
    },
    gallery__hidden7: {
      en: "One of&nbsp;my&nbsp;first projects ever. One page Website built with HTML&nbsp;&amp; CSS.",
      ru: "Один из первых тренировочных проектов. Одностраничный сайт, созданный с помощью HTML & CSS.",
    },
    gallery__hidden8: {
      en: "Well known game with main goal to&nbsp;place 3&nbsp;of&nbsp;your marks in&nbsp;a&nbsp;row.",
      ru: "Известная игра, главная цель которой разместить 3&nbsp;одинаковые фигуры в&nbsp;ряд.",
    },
    gallery__hidden9: {
      en: "Pet project for practicing programming using the React.",
      ru: "Тренировочное упражнение по&nbsp;отработке навыков программирования на&nbsp;React.",
    },
    gallery__hidden10: {
      en: "The Website is&nbsp;devoted to&nbsp;travelling. It&nbsp;allows users to&nbsp;calculate the cost of&nbsp;a&nbsp;tour as&nbsp;well as&nbsp;shows special offer count down.",
      ru: "Сайт, посвященный travel тематике, который позволяет пользователю рассчитать стоимость тура, а&nbsp;также показывает обратный отсчет акции.",
    },
    gallery__hidden11: {
      en: "An&nbsp;exciting game to&nbsp;drive a&nbsp;car on&nbsp;a&nbsp;straight road in&nbsp;one direction at&nbsp;a&nbsp;constant speed avoiding obstacles.",
      ru: "Увлекательная игра, в&nbsp;которой нужно вести машину по&nbsp;прямой дороге в&nbsp;одном направлении с&nbsp;постоянной скоростью избегая препятствия.",
    },
    gallery__hidden12: {
      en: "Simple App to&nbsp;list all your tasks. Delete mission after completion.",
      ru: "Простое приложение с&nbsp;возможностью добавлять и&nbsp;удалять задачи.",
    },
    gallery__hidden13: {
      en: "A&nbsp;responsive one page Website built with HTML&nbsp;&amp; CSS &amp;&nbsp;JS.",
      ru: "Адаптивный под все устройства одностраничный сайт, созданный с&nbsp;помощью HTML&nbsp;&amp; CSS &amp;&nbsp;JS.",
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
      document.querySelector(`.${key}--lang`).innerHTML =
        langData[key][hash] || null;
    }
  }

  changeLanguage();
});
