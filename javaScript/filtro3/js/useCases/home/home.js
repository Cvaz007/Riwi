import { filterJobs } from "./filterJobs.js";
import { renderJobs } from "./renderJobs.js";
import { getAllJobs } from "../../services/job/getJobs.js";

export const containerCards = document.querySelector(".container");
const btnSearch = document.getElementById("btnSearch");

document.addEventListener("DOMContentLoaded", async () => {
  const data = await getAllJobs();
  renderJobs(data);
});

btnSearch.addEventListener("click", () => {
  filterJobs();
});
