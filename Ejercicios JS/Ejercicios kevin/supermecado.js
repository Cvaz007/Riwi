let products = [
  { name: "Leche", precio: 2000, categoria: "Lacteos" },
  { name: "Quesito", precio: 2000, categoria: "Lacteos" },
  { name: "Arroz", precio: 4000, categoria: "Grano" },
  { name: "Zanahoria", precio: 1500, categoria: "Verduras" },
];
function modifyProductByName(name) {
  const index = products.findIndex((product) => product.name === name);

  if (index !== -1) {
    // Encontrar el producto y realizar modificaciones
    let updatedProduct = { ...products[index] }; // Copiar el producto para no modificar el original directamente
    // Puedes solicitar al usuario que ingrese las nuevas propiedades (nombre, precio, categoría, etc.)
    // Aquí se muestra un ejemplo donde solo se modifica el precio para simplificar
    const newPrice = parseFloat(
      prompt(`Ingrese el nuevo precio para ${name}:`)
    );
    updatedProduct.precio = isNaN(newPrice) ? updatedProduct.precio : newPrice;

    // Actualizar el producto en el array
    products[index] = updatedProduct;

    Alert(`Producto "${name}" modificado.`);
  } else {
    alert(`El producto "${name}" no se encontró en el array.`);
  }
}
const orderByAlphabet = () => {
  showProducts(products.sort((a, b) => a.name.localeCompare(b.name)));
};
const filterByPrice = () => {
  const price = prompt("Ingrese el precio a buscar");
  const productsByPrice = products.filter((product) => product.precio == price);
  showProducts(productsByPrice);
};
const lookingForName = () => {
  const name = prompt("Ingrese el nombre del producto a buscar");
  const productsByNAme = products.filter((product) => product.name == name);
  showProducts(productsByNAme);
};
const deleteProduct = (name) => {
  products = products.filter((product) => product.name !== name);
  showProducts(products);
};
const addProduct = () => {
  const nameP = prompt("Ingrese el nombre del producto");
  const precioP = prompt("Ingrese el precio del producto");
  const categoriaP = prompt("Ingrese la categoria del producto");

  const product = { name: nameP, precio: precioP, categoria: categoriaP };
  products.push(product);
  showProducts(products);
};
const showProducts = (products) => {
  let text = "";
  products.forEach((product) => {
    text += `
    Nombre: ${product.name}
    Precio: ${product.precio}
    Categoria: ${product.categoria} 
    ----------------------------------  
        `;
  });
  alert(text);
};
function menu() {
  const option = prompt(`
        BIENVENIDO!

        1. Agregar producto.
        2. Eliminar producto.
        3. Modficiar producto.
        4. Buscar por nombre.
        5. Filtar por precio.
        6. Crear un reporte de inventario - ordenado.
        0. Salir
    `);
  return option;
}
function main() {
  let option = "0";
  do {
    option = menu();
    switch (option) {
      case "1":
        addProduct();
        break;
      case "2":
        deleteProduct();
        break;
      case "3":
        const name = prompt("Ingrese el nombre del producto a modificar");
        modifyProductByName(name);
        break;
      case "4":
        lookingForName();
        break;
      case "5":
        filterByPrice();
        break;
      case "6":
        orderByAlphabet();
        break;
      case "0":
        alert("Hasta luego!");
        option = "0";
        break;
      default:
        alert("Esta opcion no es valida.");
        main();
        break;
    }
  } while (option !== "0");
}
main();
