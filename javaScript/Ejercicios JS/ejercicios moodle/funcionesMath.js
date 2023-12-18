//DECLARACION DE VARIABLE NUM:
const num=77;

/* 1. Número a un nuevo número: Declara una variable num con un valor numérico y
luego crea una nueva variable llamada newNum utilizando la función Number()
para convertir num a un nuevo número. Muestra en consola newNum. */
newNum = Number(num);
console.log(newNum);

/* 2. Rangos numéricos - Number.MAX_VALUE: Muestra en consola el valor máximo
que puede ser representado en JavaScript utilizando Number.MAX_VALUE. */
console.log(Number.MAX_VALUE);

/* 3. Rangos numéricos - Number.MIN_VALUE: Muestra en consola el valor mínimo
positivo que puede ser representado en JavaScript utilizando
Number.MIN_VALUE. */
console.log(Number.MIN_VALUE);

/* 4. Rangos numéricos - Number.MAX_SAFE_INTEGER: Muestra en consola el valor
máximo seguro que puede ser representado con precisión en JavaScript
utilizando Number.MAX_SAFE_INTEGER. */
console.log(Number.MAX_SAFE_INTEGER);

/* 5. Rangos numéricos - Number.MIN_SAFE_INTEGER: Muestra en consola el valor
mínimo seguro que puede ser representado con precisión en JavaScript
utilizando Number.MIN_SAFE_INTEGER. */
console.log(Number.MIN_SAFE_INTEGER);

/* 6. Comprobación numérica - Number.isFinite(number): Declara una variable num
y utiliza el método Number.isFinite() para comprobar si num es un número finito.
Muestra el resultado en consola. */
console.log(Number.isFinite(num));

/* 7. Comprobación numérica - Number.isInteger(number): Declara una variable
num y utiliza el método Number.isInteger() para comprobar si num es un
número entero. Muestra el resultado en consola. */
console.log(Number.isInteger(num));

/* 8. Comprobación numérica - Number.isSafeInteger(number): Declara una variable
num y utiliza el método Number.isSafeInteger() para comprobar si num es un
número seguro para representar con precisión en JavaScript. Muestra el
resultado en consola. */
console.log(Number.isSafeInteger(num));

/* 9. Representación numérica - .toExponential(digits): Declara una variable num y
utiliza el método .toExponential() para mostrar su representación en notación
exponencial con un número específico de dígitos decimales. Muestra el resultado
en consola. */
console.log(num.toExponential(4));

/* 10. Representación numérica - .toFixed(digits): Declara una variable num y utiliza
el método .toFixed() para mostrar su representación con un número específico
de dígitos decimales. Muestra el resultado en consola. */
console.log(num.toFixed(4));

/* 11. Representación numérica - .toPrecision(size): Declara una variable num y utiliza
el método .toPrecision() para mostrar su representación con una longitud total
específica. Muestra el resultado en consola. */
console.log(num.toPrecision(2));

/* 12. Convertir - Number.parseInt(text): Declara una variable text con un valor
numérico en formato de cadena y utiliza Number.parseInt() para convertirlo a un
número entero. Muestra el resultado en consola. */
let text="777";
console.log(Number.parseInt(text));

/* 13. Convertir - Number.parseInt(text, radix): Declara una variable text con un valor
numérico en formato de cadena y utiliza Number.parseInt() con una base
específica para convertirlo a un número entero. Muestra el resultado en consola. */
console.log(Number.parseInt(text, 10));

/* 14. Convertir - Number.parseFloat(text): Declara una variable text con un valor
numérico en formato de cadena y utiliza Number.parseFloat() para convertirlo a
un número de punto flotante. Muestra el resultado en consola. */
console.log(Number.parseFloat(text));

/* 15. Convertir - Number.parseFloat(text, radix): Declara una variable text con un
valor numérico en formato de cadena y utiliza Number.parseFloat() con una
base específica para convertirlo a un número de punto flotante. Muestra el
resultado en consola. */
console.log(Number.parseFloat(text, 10));

/* 16. Convertir - .toString: Declara una variable num y utiliza el método .toString()
para convertirlo a una cadena. Muestra el resultado en consola. */
console.log(num.toString());

/* 17. Método Math.abs(x): Declara una variable num con un valor negativo y utiliza
Math.abs() para obtener su valor absoluto. Muestra el resultado en consola. */
constnumNeg=-5;
console.log(Math.abs(constnumNeg));

/* 18. Método Math.sign(x): Declara una variable num con un valor y utiliza
Math.sign() para obtener su signo. Muestra el resultado en consola. */
console.log(Math.sign(num));

/* 19. Método Math.exp(x): Declara una variable num y utiliza Math.exp() para calcular
la exponenciación de num. Muestra el resultado en consola. */
console.log(Math.exp(num));

