export const fillModal = (job, form) => {
  const formElements = form.querySelectorAll("[name]");
  formElements.forEach((element) => {
    const fieldName = element.getAttribute("name");
    if (job.hasOwnProperty(fieldName)) {
      element.value = job[fieldName];
    }
  });
};
