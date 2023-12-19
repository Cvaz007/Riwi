import { User } from "../models/user";
/**
 *
 * @param {Like<User>} localhostUser
 * @returns {User}
 */
export const localhostUserToModel = (localhostUser) => {
  const {
    id,
    nombre,
    edad,
    familia,
    linaje,
    cualidades,
    casa,
    animalPatronus,
    clases,
  } = localhostUser;
  return new User({
    id,
    nombre,
    edad,
    familia,
    linaje,
    cualidades,
    casa,
    animalPatronus,
    clases,
  });
};
