//Selectores
const tbody = document.querySelector("#tbody");
const alerta = document.querySelector("#alerta");
//INPUTS
const nombreProducto = document.querySelector("#nombre_producto");
const cantidadProducto = document.querySelector("#cantidad_producto");
const precioProducto = document.querySelector("#precio_producto");
const imagenProducto = document.querySelector("#imagen_producto");
const categoriaProducto = document.querySelector("#categoria_producto");
const inputs = document.querySelectorAll(".inpt");
//BUTTONS
const btnAgregar = document.querySelector("#btn_agregar");

//Eventos
btnAgregar.addEventListener("click", (event) => {
    //Quito los eventos por defecto
    event.preventDefault();
    agregarProducto();
    console.log(listaProductos);
    inputs.forEach((input)=>input.value ="");
});

//Lista de productos
const listaProductos = [
    {
        id: crypto.randomUUID(),
        nombre: "Pastas",
        precio: 5.0,
        cantidad: 10,
        imagen:
            "https://media.istockphoto.com/id/1144823591/photo/spaghetti-in-a-dish-on-a-white-background.jpg?s=612x612&w=0&k=20&c=SeEWmJfPQlX1zVUHPKjL-cgYeMs9cZ97-kdZMm7feA4=",
        categoria: "Carbohidratos",
    },
];

const mostrarProductos = () => {
    //limpiar tabla
    tbody.innerHTML = "";
    listaProductos.forEach((producto, indice) => {
        const { cantidad, categoria, id, imagen, nombre, precio } = producto;
        const precioFormat = Number(precio).toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
        });
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
            <button class="btn btn-primary edit-product" data-id="${id}">Editar</button>
            <button class="btn btn-danger delete-product data-id="${id}"">Eliminar</button>
        </td>
    </tr>
    `;
    });
};

const agregarProducto = () => {
    /**Le adicionamos clases a nuestra alerta (d-none para no se visible) */
    alerta.classList = "alert alert-danger d-none";
    /**Validar  */

    if ([nombreProducto.value,
    cantidadProducto.value,
    categoriaProducto.value,
    precioProducto.value,
    ].includes("")) {
        /**Si algun campo está vacío */
        alerta.textContent = "Todos los campos son obligatorios.";
        alerta.classList.remove("d-none");
        return;
    }
    const nuevoProducto = {
        id: crypto.randomUUID(),
        nombre: nombreProducto.value,
        cantidad: cantidadProducto.value,
        imagen: imagenProducto.value,
        categoria: categoriaProducto.value,
        precio: precioProducto.value
    };
    listaProductos.push(nuevoProducto);

    //Mensaje de exito
    alerta.classList = "alert alert-success";
    alerta.textContent = "Producto agregado correctamente";
    setTimeout(() => {
      alerta.classList.add("d-none")
    },2500);
    
    mostrarProductos()
};

mostrarProductos();
