let range = 39;

//Selectores
const container = document.getElementById("container");
const btns = document.querySelectorAll("btn");

//Funciones
const getAllData = async () => {
  const response = await fetch(
    `https://api.spacexdata.com/v3/launches?limit=${range}&offset=${range - 39}`
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
            class="btn btn-primary btn-show-more"
            id-expedition="${expedition.flight_number}"
          >
        Ver Info-Mision
      </button>
        </div>
      </div>
        `;
  });
};

/* onclick="getData(${expedition.flight_number})" */

const showDetails = (expedition) => {
  cleanHTML();
  container.innerHTML = `
  <div class="card-show-more">
  
  <div class="title"> 
    ${expedition.mission_name}
    <i class='bx bx-x'></i>
  </div>
  <div class="description"> ${expedition.details}</div>
  <iframe width="465" height="315" src="https://www.youtube.com/embed/${expedition.links.youtube_id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <div> 
    <p>Cohetes: <span>${expedition.rocket.rocket_name}</span></p>
    <p>Tipo de cohete: <span>${expedition.rocket.rocket_type}</span></p>
    <p>Exito de lanzamiento: <span>${expedition.launch_success}</span></p>
  </div>
</div>
    `;
  container.appendChild(element);
};

const showMore = () => {
  range += 39;
  getAllData()
}

const cleanHTML = () => {
  while (container.firstChild) {
    container.removeChild(container.firstChild)
  }
}

//Escuchadores
document.addEventListener("DOMContentLoaded", getAllData());

container.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn-show-more")) {
    const id = event.target.getAttribute("id-expedition");
    getData(id);
  }
  if (event.target.classList.contains("bx-x")) {
    container.innerHTML="";
    getAllData();
  }
})

