export const paso1 = () => {
    return new Promise((resolve) => {
      const form = document.querySelector("#form");
      let estudiante = {};
  
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const nombre = document.querySelector("#validationCustom01").value;
        const edad = document.querySelector("#validationCustom02").value;
        const familia = document.querySelector("#validationCustom03").value;
        const linaje = document.querySelector("#validationCustom04").value;
  
        estudiante = {
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
  
        // Resolvemos la Promise con el objeto estudiante
        resolve(estudiante);
      });
    });
  };
  