const hogwarts = (() => {
  //Declaracion de variables globales
  const clases = [];
  const estudiante = {};

  const principal = () => {
    paso1();
    paso2();
    paso3();
    paso4();
    console.log(estudiante);
  };

  const paso1 = () => {
    alert("Bienvenido a hogwarts, te pediremos algunos datos!");
    const nombre = prompt("Ingresa tu nombre: ");
    const edad = parseInt(prompt("Ingresa tu edad: "));
    const familia = prompt("Ingresa el nombre de tu familia: ");
    const linaje = prompt(
      "Ingresa tu linaje (Mestizo, Muggle, Sangre pura, etc.):"
    );
    estudiante.nombre = nombre;
    estudiante.edad = edad;
    estudiante.familia = familia;
    estudiante.linaje = linaje;
    estudiante.cualidades = { cualidad1: "", cualidad2: "", cualidad3: "" };
    estudiante.casa = "";
    estudiante.animalPatronus = "";
  };

  const paso2 = () => {
    clases.push({
      profesor: "Kevin Slughorn",
      nombre: "transformaciones",
    });
    clases.push({ profesor: "Maria Umbridge", nombre: "herbologia" });
    clases.push({ profesor: "Liliana McGonagall", nombre: "pociones" });
    clases.push({ profesor: "Jackie", nombre: "encantamientos" });
    clases.push({
      profesor: "Robinson Snape ",
      nombre: "defensa contra las artes oscuras",
    });
    clases.push({
      profesor: "David Filch",
      nombre: "animales magicos",
    });
    clases.push({
      profesor: "Ronald Sprout",
      nombre: "historia de magia",
    });
  };

  const paso3 = () => {
    alert("Hoy es nuevo dia, es el día del sombrero seleccionador!!");
    const obtenerCualidades = () => {
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
      return cualidades;
    };

    const [cualidad1, cualidad2, cualidad3] = obtenerCualidades();
    estudiante.cualidades.cualidad1 = cualidad1;
    estudiante.cualidades.cualidad2 = cualidad2;
    estudiante.cualidades.cualidad3 = cualidad3;

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
    estudiante.casa = asignarCasa([cualidad1, cualidad2, cualidad3]);
    alert("Genial, ahora sabemos que tu casa es " + estudiante.casa);
  };

  const paso4 = () => {
    alert("hoy es tu primer dia de clases!");

    const completarClases = (clase) => {
      const propiedad = prompt(
        `Ingresa una propiedad de la clase ${clases[clase].nombre}`
      );
      const horario = prompt(
        `Ingresa el horario de la clase ${clases[clase].nombre}`
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

    const paso2 = () => {
      return Math.floor(Math.random() * 2 + 1);
    };

    const animal = paso2();
    if (animal === 1) {
      alert("Hay un animal!");
    } else alert("Tranquilo, no hay animales cerca");

    const enfrentarBoggart = (mensaje) => {
      alert("Ahora no tienes miedo!");
    };

    const boggartEjemplo = { miedo: "A la oscuridad", vida: 100 };
    enfrentarBoggart(boggartEjemplo.miedo);
  };

  return {
    main: principal,
  };
})();
