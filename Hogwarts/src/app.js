import { renderHome, renderFormsEstudiante } from "./usecases";
import { saveUser } from "./usecases/peticiones/save-user";
import userStore  from "./store/user-store";

/**
 *
 * @param {HTMLDivElement} element
 */
export const indexApp = () => {
  renderHome(); 
  renderFormsEstudiante(async (userLike) => {
    const user = await saveUser(userLike);
    userStore.onUserChanged(user);
  });
  
};
