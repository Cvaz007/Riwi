import { createCompany } from "../../services/company/createCompany.js";
import { getCompanyByEmail } from "../../services/company/getCompanyByEmail.js";
import { getFormData } from "../getFormData.js";
const formRegister = document.getElementById("formRegister");

formRegister.addEventListener("submit", async (event) => {
  event.preventDefault();

  const company = getFormData(formRegister);

  if (company.passwordConfirmation != company.password)
    return alert("The password aren't the same");
  if (company.password.length < 6)
    return alert("Your password need more than 6 characters");
  if (await validCompany(company.email) == false) return;
  company.nit = Date.now();
  await createCompany(company);
  window.location.href = "index.html";
});

const validCompany = async (email) => {
  const response = await getCompanyByEmail(email);
  console.log(response);
  if (response.length > 0) {
    alert("This email already has a partner company");
    return false;
  } else {
    return true;
  }
};
