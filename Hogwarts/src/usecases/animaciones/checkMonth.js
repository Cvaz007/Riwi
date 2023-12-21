export const checkMonth = () => {
  const fecha = new Date();
  if (fecha.getMonth() !== 11) {
    return false;
  }
  return true;
};
