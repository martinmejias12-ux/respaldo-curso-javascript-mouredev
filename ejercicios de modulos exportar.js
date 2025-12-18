


// 1. Exporta una función
/**
 * Crea un archivo llamado modulo_uno.js. 
 * Dentro de él, define una función de flecha o tradicional que realice 
 * una operación aritmética simple (como una suma) con nombres de parámetros genéricos. 
 * Utiliza la palabra clave necesaria para que esta función pueda ser utilizada en 
 * otros archivos.
 */


console.log();
console.log('<----------------------------------------->');
console.log('<----1. Exporta una función----->');




export const multiplicacion = (a,b)=>{

    return a*b;
}


// 2. Exporta una constante


console.log();
console.log('<----------------------------------------->');
console.log('<----2. Exporta una constante----->');


export const aceleracionGravedad = 9.80665;

console.log();
console.log();
console.log();


export const potencia = (param1)=>{

    return param1 ** 2;

}

// 3. Exporta una clase


console.log();
console.log('<----------------------------------------->');
console.log('<----3. Exporta una clase----->');


export class CalculoVelocidad{

    constructor(distancia,tiempo){

        this.distancia = distancia
        this.tiempo = tiempo
    }
    calculo(){

        return this.distancia/this.tiempo
    }
}




// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)


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





