//Petición HTTP con fetch

//Selectores
const btnText = document.querySelector("#btnLoadText");
const textoHTML = document.querySelector("#texto");

//Eventos
btnText.addEventListener("click", () => {
  //consumirTxt();
  consumirTxtSegundaforma();
});

function consumirTxt() {
  //fetch es un servicio integrado de Javascript que nos permite hacer peticiones HTTP, Fetch recibe como paramero la URL del archivo al cual se la va a hacer la petición. (FETCH RETORNA UNA PROMESA)
  const URL = "data/data.txt";

  fetch(URL)
    .then((respuesta) => {
      console.log(respuesta);
      console.log(respuesta.status);
      console.log(respuesta.statusText);
      //Si quiero la respuesta en texto = text()
      //En JSON = .json()
      return respuesta.text();
    })
    .then((valor) => {
      console.log(valor);
      textoHTML.textContent = valor;
    });
}

//La otra manera para consumir una API
const consumirTxtSegundaforma = async () => {
  const URL = "data/data.txt";
  try {
    const data = await fetch(URL);
    if (data.status !== 200) {
      throw new Error("Ocurrio un error");
    }
    //La respuesta se toma segun el tipo del archivo, en este caso es un txt por lo que es .text(), pero se es un json seria .json()
    const res = await data.text();
    textoHTML.textContent = res;
  } catch (error) {
    console.error(error);
  }
};
