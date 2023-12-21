import { paso4_1 } from "./paso4_1";
/**
 *
 * @param {Object <clases>} clases clases que ve el estudiante
 * @returns {clases}
 */
export const paso4 = (clases) => {
  alert("hoy es tu primer dia de clases!");

  const completarClases = (clase) => {
    const propiedad = prompt(
      `Ingresa una propiedad de la clase ${clases[clase].propiedad}`
    );
    const horario = prompt(
      `Ingresa el horario de la clase ${clases[clase].horario}`
    );
    clases[clase].horario = horario;
    clases[clase].propiedad = propiedad;
  };

  for (let clase in clases) {
    const opcion = prompt(
      `Deseas completar la clase ${clases[clase].nombre}? (Si-No)`.toLowerCase()
    );
    if (opcion === "si") {
      completarClases(clase);
    }
  }
  paso4_1();
  return clases;
};
