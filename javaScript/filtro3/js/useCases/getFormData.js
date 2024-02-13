export const getFormData = (form) => {
  const formData = new FormData(form);
  const data = {};

  for (const [key, value] of formData) {
    data[key] = value;
  }
  return data;
};
