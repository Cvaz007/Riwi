export class User {
  /**
   *
   * @param {Like<User>} userDataLike
   */
  constructor({
    id,
    nombre,
    edad,
    familia,
    linaje,
    cualidades,
    casa,
    animalPatronus,
    clases
  }) {
    this.id = id;
    this.nombre = nombre;
    this.edad = edad;
    this.familia = familia;
    this.linaje = linaje;
    this.cualidades = cualidades;
    this.casa = casa;
    this.animalPatronus = animalPatronus;
    this.clases = clases;
  }
}


