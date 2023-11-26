//Un objeto se define de la siguiente manera:
const persona = {
  //clave - Valor
  nombre:   "Juan",
  edad:     30,
  ciudad:   "Ejemploville",
};

//Como un objecto normal de string 
// let cadena = new String("Cadena de texto");SS
let fechaActual = new Date();
console.log(fechaActual);


//const fecha = new Date();

//construcion de argumentos
// Argumento: valor que se le pasa como referencia 
const fechaEspecifica = new Date(2023, 0, 26, 12, 30, 0);
console.log(fechaEspecifica);
//Aquí, se especifica el año (2023),
//el mes (0 para enero,11 para diciembre),
//el día (26), la hora (12), los minutos (30) y los segundos (0).
/*
const fecha = new Date();
console.log(fecha);
const año = fecha.getFullYear();
console.log(año);
const mes = fecha.getMonth(); // 0 para enero, 11 para diciembre
console.log(mes);
const hora = fecha.getHours();
const dia = fecha.get


const fecha = new Date();
console.log(fecha);
// Muestra la fecha y la hora local en formato de cadena legible
console.log(fecha.toLocaleString()); 
*/

var fecha = new Date();
console.log(fecha);
fecha.setDate(fecha.getDate() + 7) // Agrega 7 días a la fecha actual
console.log(fecha);
fecha.set

var fecha1 = new Date(2023, 0, 1);
var fecha2 = new Date(2023, 0, 15);
console.log(fecha1 < fecha2); 

fecha.toLocaleString()

var fecha = new Date();
// Diferencia de minutos entre la hora local y UTC
console.log(fecha.getTimezoneOffset()); 
// Representación de la fecha y hora en formato UTC
console.log(fecha.toUTCString()); 

