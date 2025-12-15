/*
console.log();
console.log('<----------------------------------------->');
console.log('<--------->');


console.log();
console.log();
console.log();
*/



// 1. Captura una excepción utilizando try-catch

/**
 * Escribe un bloque de código que intente dividir un número entero por cero. Implementa un 
 * bloque try-catch para manejar y reportar la excepción resultante de esta operación.
 */

console.log();
console.log('<----------------------------------------->');
console.log('<----1. Captura una excepción utilizando try-catch----->');

function division (a,b){

    if (b === 0){

        throw new Error("El divisor de la división es igual a cero")
    }
    
    const resultadoDivision = a/b;

    return resultadoDivision

}

function validarDatos(){
    const a = 0;
    const b = 10;

    try{
        console.log();
        console.log(`La división de a entre b es: ${division(a,b)}`);
        console.log();

    }catch (error){
        console.error('\n*** EXCEPCIÓN CAPTURADA EN EJERCICIO 1 ***');
        console.error(`Error capturado: ${error.name}`)
        console.error(`Mensaje de error: ${error.message}`)
        console.error('*******************************************\n');
       
    }
}

validarDatos();



// 2. Captura una excepción utilizando try-catch y finally
/**
 * Desarrolla una función que reciba dos parámetros numéricos e intente realizar la división del 
 * primero por el segundo. Utiliza un bloque try-catch-finally para manejar el error de división 
 * por cero y asegurar que se imprima un mensaje de limpieza o finalización, independientemente 
 * de si ocurrió la excepción o no.
 */
console.log();
console.log('<----------------------------------------->');
console.log('<---2. Captura una excepción utilizando try-catch y finally----->');


function division2 (param1, param2){

    if (param2 === 0){

        throw new Error('Estas tratando de dividir entre cero')
    };

    return param1/param2;
}

function ejecutarProceso (){
    const param1 = 1;
    const param2 = 0;

    try{
        console.log();
        console.log(`la division del parametro ${param1} entre el parametro ${param2} es de: ${division2(param1, param2)}`);
        console.log();

    }catch(error1){

        console.error('\n*** EXCEPCIÓN CAPTURADA EN EJERCICIO 2 ***');
        console.error(`error capturado: ${error1.name}`);
        console.error(`mensaje de error: ${error1.message}`);
        console.error('*******************************************\n');

    }finally{
        console.log();
        console.log('Proceso de ejecución finalizado');
        console.log();
    }


}

ejecutarProceso();


// 3. Lanza una excepción genérica

/**
 * Crea una función que acepte un argumento. Si el valor de este argumento es un número negativo, 
 * lanza una excepción genérica con un mensaje que indique que no se permiten valores menores a 
 * cero.
 */

console.log();
console.log('<----------------------------------------->');
console.log('<----3. Lanza una excepción genérica----->');

function entradaDato(parametro1){
    if (parametro1 < 0){

        throw new Error("No se permiten valores negativos");
        
    }

    return parametro1;
}

function validarDatos2(){

    const parametro1 = -4;
    try{

        console.log();
        console.log('El valor del parametro 1 : ', entradaDato(parametro1));
        console.log();
    


    }catch (error2){

        console.error('\n*** EXCEPCIÓN CAPTURADA EN EJERCICIO 3 ***');
        console.error('Mensaje: ', error2.message);
        console.error('*******************************************\n');

    }
}


validarDatos2();


// 4. Crea una excepción personalizada
/**
 * Define una nueva clase de excepción llamada ErrorDeValidacionDeLongitud que herede de la clase 
 * de excepción base y contenga un mensaje predefinido apropiado para errores de longitud de 
 * datos.
 */
console.log();
console.log('<----------------------------------------->');
console.log('<----4. Crea una excepción personalizada----->');

class ErrorDeValidacionDeLongitud extends Error{

    constructor(mensaje, valor){
        super(mensaje);

        this.name = "ErrorDeValidacionDeLongitud";

        this.valorInvalido = valor;
    }

}


function validacionLongitudDatos (dato){
    if (dato.length >= 25){

        throw new ErrorDeValidacionDeLongitud("SE HA SUPERADO LA LONGITUD DEL DATO", dato.length)

    }

    return dato;
}


function entradaDeDatos (){
    const dato = 'El valor es valido'

    try{
        console.log();
        console.log(validacionLongitudDatos(dato));
        console.log();

    }catch(error){
        if (error instanceof ErrorDeValidacionDeLongitud){

            console.error('\n*** EXCEPCIÓN CAPTURADA EN EJERCICIO 4 ***');
            console.error(`Error personalizado: ${error.name}`);
            console.error(`Mensaje: ${error.message}`);
            console.error(`Valor detectado: ${error.valorInvalido}`);
            console.error('*******************************************\n');
        }else{
            console.error('Error genérico del sistema: ', error.message);
            
        }   
    }
}

entradaDeDatos();


// 5. Lanza una excepción personalizada
/**
 * Implementa una función que acepte una cadena de texto como entrada. Si la longitud de la 
 * cadena es menor a 5 caracteres, lanza la excepción personalizada ErrorDeValidacionDeLongitud 
 * definida en el ejercicio anterior.
 */
console.log();
console.log('<----------------------------------------->');
console.log('<--------->');


console.log();
console.log();
console.log();

// 6. Lanza varias excepciones según una lógica definida
/**
 * Escribe una función que verifique si una variable dada es un número par y positivo.
 *  
 * Si la variable no es positiva, lanza una excepción indicando un ErrorDeValor.
 *  
 * Si es positiva pero no par, lanza otra excepción diferente indicando un ErrorDeTipo (o las 
 * excepciones predefinidas más cercanas a estos conceptos en tu lenguaje de programación).
 */
console.log();
console.log('<----------------------------------------->');
console.log('<--------->');


console.log();
console.log();
console.log();

// 7. Captura varias excepciones en un mismo try-catch
/**
 * Diseña un bloque try que pueda generar, intencionalmente, dos tipos de errores distintos: un 
 * error de división por cero y un error por intentar acceder a un índice fuera de los límites de 
 * un arreglo o lista. Implementa un bloque catch que capture de forma separada ambos tipos de 
 * excepciones y muestre un mensaje específico para cada una.
 */
console.log();
console.log('<----------------------------------------->');
console.log('<--------->');


console.log();
console.log();
console.log();

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
/**
 * Dado el siguiente arreglo o lista de valores: ['10', '25.5', 'texto', '7.3', 'otro']. Crea un 
 * bucle que intente convertir cada valor a un número de punto flotante (float). Asegúrate de 
 * capturar y mostrar cualquier error que se produzca durante la conversión para los valores que 
 * no sean numéricos.
 */
console.log();
console.log('<----------------------------------------->');
console.log('<--------->');


console.log();
console.log();
console.log();

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada
/**
 * Crea una función llamada verificarPropiedad que reciba como argumentos un objeto y el nombre 
 * de una propiedad. Si el objeto no contiene la propiedad especificada, lanza una excepción 
 * personalizada llamada PropiedadFaltanteError con un mensaje descriptivo.
 */
console.log();
console.log('<----------------------------------------->');
console.log('<--------->');


console.log();
console.log();
console.log();

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10
/**
 * Diseña una función llamada ejecutarConReintento que reciba otra función como argumento. Esta 
 * función debe llamar a la función argumento. En caso de que la función argumento genere un 
 * error, debe reintentar la ejecución hasta un máximo de 10 veces antes de finalmente lanzar el 
 * error si todos los intentos fallan.
 */

console.log();
console.log('<----------------------------------------->');
console.log('<--------->');


console.log();
console.log();
console.log();
