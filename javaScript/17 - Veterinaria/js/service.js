
const perritoImg = async () => {
  const data = await fetch("https://dog.ceo/api/breeds/image/random");
  const res = await data.json();
  return res.message;
}