const contenedor = document.querySelector(".container-cards");
const marca = document.querySelector("#marca");
const year = document.querySelector("#year");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");

document.addEventListener("DOMContentLoaded", () => {
  mostrarAutos(autos);

  /* Llenar los años */
  const max = new Date().getFullYear();
  const min = max - 10;

  for (let index = max; index >= min; index--) {
    const option = document.createElement("option");
    option.value = index;
    option.innerText = index;
    year.appendChild(option);
  }
});

const mostrarAutos = (autos) => {
  limpiarHTML();
  autos.forEach((auto) => {
    contenedor.innerHTML += `
    <div class="card">
          <img
            src="${auto.imagen}"
            alt="auto"
          />
          <div class="description-card">
            <p>${auto.marca} - ${auto.modelo} - ${auto.year}</p>
            <p>Transmision: ${auto.transmision}</p>
            <p>Puertas: ${auto.puertas}</p>
            <p>Color: ${auto.color}</p>
            <p>Precio: $${auto.precio
              .toString()
              .toLocaleString("en-US", {
                currency: "USD",
                style: "currency",
              })}</p>
          </div>
        </div>
    `;
  });
};

const limpiarHTML = () => {
  while (contenedor.firstChild) {
    contenedor.removeChild(contenedor.firstChild);
  }
};
