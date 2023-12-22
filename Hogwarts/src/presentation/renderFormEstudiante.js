import { changeImage } from "../usecases/animaciones/changeImage";
import { cleanForm } from "../usecases/elements/cleanForm";
import { renderAncla } from "../usecases/elements/renderAncla";
import { paso2 } from "../usecases/index";
import { getUSerById } from "../usecases/peticiones/get-user-by-id";

export const renderFormsEstudiante = async (callback) => {
  const form = document.getElementById("form");
  const loadedUser = await getUSerById(1);

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(form);

    const userLike = { ...loadedUser };
    for (const [key, value] of formData) {
      userLike[key] = value;
    }
    userLike["clases"] = paso2();
    await callback(userLike);
    
    cleanForm(form);
    window.location.href = "formValores.html"
  });
  changeImage();
};