/* 20. Método Math.expm1(x): Declara una variable num y utiliza Math.expm1() para
calcular e^x - 1. Muestra el resultado en consola. */
console.log(Math.expm1(num));

/* 21. Método Math.max(a, b, c...): Utiliza Math.max() para encontrar el valor máximo
entre varios números. Muestra el resultado en consola. */
console.log(Math.max(1,5,7,55,655,999));

/* 22. Método Math.min(a, b, c...): Utiliza Math.min() para encontrar el valor mínimo
entre varios números. Muestra el resultado en consola. */
console.log(Math.min(1,5,7,55,655,999))

/* 23. Método Math.pow(base, exp): Utiliza Math.pow() para calcular la potencia de un
número. Muestra el resultado en consola. */
console.log(Math.pow(2, 3));

/* 24. Método Math.sqrt(x): Utiliza Math.sqrt() para calcular la raíz cuadrada de un
número. Muestra el resultado en consola. */
console.log(Math.sqrt(16));

/* 25. Método Math.cbrt(x): Utiliza Math.cbrt() para calcular la raíz cúbica de un
número. Muestra el resultado en consola. */
console.log(Math.cbrt(125));

/* 26. Método Math.imul(a, b): Utiliza Math.imul() para calcular la multiplicación de
dos números como un entero de 32 bits. Muestra el resultado en consola. */
console.log(Math.imul(5, 10));

/* 27. Método Math.clz32(x): Utiliza Math.clz32() para contar los ceros principales de
un número en su representación de 32 bits. Muestra el resultado en consola. */
console.log(Math.clz32(num));

/* 28. Método Math.random(): Utiliza Math.random() para generar un número
pseudoaleatorio entre 0 (inclusive) y 1 (exclusive). Muestra el resultado en
consola. */
console.log(Math.random());

/* 29. Método de redondeo - Math.round(x): Utiliza Math.round() para redondear un
número al entero más cercano. Muestra el resultado en consola. */
console.log(Math.round(77.22));

/* 30. Método de redondeo - Math.ceil(x): Utiliza Math.ceil() para redondear hacia
arriba un número al entero más cercano. Muestra el resultado en consola. */
console.log(Math.ceil(912.91));

/* 31. Método de redondeo - Math.floor(x): Utiliza Math.floor() para redondear hacia
abajo un número al entero más cercano. Muestra el resultado en consola. */
console.log(Math.floor(14.8));

/* 32. Método de redondeo - Math.fround(x): Utiliza Math.fround() para convertir un
número a su representación de punto flotante de 32 bits más cercana. Muestra el
resultado en consola. */
console.log(Math.fround(123.12));

/* 33. Método de redondeo - Math.trunc(x): Utiliza Math.trunc() para truncar la parte
decimal de un número. Muestra el resultado en consola. */
console.log(Math.trunc(12.2455));

/* 34. Método trigonométrico - Math.sin(x): Utiliza Math.sin() para calcular el seno de
un ángulo en radianes. Muestra el resultado en consola. */
console.log(Math.sin(Math.PI/4));

/* 35. Método trigonométrico - Math.cos(x): Utiliza Math.cos() para calcular el coseno
de un ángulo en radianes. Muestra el resultado en consola. */
console.log(Math.cos(Math.PI/4));

/* 36. Método trigonométrico - Math.tan(x): Utiliza Math.tan() para calcular la
tangente de un ángulo en radianes. Muestra el resultado en consola. */
console.log();

/* 37. Método trigonométrico - Math.hypot(a, b...): Utiliza Math.hypot() para calcular
la longitud de la hipotenusa de un triángulo a partir de sus lados. Muestra el
resultado en consola. */
console.log(Math.hypot(1,2));

/* 38. Operadores aritméticos con .toFixed(digits), Number.parseInt(text): Declara
dos variables numéricas y realiza una operación aritmética que involucre
.toFixed() y Number.parseInt(). Muestra el resultado en consola. */
const numero1 = 10.56789;
const numero2 = 5.4321;
console.log((numero1 + numero2) * 2);
console.log(((numero1 + numero2) * 2).toFixed(2));
console.log(Number.parseInt(numero1 + numero2) * 2);

/* 39. Operadores aritméticos con Number.parseFloat(text), .toPrecision(size):
Declara dos variables numéricas en formato de cadena y realiza una operación
aritmética que involucre Number.parseFloat() y .toPrecision(). Muestra el
resultado en consola. */
const num1= "12.2";
const num2= "11";
console.log((Number.parseFloat(num1)+Number.parseFloat(num2)).toPrecision(2));

/* 40. Operadores aritméticos con Math.random(), Math.abs(x): Utiliza
Math.random() para generar un número y realiza una operación aritmética que
involucre Math.abs(). Muestra el resultado en consola. */
const numeroAleatorio = Math.random();
const resultadoAritmetico = Math.abs(numeroAleatorio - 0.5) * 2;
console.log("Número Aleatorio:", numeroAleatorio);
console.log("Resultado Aritmético:", resultadoAritmetico);

