



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




// 5. Lanza una excepción personalizada
/**
 * Implementa una función que acepte una cadena de texto como entrada. Si la longitud de la 
 * cadena es menor a 5 caracteres, lanza la excepción personalizada ErrorDeValidacionDeLongitud 
 * definida en el ejercicio anterior.
 */
console.log();
console.log('<----------------------------------------->');
console.log('<---5. Lanza una excepción personalizada------>');


function validacionLongitudDatos (dato){
    if (dato.length <= 5){

        throw new ErrorDeValidacionDeLongitud("LA LONGITUD DEL DATO ES DEMASIADO CORTA", dato.length)

    }

    return dato;
}


function entradaDeDatos (){
    const dato = 'El'

    try{
        console.log();
        console.log(validacionLongitudDatos(dato));
        console.log();

    }catch(error){
        if (error instanceof ErrorDeValidacionDeLongitud){

            console.error('\n*** EXCEPCIÓN CAPTURADA EN EJERCICIO 4 Y 5 ***');
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
console.log('<----6. Lanza varias excepciones según una lógica definida----->');

class ValidacionNumeros extends Error{

    constructor(mensaje, datoNumerico){
        super(mensaje)

        this.name = "ValidacionNumeros";

        this.datoNumerico = datoNumerico;
    }
}

function validacionDatosNumeros(datoNumero) {

    if (datoNumero < 0){

        throw new ValidacionNumeros('ErrorDeValor: la variable no es positiva', datoNumero);

    }else if (datoNumero>0 && datoNumero % 2 !==0){

        throw new ValidacionNumeros('ErrorDeTipo: la variable es positivo pero no par', datoNumero);
    }
    
    
    return datoNumero
    
}

function entradaNumeros(){

    const a = 3;

    try{

        console.log('el dato cumple con la condición es par y positivo: ',validacionDatosNumeros(a) );

    }catch(e){

        if (e instanceof ValidacionNumeros){
            console.error('\n*** EXCEPCIÓN CAPTURADA EN EJERCICIO 6 ***');
            console.error();
            console.error('Valor de la variable colocada: ',a);
            console.error();
            console.error('El error personalizado ',e.name);
            console.error();
            console.error('Mensaje de error: ',e.message);
            console.error('*******************************************\n');

        }else{
            console.error('ERROR GENÉRICO: ',e.message);
            
        }

    }

}

entradaNumeros();



// 7. Captura varias excepciones en un mismo try-catch
/**
 * Diseña un bloque try que pueda generar, intencionalmente, dos tipos de errores distintos: 
 * 
 * un error de división por cero; y 
 * 
 * un error por intentar acceder a un índice fuera de los límites de un arreglo o lista. 
 * 
 * Implementa un bloque catch que capture de forma separada ambos tipos de 
 * excepciones y muestre un mensaje específico para cada una.
 */
console.log();
console.log('<----------------------------------------->');
console.log('<----7. Captura varias excepciones en un mismo try-catch----->');


function capturandoErrores(dato2, datosLista, lista){

    if (dato2 === 0){

        throw new Error('Se esta intentando dividir entre cero')

        
    }

    if (datosLista > lista.length){

        throw new RangeError('Se ha superado el rango de la lista')
    }


}


function procesarDatos(){
    const a = 25;
    const b = 1;

    let lista = [1,2,3,4,15];
    let indiceLista = 6;

    try{

        console.log(capturandoErrores(b, indiceLista, lista));

        


    }catch (error){               
        if (error instanceof RangeError){
            console.error('Se ha generado un: ', error.name);
            console.error('Mensaje de error: ', error.message);


        } else if (error instanceof Error){
            console.error("Se produjo un: ", error.name);
            console.error("Mensaje de error: ", error.message);
            
        }
    }
}

procesarDatos();




// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
/**
 * Dado el siguiente arreglo o lista de valores: ['10', '25.5', 'texto', '7.3', 'otro']. 
 * 
 * Crea un bucle que intente convertir cada valor a un número de punto flotante (float). 
 * 
 * Asegúrate de capturar y mostrar cualquier error que se produzca durante la conversión para los 
 * valores que no sean numéricos.
 */

console.log();
console.log('<----------------------------------------->');
console.log('<----8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores----->');

function captureErrores(variableConvertida, pos){

    if (isNaN(variableConvertida)){

        throw new TypeError(`HAY UNA DATO DE LA LISTA QUE NO SE PUDO TRANSFORMAR A FLOTANTE Y ESTA EN LA POSICIÓN ${pos} DE LA LISTA`)
    }

    

}


function transformarLista(lista){

    let listaTransformada = [];

    let pos = 0;

    for (let i = 0; i < lista.length; i++){

        let variableConvertida = parseFloat(lista[i]);

        pos = i;

        captureErrores(variableConvertida, pos);
        
        listaTransformada.push(variableConvertida);
    } 
    
    return listaTransformada;

}


function enviarDatos(){

    let valores = ['10', '25.5', 'texto', '7.3', 'otro'];
    

    try{

        console.log(transformarLista(valores));

    }catch(error){

        if (error instanceof TypeError){
            console.error('\n*** EXCEPCIÓN CAPTURADA EN EJERCICIO 8 ***');
            console.error();
            console.error('Se ha producido un: ', error.name);
            console.error();
            console.error('Mensaje del error: ', error.message);
            console.error();
            console.error('*******************************************\n'); 
        } else{
            console.error("se ha generado un error no contemplado: ", error.name);
            
        }      

    }
}

enviarDatos();




// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada
/**
 * Crea una función llamada verificarPropiedad que reciba como argumentos un objeto y el nombre 
 * de una propiedad. 
 * 
 * Si el objeto no contiene la propiedad especificada, lanza una excepción personalizada llamada 
 * PropiedadFaltanteError con un mensaje descriptivo.
 */


console.log();
console.log('<----------------------------------------->');
console.log('<----9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada----->');

// creando la excepción personalizada
class PropiedadFaltanteError extends Error{

    constructor(mensaje,datoFaltante){
        super(mensaje)

        this.name = "PropiedadFaltanteError";

        this.datoFaltante = datoFaltante;
    }

}

function verificarPropiedad(objeto, propiedad){

    if (!(propiedad in objeto)){

        throw new PropiedadFaltanteError(`LA PROPIEDAD: ${propiedad}, NO FUE ENCONTRADA EN EL OBJETO:`, propiedad)

    }else{
        return `LA PROPIEDAD: ${propiedad}, SI SE ENCUENTRA EN EL OBJETO`
    } 

    
}


function ejecucionDeVerificacion(){

    const miObjeto = {
        propiedad1 : 'valor1',
        propiedad2 : 'valor2',
        propiedad3 : 'valor3'

    }

    
    try{

        console.log(verificarPropiedad(miObjeto, 'propiedad8'));

    }catch(error){
        if (error.name === 'PropiedadFaltanteError'){
            console.error('\n*** EXCEPCIÓN CAPTURADA EN EJERCICIO 9 ***');
            console.error();
            console.error('Se ha producido un: ', error.name);
            console.error();
            console.error('Mensaje del error: ', error.message);
            console.error();
            console.error();
            console.error('*******************************************\n');

        }else{
            console.error();
            console.error('El error es de otra instancia: ', error.name);
            console.error('El error es de otra instancia: ', error.message);
            console.error();
        }

    }


}

ejecucionDeVerificacion();




// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10
/**
 * Diseña una función llamada ejecutarConReintento que reciba otra función como argumento. 
 * 
 * Esta función debe llamar a la función argumento. En caso de que la función argumento genere un 
 * error, debe reintentar la ejecución hasta un máximo de 10 veces antes de finalmente lanzar el 
 * error si todos los intentos fallan.
 */

console.log();
console.log('<----------------------------------------->');
console.log('<----10. Crea una función que realice reintentos en caso de error hasta un máximo de 10----->');

// La función que realiza la lógica de reintento
function ejecutarConReintento(funcionArgumento) {
    let ultimoError = null;
    const maxIntentos = 10;
    
    // Inicia el bucle de reintento (10 veces)
    for (let intento = 1; intento <= maxIntentos; intento++) {
        
        console.log(`[Reintento] Ejecutando intento ${intento} de ${maxIntentos}...`);
        
        try {
            // Intenta ejecutar la función argumento.
            const resultado = funcionArgumento();
            
            // Si la línea anterior no lanza un error, retorna el éxito y sale de la función.
            console.log(`¡ÉXITO! Completado en el intento ${intento}.`);
            return resultado; 

        } catch (errorGenerico) {
            
            // Si falla, guarda el error (para el caso de fallo fatal) y el bucle continúa
            ultimoError = errorGenerico;
            console.log(`[Fallo] Intento ${intento} fallido. Mensaje: ${errorGenerico.message}`);
        }
    }
    
    // Si el bucle termina sin un 'return' (es decir, fallaron los 10 intentos), se lanza el error fatal.
    console.error(`\nFALLO FATAL: Se superó el máximo de ${maxIntentos} reintentos sin éxito.`);
    throw ultimoError; 
}


// --- ÚNICA FUNCIÓN SIMULADORA ---

let llamadas = 0;
let limiteDeFallo = 0; // Esta variable se modifica en la prueba

/**
 * Simula una operación que falla hasta alcanzar el límiteDeFallo.
 */
function funcionUnicaSimuladora() {
    llamadas++; 
    
    // Si el contador de llamadas es menor o igual al límite, se lanza el error.
    if (llamadas <= limiteDeFallo) {
        throw new Error(`Error de red simulado (Fallo #${llamadas}).`);
    }
    
    // Si la llamada supera el límite de fallos, tiene éxito.
    return `¡Procesamiento finalizado con éxito! (Llamada #${llamadas})`;
}

console.log();
console.log('<----------------------------------------->');
console.log('<---- 10. Ejecutar con Reintento - Prueba Única ---->');

// -----------------------------------------------------------------
// 🛠️ CONFIGURACIÓN DE LA PRUEBA: Modifica solo la línea de abajo
// -----------------------------------------------------------------

// CASO 1: ÉXITO. (Fallará 4 veces, tendrá éxito en el 5to intento)
// limiteDeFallo = 4;

// CASO 2: FALLO FATAL. (Fallará 15 veces, superando el límite de 10)
limiteDeFallo = 15; 

// -----------------------------------------------------------------

// Resetear el contador global antes de ejecutar la prueba
llamadas = 0; 
console.log(`\n** Límite de Fallo Configurado: ${limiteDeFallo} **`);


try {
    // Intentamos ejecutar la función con el mecanismo de reintento
    const resultado = ejecutarConReintento(funcionUnicaSimuladora);
    
    // Solo se imprime si el reintento fue EXITOSO
    console.log(`\n=> RESULTADO FINAL DEL CÓDIGO (ÉXITO): ${resultado}`);
    
} catch (errorFatal) {
    
    // Solo se imprime si hubo FALLO FATAL (después de 10 intentos)
    console.error("\n*** EXCEPCIÓN FATAL CAPTURADA (10 Intentos Fallidos) ***");
    console.error(`Error: ${errorFatal.name}`);
    console.error(`Mensaje del último intento: ${errorFatal.message}`);
    console.error("*********************************");
}

console.log('<----------------------------------------->');