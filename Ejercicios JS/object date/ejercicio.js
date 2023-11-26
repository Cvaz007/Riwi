/* Registro de Citas Médicas

Supongamos que estás desarrollando un sistema para gestionar citas médicas.
Crea un objeto CitaMedica que contenga la siguiente información:

Paciente: Representado por un objeto con propiedades nombre y edad.
Fecha y Hora de la Cita: Utiliza el objeto Date para almacenar la fecha y 
la hora de la cita.
Duración de la Cita (en minutos): Un número entero que indica la duración 
estimada de la cita.

Luego, realiza las siguientes acciones:
Crea dos instancias de CitaMedica con la información de dos pacientes y
fechas de citas diferentes.
Implementa un método en el objeto CitaMedica que muestre la información
completa de la cita, incluyendo el nombre del paciente, la fecha y hora
de la cita, y la duración.

Finalmente, muestra la información de ambas citas médicas. */

//SOLUCION SIMPLE
// Definición de la primera cita médica
var paciente1 = { nombre: "Ana", edad: 35 };
var fechaHora1 = new Date(2023, 0, 30, 14, 30); // 30 de enero de 2023, 14:30
var duracion1 = 60;

// Mostrar la información de la primera cita médica
console.log("Cita Médica:");
console.log("Paciente:", paciente1.nombre);
console.log("Edad:", paciente1.edad);
console.log("Fecha y Hora:", fechaHora1.toLocaleString());
console.log("Duración:", duracion1, "minutos");
console.log("--------------");

// Definición de la segunda cita médica
var paciente2 = { nombre: "Carlos", edad: 45 };
var fechaHora2 = new Date(2023, 1, 15, 10, 0); // 15 de febrero de 2023, 10:00
var duracion2 = 45;

// Mostrar la información de la segunda cita médica
console.log("Cita Médica:");
console.log("Paciente:", paciente2.nombre);
console.log("Edad:", paciente2.edad);
console.log("Fecha y Hora:", fechaHora2.toLocaleString());
console.log("Duración:", duracion2, "minutos");
console.log("--------------");


// SOLUCION CON FUNCIONES
// Definición del objeto CitaMedica
function CitaMedica(paciente, fechaHora, duracion) {
  this.paciente = paciente;
  this.fechaHora = fechaHora;
  this.duracion = duracion;

  // Método para mostrar la información de la cita
  this.mostrarInfoCita = function () {
    console.log("Cita Médica:");
    console.log("Paciente:", this.paciente.nombre);
    console.log("Edad:", this.paciente.edad);
    console.log("Fecha y Hora:", this.fechaHora.toLocaleString());
    console.log("Duración:", this.duracion, "minutos");
    console.log("--------------");
  };
}

// Creación de dos instancias de CitaMedica
var paciente1 = { nombre: "Ana", edad: 35 };
var fechaHora1 = new Date(2023, 0, 30, 14, 30); // 30 de enero de 2023, 14:30
var cita1 = new CitaMedica(paciente1, fechaHora1, 60);

var paciente2 = { nombre: "Carlos", edad: 45 };
var fechaHora2 = new Date(2023, 1, 15, 10, 0); // 15 de febrero de 2023, 10:00
var cita2 = new CitaMedica(paciente2, fechaHora2, 45);

// Mostrar la información de ambas citas médicas
cita1.mostrarInfoCita();
cita2.mostrarInfoCita();
