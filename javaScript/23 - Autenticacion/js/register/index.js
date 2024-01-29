import bcryptjs from "https://cdn.jsdelivr.net/npm/bcryptjs@2.4.3/+esm";
//Selectors
const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");
const URL = "http://localhost:3000/users";

form.addEventListener("submit", (event) => {
  //Delete default actions
  event.preventDefault();

  //Use the function for register an user
  registerUser();
});

const registerUser = async () => {
  //1. Password must be the same
  const { validated, message } = validatePassword();
  //2. Safe password
  if (!validated) {
    showAlert(message);
    return;
  }
  const { validated: validatedSecurity, message: messageError } =
    validatePasswordSecurity();
  if (!validatedSecurity) {
    showAlert(messageError);
    return;
  }
  //3. No exist an account
  const passwordEncrypt = bcryptjs.hashSync(password.value, 8);
  if (await validateEmail()) {
    showAlert("This email already exits.");
    return;
  }
  await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email.value, password: passwordEncrypt }),
  });
};

const validateEmail = async () => {
  const response = await fetch(`${URL}?email=${email.value}`);
  const data = await response.json();
  return data.length;
};

const validatePassword = () => {
  if (password.value !== passwordConfirmation.value) {
    return {
      validated: false,
      message: "Passwords aren't the same.",
    };
  }
  return {
    validated: true,
  };
};

const validatePasswordSecurity = () => {
  //This method test allow to value a text string from an regex expression
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
  if (regex.test(password.value)) {
    return { validated: true };
  }
  return {
    validated: false,
    message:
      "Password must have capitalized,lowercase, special character and a range between 8 and 15 characters.",
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
    confirmButtonText: "ok",
  });
};


