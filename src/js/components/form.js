const formBtn = document.querySelector(".form__btn");
const contactForm = document.querySelector(".contact__form");

contactForm.addEventListener("submit", formSend);

function formSend(e) {
  e.preventDefault();
  let error = formValidate(contactForm);
  let formData = new FormData(contactForm);
  let xhr = new XMLHttpRequest();
  if (error === 0) {
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your offer has been successfully sent!",
            showConfirmButton: false,
            timer: 1750,
            width: 400,
            padding: "3.5rem",
            iconColor: "#08fdd8",
            background: "#17181c",
            backdrop: "rgba(41, 41, 41, 0.7)",
          });
        }
      }
    };

    xhr.open("POST", "mail.php", true);
    xhr.send(formData);

    form.reset();
  } else {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Oops... Something went wrong!",
      showConfirmButton: false,
      timer: 1750,
      width: 400,
      padding: "3.5rem",
      iconColor: "#e31b6d",
      background: "#17181c",
      backdrop: "rgba(41, 41, 41, 0.7)",
    });
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

const contactSection = document.querySelector(".contact");

window.document.body.ontouchstart = (e) => {
  if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") {
    if (
      e.target.classList.contains("form__input") ||
      e.target.classList.contains("form__textarea")
    ) {
      contactSection.style.padding = "15rem 0 28rem 0";
      e.target.focus();
    }
  }
};
