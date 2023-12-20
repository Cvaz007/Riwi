import{generarNieve,checkMonth} from "../usecases/index";
import {getUSerById} from "../usecases/peticiones/get-user-by-id"
export const renderFormsEstudiante = async (element,callback) => {
  const btnPlay = document.querySelector("#play");
  btnPlay.addEventListener("click",(event) => {
    event.preventDefault();
    element.innerHTML = `
    <div
      id="container"
      class="d-flex align-items-center justify-content-center chrismas"
    >
      <div class="nieve"></div>
      <form id="form" class="row g-3 needs-validation p-3" novalidate>
        <div class="col-md-4">
          <label for="validationCustom01" class="form-label">Nombre</label>
          <input
            type="text"
            class="form-control"
            id="validationCustom01"
            placeholder="Sebastian..."
            required
          />
          <div class="valid-feedback">Looks good!</div>
        </div>
        <div class="col-md-4">
          <label for="validationCustom02" class="form-label">Edad</label>
          <input
            type="number"
            class="form-control"
            id="validationCustom02"
            placeholder="20"
            required
          />
          <div class="valid-feedback">Looks good!</div>
        </div>

        <div class="col-md-6">
          <label for="validationCustom03" class="form-label">Familia</label>
          <input
            type="text"
            class="form-control"
            id="validationCustom03"
            required
          />
          <div class="invalid-feedback">Por favor ingresa tu familia.</div>
        </div>

        <div class="col-md-3">
          <label for="validationCustom04" class="form-label">Linaje</label>
          <select class="form-select" id="validationCustom04" required>
            <option selected disabled value="">Ingresa una oopcion</option>
            <option>Sangre pura</option>
            <option>Mestizo</option>
            <option>Muggle</option>
          </select>
          <div class="invalid-feedback">Please select a valid state.</div>
        </div>

        <div class="col-13">
          <button class="btn btn-dark" type="submit">Inscribirse</button>
        </div>
      </form>

      <div id="img">
        <img
          src="public/assets/imgs/pngwing.com.png"
          alt="Logo"
          width="400px"
          height="400px"
        />
      </div>
    </div>`;
  });
    const form = document.querySelector("#form");
    
    const loadedUser= await getUSerById(0);
    form?.addEventListener("submit",async (event) => {
      event.preventDefault();
      const formData = new FormData();
      
      const userLike = { ...loadedUser };
      for (const [key,value] of formData) {
        userLike[key]=value;
      }
      console.log(userLike);
      await callback(userLike);
    })
    changeImage();    
};

//Listeners
const changeImage = () => {
    const container = document.querySelector("#container")
    if (!checkMonth()) {
        container.classList.replace("chrismas", "normal");
    } else {
        generarNieve();
    }
}

