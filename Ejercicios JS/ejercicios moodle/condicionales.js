alert(
  " ..................Ejercicios condicionales en JavaScript................ "
);

alert(
  " 1. Verifica si un numero es positivo. - 2. Verifica si un numero es negativo."
);
let num = prompt("Ingrese un numero: ");
if (num < 0) {
  alert("El numero es negativo");
} else {
  alert("El numero es positivo");
}

alert(
  " 3. Comprueba si un numero es par. - 4. Comprueba si un numero es impar. "
);
let num1 = prompt("Ingrese un numero: ");
if (num1 % 2 == 0) {
  alert("El numero es par");
} else {
  alert("El numero es impar");
}

alert(" 5. Determina si un numero es multiplo de 5. ");
let num2 = prompt("Ingrese un numero: ");
if (num2 % 5 == 0) {
  alert("El numero es multiplo de 5");
} else {
  alert("El numero NO es multiplo de 5");
}

alert(" 6. Verifica si un numero es divisible entre 3. ");
let num3 = prompt("Ingrese un numero: ");
if (num3 % 3 == 0) {
  alert("El numero es multiplo de 3");
} else {
  alert("El numero NO es multiplo de 3");
}

alert(" 7. Determina si un numero es mayor que 100. ");
let num4 = prompt("Ingrese un numero: ");
if (num4 > 100) {
  alert("El numero es mayor que 100");
} else {
  alert("El numero NO es mayor que 100");
}

alert(" 8. Verifica si un numero es menor que -50. ");
let num5 = prompt("Ingrese un numero: ");
if (num5 < -50) {
  alert("El numero es menor que -50");
} else {
  alert("El numero NO es menor que -50");
}

alert(" 9. Comprueba si un numero esta en el rango de 20 a 50. ");
let num6 = prompt("Ingrese un numero: ");
if (num6 >= 20 && num6 <= 50) {
  alert("El numero SI esta en el rango entre 20 y 50");
} else {
  alert("El numero NO esta en el rango entre 20 y 50");
}

alert(" 10. Determina si un numero es igual a 0. ");
let num7 = prompt("Ingrese un numero: ");
if (num7 == 0) {
  alert("El numero es cero");
} else {
  alert("El numero NO es cero");
}

alert(" 11. Verifica si un numero es mayor que -10 y menor que 10. ");
let num8 = prompt("Ingrese un numero: ");
if (num8 >= -10 && num8 <= 10) {
  alert("El numero SI esta en el rango entre -10 y 10");
} else {
  alert("El numero NO esta en el rango entre -10 y 10");
}

alert(" 12. Determina si un numero es un ano bisiesto. ");
let year = prompt("Ingrese un año: ");
if (year % 4 == 0 && year % 100 != 0) {
  alert("El año es bisiesto");
  if (year % 100 == 0 && year % 400 == 0) {
    alert("El año es bisiesto");
  } else {
    alert("El año no es bisiesto");
  }
} else if (year % 4 == 0 && year % 100 == 0 && year % 400 == 0) {
  alert("El año es bisiesto");
} else {
  alert("El año no es bisiesto");
}

alert(
  " 13. Verifica si una persona es mayor de edad (mayor o igual a 18 anos).14. "
);
let age = prompt("Ingrese su edad");
if (age >= 18) {
  alert("Eres mayor de edad");
} else {
  alert("Eres menor de edad");
}

alert(" 15. Verifica si un numero es un cuadrado perfecto. ");
if (Math.sqrt(n) % 1 === 0) {
  alert("El numero es un cuadrado perfecto");
}

alert(" 16. Determina si un numero es un numero de Fibonacci. ");
let numF = prompt("Ingrese un numero");
let ant = 0,
  post = 1,
  fibo = 0;
while (true) {
  if (numF == 0 || numF == 1) {
    alert("Es un numero es un numero de Fibonacci");
    break;
  } else if (fibo <= numF) {
    fibo = fibo + ant;
    ant = post;
    post = fibo;
    if (fibo == numF) {
      alert("Es un numero es un numero de Fibonacci");
      break;
    }
  } else {
    alert("No es un numero es un numero de Fibonacci");
    break;
  }
}