/* 41. Operadores aritméticos con Math.random(), .toString: Utiliza Math.random()
para generar un número y realiza una operación aritmética que involucre
.toString(). Muestra el resultado en consola. */
console.log((numeroAleatorio * 100).toString());

/* 42. Operadores aritméticos con Math.random(), Math.exp(x): Utiliza
Math.random() para generar un número y realiza una operación aritmética que
involucre Math.exp(). Muestra el resultado en consola. */
console.log(Math.exp(numeroAleatorio));

/* 43. Operadores aritméticos con Math.sqrt(x), Math.clz32(x): Utiliza Math.sqrt() y
Math.clz32() para realizar una operación aritmética. Muestra el resultado en
consola. */
const numero = 64;
const raizCuadrada = Math.sqrt(numero);
const leadingZeros = Math.clz32(numero);
console.log("Número:", numero);
console.log("Raíz Cuadrada:", raizCuadrada);
console.log("Leading Zeros:", leadingZeros);

/* 44. Operadores de asignación con Asignación: Declara una variable x con un valor y
asigna ese valor a otra variable y. Muestra el valor de y en consola. */
const x = 42;
const y = x;
console.log("Valor de y:", y);

/* 45. Operadores de asignación con a += b: Declara dos variables numéricas y utiliza
el operador += para sumar el valor de la segunda variable a la primera. Muestra el
resultado en consola. */
let a = 10;
const b = 5;
a += b;
console.log("Resultado de a += b:", a);

/* 46. Operadores de asignación con Suma y asignación: Declara dos variables
numéricas y utiliza el operador += para incrementar el valor de la primera variable
sumándole el valor de la segunda. Muestra el resultado en consola. */
let num_1 = 8;
const num_2 = 4;
num_1 += num_2;
console.log("Resultado de num1 += num2:", num_1);

/* 47. Operadores de asignación con Resta y asignación: Declara dos variables
numéricas y utiliza el operador -= para decrementar el valor de la primera
variable restando el valor de la segunda. Muestra el resultado en consola. */
a -= b;
console.log("Resultado de a -= b:", a);

/* 48. Operadores de asignación con Multiplicación y asignación: Declara dos
variables numéricas y utiliza el operador *= para multiplicar el valor de la primera
variable por el valor de la segunda. Muestra el resultado en consola. */
num_1 *= num_2;
console.log("Resultado de num1 *= num2:", num_1);

/* 49. Operadores de asignación con División y asignación: Declara dos variables
numéricas y utiliza el operador /= para dividir el valor de la primera variable por el
valor de la segunda. Muestra el resultado en consola. */
num_1 /= num_2;
console.log("Resultado de num1 /= num2:", num_1);

/* 50. Operadores de asignación con Módulo y asignación: Declara dos variables
numéricas y utiliza el operador %= para calcular el residuo de la división de la
primera variable por la segunda. Muestra el resultado en consola. */
num_1 %= num_2;
console.log("Resultado de num1 %= num2:", num_1);

/* 51. Operadores de asignación con Exponenciación y asignación: Declara una
variable numérica y utiliza el operador **= para elevarla a una potencia
específica. Muestra el resultado en consola. */
let base = 2;
base **= 2;
console.log("Resultado de base **= 2:", base);

/* 52. Operadores unarios Incremento: Declara una variable numérica y utiliza el
operador ++ para incrementar su valor en 1. Muestra el resultado en consola. */
let incre=1;
incre++
console.log("El incremento es ",incre);
/* 53. Operadores unarios Decremento: Declara una variable numérica y utiliza el
operador -- para decrementar su valor en 1. Muestra el resultado en consola. */
let decre=2;
decre--
console.log("El decremento es ",decre);

/* 54. Operadores unarios Incremento previo: Declara una variable num con un valor
numérico. Utiliza el operador unario de incremento previo (++num) para
aumentar el valor de num en 1 antes de asignarlo a la variable result. Muestra el
nuevo valor de result en la consola. */
let n=8;
let result = ++n;
console.log("Nuevo valor de result:", result);

/* 55. Operadores unarios Decremento previo: Declara una variable num con un valor
numérico. Utiliza el operador unario de decremento previo (--num) para disminuir
el valor de num en 1 antes de asignarlo a la variable result. Muestra el nuevo
valor de result en la consola. */
let result1 = --n;
console.log("Nuevo valor de result:", result1);

/* 56. Operadores unarios Resta unaria: Declara una variable num con un valor
numérico. Utiliza el operador unario de resta (-num) para obtener el opuesto numérico de num y asigna el resultado a la variable result. Muestra el valor resultante en la consola. */
let result2 = -n;
console.log("Valor resultante:", result2);