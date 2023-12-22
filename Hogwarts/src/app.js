import { renderHome, renderFormsEstudiante } from "./usecases";
import { saveUser } from "./usecases/peticiones/save-user";
import userStore from "./store/user-store";
import { renderFormCualidades } from "./presentation/renderFormCualidades";
import { renderFormClases } from "./presentation/renderFormClases";
import {renderFormPocion} from './presentation/renderFormPocion';
import { renderListar } from "./presentation/renderListar";
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
  renderFormCualidades(async (userLike) => {
    const user = await saveUser(userLike);
    userStore.onUserChanged(user);
  });
  renderFormClases(async (userLike) => {
    const user = await saveUser(userLike);
    userStore.onUserChanged(user);
  });
  renderFormPocion(async (userLike) => {
    const user = await saveUser(userLike);
    userStore.onUserChanged(user);
  });
  renderListar();
};
