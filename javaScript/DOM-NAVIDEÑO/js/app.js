const contNieve = document.querySelector(".nieve");
const audioNavida = document.querySelector("#musica-navidad");
//Al ser un elemento diferente, tiene propiedades unicas de los audios
audioNavida.play();
audioNavida.loop = true;

contNieve.innerHTML = "";

const generarNieve = () => {
  Array.from({ length: 50 }).forEach((element) => {
    const num = random(11, 26);
    contNieve.innerHTML += `<span style="--i:${num}"></span>`;
  });
};

const random = (inicial, final) =>
  Math.floor(Math.random() * (final - inicial) + inicial);

const timerNavidad = () => {
  const fechaActual = new Date();
  const fechaObjetivo = new Date(fechaActual.getFullYear(), 11, 25);

  if (fechaActual.getMonth() === 11 && fechaActual.getDate() > 25) {
    fechaObjetivo.setFullYear(fechaObjetivo.getFullYear() + 1);
  }

  let diferenciaMs = fechaObjetivo - fechaActual;
  let diasRestantes = Math.floor(diferenciaMs / (1000 * 60 * 60 * 24));
  let horasRestantes = Math.floor(
    (diferenciaMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutosRestantes = Math.floor(
    (diferenciaMs % (1000 * 60 * 60)) / (1000 * 60)
  );
  let segundosRestantes = Math.floor((diferenciaMs % (1000 * 60)) / 1000);

  return [diasRestantes, horasRestantes, minutosRestantes, segundosRestantes];
};

const renderTime = (time) => {
  const diasP = document.querySelector("#dia-timer");
  const horasP = document.querySelector("#hora-timer");
  const minutosP = document.querySelector("#minuto-timer");
  const segundosP = document.querySelector("#segundo-timer");
  setInterval(() => {
    const [dias, horas, minutos, segundos] = timerNavidad();
    diasP.innerHTML = dias.toString().padStart(2, "0");
    horasP.innerHTML = horas.toString().padStart(2, "0");
    minutosP.innerHTML = minutos.toString().padStart(2, "0");
    segundosP.innerHTML = segundos.toString().padStart(2, "0");
  }, 1000);
};

generarNieve();
renderTime();
