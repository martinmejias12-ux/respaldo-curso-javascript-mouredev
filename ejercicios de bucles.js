
// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

console.log();
console.log('<----------------------------------------->');
console.log('<----1. Crea un bucle que imprima los números del 1 al 20 ----->');

for (let index = 1; index < 21; index++) {
    console.log();
    console.log(`imprimiendo el: ${index}`);
    console.log();
    
}

console.log();
console.log('<----AHORA USANDO EL WHILE ----->');
console.log();

let i=1;
while (i<21) {
    console.log();
    console.log(`imprimiendo el: ${i}`);
    console.log();
    i++
}


// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

console.log();
console.log('<----------------------------------------->');
console.log('<----2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado ----->');


let j=1;
let suma=0;

while (j<101){
    suma = suma+j;
    j++
}

console.log();
console.log(`la suma de los números del 1 al 100 es de: ${suma}`);
console.log();

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

console.log();
console.log('<----------------------------------------->');
console.log('<----3. Crea un bucle que imprima todos los números pares entre 1 y 50 ----->');

for (let m=1; m<51; m++){

    if  (m%2==0){        
        console.log(`Este es un número par que se encuentra entre el 1 y el 50: ${m}`);      

    }

}


// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

console.log();
console.log('<----------------------------------------->');
console.log('<----4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola ----->');

let arrayNombres = ['Jesús','Pedro','Mateo','Santiago','Juan','Judas','Pablo','Lucas'];

let k = 0;

while (k < arrayNombres.length){

    console.log();
    console.log('Imprimiendo el arreglo de nombres :', arrayNombres[k]);
    console.log();

    k++

}


console.log();
console.log('<----------------------------------------->');
console.log('<----RESULTADO DEL EJERCICIO 4 UTILIZANDO for of ----->');

for ( let nombre of arrayNombres){

    console.log();
    console.log(`Nombre de cada uno del arreglo: ${nombre}`);
    console.log();
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

console.log();
console.log('<----------------------------------------->');
console.log('<----5. Escribe un bucle que cuente el número de vocales en una cadena de texto ----->');

let cadenaTexto = '-5. Escribe un bucle que cuente el número de vocales en una cadena de texto '
let acumuladoVocales = 0

for (let m=0; m<cadenaTexto.length; m++){

    switch (cadenaTexto[m]) {
        case 'a':
        case 'A':
        case 'á':
        case 'Á':
            acumuladoVocales +=1            
            break;
        case 'e':
        case 'E':
        case 'é':
        case 'É':
            acumuladoVocales +=1            
            break;
        case 'i':
        case 'I':
        case 'í':
        case 'Í':
            acumuladoVocales +=1            
            break;
        case 'O':
        case 'o':
        case 'Ó':
        case 'ó':
            acumuladoVocales +=1            
            break;
        case 'u':
        case 'U':
        case 'ú':
        case 'Ú':
            acumuladoVocales +=1            
            break;
    
        default:
            break;
    }

}


console.log();
console.log(`La suma de todas las vocales de la cadena es: ${acumuladoVocales}`);
console.log();

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

console.log();
console.log('<----------------------------------------->');
console.log('<----6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto ----->');

let numerosMultiplicar = [1,2,3,4,5,6];

let resultadoMultiplicacion = 1;

let index = 0;

while (index<numerosMultiplicar.length){

    resultadoMultiplicacion *=numerosMultiplicar[index];
    index++
}

console.log();
console.log(`el resultado de la multiplicacion del arreglo es: ${resultadoMultiplicacion}`);
console.log();

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

console.log();
console.log('<----------------------------------------->');
console.log('<----7. Escribe un bucle que imprima la tabla de multiplicar del 5 ----->');


for (let n=1; n<11;n++){

    console.log(`5x${n}=`, 5*n);
}

console.log();
console.log('Solución del problema 7 usando while');
let p = 1;

while (p<11){

    console.log(`5x${p}=`, 5*p);

    p++
}

// 8. Usa un bucle para invertir una cadena de texto

console.log();
console.log('<----------------------------------------->');
console.log('<----8. Usa un bucle para invertir una cadena de texto ----->');

let cadenaTexto2 ="mundo";

for (let q = cadenaTexto2.length - 1; q >= 0; q--){
    
    console.log(cadenaTexto2[q]);

}

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

console.log();
console.log('<----------------------------------------->');
console.log('<----9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci----->');

let secuencia = [];

secuencia[0] = 0;
secuencia[1] = 1;

for (let n = 2; n < 10; n++) {

    let fibonacci = secuencia[n-1]+secuencia[n-2];
    secuencia.push(fibonacci);

}

console.log();
console.log(secuencia);
console.log();


// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

console.log();
console.log('<----------------------------------------->');
console.log('<----10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10----->');

let arrayNumeros = [25,14,2,3,7,89,15,24,78];

let nuevoArray = [];

let indice = 0;

while (indice < arrayNumeros.length){

    if (arrayNumeros[indice] > 10){

        nuevoArray.push(arrayNumeros[indice]);
    }
    indice++
}

console.log();
console.log(nuevoArray);
console.log();

