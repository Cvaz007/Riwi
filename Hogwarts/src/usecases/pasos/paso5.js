/**
 *
 * @returns {String} nombre dle animal
 */
export const paso5 = () => {
  return asignarAnimal();
};

const asignarAnimal = () => {
  const defensaContraLasArtesOscuras = [
    { name: "Ciervo", description: "Elegante y noble", type: "Mamífero" },
    {
      name: "León",
      description: "Valiente y majestuoso",
      type: "Mamífero",
    },
    { name: "Lechuza", description: "Sabia y misteriosa", type: "Ave" },
    {
      name: "Fénix",
      description: "Majestuoso y regenerativo",
      type: "Mítico",
    },
    {
      name: "Zorro Plateado",
      description: "Astuto y ágil",
      type: "Mamífero",
    },
    { name: "Delfín", description: "Amigable y juguetón", type: "Marino" },
    { name: "Pantera", description: "Ágil y sigilosa", type: "Mamífero" },
    { name: "Águila", description: "Aguda visión y libertad", type: "Ave" },
    { name: "Lobo", description: "Fiel y territorial", type: "Mamífero" },
    { name: "Dragón", description: "Poderoso y mágico", type: "Mítico" },
  ];
  const animal = Math.floor(Math.random() * 9);
  return defensaContraLasArtesOscuras[animal].name;
};
