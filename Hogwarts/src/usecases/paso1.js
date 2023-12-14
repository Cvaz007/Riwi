/**
 * 
 * @returns {Object <estudiante>} Retorna el estudiante
 */
export const paso1 = () => {
    //selector
    const form = document.querySelector("#form");
    alert("Bienvenido a hogwarts, te pediremos algunos datos!");
    const nombre = prompt("Ingresa tu nombre: ");
    const edad = parseInt(prompt("Ingresa tu edad: "));
    const familia = prompt("Ingresa el nombre de tu familia: ");
    const linaje = prompt(
        "Ingresa tu linaje (Mestizo, Muggle, Sangre pura, etc.):"
    );
    const estudiante = {
        nombre, edad, familia, linaje, cualidades: {
            cualidad1: "Vacia",
            cualidad2: "Vacia",
            cualidad3: "Vacia",
        },
        casa: "Vacia",
        animalPatronus: "Vacia",
    }

    return estudiante;
};