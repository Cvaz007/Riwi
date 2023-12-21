import { checkMonth } from "./checkMonth";
import { generarNieve } from "./nevar";

export const changeImage = () => {
  const container = document.querySelector("#container");
  if (!checkMonth()) {
    container.classList.replace("chrismas", "normal");
  } else {
    generarNieve();
  }
};