
export const renderAncla = (element,href) => {
  const contenedor = document.getElementById(element);
  contenedor.innerHTML+=`<a class="btn btn-dark" href="${href}"> Siguiente</a>`;
}