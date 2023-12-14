//Selectores
const tbody = document.querySelector("#tbody");
const alerta = document.querySelector("#alerta");
const drawer = document.querySelector("#btnOpenDrawerEdit");
const nuevoProducto = document.querySelector("#offcanvasNavbarLabel");
const icono = document.querySelector("#icono");

//INPUTS
const nombreProducto = document.querySelector("#nombre_producto");
const cantidadProducto = document.querySelector("#cantidad_producto");
const precioProducto = document.querySelector("#precio_producto");
const imagenProducto = document.querySelector("#imagen_producto");
const categoriaProducto = document.querySelector("#categoria_producto");

const inputs = document.querySelectorAll(".inpt");

//BUTTONS
const btnAgregar = document.querySelector("#btn_agregar");

//Variables
let productoCache;
//Eventos
btnAgregar.addEventListener("click", (event) => {
    //Quito los eventos por defecto
    event.preventDefault();
    agregarProducto();
    console.log(listaProductos);
    /*Esta es otra manera de resetirar los inputs
    inputs.forEach((input)=>input.value =""); */
});

tbody.addEventListener("click", (event) => {

    if (event.target.classList.contains("delete-product")) {
        const id = event.target.getAttribute("data-id");

        if (id) eliminarProducto(id);
        return;
    }

    if (event.target.classList.contains("edit-product")) {
        const id = event.target.getAttribute("data-id");
        if (id) cargarInformacion(id);

    }
});

//Lista de productos
let listaProductos = [
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
        const imgDefault = "https://cdn-icons-png.flaticon.com/512/2771/2771406.png";
        tbody.innerHTML += `
    <tr>
        <td>${indice + 1}</td>
        <td>
            <img 
                src="${imagen || imgDefault}" 
                alt="Img producto"
                class="rounded-circle"
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
            <button class="btn btn-danger delete-product" data-id="${id}">Eliminar</button>
        </td>
    </tr>
    `;
    });
};

const agregarProducto = () => {
    /**Le adicionamos clases a nuestra alerta (d-none para no se visible) */
    alerta.classList = "alert alert-danger d-none";
    if (!productoCache) {
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
        }, 2500);
    }else {
        
    }


    /* para resetirar un formulario se hace: */
    document.querySelector("#form_productos").reset();

    mostrarProductos()
};

const eliminarProducto = (id) => {
    listaProductos = listaProductos.filter((producto) => producto.id != id);
    mostrarProductos();
};

const cargarInformacion = (id) => {
    productoCache = listaProductos.find((product) => product.id == id);

    console.log(productoCache);

    nombreProducto.value = productoCache.nombre
    cantidadProducto.value = productoCache.cantidad;
    precioProducto.value = productoCache.precio;
    imagenProducto.value = productoCache.imagen;
    categoriaProducto.value = productoCache.categoria;

    icono.classList.replace("bx-cart-add", "bxs-edit");
    btnAgregar.innerText = "Actualizar producto";
    nuevoProducto.innerText = "Editar producto"
    drawer.click();
};

mostrarProductos();


