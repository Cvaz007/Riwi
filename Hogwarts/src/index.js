import {
    paso1,
    paso2,
    paso3,
    paso4,
    paso5,
    paso6,
    paso7,
    renderHome,
    renderFormsEstudiante,
} from "./usecases";
let estudiante;
renderHome();

//SELECTORES
const btnPlay = document.querySelector("#play");


//Eventos (Listeners)
btnPlay.addEventListener("click", estudiante = renderFormsEstudiante);
console.log(estudiante.then((res) => console.log(res)));
//Declaracion de variables globales
/* let clases = paso2();
let estudiante = paso1();


const [cualidad1, cualidad2, cualidad3, casa] = paso3();
estudiante.cualidades.cualidad1 = cualidad1;
    estudiante.cualidades.cualidad2 = cualidad2;
    estudiante.cualidades.cualidad3 = cualidad3;
estudiante.casa = casa;

clases = paso4(clases);

estudiante.animalPatronus = paso5();

paso6(estudiante,clases);

clases= paso7(clases); */
