import { getAllJobsByCompany } from "../../services/job/getJobs.js";
import { deleteElement } from "../../services/deleteElement.js";
import { fillModal } from "./fillModal.js";
import { formAdmin } from "./administrator.js";

const tbodyAdmin = document.getElementById("tbodyAdmin");

export const renderJobs = async () => {
  const company = JSON.parse(localStorage.getItem("companyCache"));
  const data = await getAllJobsByCompany(company.id);

  tbodyAdmin.innerHTML = "";
  data.forEach((job) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <tr>
      <td>
        <div class="d-middle">
          <img
            src="${job.company.imageCompany}"
            alt="img-product"
            width="60"
            height="60"
            class="img-fluid rounded-circle img-company"
          />
        </div>
      </td>
      <td>${job.title}</td>
      <td>${job.description}</td>
      <td>${job.location}</td>
      <td>${job.experience}</td>
      <td>${job.modality}</td>
      <td>$${job.salary}</td>
      <td>
        <button class="btn btn-primary editJob" id="btnEdit" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          <i class="bx bx-edit"></i>
        </button>

        <button class="btn btn-danger deleteJob" id="btnDelete" >
          <i class="bx bx-trash"></i>
        </button>
      </td>
    </tr>
    `;

    const btnDelete = tr.querySelector("#btnDelete");
    btnDelete.addEventListener("click", async (e) => {
      e.preventDefault();
      deleteElement(job.id, "jobs");
    });

    const btnEdit = tr.querySelector("#btnEdit");
    btnEdit.addEventListener("click", async (e) => {
      e.preventDefault();
      fillModal(job, formAdmin);
      localStorage.setItem("editIndex", JSON.stringify(job.id));
    });
    tbodyAdmin.appendChild(tr);
  });
};
