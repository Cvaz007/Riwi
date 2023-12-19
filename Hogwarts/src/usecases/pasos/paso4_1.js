
export const paso4_1 = () =>{

    const paso2 = () => {
        return Math.floor(Math.random() * 2 + 1);
      };
    
      const animal = paso2();
      if (animal === 1) {
        alert("Hay un animal!");
      } else alert("Tranquilo, no hay animales cerca");
    
      const enfrentarBoggart = (mensaje) => {
        boggartEjemplo.transformacion = "Ahora no tienes miedo a:" + mensaje;
        alert(boggartEjemplo.transformacion);
      };
    
      const boggartEjemplo = { miedo: "A la oscuridad", vida: 100 };
      enfrentarBoggart(boggartEjemplo.miedo);
};

