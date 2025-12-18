

// 4. Importa una función


console.log();
console.log('<----------------------------------------->');
console.log('<----4. Importar una función----->');

import { 
    multiplicacion,
    aceleracionGravedad,
    potencia,
    CalculoVelocidad 



} from "./ejercicios de modulos exportar.js";


let a = 4;
let b = 4;

console.log();
console.log(`la multiplicación de ${a} x ${b} es de:`, multiplicacion(a,b));
console.log();



// 


console.log();
console.log('<----------------------------------------->');
console.log('<----5. Importa una constante----->');


console.log();
console.log(`el valor de la aceleración de la gravedad es: ${aceleracionGravedad}`);
console.log();
console.log('el cuadrado de la aceleración de la gravedad es de: ',(potencia(aceleracionGravedad).toFixed(2)));
console.log();



// 6. Importa una clase


console.log();
console.log('<----------------------------------------->');
console.log('<----6. Importa una clase----->');


const distancia = 200;
const tiempo = 8;

let miClase = new CalculoVelocidad(200,8);

console.log();
console.log(`Valor de la distancia: ${miClase.distancia} km`);
console.log();
console.log(`Valor del tiempo: ${miClase.tiempo} horas`);
console.log();
console.log(`la velocidad a la que deben ir es: ${miClase.calculo()} km/h`);
console.log();



// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)


console.log();
console.log('<----------------------------------------->');
console.log('<--------->');


console.log();
console.log();
console.log();



// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)


console.log();
console.log('<----------------------------------------->');
console.log('<--------->');


console.log();
console.log();
console.log();



// 9. Exporta una función, una constante y una clase desde una carpeta


console.log();
console.log('<----------------------------------------->');
console.log('<--------->');


console.log();
console.log();
console.log();



// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior

console.log();
console.log('<----------------------------------------->');
console.log('<----// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior----->');

import {
    CalculoAceleracion,
    euler,
    funcionRaizCuadrada


} from "../../DIPLOMADO PYTHON/5. Javascript/ejemplo para exportar desde un carptea/exportar datos.js";


const aceleracion = new CalculoAceleracion(18,5,80)

console.log(`la constante de Euler es de: ${euler}`);
console.log();
console.log(`la raíz cuadrada de 16 es: ${funcionRaizCuadrada(16)}`);
console.log();
console.log(`el calculo de la aceleración es de: ${aceleracion.calculo()}`);
console.log();
console.log();

