// 1. Crea una variable para cada operación aritmética

console.log('<------------------------------------------------------>');
console.log('<---------Crea una variable para cada operación aritmética---------->');
let a = 5;
let b = 2;

console.log(`valor de la variable a: ${a}`);
console.log(`valor de la variable b: ${b}`);
const suma = a+b;
const resta = a-b;
const multiplicacion = a*b;
const division = a/b;
const divisionEntera = a//b;
const moduloResiduo = a%b;
const exponenciacion = a**b;


console.log(`resultado de la suma es: ${suma}`);
console.log(`resultado de la resta es: ${resta}`);
console.log(`resultado de la multiplicación es: ${multiplicacion}`);
console.log(`resultado de la división es: ${division}`);
console.log(`resultado de la división  entera es: ${divisionEntera}`);
console.log(`resultado de la moduloResiduo es: ${moduloResiduo}`);
console.log(`resultado de la exponentiation es: ${exponenciacion}`);


// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas


console.log('<------------------------------------------------------>');
console.log('<---------2. Crea una variable para cada tipo de operación de asignación---------->');

const asignacionSuma = a +=b;
const asignacionResta = a -=b;
const asignacionMultiplicacion = a *=b;
const asignacionDivision = a /=b;
const asignacionModulo = a %=b;
const asignacionExponenciacion = a **=b;

console.log(`la suma con asignación: ${asignacionSuma}`);
console.log(`la resta con asignación: ${asignacionResta}`);
console.log(`la multiplicación con asignación: ${asignacionMultiplicacion}`);
console.log(`la división con asignación: ${asignacionDivision}`);
console.log(`el modulo con asignación: ${asignacionModulo}`);
console.log(`la exponenciación con asignación: ${asignacionExponenciacion}`);

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log('<------------------------------------------------------>');
console.log('<---------3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación---------->');

let c= 5;
let d= 2;

console.log(`el valor de la variable c: ${c}`);
console.log(`el valor de la variable d: ${d}`);
console.log('la variable c es diferente de d: ', c!==d);
console.log('la variable c es mayor que d: ', c>d);
console.log('la variable d es menor que c: ',d<c);
console.log('la variable c es mayor o igual que d: ',c>=d);
console.log('la variable d es menor o igual que c: ',d<=c);



// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log('<------------------------------------------------------>');
console.log('<---------4. Imprime 5 comparaciones falsas con diferentes operadores de comparación---------->');

console.log(`el valor de la variable c: ${c}`);
console.log(`el valor de la variable d: ${d}`);
console.log('la variable c es igual que d: ', c===d);
console.log('la variable d es mayor que c: ', d>c);
console.log('la variable c es menor que d: ',c<d);
console.log('la variable d es mayor o igual que c: ',d>=c);
console.log('la variable c es menor o igual que d: ',c<=d);


// 5. Utiliza el operador lógico and

console.log(('<------------------------------------------------------>'));
console.log(('<---------5. Utiliza el operador lógico and---------->'));

console.log(' la variable a y b son mayores que 5 :', (a&&b)>(5));


// 6. Utiliza el operador lógico or

console.log(('<------------------------------------------------------>'));
console.log(('<---------6. Utiliza el operador lógico or---------->'));

console.log(' la variable c o d es mayor o igual que 5 :', ((c)||(d))>=(5));


// 7. Combina ambos operadores lógicos

console.log('<------------------------------------------------------>');
console.log('<---------7. Combina ambos operadores lógicos---------->');

let f = 4;
let g = 8;
let h = 2;
let i = 4;


console.log('variable f: ', f);
console.log('variable g: ', g);
console.log('variable h: ', h);
console.log('variable i: ', i);

console.log(((f<g) || (i<h)) && (g>i));//


// 8. Añade alguna negación

console.log('<------------------------------------------------------>');
console.log('<---------8. Añade alguna negación---------->');
console.log(!true);
console.log(!false);
console.log(!(5>4));

// 9. Utiliza el operador ternario

console.log('<------------------------------------------------------>');
console.log('<---------9. Utiliza el operador ternario---------->');

let resultado = (f>=h) ? 'si, f es mayor o igual que h' : 'no, f no es mayor o igual que h';

console.log((f>=h) ? 'si, f es mayor o igual que h' : 'no, f no es mayor o igual que h');

// 10. Combina operadores aritméticos, de comparación y lógicas

console.log('<------------------------------------------------------>');
console.log('<---------10. Combina operadores aritméticos, de comparación y lógicas---------->');

const variable1 = 3;
const variable2 = 5;
const variable3 = 2;
const variable4 = 3;

const multiplicacion2 = variable1*variable3;

const division2= variable2/variable4;

console.log(((multiplicacion2 || division2) && (division2/multiplicacion2)) <= 3);