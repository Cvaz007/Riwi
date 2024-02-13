import { urlBase } from "../index.js";
export const getCompanyByEmail = async (email) => {
  const response = await fetch(`${urlBase}/companies?email=${email}`);
  const data = await response.json();

  return data;
};
