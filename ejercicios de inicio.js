// 1. Escribe un comentario en una línea

// Esto es para el comentario de una linea

// 2. Escribe un comentario en varias líneas

/*
Aquí podemos realizar
comentarios en varias lineas
sin afectar el programa
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

console.log('<---3. variables con valores asociados a todos los datos de tipo primitivos------>');
var a=12;
var b=1.2;
var c='hola';
let d=true;
let e=false;
const f = null;
const g = undefined;
const h = Symbol('id');
const i = 9007199254740993n;


// 4. Imprime por consola el valor de todas las variables

console.log('<---4. Imprime por consola el valor de todas las variables------>');
console.log(`variable a: ${a}`);
console.log(`variable b: ${b}`);
console.log(`variable c: ${c}`);
console.log(`variable d: ${d}`);
console.log(`variable e: ${e}`);
console.log(`variable f: ${f}`);
console.log(`variable g: ${g}`);
console.log('variable h :' ,h);
console.log(`variable i: ${i}`);

// 5. Imprime por consola el tipo de todas las variables

console.log('<---5. Imprime por consola el tipo de todas las variables------>');
console.log(`tipo de la variable a: ${typeof(a)}`);
console.log(`tipo de la variable b: ${typeof(b)}`);
console.log(`tipo de la variable c: ${typeof(c)}`);
console.log(`tipo de la variable d: ${typeof(d)}`);
console.log(`tipo de la variable e: ${typeof(e)}`);
console.log(`tipo de la variable f: ${typeof(f)}`);
console.log(`tipo de la variable g: ${typeof(g)}`);
console.log(`tipo de la variable h: ${typeof(h)}`);
console.log(`tipo de la variable i: ${typeof(i)}`);


// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

a=24;
b=2.4;
c='chao';
d=false;
e=true;
/*f = null;
g = undefined;
h = Symbol('id');
i = BigInt(12345789);*/



// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

a=true;
b=false
c='3.2';
d=23;
e=null;
/*f = undefined;
g = null;
h = Symbol('id');
i = BigInt(23546);*/



// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const constante1= 12;
const constante2= 1.2;
const constante3= true;
const constante4= false;
const constante5= null;
const constante6= undefined;
const constante7= Symbol('id');
const constante8= BigInt(2356489);

// 9. A continuación, modifica los valores de las constantes

/*constante1= 25;
constante2= 12;
constante3= false;
constante4= true;
constante5= null;
constante6= undefined;
constante7= Symbol('id');
constante8= BigInt(3654789);*/

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse

// en el ejercicio 6 da error porque no se puede modificar las constantes una ves ya definidas, por lo cual se van a colocar como documentadas para evitar el error
// en el ejercicio 7, es igual que en el 6, da error porque no se puede modificar las constantes una ves ya definidas, por lo cual se van a colocar como documentadas para evitar el error
// en el ejercicio 9, es igual que en el 6 y el 7, da error porque no se puede modificar las constantes una ves ya definidas, por lo cual se van a colocar como documentadas para evitar el error