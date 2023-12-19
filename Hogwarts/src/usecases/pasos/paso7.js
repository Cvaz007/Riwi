
export const paso7 = () => {
    const ingredientes = prompt("Tienes 2 Crisopos y 1 Tallo de Descurainia Sophia? (SI-NO)").toLowerCase();
    const time = prompt("Ingrese el tiempo para preparar la posicon") * 1;
    const aleatorio = Math.floor(Math.random() * (7 - 2) + 2);
    if (ingredientes === "si" && time == 5) {
        clases[0].posiones = {posion:"Felix Felicis",daño:"alto"};
    } else {
        clases[0].nombre = clases[aleatorio].nombre;
        clases[0].posiones= {posion:"",daño:""}
    }
    return clases;
};