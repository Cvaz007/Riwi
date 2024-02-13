import { urlBase } from "../index.js";

export const createCompany = async (company) => {
  await fetch(`${urlBase}/companies`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: company.id,
      email: company.email,
      nameCompany: company.nameCompany,
      imageCompany: company.imageCompany,
      nit: company.nit,
      password: company.password,
    }),
  });
};
