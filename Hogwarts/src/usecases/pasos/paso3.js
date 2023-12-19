/**
 * 
 * @returns {Array <cualidades,casa>} retorna un aray de las 3 cualidades del estudiante y la casa
 */
export const paso3 = () => {

    const [cualidad1,cualidad2,cualidad3] = asignarCualidades();
    const casa = asignarCasa([cualidad1,cualidad2,cualidad3]);
    return [cualidad1,cualidad2,cualidad3,casa];
};
/**
 * 
 * @returns {Array <cualidades>} retorna un aray de las 3 cualidades del estudiante
 */
const asignarCualidades = () => {
    let cualidades = [];
    const opcionesCualidades = [
        ["Valor", "Justicia", "Creatividad", "Ambición"],
        ["Fuerza", "Lealtad", "Erudición", "Determinación"],
        ["Audacia", "Paciencia", "Inteligencia", "Astucia"],
    ];

    const opcionCualidades = (opcion) => {
        return prompt(
            `Estas viendo grupos de 3 cualidades, elige el que te represente mejor:
      1. ${opcion[0]}
      2. ${opcion[1]}
      3. ${opcion[2]}
      4. ${opcion[3]}`
        );
    };
    for (let i = 0; i < opcionesCualidades.length; i++) {
        const respuesta = opcionCualidades(opcionesCualidades[i]);
        switch (respuesta) {
            case "1":
                cualidades.push(opcionesCualidades[i][0]);
                break;
            case "2":
                cualidades.push(opcionesCualidades[i][1]);
                break;
            case "3":
                cualidades.push(opcionesCualidades[i][2]);
                break;
            case "4":
                cualidades.push(opcionesCualidades[i][3]);
                break;
            default:
                alert("Por favor, elige un número válido.");
                paso3();
                break;
        }
    }
    console.log(cualidades);
    return cualidades;
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
        Ravenclaw: ["Creatividad", "Erudición", "Inteligencia"],
        Slytherin: ["Ambición", "Determinación", "Astucia"],
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
            return todasLasCasas[
                Math.floor(Math.random() * todasLasCasas.length)
            ];
        }
    }
};

