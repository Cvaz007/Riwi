const contNieve = document.querySelector(".nieve");
contNieve.innerHTML = "";

const generarNieve = () => {
  Array.from({ length: 50 }).forEach((element) => {
    const num = random(11, 26);
    contNieve.innerHTML += `<span style="--i:${num}"></span>`;
  });
};

const random = (inicial, final) =>
  Math.floor(Math.random() * (final - inicial) + inicial);

generarNieve();

ssss;
