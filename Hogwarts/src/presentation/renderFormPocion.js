import { changeImage } from "../usecases/animaciones/changeImage";
import { cleanForm } from "../usecases/elements/cleanForm";
import { renderAncla } from "../usecases/elements/renderAncla";
import { getUSerById } from "../usecases/peticiones/get-user-by-id";

export const renderFormPocion = async (callback) => {
  const form = document.getElementById("form4");
  const loadedUser = await getUSerById(1);

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(form);

    const userLike = { ...loadedUser };
    const pocion = {};
    for (const [key, value] of formData) {
      pocion[key] = value;
    }
    userLike["clases"] = crearPocion(pocion,userLike);
    await callback(userLike); 
    cleanForm(form);
    window.location.href = "listarDatos.html"
  });
  changeImage();
};

const crearPocion = (pocion, userLike) => {
  const clases = userLike["clases"];
  console.log(clases+" sss");
  if (
    pocion["drisopos"] == 2 &&
    pocion["tallo"] == 1 &&
    pocion["tiempo"] == 5
  ) {
    alert("Genial, has creado una pocion de Felix Felicis.");
    clases[2]["pocion"] = "Felix Felicis";
  } else {
    const nombre = clases[2]["nombre"];
    clases[2]["nombre"] = clases[5]["nombre"];
    clases[5]["nombre"] = nombre;
    clases[2]["pocion"] = "";
  }
  return clases;
};
