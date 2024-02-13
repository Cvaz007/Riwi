const btnLogOut = document.getElementById("logOut");

export const logOut = () => {
  btnLogOut.addEventListener("click", () => {
    localStorage.clear();
  });
};
