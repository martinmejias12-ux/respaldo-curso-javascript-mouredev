// 1. Concatena dos cadenas de texto

console.log('<--------------------------------------------->');
console.log('<---------1. Concatena dos cadenas de texto--------->');

let cadena1 = 'Este es un ejemplo de la cadena 1. ';

let cadena2 = 'Esta es la continuación del ejemplo de la cadena 1, concatenada con la cadena 2';

console.log(cadena1+cadena2);


// 2. Muestra la longitud de una cadena de texto

console.log('<--------------------------------------------->');
console.log('<---------2. Muestra la longitud de una cadena de texto--------->');

console.log(`esta la longitud de la cadena 1: ${cadena1.length} caracteres. Y esta es la longitud de la cadena 2: ${cadena2.length} caracteres`);


// 3. Muestra el primer y último carácter de un string

console.log('<--------------------------------------------->');
console.log('<---------3. Muestra el primer y último carácter de un string--------->');

let cadena3 ='Permisologia';

console.log('este es el primer carácter: ', cadena3[0]);
//console.log('este es el ultimo carácter: ', cadena3[11]);

// otra forma de determinar el ultimo carácter

console.log('este es el ultimo carácter: ', cadena3[cadena3.length-1]);



// 4. Convierte a mayúsculas y minúsculas un string

console.log('<--------------------------------------------->');
console.log('<---------4. Convierte a mayúsculas y minúsculas un string--------->');

console.log('esta es la cadena 1 en mayúscula: ', cadena1.toUpperCase());
console.log('esta es la cadena 1 en minúscula: ', cadena1.toLowerCase());

// 5. Crea una cadena de texto en varias líneas

console.log('<--------------------------------------------->');
console.log('<---------5. Crea una cadena de texto en varias líneas--------->');

let cadena4= `Esto es una cadena
de caracteres para que se impreso
en varias lineas`

console.log(cadena4);

// 6. Interpola el valor de una variable en un string

console.log('<--------------------------------------------->');
console.log('<------6. Interpola el valor de una variable en un string-------->');

let nombre = 'Juan';
let edad = 25;
let estatura = 1.80;

console.log(`El sr ${nombre}, tiene la edad de ${edad} años, y tiene la estatura de ${estatura} metros`);

// 7. Reemplaza todos los espacios en blanco de un string por guiones

console.log('<--------------------------------------------->');
console.log('<------7. Reemplaza todos los espacios en blanco de un string por guiones--------->');

let cadena5 = "Hola mi nombre es martin y esto estudiando js"

// se tiene que utilizar la expresión regular /\s/g para que busque todos los espacios en blanco

console.log(cadena5.replace(/\s/g,'-'));

// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log('<--------------------------------------------->');
console.log('<----8. Comprueba si una cadena de texto contiene una palabra concreta------->');

let cadena6 ='Estoy estudiando: html, sql, psql, javascript, phyton'

console.log('el Sr juan esta estudiando phyton: ', cadena6.includes('phyton'));

// 9. Comprueba si dos strings son iguales

console.log('<--------------------------------------------->');
console.log('<-----9. Comprueba si dos strings son iguales----->');

let cadena7= 'Matemáticas';

let cadena8= 'Matemáticas';

console.log('la cadena7 es igual a la cadena 8: ', (cadena7 === cadena8));

// 10. Comprueba si dos strings tienen la misma longitud

console.log('<--------------------------------------------->');
console.log('<----10. Comprueba si dos strings tienen la misma longitud------>');

console.log('la cadena7 tiene la misma longitud que la cadena 8: ', (cadena7.length == cadena8.length));