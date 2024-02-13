import { urlBase } from "./index.js";
import { getFormData } from "../useCases/getFormData.js";

export const editElement = async (form, element) => {
    const id = JSON.parse(localStorage.getItem("editIndex"));
    const data = getFormData(form);

    await fetch(`${urlBase}/${element}/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    localStorage.setItem("editIndex", JSON.stringify(null));
};