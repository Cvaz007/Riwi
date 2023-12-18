/**
 *
 * @returns {Object <estudiante>} Retorna el estudiante
 */
export const paso1 = () => {
  //selector
  const form = document.querySelector("#form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const nombre = document.querySelector("#validationCustom01").value;
    const edad = document.querySelector("#validationCustom02").value;
    const familia = document.querySelector("#validationCustom03").value;
    const linaje = document.querySelector("#validationCustom04").value;

    const estudiante = {
      nombre,
      edad,
      familia,
      linaje,
      cualidades: {
        cualidad1: "Vacia",
        cualidad2: "Vacia",
        cualidad3: "Vacia",
      },
      casa: "Vacia",
      animalPatronus: "Vacia",
    };
    return estudiante;
  });
};
