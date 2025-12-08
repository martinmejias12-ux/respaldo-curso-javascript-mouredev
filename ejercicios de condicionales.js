// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
console.log();
console.log('<----------------------------------------->');
console.log('<-----1. Imprime por consola tu nombre si una variable toma su valor---->');

let nomVariable= 1;
let nombre ='Martin';

if (nomVariable == 1) {
    console.log();
    console.log(`El nombre de la persona es ${nombre}`);
    console.log();
}


// 2. Imprime por consola un mensaje si el usuario y contraseña coincide con unos establecidos

console.log();
console.log('<----------------------------------------->');
console.log('<-----2. Imprime por consola un mensaje si el usuario y contraseña coincide con unos establecidos---->');

let usuario = 'operador';
let contrasenia = 'op123';

if ((usuario=== 'operador') && (contrasenia==='op123')) {
    console.log();
    console.log(`El usuario introducido es: ${usuario}`);
    console.log();
    console.log(`La contraseña introducida es: ${contrasenia.replace('op123','xxxxx')}`);
    console.log();
    console.log('El usuario y contraseña son correctos');
}



// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

console.log();
console.log('<----------------------------------------->');
console.log('<-----3. Verifica si un número es positivo, negativo o cero e imprime un mensaje---->');

const numero = 0;

if (numero>0) {
    console.log();
    console.log('El numero es positivo');
    console.log();
}else if (numero<0){
    console.log();
    console.log('El numero es negativo');
    console.log();

}else if (numero===0){
    console.log();
    console.log('El numero es cero');
    console.log();

}else {
    console.log();
    console.log('NO HA INDICADO UN NUMERO VALIDO');
    console.log();
    
}



// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

console.log();
console.log('<----------------------------------------->');
console.log('<-----4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan---->');

const edad= 55;
console.log();
console.log(`El señor ${nombre} tiene la edad de ${edad} años`);
if (edad>= 18) {
    console.log();
    console.log('Puede votar');
    

} else {
    const edadLimite = 18;

    const aniosFaltante = edadLimite-edad;
    console.log();
    console.log('Todavía no puede votar le faltan: ', aniosFaltante,' años');
}



// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

console.log();
console.log('<----------------------------------------->');
console.log('<-----5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad---->');

console.log();

const resultado= (edad>=18) ? "Es Mayor de edad":'Es menor de edad';

console.log(`El señor ${nombre} ${resultado}`);
console.log();


// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

console.log();
console.log('<----------------------------------------->');
console.log('<-----6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"---->');

const mes = 'abril'.toLowerCase();

console.log();
console.log(`Mes del año: ${mes}`);

if (mes==='marzo' || mes==='abril' || mes==='mayo') {
    console.log();
    console.log('Estamos en Primavera');
} else if (mes==='junio' || mes==='julio' || mes==='agosto'){
    console.log();
    console.log('Estamos en Verano');
}else if (mes==='septiembre' || mes==='octubre' || mes==='noviembre'){
    console.log();
    console.log('Estamos en Otoño');
}else if (mes==='diciembre' || mes==='enero' || mes==='febrero'){
    console.log();
    console.log('Estamos en Invierno');

}else{
    console.log();
    console.log('NO HAS INDICADO UN MES DEL AÑO VALIDO, INTÉNTELO DE NUEVO');
}



// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior 

console.log();
console.log('<----------------------------------------->');
console.log('<-----7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior switch---->');

let mesesTreintaDias =['abril','junio','septiembre','noviembre'];

let mesesTreintayunDias =['enero','marzo','mayo','julio','agosto','octubre','diciembre'];

let mesesVeitiochodias = ['febrero'];

console.log();
console.log(`Mes seleccionado: ${mes}`);

if (mesesTreintaDias.includes(mes)){
    console.log();
    console.log('El mes tiene 30 días');
    console.log();

}else if (mesesTreintayunDias.includes(mes)){
    console.log();
    console.log('El mes tiene 31 días');
    console.log();
}else if (mesesVeitiochodias.includes(mes)){
    console.log();
    console.log('El mes tiene 28 o 29 días dependiendo de si es año bisiesto');
    console.log();
}else{
    console.log();
    console.log('NO SE HA SELECCIONADO UN MES VALIDO, INTENTE DE NUEVO');
    console.log();
}





//switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

console.log();
console.log('<----------------------------------------->');
console.log('<-----8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma---->');

let idioma = ['ingles','francés','aleman','español','japones'];

let saludo = ['Hello','Bonjour','Guten Tag','Hola',"Kon'nichiwa"];

let seleccionarIdioma = "frances".toLowerCase()

switch (seleccionarIdioma) {
    case 'ingles':
        console.log();
        console.log("Hello");
        console.log();        
        break;

    case 'frances':
        console.log();
        console.log("Bonjour");
        console.log();        
        break;

    case 'aleman':
        console.log();
        console.log("Guten Tag");
        console.log();        
        break;

    case 'español':
        console.log();
        console.log("Hola");
        console.log();        
        break;

    case 'japones':
        console.log();
        console.log("Kon'nichiwa");
        console.log();        
        break;

    default:
        console.log();
        console.log("NO SE HA SELECCIONADO EL IDIOMA CORRECTO");
        console.log();
        break;
}


// 9. Usa un switch para hacer de nuevo el ejercicio 6

console.log();
console.log('<----------------------------------------->');
console.log('<-----9. Usa un switch para hacer de nuevo el ejercicio 6---->');

switch (mes) {
    case 'marzo':
    case 'abril':
    case 'mayo':
        console.log();
        console.log("Estamos en Primavera");
        console.log();        
        break;
        
    case 'junio':
    case 'julio':
    case 'agosto':    
        console.log();
        console.log("Estamos en Verano");
        console.log();        
        break;
    
    case 'septiembre':
    case 'octubre':
     case 'noviembre':
        console.log();
        console.log("Estamos en Otoño");
        console.log();        
        break;
    
    case 'diciembre':
    case 'enero':
    case 'febrero':
        console.log();
        console.log("Estamos en Invierno");
        console.log();        
        break;
    
        
    default:
        console.log();
        console.log("NO SE HA SELECCIONADO UN MES CORRECTO");
        console.log();
        break;
}


// 10. Usa un switch para hacer de nuevo el ejercicio 7

console.log();
console.log('<----------------------------------------->');
console.log('<-----10. Usa un switch para hacer de nuevo el ejercicio 7---->');

switch (mes){
    case 'abril':
    case 'junio':
    case 'septiembre':
    case 'noviembre':

        console.log();
        console.log('El mes tiene treinta días');
        console.log();
        break;
    

    case 'enero':
    case 'marzo':
    case 'mayo':
    case 'julio':
    case 'agosto':
    case 'octubre':
    case 'diciembre':

        console.log();
        console.log('El mes tiene treinta y uno días');
        console.log();
        break;
    
    case 'febrero':
        console.log();
        console.log('El mes tiene 28 o 29 días dependiendo de si es año bisiesto');
        console.log();
        break;

    default:
        console.log();
        console.log('NO HA SELECCIONADO UN MES CORRECTO INTENTE DE NUEVO');
        console.log();
        break;
}
