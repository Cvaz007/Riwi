export class Clase {
  /**
   *
   * @param {Like<Clase>} ClaseDataLike
   */
  constructor({ profesor, nombre, horario, propiedad }) {
    this.profesor = profesor;
    this.nombre = nombre;
    this.horario = horario;
    this.propiedad = propiedad;
  }
}
