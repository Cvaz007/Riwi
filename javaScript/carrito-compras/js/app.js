const table = document.querySelectorAll(".agregar-carrito");
const carBody = document.querySelector(".tbody");

const items = [
  {
    img: "https://static.zara.net/photos///2023/I/0/2/p/0108/310/800/2/w/172/0108310800_6_1_1.jpg?ts=1692269630050",
    nombre: "PANTALÓN CARGO SLIM FIT",
    precio: "$152",
    cantidad: 1,
    id: 0,
  },
  {
    img: "https://static.zara.net/photos///2023/I/0/2/p/6786/320/800/2/w/239/6786320800_6_1_1.jpg?ts=1685370868369",
    nombre: "PANTALÓN CHINO ALGODÓN",
    precio: "$132",
    cantidad: 1,
    id: 1,
  },
  {
    img: "https://static.zara.net/photos///2023/I/0/2/p/6861/451/802/2/w/156/6861451802_6_1_1.jpg?ts=1689085206146",
    nombre: "PANTALON ESTRUCTURAL VERTICAL",
    precio: "$152",
    cantidad: 1,
    id: 2,
  },
  {
    img: "https://static.zara.net/photos///2023/V/0/2/p/0108/401/707/2/w/156/0108401707_6_1_1.jpg?ts=1675696045773",
    nombre: "PANTALÓN CINTURA JOGGER EASY CARE",
    precio: "$499",
    cantidad: 1,
    id: 3,
  },
  {
    img: "https://static.zara.net/photos///2023/I/0/2/p/6917/337/401/2/w/156/6917337401_6_1_1.jpg?ts=1698684693272",
    nombre: "PANTALÓN CHINO SLIM FIT",
    precio: "$299",
    cantidad: 1,
    id: 4,
  },
  {
    img: "https://static.zara.net/photos///2023/I/0/2/p/5520/340/707/2/w/294/5520340707_6_1_1.jpg?ts=1690811174619",
    nombre: "PANTALÓN CINTURA JOGGER EASY CARE",
    precio: "$253",
    cantidad: 1,
    id: 5,
  },
  {
    img: "https://static.zara.net/photos///2023/I/0/2/p/8281/344/505/2/w/156/8281344505_6_1_1.jpg?ts=1693924565491",
    nombre: "PANTALÓN ALGODÓN PLIEGUES",
    precio: "$152",
    cantidad: 1,
    id: 6,
  },
  {
    img: "https://static.zara.net/photos///2023/I/0/2/p/7545/371/400/2/w/306/7545371400_2_1_1.jpg?ts=1702459731961",
    nombre: "CAMISA OXFORD",
    precio: "$235",
    cantidad: 1,
    id: 7,
  },
  {
    img: "https://static.zara.net/photos///2023/I/0/2/p/4344/333/307/2/w/306/4344333307_2_1_1.jpg?ts=1702459733056",
    nombre: "Camisa algodon",
    precio: "$210",
    cantidad: 1,
    id: 8,
  },
  {
    img: "https://static.zara.net/photos///2023/I/0/2/p/6529/400/727/2/w/306/6529400727_2_1_1.jpg?ts=1694180150877",
    nombre: "Camisa Moderna",
    precio: "$300",
    cantidad: 1,
    id: 9,
  },
  {
    img: "https://static.zara.net/photos///2023/I/0/2/p/5738/400/500/2/w/306/5738400500_2_1_1.jpg?ts=1690360447135",
    nombre: "Camisa de playa",
    precio: "$200",
    cantidad: 1,
    id: 10,
  },
  {
    img: "https://static.zara.net/photos///2023/I/0/2/p/5679/186/064/2/w/510/5679186064_2_1_1.jpg?ts=1696577073205",
    nombre: "100 Recetas de Comida Natural",
    precio: "$15",
    cantidad: 1,
    id: 11,
  },
];

let carrito = [];

const selectItem = (event) => {
  event.preventDefault();
  const id = event.target.getAttribute("data-id") - 1;
  const item = carrito.filter((i) => i.id === id);

  if (item.length !== 0) {
    plusItem(item);
  } else {
    addItem(id);
  }
  renderCarrito();
};

const renderCarrito = () => {
  const trHTML = document.createElement("tr");
  carrito.forEach((item) => {
    const containerImg = document.createElement("td");
    const precio = document.createElement("td");
    const nombre = document.createElement("td");
    const cantidad = document.createElement("td");
    const img = document.createElement("img");

    img.src = `${item.img}`;
    /* img.setAttribute("width:100px"); */

    nombre.textContent = `${item.nombre}`;
    precio.textContent = `${item.precio}`;
    cantidad.textContent = `${item.cantidad}`;

    containerImg.appendChild(img);
    trHTML.appendChild(img);
    trHTML.appendChild(nombre);
    trHTML.appendChild(precio);
    trHTML.appendChild(cantidad);
  });
  carBody.appendChild(trHTML);
};

const addItem = (id) => {
  carrito.push(items[id]);
};

const plusItem = (item) => {
  item[0].cantidad += 1;
};

const select = () => {
  table.forEach((item) => item.addEventListener("click", selectItem));
};
select();
