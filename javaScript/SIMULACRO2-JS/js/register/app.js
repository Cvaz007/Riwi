//Global variables
const URLBase = "http://localhost:3000";
//Selectors
const formRegister = document.querySelector("#formRegister");

//Listeners
formRegister.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(formRegister);
  const user = {};
  for (const [key, value] of formData) {
    if (!value) return alert("You need to complete all inputs");
    user[key] = value;
  }
  saveUser(user);
});

//functions
const saveUser = async (user) => {
  await fetch(`${URLBase}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
};
