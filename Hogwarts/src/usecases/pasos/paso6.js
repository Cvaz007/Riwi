/**
 * 
 * @param {Object <estudiante>} estudiante  
 * @param {Object <Integer>} clases 
 */
export const paso6 = (estudiante, clases) => {
    mostrarEstudiante(estudiante);
    mostrarClases(clases);
};
/**
 * 
 * @param {Object <estudiante>} estudiante 
 */
const mostrarEstudiante = (estudiante) => {
    alert(`
  HASTA AHORA LLEVAS ESTOS DATOS:
  Nombre: ${estudiante.nombre}
  Edad: ${estudiante.edad}
  Familia: ${estudiante.familia} 
  Linaje: ${estudiante.linaje} 
  Cualidades: ${estudiante.cualidades.cualidad1} - ${estudiante.cualidades.cualidad2} - ${estudiante.cualidades.cualidad3}
  Casa: ${estudiante.casa}
  Animal: ${estudiante.animalPatronus}
  `);
};
/**
 * 
 * @param {Object <clases>} clases 
 */
const mostrarClases = (clases) => {
    for (let i = 0; i < clases.length; i++) {
        if (clases[i].horario != undefined) {
            alert(`
        Clase vista: ${clases[i].nombre}
        Horario: ${clases[i].horario} 
        Propiedad: ${clases[i].propiedad}
        `);
        }
    }
};