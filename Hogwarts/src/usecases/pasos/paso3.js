/**
 *
 * @param {Array <cualidadd>} cualidades
 * @returns {String <casa>} retorna un array de la casa
 */
export const paso3 = (cualidades) => {
  const { cualidad1, cualidad2, cualidad3 } = cualidades;
  const casa = asignarCasa([cualidad1, cualidad2, cualidad3]);
  return casa;
};

/**
 *
 * @param {Array <cualidad>} cualidades son las 3 cualidades del estudiante
 * @returns
 */
const asignarCasa = (cualidades) => {
  const casas = {
    Gryffindor: ["Valor", "Fuerza", "Audacia"],
    Hufflepuff: ["Justicia", "Lealtad", "Paciencia"],
    Ravenclaw: ["Creatividad", "Erudicion", "Inteligencia"],
    Slytherin: ["Ambicion", "Determinacion", "Astucia"],
  };

  const contarCualidadesPorCasa = Object.keys(casas).map(
    (casa) =>
      cualidades.filter((cualidad) => casas[casa].includes(cualidad)).length
  );
  //Esto solo es para hacer legible el codigo, pero sencillamente podemos igualar a 1 la condicion del if
  const cantidadCualidadesPorCasa = 1;
  if (
    contarCualidadesPorCasa.every(
      (count) => count === cantidadCualidadesPorCasa
    )
  ) {
    const casasPosibles = Object.keys(casas).filter((casa) =>
      cualidades.some((cualidad) => casas[casa].includes(cualidad))
    );
    return casasPosibles[Math.floor(Math.random() * casasPosibles.length)];
  } else {
    const casasCoincidentes = Object.keys(casas).filter(
      (casa, index) =>
        contarCualidadesPorCasa[index] >= cantidadCualidadesPorCasa
    );

    if (casasCoincidentes.length >= 1) {
      return casasCoincidentes[
        Math.floor(Math.random() * casasCoincidentes.length)
      ];
    } else {
      // Si no hay coincidencias, asignar aleatoriamente entre todas las casas
      const todasLasCasas = Object.keys(casas);
      return todasLasCasas[Math.floor(Math.random() * todasLasCasas.length)];
    }
  }
};
