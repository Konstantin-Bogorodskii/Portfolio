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
            title: "Your application has been successfully sent.",
            showConfirmButton: false,
            timer: 1000,
            width: "45",
            height: "45",
            padding: "2rem",
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
      title: "Oops...",
      text: "Something went wrong!",
      showConfirmButton: false,
      timer: 1000,
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
