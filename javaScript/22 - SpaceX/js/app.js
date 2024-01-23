//Selectores
const container = document.getElementById("container");

//Funciones
const getAllData = async () => {
  const response = await fetch(
    "https://api.spacexdata.com/v3/launches?limit=40"
  );
  const data = await response.json();
  renderTable(data);
};

const getData = async (id) => {
  const response = await fetch(`https://api.spacexdata.com/v3/launches/${id}`);
  const data = await response.json();
  showDetails(data);
};

const renderTable = (expeditions) => {
  expeditions.forEach((expedition) => {
    container.innerHTML += `
        <div class="card">
        <figure>
          <img
            src="${expedition.links.mission_patch_small}"
            alt="logo"
          />
        </figure>
        <div class="card-body">
          <h3>${expedition.mission_name}</h3>
          <p>${expedition.launch_year}</p>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onclick="getData(${expedition.flight_number})"
          >
        Ver Info-Mision
      </button>
        </div>
      </div>
        `;
  });
};

const showDetails = (expedition) => {
  const element = document.createElement("div");
  element.innerHTML = `
    
    `;
    container.appendChild(element);
};

//Escuchadores
document.addEventListener("DOMContentLoaded", getAllData());
