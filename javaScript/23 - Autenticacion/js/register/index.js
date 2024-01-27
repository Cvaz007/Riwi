import Swal from "sweetalert2";
//Selectors
const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password-confirmation");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (event) => {
  //Delete default actions
  event.preventDefault();

  //Use the function for register an user
  console.log("??");
  registerUser();
});

const registerUser = () => {
  //1. Password must be the same
  const {} = validatePassword();
  //2. Safe password
  if (!validate) {
    showAlert();
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

const showAlert = () => {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Something went wrong!",
    footer: '<a href="#">Why do I have this issue?</a>'
  });
};
