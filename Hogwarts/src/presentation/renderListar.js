import { getUSerById } from "../usecases/peticiones/get-user-by-id";

export const renderListar = async () => {
  const cardBody = document.querySelector(".card-body");
  const tbody = document.getElementById("tbody2");
  const userLike = await getUSerById(1);

  cardBody.innerHTML = `
    <p>Nombre: ${userLike["nombre"]}</p>
    <p>Familia: ${userLike["familia"]}</p>
    <p>Edad: ${userLike["edad"]}</p>
    <p>Linaje: ${userLike["linaje"]}</p>
    <p>Casa: ${userLike["casa"]}</p>
    <p>Animal: ${userLike["animalPatronus"]}</p>
    <p>Cualidades: ${userLike["cualidades"]["cualidad1"]} - ${userLike["cualidades"]["cualidad2"]} - ${userLike["cualidades"]["cualidad3"]}</p>
  `;

  userLike["clases"].forEach((clase,index) => {
    const tr = document.createElement("tr");
    tr.innerHTML=`
    <td>${index+1}</td>
    <td>${clase["profesor"]}</td>
    <td>${clase["nombre"]}</td>
    <td>${clase["horario"]}</td>
    <td>${clase["propiedad"]}</td>
    `;
    tbody.appendChild(tr);
  });
  
};
