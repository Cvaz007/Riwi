const formLogin = document.getElementById("form_login");
const URLBase = "http://localhost:3000/";

formLogin.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(formLogin);
  const user = {};

  for (const [key, value] of formData) {
    if (!value) return alert("Password or email are empty!");
    user[key] = value;
  }
  checkUser(user);
});

const checkUser = async (user) => {
  const response = await fetch(`${URLBase}users?email=${user.email}`);
  const data = await response.json();

  if (!data[0]) return alert("This email isn't exist");
  if (data[0].password === user.password) {
    window.location.href = "administrator.html";
    localStorage.setItem("userCache", JSON.stringify(data[0]));
    localStorage.setItem("isAuthorized", "true");
  } else {
    alert("Incorrect credentials");
  }
};
