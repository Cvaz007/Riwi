export const generarNieve = () => {
  const contNieve = document.querySelector(".nieve");
  Array.from({ length: 50 }).forEach((element) => {
    const num = random(11, 26);
    contNieve.innerHTML += `<span style="--i:${num}"></span>`;
  });
};

const random = (inicial, final) =>
  Math.floor(Math.random() * (final - inicial) + inicial);
