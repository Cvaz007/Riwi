import{generarNieve,checkMonth} from "../usecases/index";
import {getUSerById} from "../usecases/peticiones/get-user-by-id"
export const renderFormsEstudiante = async (callback) => {
  
    const form = document.getElementById("form");
    const loadedUser= await getUSerById(1);
    
    form.addEventListener("submit",async (event) => {
      event.preventDefault();
      const formData = new FormData(form);

      const userLike = { ...loadedUser };
      for (const [key,value] of formData) {
        userLike[key]=value;
      }

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

