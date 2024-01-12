let puntosEcologicos = [
  {
    piso: "3",
    aprovechables: 0,
    organicos: 0,
    no_aprovechables: 0,
  },
  {
    piso: "4",
    aprovechables: 0,
    organicos: 0,
    no_aprovechables: 0,
  },
  {
    piso: "5",
    aprovechables: 0,
    organicos: 0,
    no_aprovechables: 0,
  },
];

let tipoCanecaAgregar;
//Selectores

const canecas = document.querySelectorAll(".bowl");
const btnAgegar = document.getElementById("btnSubmit");
const textContainer = document.querySelectorAll(".mt-1");
const form = document.querySelector("form");
const btnClose = document.getElementById("btnClose");
const selectPiso = document.getElementById("select_floor");

//Eventos y escuchadores
canecas.forEach((caneca) =>
  caneca.addEventListener("click", (event) => {
    document.getElementById("btnOpenModal").click();
    tipoCanecaAgregar = caneca.getAttribute("type-bowl");
  })
);

btnAgegar.addEventListener("click", () => {
  
  const cantidad = parseInt(document.getElementById("cantidad").value);
  /* añadir(selectPiso, tipoCanecaAgregar, cantidad); */
  puntosEcologicos.forEach((punto) => {
    if (punto.piso == selectPiso.value) {
      if (punto[tipoCanecaAgregar] <= 500) {
        punto[tipoCanecaAgregar] += parseInt(cantidad);
      } else alert("Cantidad maxima superada!");
    }
  });
  localStorage.setItem("puntosEco", JSON.stringify(puntosEcologicos));
  form.reset();
  btnClose.click();
  render(selectPiso.value);
});

selectPiso.addEventListener("change",()=>render(selectPiso.value))

//funciones
const render = (piso) => {
  const lista = JSON.parse(localStorage.getItem("puntosEco"));
  const data = lista.find((punto) => punto.piso == piso);

  textContainer[0].innerText = `${data.aprovechables}/500`;
  textContainer[1].innerText = `${data.organicos}/500`;
  textContainer[2].innerText = `${data.no_aprovechables}/500`;
};
render(selectPiso.value);

/* 
Es es la manera sin refctorizar el codigo

const añadir = (piso, caneca, cantidad) => {
  switch (piso) {
    case "3":
      if (caneca == "organicos") {
        puntosEcologicos[0].organicos += cantidad;
      } else if (caneca == "no_aprovechables") {
        puntosEcologicos[0].noAprovechables += cantidad;
      } else {
        puntosEcologicos[0].aprovechables += cantidad;
      }
      break;
    case "4":
      if (caneca == "organicos") {
        puntosEcologicos[1].organicos += cantidad;
      } else if (caneca == "no_aprovechables") {
        puntosEcologicos[1].noAprovechables += cantidad;
      } else {
        puntosEcologicos[1].aprovechables += cantidad;
      }
      break;
    case "5":
      if (caneca == "organicos") {
        puntosEcologicos[2].organicos += cantidad;
      } else if (caneca == "no_aprovechables") {
        puntosEcologicos[2].noAprovechables += cantidad;
      } else {
        puntosEcologicos[2].aprovechables += cantidad;
      }
      break;

    default:
      console.log("Hay un problema!");
      break;
  }
  console.log(puntosEcologicos);
}; */
