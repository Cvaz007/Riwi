import { getCompanyByEmail } from "../../services/company/getCompanyByEmail.js";
import { getFormData } from "../getFormData.js";
const formLogin = document.getElementById("formLogin");

formLogin.addEventListener("submit", (event) => {
  event.preventDefault();
  const company = getFormData(formLogin);
  checkCompany(company);
});

const checkCompany = async (company) => {
  const data = await getCompanyByEmail(company.email);

  if (!data[0]) return alert("This email isn't exist");
  if (data[0].password === company.password) {
    window.location.href = "administrator.html";
    console.log("object");
    localStorage.setItem("companyCache", JSON.stringify(data[0]));
    localStorage.setItem("isAuthorized", "true");
  } else {
    alert("Incorrect credentials");
  }
};
