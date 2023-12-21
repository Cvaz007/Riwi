import { paso3 } from "../usecases";
import { changeImage } from "../usecases/animaciones/changeImage";
import { getUSerById } from "../usecases/peticiones/get-user-by-id";

export const renderFormCualidades = async (callback) => {
  const form = document.getElementById("form2");
  const loadedUser = await getUSerById(1);

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const userLike = { ...loadedUser };
    const cualidades = {};
    

    for (const [key, value] of formData) {
      cualidades[key] = value;
    }
    userLike["cualidades"] = cualidades;
    userLike["casa"] = paso3(cualidades);
    await callback(userLike);
  });
  changeImage();
};
