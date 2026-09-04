const formContact = document.getElementById("form-contact");
const inputName = document.getElementById("input-name");
const inputEmail = document.getElementById("input-email");
const inputMessage = document.getElementById("input-message");

const errors = {
  name: document.getElementById("error-name"),
  email: document.getElementById("error-email"),
  message: document.getElementById("error-message"),
};

const fields = {
  name: inputName,
  email: inputEmail,
  message: inputMessage,
};

function setError(field, message) {
  errors[field].textContent = message;
  fields[field].setAttribute("aria-invalid", String(Boolean(message)));
}

function validateName() {
  const value = inputName.value.trim();
  const message =
    value.length < 2 ? "Ingresa un nombre de al menos 2 caracteres." : "";
  setError("name", message);
  return !message;
}

function validateEmail() {
  const value = inputEmail.value.trim();
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
  const message = emailPattern.test(value)
    ? ""
    : "Ingresa un correo electrónico válido.";
  setError("email", message);
  return !message;
}

function validateMessage() {
  const value = inputMessage.value.trim();
  let message = "";

  if (value.length < 10) {
    message = "El mensaje debe tener al menos 10 caracteres.";
  } else if (value.length > 250) {
    message = "El mensaje no debe superar los 250 caracteres.";
  }

  setError("message", message);
  return !message;
}

function validateForm() {
  const validations = [validateName(), validateEmail(), validateMessage()];
  return validations.every(Boolean);
}

if (formContact) {
  inputName.addEventListener("input", validateName);
  inputEmail.addEventListener("input", validateEmail);
  inputMessage.addEventListener("input", validateMessage);

  formContact.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!validateForm()) {
      Swal.fire({
        title: "Revisa el formulario",
        text: "Corrige los campos marcados antes de enviar.",
        icon: "warning",
        confirmButtonText: "Ok",
      });
      return;
    }

    Swal.fire({
      title: "Mensaje enviado",
      text: `${inputName.value.trim()}, tu mensaje fue enviado correctamente.`,
      icon: "success",
      confirmButtonText: "Ok",
    });

    formContact.reset();
    Object.keys(errors).forEach((field) => setError(field, ""));
  });
}
