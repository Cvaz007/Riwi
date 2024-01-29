//Selectors
const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password-confirmation");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (event) => {
  //Delete default actions
  event.preventDefault();

  //Use the function for register an user
  registerUser();
});

const registerUser = () => {
  //1. Password must be the same
  const { validated, message } = validatePassword();
  //2. Safe password
  if (!validated) {
    showAlert(message);
    return;
  }
  //3. No exist an account
};

const validatePassword = () => {
  if (password.value != passwordConfirmation.value) {
    return {
      validate: false,
      message: "Passwords aren't the same.",
    };
  }
  return {
    validate: true,
  };
};

const showAlert = (message) => {
  Swal.fire({
    title: "Error!",
    text: message,
    icon: "error",
    toast: "true",
    timer: 4000,
    showConfirmButton: false,
    position: "bottom-right",
    confirmButtonText: "Aceptar",
  });
};
