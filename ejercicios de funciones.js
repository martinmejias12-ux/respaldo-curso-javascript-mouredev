
// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios


// 1. Crea una función que reciba dos números y devuelva su suma

console.log();
console.log('<----------------------------------------->');
console.log('<----1. Crea una función que reciba dos números y devuelva su suma----->');

const sumaValores = (a,b)=>{

    return a+b;

};


console.log();
console.log('La suma es de: ', sumaValores(2,3));
console.log();


// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

console.log();
console.log('<----------------------------------------->');
console.log('<----2. Crea una función que reciba un array de números y devuelva el mayor de ellos----->');

let arreglo = [34,123,1,2,8,245,36,76];

function determinarMayor(arrayMayores) {

    let mayor = arrayMayores[0];

    i = 0;

    while (i < arrayMayores.length){

        if (arrayMayores[i]> mayor)

            mayor = arrayMayores[i];


        i++
    };

    console.log();
    console.log('el arreglo a evaluar es el: ', arrayMayores);
    console.log();
    console.log(`el numero mayor del arreglo es el: ${mayor}`);
    console.log();

    
}

determinarMayor(arreglo);


// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

console.log();
console.log('<----------------------------------------->');
console.log('<----3. Crea una función que reciba un string y devuelva el número de vocales que contiene----->');

let cadena = '3. Crea una función que reciba un string y devuelva el número de vocales que contiene'

const cadenaEvaluar = (cadena) => {

    if (cadena.length>0){

        // definimos la expresión regular

        let expresionRegular = /[aAeEiIoOuUáÁéÉíÍóÓúÚ]/g;

        let resultadoEvaluacion = cadena.match(expresionRegular);

        let cantidadVocales = resultadoEvaluacion ? resultadoEvaluacion.length : 0;
        
        
        console.log();
        console.log('el numero de vocales de la cadena es de: ',cantidadVocales );
        console.log();


    }else{
        console.log();
        console.log('la cadena esta vacía');
        console.log();
    }
};

cadenaEvaluar(cadena)

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

console.log();
console.log('<----------------------------------------->');
console.log('<----4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas----->');

let arregloEvaluar2 = ['paracutirimicuaro','orangutan','casemiro'];

let arregloConMayusculas = [];

const convertirMayuscula = (arregloEvaluar2)=>{

    for (let i = 0; i<arregloEvaluar2.length;i++){

        let valorArreglo = arregloEvaluar2[i];

        let pasarMayuscula = valorArreglo.toUpperCase();

        arregloConMayusculas.push(pasarMayuscula);

    }
};

convertirMayuscula(arregloEvaluar2);

console.log();
console.log(arregloConMayusculas);
console.log();

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

console.log();
console.log('<----------------------------------------->');
console.log('<----5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario----->');

let numeroAEvaluar = 5.3;

function determinarNumeroPrimo(numeroAEvaluar) {

    if (!Number.isInteger(numeroAEvaluar)){
        return false;
    }else if (numeroAEvaluar<=1){
        return false;
    }else if (numeroAEvaluar===2){
        return true;

    } else if (numeroAEvaluar>2){
        if (numeroAEvaluar % 2 === 0) {
            return false;
        }else{
            const limiteSuperior = numeroAEvaluar ** (1/2);

            for ( let comenzar = 3; comenzar<=limiteSuperior; comenzar +=2){

                if (numeroAEvaluar % comenzar === 0){
                    return false;
                }
            }           
            return true;
        }
    } 
        
}

console.log();
console.log(`el numero ${numeroAEvaluar} es primo:`, determinarNumeroPrimo(numeroAEvaluar));
console.log();

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

console.log();
console.log('<----------------------------------------->');
console.log('<----6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos----->');

let cadena1 = ['manzana', 'pera','tomate','zanahoria'];
let cadena2 = ['pera', 'naranja','zanahoria','limones', 'cebolla','tomate','cebollin'];


const arregloElementosComunes = (cadena1, cadena2)=>{

    let elementosComunes = [];

    for (let i = 0; i < cadena1.length; i++){

        for (let j = 0; j < cadena2.length; j++ ){

            if (cadena1[i]===cadena2[j]){

                elementosComunes.push(cadena1[i]);
            }
        }
    }

    return elementosComunes;
};


/*elementosComunes=arregloElementosComunes(cadena1,cadena2);*/

console.log();
console.log('los elementos comunes en la lista son: ',arregloElementosComunes(cadena1,cadena2));
console.log();


// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

console.log();
console.log('<----------------------------------------->');
console.log('<----7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares----->');

let arregloNumeros = [15,7,2,56,7,8,101,24,35,50];

const sumaNumerosPares = (numeros)=>{

    let i=0;

    let resultadoSuma = 0;

    while( i < numeros.length ){

        if (numeros[i] % 2 === 0){

            resultadoSuma += numeros[i];
        };

        i++
    };

    return resultadoSuma;
};



console.log();
console.log('la suma se todos los números pares es: ', sumaNumerosPares(arregloNumeros));
console.log();

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

console.log();
console.log('<----------------------------------------->');
console.log('<----8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado----->');

let arregloNumeros2 = [2,5,7,9,10,12,15];

const nuevoArreglo = arregloNumeros2.map(numero => numero**2);

console.log();
console.log(nuevoArreglo);
console.log();

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

console.log();
console.log('<----------------------------------------->');
console.log('<----9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso----->');

let cadenaTexto = 'Hola Mundo';

function invertirCaracterCadenaTexto(cadena) {
    
    let cadenaFinal = '';

    for (let i = cadena.length-1; i>=0; i--){

       cadenaFinal += cadena[i];
       
    }
    return cadenaFinal;

}


console.log();
console.log('cadena invertida: ', invertirCaracterCadenaTexto(cadenaTexto));
console.log();

console.log('<----el mismo ejercicio pero ahora invirtiendo las palabras----->');

let cadenaAInvertir = 'Hola mundo';

function invertirPalabrasCadenaTexto(cadena3) {

    let arregloPalabras = cadena3.split(' ');

    let invertirArreglo = arregloPalabras.reverse();

    let nuevoArregloInvertido = invertirArreglo.join(' ');

    return nuevoArregloInvertido;
    
}

console.log();
console.log('cadena invertida: ', invertirPalabrasCadenaTexto(cadenaAInvertir));
console.log();



// 10. Crea una función que calcule el factorial de un número dado

console.log();
console.log('<----------------------------------------->');
console.log('<----10. Crea una función que calcule el factorial de un número dado----->');

let numeroFactorial= 3.2;

function determinarFactorial(numero) {

    if (numero === 0){
        return 1
    }else if (numero < 0){
        return 'no esta definido';

    }else if(!Number.isInteger(numero)){
        return 'no esta definido';        
    }else{
        let resultado = 1;

        let i=1;

        while (i<=numero){

            resultado *= i;

            i++
        }
        return resultado;
    }
    
}

resultado= determinarFactorial(numeroFactorial);
console.log();
console.log(`el numero factorial de ${numeroFactorial} es:`,resultado );
console.log();


