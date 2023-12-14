import {
    paso1,
    paso2,
    paso3,
    paso4,
    paso5,
    paso6,
    paso7
} from "./usecases";

//Declaracion de variables globales
let clases = paso2();
let estudiante = paso1();
let clasePociones = {};

const [cualidad1, cualidad2, cualidad3, casa] = paso3();
estudiante.cualidades.cualidad1 = cualidad1;
    estudiante.cualidades.cualidad2 = cualidad2;
    estudiante.cualidades.cualidad3 = cualidad3;
estudiante.casa = casa;

clases = paso4(clases);

estudiante.animalPatronus = paso5();

paso6(estudiante,clases);

clasePociones= paso7(clases);