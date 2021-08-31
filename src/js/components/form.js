// const eField = form.querySelector(".contact--email");
// const tField = form.querySelector(".contact--tel");
// const nField = form.querySelector(".contact--name");

const formBtn = document.querySelector(".form__btn");
const form = document.querySelector(".form");
const contactForm = document.querySelector(".contact__form");
const nInput = form.querySelector(".form__input-name");
const tInput = form.querySelector(".form__input-tel");
const eInput = form.querySelector(".form__input-email");

form.addEventListener("submit", formSend);

async function formSend(e) {
  e.preventDefault();
  let error = formValidate(form);
  let formData = new FormData(form);
  if (error === 0) {
    console.log("da");
    // contactForm.classList.add("contact__sending");
    let response = await fetch("../resources/mail.php", {
      method: "POST",
      body: formData,
    });
    if (response.ok) {
      let result = await response.json();
      console.log(result);
      form.reset();
    } else {
      alert("error");
    }
  } else {
    console.log("errors");
  }
}

function formValidate(form) {
  let error = 0;
  let formReq = document.querySelectorAll(".form__input--req");

  for (let i = 0; i < formReq.length; i++) {
    const input = formReq[i];
    formRemoveError(input);
    inputOnChange(input);

    if (input.classList.contains("form__input-email")) {
      if (!emailTest(input)) {
        formAddError(input);
        error++;
      }
    }
    if (input.classList.contains("form__input-tel")) {
      if (!phoneTest(input)) {
        formAddError(input);
        error++;
      }
    }
    if (input.value === "") {
      formAddError(input);
      error++;
    }
  }
  return error;
}

function formAddError(input) {
  input.parentElement.classList.add("form__input--error");
  input.parentElement.classList.add("shake");
  input.classList.add("form__input--error");
}

function formRemoveError(input) {
  input.parentElement.classList.remove("form__input--error");
  input.parentElement.classList.remove("shake");
  input.classList.remove("form__input--error");
}

function emailTest(input) {
  return /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    input.value
  );
}
function phoneTest(input) {
  return /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(
    input.value
  );
}

function inputOnChange(input) {
  input.addEventListener("input", () => {
    formRemoveError(input);
  });
}
