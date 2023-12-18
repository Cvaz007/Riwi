let saldo = 2500000;
//la salud repenta los puntos para llegar a su destino --> en caso de ser menor de 50 Hildebrando muere.
let salud = 100;
//controla si Hildebrando llega al destino
let llegada = true;
//controla que el viaje continue
let bandera = true;

//SEXTO CASO
function amarillo() {
  const opcion = prompt(
    "Veo que tienes ganas de ir a la piscina. Sin embargo el agua huele raro ¿Quieres meterte? (si-no)"
  ).toLowerCase();
  if (opcion == "si") {
    salud -= 100;
    alert("Ups!, Moriste por las condiciones de la piscina");
  } else if (opcion == "no") {
    alert("Esta bien :c");
  } else {
    alert("Opcion no valida");
    amarillo();
  }
}
function verde() {
  const opcion = prompt(
    "Veo que tienes ganas de ir a la caminata. Tenemos dos planes ir a toda la caminata o ir solo hasta cierto punto y devolverte solo ¿Que quieres hacer? (Toda-Parcial)"
  ).toLowerCase();
  if (opcion == "toda") {
    alert(
      "Genial!, visitaremos una hermosa cascada donde te puedes tomar unas fotos hermosas."
    );
  } else if (opcion == "parcial") {
    salud -= 40;
    alert("Te has perdido!, debes pasar la noche en el bosque :0");
  } else {
    alert("Opcion no valida");
    verde();
  }
}
function roja() {
  const opcion = prompt(
    "Vamos pa' la placha :P, ¿Quieres nadar, jugar voleibol o descansar y tomar algunos cocteles? (nadar-jugar-descansar)"
  ).toLowerCase();
  if (opcion == "nadar") {
    alert("Genial!, además montaremos en moto!");
  } else if (opcion == "jugar") {
    alert("La pasaras genial!");
  } else if (opcion == "descansar") {
    salud -= 70;
    alert(
      "Tomaste chirrinchi!, te debemos internar y terminar las vacaciones!"
    );
  } else {
    alert("Opcion no valida");
    roja();
  }
}
function azul() {
  const opcion = prompt(
    "Genial!, ¿Cual quieres hacer?, tenemos: Bingo - Bailar - Casino"
  ).toLowerCase();
  if (opcion == "bingo") {
    alert("Que suertes tienes hoy!, te has ganado el premio mayor de $500.000");
    saldo += 500000;
  } else if (opcion == "bailar") {
    alert(
      "La pasaras genial, además conoceras nuevos amigos. Puedes tirate los pasos prohibidos!"
    );
  } else if (opcion == "casino") {
    salud -= 10;
    saldo = 0;
    alert(
      "Eres un ludopata, perdiste todo apostando, ahora te debes devolver para tu casa :c"
    );
  } else {
    alert("Opcion no valida");
    azul();
  }
}
function menuHotel() {
  const color = prompt(`
    ---- BIENVENIDO AL HOTEL ----

             ACTIVIDADES
    AMARILLO: ir a la piscina.
    VERDE: caminatas, y agüita para el camino.
    ROJA:  actividades en la playa (voleibol, nadar).
    AZUL: actividades dentro del hotel (Bingo, baile, casino).
  `).toLowerCase();
  return color;
}
function caso6(color) {
  if (color == "amarillo") {
    amarillo();
  } else if (color == "verde") {
    verde();
  } else if (color == "roja") {
    roja();
  } else if (color == "azul") {
    azul();
  } else {
    alert("Esta opcion no es valida");
    caso6(menuHotel());
  }
}
//QUINTO CASO
function caso5(empate) {
  if (empate == false) {
    caso4("Como!, ni que fuera una limosina");
    caso4(
      "Esta bien, juguemos piedra papel y tijera, si yo gano me pagas sino no me pagas"
    );

    caso4("Me la juego");
  }
  const Taxi = Math.floor(Math.random() * 3 + 1);
  const Hilde = parseInt(
    prompt(`
  1. Papel
  2. Tijera
  3. Piedra

  Que elijes?
  `)
  );
  alert(`
  1. Papel
  2. Tijera
  3. Piedra
  
  Opcion taxista: ${Taxi}
  `);
  if (Hilde > 0 && Hilde < 4) {
    if (
      (Taxi == 1 && Hilde == 3) ||
      (Taxi == 2 && Hilde == 1) ||
      (Taxi == 3 && Hilde == 2)
    ) {
      caso4("Ahora me pagas las 300 lukas");
      saldo -= 300000;
    } else if (Taxi == Hilde) {
      caso4("Es un empate");
      caso5(true);
    } else {
      caso4("Has ganado, te traje gratis!");
    }
  } else {
    alert("Opcion no valida");
    caso5(true);
  }
}
//CUARTO CASO
function caso4(frase) {
  frase = frase
    .replace("e", "i")
    .replace("a", "i")
    .replace("o", "i")
    .replace("u", "i")
    .replace("E", "i")
    .replace("A", "i")
    .replace("O", "i")
    .replace("U", "i");
  alert(frase);
}
//TERCER CASO
function caso3(contrasena_bit) {
  alert("El WIFI tiene un valor de $50.000 la hora");
  alert("Desencriptando...");
  saldo -= 50000;
  let contrasena = "";
  let bytes = contrasena_bit.split("_");

  for (byte of bytes) {
    const decimal = parseInt(byte, 2);
    const letra = String.fromCharCode(decimal);
    contrasena += letra;
  }
  alert("La contraseña es: " + contrasena + ", disfruta del wifi!");
}
//SEGUNDO CASO
function caso2(ancho, alto, largo) {
  alert("Estamos en la sala de espera revisando tus maletas...");
  if (alto <= 55 && largo <= 40 && ancho <= 20) {
    alert("Tu maleta paso sin ningun problema");
  } else {
    const opcion = prompt(
      "Debes cambiar el tamaño de tus males o agrandar tu capacidad de mano por $100.000, lo agrandamos? (si - no)"
    ).toLowerCase();
    if (opcion == "si") {
      saldo -= 100000;
    } else if (opcion == "no") {
      anchoNuevo = 20 / ancho;
      largoNuevo = 40 / largo;
      altoNuevo = 55 / alto;
      let menor = Math.min(anchoNuevo, largoNuevo, altoNuevo);
      anchoNuevo = ancho * menor;
      largoNuevo = largo * menor;
      altoNuevo = alto * menor;
      alert(
        "Tu maleta se debe reducir! -  Ancho:" +
          anchoNuevo +
          " - Largo:" +
          largoNuevo +
          " - Alto:" +
          altoNuevo
      );
    } else {
      alert("Opcion no valida");
      caso2(ancho, alto, largo);
    }
  }
}
//PRIMER CASO
function caso1(opcion) {
  if (opcion == "si") {
    opcionMenu = prompt(`
      Vamos a comer algo!
      ---- MENU ----
      1. Almohabana $15.000 --> Esta vieja.
      2. Subway con gaseosa $23.000.
      3. No comprar nada.

      ¿Que opcion eleiges?
    `);
    switch (opcionMenu) {
      case "1":
        saldo -= 15000;
        salud -= 10;
        llegada = true;
        break;
      case "2":
        saldo -= 23000;
        llegada = true;
        break;
      case "3":
        alert("Que tacaño eres :c");
        break;
      default:
        alert("Esa opcion no existe");
        caso1(opcion);
        llegada = true;
        break;
    }
  } else if (opcion == "no") {
    opcion = prompt(
      "Lo sentimos, has perdido tu vuelo deseas. Deseas tomar otro por $300.000? (si/no) "
    ).toLowerCase();
    if (opcion == "si") {
      saldo -= 300000;
      caso1(opcion);
    } else if (opcion == "no") {
      llegada = false;
    } else {
      alert("Opcion no valida");
      caso1("no");
    }
  } else {
    alert("Opcion no valida");
    main();
  }
}
function resultados(vida, dinero) {
  alert("Tu saldo: $" + dinero + "\n Tu salud: " + vida + "%");
}
//funcion de control
function control(terminar) {
  if (salud <= 40 && saldo < 0) {
    alert("Tu viaje ha terminado!");
    bandera = false;
  } else if (terminar == true) bandera = false;
}
function main() {
  alert(" ---- BIENVENIDO A MACONDO ---- ");
  let opcion = prompt("Llegaste a tiempo al vuelo? (si - no)").toLowerCase();
  caso1(opcion);
  if (llegada == true) {
    while (bandera) {
      resultados(salud, saldo);

      let ancho = prompt("Ingresa el ancho de tu maleta en cm");
      let alto = prompt("Ingresa el alto de tu maleta en cm");
      let largo = prompt("Ingresa el largo de tu maleta en cm");
      caso2(ancho, alto, largo);
      resultados(salud, saldo);

      caso3("01110010_01101001_01110111_01101001");
      resultados(salud, saldo);

      caso4("Taxi me puede llevar al hotel mariposas amarillas");
      resultados(salud, saldo);

      caso5(false);
      control(false);
      resultados(salud, saldo);

      const color = menuHotel();
      caso6(color);
      control(false);

      alert(
        "Sobreviste al viaje, a continuacion te mostraremos tu vida y dinero"
      );
      resultados(salud, saldo);
      control(true);
    }
  } else {
    alert("Lo sentimos, pero no llegaste a tu destino y no podras viajar");
  }
}
main();
