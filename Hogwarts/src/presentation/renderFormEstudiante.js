import{generarNieve,checkMonth, paso1} from "../usecases/index";

export const renderFormsEstudiante = async () => {
    const main = document.querySelector("#main");
    main.innerHTML = `
    
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

    changeImage()
    const a = paso1();
    console.log(a.then(r => {console.log(r);}));
    return a;
    
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