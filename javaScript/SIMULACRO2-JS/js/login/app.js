//Global variables
const URLBase = "http://localhost:3000";
//Selectors
const formLogin = document.querySelector("#formLogin");

//Listeners
formLogin.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(formLogin);
  const user = {};
  for (const [key, value] of formData) {
    if (!value) return alert("Password is empty");
    user[key] = value;
  }
  checkUser(user);
});

//functions
const checkUser = async (user) => {
  const response = await fetch(`${URLBase}/users?email=${user.email}`);
  const data = await response.json();

  if (!data[0]) return alert("This email isn't exist");
  if (data[0].password == user.password) {
    localStorage.setItem("userCache", JSON.stringify(data[0]));
    window.location.href = "./pages/messages.html";
    localStorage.setItem("isAuthorized", "true");
  } else {
    alert("Incorrect credentials");
  }
};
