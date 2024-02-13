import { urlBase } from "./index.js";

export const deleteElement = async (id, element) => {
  const deleteUrl = `${urlBase}/${element}/${id}`;
  await fetch(deleteUrl, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
