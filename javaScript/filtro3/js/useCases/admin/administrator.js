import { renderJobs } from "./renderJobs.js";
import { editElement } from "../../services/editElement.js";
import {createJob} from "../../services/job/createJob.js"
import {logOut} from "../logOut.js"

export const formAdmin = document.getElementById("modalAdmin");
const btnSave = document.getElementById("btnSave");

document.addEventListener("DOMContentLoaded", () => {
  renderJobs();
});

btnSave.addEventListener("click", async () => {
  const id = JSON.parse(localStorage.getItem("editIndex"));
  if (id) await editElement(formAdmin,"jobs");
  else await createJob(formAdmin);
});

logOut();