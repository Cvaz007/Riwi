import { paso5 } from "../usecases";
import { changeImage } from "../usecases/animaciones/changeImage";
import { getUSerById } from "../usecases/peticiones/get-user-by-id";

export const renderFormClases = async (callback) => {
  const form = document.getElementById("form3");
  const loadedUser = await getUSerById(1);
  renderClases(loadedUser);

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const userLike = { ...loadedUser };
    const clases = {};
    let cont = -1;
    
    for (const [key, value] of formData) {
      if(key == "horario") cont++;
      userLike["clases"][cont][key] = value ;
    }
    userLike["animalPatronus"]= paso5();
    await callback(userLike);
  });
  changeImage();
};

const renderClases =  (loadedUser) => {
  const tbody = document.getElementById("tbody");
  const clases = loadedUser["clases"];

  clases.forEach((clase,index) => {
    const tr = document.createElement("tr");
    const indexTd = document.createElement("th");
    const profesorTd = document.createElement("td");
    const nombreTd = document.createElement("td");
    const horarioTd = document.createElement("td");
    const propiedadTd = document.createElement("td");

    indexTd.textContent = `${index+1}`;
    indexTd.setAttribute("scope","row");
    profesorTd.textContent = `${clase.profesor}`;
    nombreTd.textContent = `${clase.nombre}`;
    horarioTd.innerHTML = `
    <input
      type="text"
      class="form-control"
      id="validationCustom01"
      placeholder=""
      required
      name="horario"
    />
    <div class="valid-feedback">Looks good!</div>
 `;
    propiedadTd.innerHTML = `
    <input
      type="text"
      class="form-control"
      id="validationCustom02"
      placeholder=""
      required
      name="propiedad"
    />
    <div class="valid-feedback">Looks good!</div>
 `;
    tr.append(indexTd,profesorTd, nombreTd, horarioTd, propiedadTd);
    tbody.appendChild(tr);
  });
};
