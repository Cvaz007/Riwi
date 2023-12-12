//import { v4 as uuid } from "/uuid";
//Selectores
const tbody = document.querySelector("#tbody");

//Lsta de productos
const listaProductos = [
    { id: 1, date: Date.now(), nombre: "Pastas", precio: 5.0, cantidad: 10, imagen: "https://media.istockphoto.com/id/1144823591/photo/spaghetti-in-a-dish-on-a-white-background.jpg?s=612x612&w=0&k=20&c=SeEWmJfPQlX1zVUHPKjL-cgYeMs9cZ97-kdZMm7feA4=", categoria: "Carbohidratos" }
];

const mostrarProductos = () => {
    //limpiar tabla
    tbody.innerHTML = "";
    listaProductos.forEach((producto, indice) => {
        const { cantidad, categoria, id, imagen, nombre, precio } = producto;
        const precioFormat = Number(precio).toLocaleString("en-US", { style: "currency", currency: "USD" })
        tbody.innerHTML += `
    <tr>
        <td>${indice + 1}</td>
        <td>
            <img 
                src="${imagen}" 
                alt="Img producto"
                class="rounded-circule"
                width="50px"
                height="50px"
            />
        </td>
        <td>${nombre}</td>
        <td>${precioFormat}</td>
        <td>${categoria}</td>
        <td>${cantidad}</td>

        <td>
            <button class="btn btn-primary edit-product">Editar</button>
            <button class="btn btn-danger delete-product">Eliminar</button>
        </td>
    </tr>
    `;
    });
};
mostrarProductos();
