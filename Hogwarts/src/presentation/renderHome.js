import { generarNieve, checkMonth } from "../usecases/index";

export const renderHome = () => {
  if (!checkMonth()) {
    main.classList.replace("chrismas", "normal");
} else {
    generarNieve();
}
};
