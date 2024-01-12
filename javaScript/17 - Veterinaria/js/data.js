let pacientes = [];
let indicePaciente;

const listaPacientesCache = JSON.parse(localStorage.getItem("pacientesCache"));

//Selectores
const contenedorCartas = document.querySelector(".container-cites");
const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");


