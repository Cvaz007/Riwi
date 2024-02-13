import {
  getAllJobs,
  getJobsByModality,
  getJobsByModalityAndTitle,
  getJobsByTitle,
} from "../../services/job/getJobs.js";
import { getFormData } from "../getFormData.js";
import { renderJobs } from "./renderJobs.js";

export const filterJobs = async () => {
  const formSearch = document.getElementById("formSearch");
  const data = getFormData(formSearch);

  let response;

  if (data.title != "" && data.modality != "")
    response = getJobsByModalityAndTitle(data.title, data.modality);
  else if (data.title != "") response = await getJobsByTitle(data.title);
  else if (data.modality != "") response = await getJobsByModality(data.modality);
  else response = await getAllJobs();
  console.log(response);
  
  renderJobs(response);
};
