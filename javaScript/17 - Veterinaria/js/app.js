//Escucchadores
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);

  const paciente = { ...pacientes };
  for (const [key, value] of formData) {
    paciente[key] = value;
  }
  pacientes.push(paciente);
  if (paciente[indicePaciente]) {
    editarPaciente(paciente)
    console.log(indicePaciente);
  }
  else localStoragePacientes(pacientes);
});

//Funciones
const eliminarPaciente = (indice) => {
  pacientes.splice(indice, 1);
  localStoragePacientes(pacientes);
};

const asignarIndicePaciente = (indice) => {
  indicePaciente = indice;
  const textArea = document.querySelector("textarea");
  textArea.value = pacientes[indice]["description"];

  inputs.forEach((input) => {
    const inputName = input.getAttribute("name");
    input.value = pacientes[indice][inputName];
  })
};

const editarPaciente = (paciente) => {
  pacientes[indicePaciente] = paciente;
  localStoragePacientes(pacientes);
};

const mostrarInput = () => {};

const listarPacientes = () => {
  contenedorCartas.innerHTML = "";
  pacientes.forEach((paciente, indice) => {
    contenedorCartas.innerHTML += `
    <div class="card card_cite">
              <div class="card-body">
                <h5 class="card-title fs-3 fw-bold">${paciente.petName}</h5>
                <p class="card-text">
                  <div class="d-flex gap-2">
                    <span class="fw-bold">Propietario:</span>
                    <span>${paciente.userName}</span>
                  </div>
                  <div class="d-flex gap-2">
                    <span class="fw-bold">Telefono:</span>
                    <span>${paciente.phoneNumber}</span>
                  </div>
                  <div class="d-flex gap-2">
                    <span class="fw-bold">Fecha:</span>
                    <span>${paciente.date}</span>
                  </div>

                  <div class="d-flex gap-2">
                    <span class="fw-bold">Hora:</span>
                    <span>${paciente.time}</span>
                  </div>
                  <div class="d-flex gap-2">
                    <span class="fw-bold">Sintomas:</span>
                    <span>${paciente.description}</span>
                  </div>
                </p>
                <div class="d-flex gap-2">
                  <button class="btn btn-primary" onclick="asignarIndicePaciente(${indice})">Editar</button>
                  <button class="btn btn-danger" onclick="eliminarPaciente(${indice})">Eliminar</button>
                </div>
              </div>
            </div>
    `;
  });
};

const localStoragePacientes = (pacientes) => {
  localStorage.setItem("pacientesCache", JSON.stringify(pacientes));
  cargarCache();
  listarPacientes();
};

const cargarCache = () => {
  document.addEventListener("DOMContentLoaded", () => {
    if (listaPacientesCache) {
      pacientes = listaPacientesCache;
      listarPacientes();
    }
  });
};

cargarCache();
