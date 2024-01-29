import bcryptjs from "https://cdn.jsdelivr.net/npm/bcryptjs@2.4.3/+esm";
//Selectors
const formLogin = document.getElementById("form-login");
const email = document.getElementById("email");
const password = document.getElementById("password");

const URL = "http://localhost:3000/users";

//Events
formLogin.addEventListener("submit", (event) => {
  event.preventDefault();
  login();
});

const login = async () => {
  //1. Request by email
  const response = await fetch(`${URL}?email=${email.value}`);
  const data = await response.json();

  //2. Is registered by email
  if (!data) {
    showAlert("Email don't exist");
    return;
  }
  //3. Compare passwords
  if (bcryptjs.compareSync(password.value, data[0].password)) {
    //with the object window we can redirect the user
    window.location.href = "administrator.html";
    localStorage.setItem("isAuthorized", "true");
  } else {
    console.log("Incorrect credentials");
  }
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
// To check a password:
// Load hash from your password DB. This step is when I get the password
// bcrypt.compareSync(data[0].password, 8); // true
