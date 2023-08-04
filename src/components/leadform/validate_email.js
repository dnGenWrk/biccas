import validator from "validator";

(function () {
  const formContainer = document.getElementById("form_container");
  const thankYouMessage = document.getElementById("thankyou_message");
  const cta = document.getElementById("cta_leadform");
  const emailField = document.getElementById("subscibe_email");
  const invalidEmailMessage = document.getElementById("invalid_email_text");

  emailField.addEventListener("input", updateValue);
  function updateValue(e) {
    emailField.classList.remove("border-red-700");
    invalidEmailMessage.classList.add("hidden");
  }

  cta.addEventListener("click", function () {
    const emailFieldText = document.getElementById("subscibe_email").value;
    const isValidEmail = validator.isEmail(emailFieldText);

    if (!isValidEmail) {
      emailField.classList.add("border-red-700");
      invalidEmailMessage.classList.remove("hidden");
      emailField.focus();
    } else {
      formContainer.classList.add("hidden");
      thankYouMessage.classList.remove("hidden");
      thankYouMessage.classList.add("block");
    }
  });
})();
