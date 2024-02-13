import { urlBase } from "../index.js";

export const getAllJobsByCompany = async (idCompany) => {
  const response = await fetch(
    `${urlBase}/jobs?_embed=company&companyId=${idCompany}`
  );
  const data = await response.json();

  return data;
};

export const getAllJobs = async () => {
  const response = await fetch(`${urlBase}/jobs?_embed=company`);
  const data = await response.json();

  return data;
};

export const getJobsByModality = async (modality) => {
  const response = await fetch(
    `${urlBase}/jobs?_embed=company&modality=${modality}`
  );
  const data = await response.json();

  return data;
};

export const getJobsByTitle = async (title) => {
  const response = await fetch(`${urlBase}/jobs?_embed=company&title=${title}`);
  const data = await response.json();

  return data;
};

export const getJobsByModalityAndTitle = async (title, modality) => {
  const response = await fetch(
    `${urlBase}/jobs?_embed=company&title=${title}&modality=${modality}`
  );
  const data = await response.json();

  return data;
};
