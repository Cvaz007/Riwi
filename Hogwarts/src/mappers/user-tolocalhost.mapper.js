import { User } from "../models/user";

/**
 *
 * @param {User} user
 */
export const userModelToLocalhost = (user) => {
  const {
    id = 0,
    nombre = "",
    edad = "",
    familia = "",
    linaje = "",
    cualidades = {},
    casa = "",
    animalPatronus = "",
    clases = {},
  } = user;

  return {
    id,
    nombre,
    edad,
    familia,
    linaje,
    cualidades,
    casa,
    animalPatronus,
    clases,
  };
};
