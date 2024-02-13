import { urlBase } from "../index.js";
import { getFormData } from "../../useCases/getFormData.js";
import { formAdmin } from "../../useCases/admin/administrator.js";

export const createJob = async () => {
  const company = JSON.parse(localStorage.getItem("companyCache"));
  const data = getFormData(formAdmin);
  data.companyId = company.id;
  data.publicationDate = new Date().toLocaleDateString();
  await fetch(`${urlBase}/jobs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