alert(" 17. Verifica si un numero es una potencia de 2. ");
const numP = prompt("Ingrese un numero");
if (numP && (numP & (numP - 1)) === 0) {
  alert("Es un numero es una potencia de 2");
}

alert(" 18. Determina si un numero es un palindromo. ");
let numPal = prompt("Ingrese un numero");
let cont = 0;
const size = numPal.length;

for (let index = 0; index < size; index++) {
  if (numPal.charAt(index) == numPal.charAt(size - (index + 1))) {
    cont++;
  }
}
if (cont == Math.ceil(size)) {
  alert("Es un numero es un palindromo");
} else {
  alert("No es un numero es un palindromo");
}

alert(
  " 19. Verifica si una cadena de texto contiene la palabra 'JavaScript'. "
);
let texto = prompt("Ingrese frase");
alert(texto.includes("un")?"Contiene 'un'":"No contiene 'un'");

alert(" 20. Determina si una cadena tiene mas de 10 caracteres. ");
let num9 = prompt("Ingrese un numero");
alert(num9.length>10?"Mayor":"menor");

alert(" 21. Verifica si una cadena de texto esta en minusculas. ");
let texto2 = prompt("Ingrese frase");
alert(texto2==texto.toLowerCase?"Minuscula":"MAyuscula");

alert(" 22. Determina si una cadena de texto contiene al menos un numero. ");
let texto3 = prompt("Ingrese frase");
let cont2=0;
for (let index = 0; index < texto3.length; index++) {
  if (texto3.charCodeAt(index) >=48 && texto3.charCodeAt(index)<=57) {
    cont2++;
  } 
}
alert(cont2>0?"Tiene numeros":"No tiene numeros");

alert(" 23. Verifica si una cadena de texto termina con un punto (.). ");
let texto4 = prompt("Ingrese frase");
alert(texto4.charCodeAt(texto4.length-1)==46?"Termina en punto":"No termina en punto");

alert(
  " 24. Determina si una cadena de texto es un pangrama (contiene todas las letras del alfabeto). "
);
//La solucion es hacer un case y un contador, donde el contador debe ser el numero total del letras del alfabeto. Es muy largo y poco apaorta a mi conocimiento por lo que no lo hago

alert(
  " 25. Verifica si un dia de la semana es laborable (de lunes a viernes). "
);
//Lo mismo del caso de arriba

alert(" 26. Determina si un dia es fin de semana (sabado o domingo). ");
//Lo mismo del caso de arriba

alert(" 27. Verifica si un numero representa un mes valido (del 1 al 12). ");
let num10 = prompt("Ingrese un numero");
if (num10 >0 && num10<13) {
  alert("Mes valido");
}else alert("Mes invalido");

alert(" 28. Determina si una hora esta en el rango de 9 AM a 6 PM. ");

alert(" 29. Verifica si una persona es mayor de 65 anos o menor de 18 anos. ");

alert(" 30. Determina si un triangulo es equilatero (tres lados iguales). ");

alert(" 31. Verifica si un triangulo es isosceles (dos lados iguales). ");

alert(
  " 32. Determina si un triangulo es escaleno (todos los lados diferentes). "
);

alert(" 33. Verifica si un numero es mayor que el doble de otro numero. ");

alert(" 34. Determina si la suma de dos numeros es mayor que 100. ");

alert(" 35. Verifica si la resta de dos numeros es menor que 50. ");

alert(" 36. Determina si un numero es el doble del otro numero. ");

alert(
  " 37. Verifica si el doble de un numero es igual al triple de otro numero. "
);

alert(" 38. Determina si la suma de dos numeros es igual a 50. ");

alert(" 39. Verifica si el producto de dos numeros es mayor que 500. ");

alert(" 40. Determina si la division de dos numeros es menor que 10. ");
