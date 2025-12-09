
// 1. Crea un array que almacene cinco animales

console.log();
console.log('<----------------------------------------->');
console.log('<---- 1. Crea un array que almacene cinco animales----->');

let animales = ['canguro','perro','gato','loro','jaguar'];

console.log();
console.log('Animales:', animales);
console.log();



// 2. Añade dos más. Uno al principio y otro al final

console.log();
console.log('<----------------------------------------->');
console.log('<----2. Añade dos más. Uno al principio y otro al final----->');

animales.push('loro');
animales.unshift('león');

console.log();
console.log('Animales:', animales);
console.log();



// 3. Elimina el que se encuentra en tercera posición

console.log();
console.log('<----------------------------------------->');
console.log('<----3. Elimina el que se encuentra en tercera posición----->');


animales.splice(3,1)

console.log();
console.log('Animales:', animales);
console.log();



// 4. Crea un set que almacene cinco libros

console.log();
console.log('<----------------------------------------->');
console.log('<----4. Crea un set que almacene cinco libros----->');

let libros = new Set (['casas muertas','doña Barbara','el coronel no tiene quien le escriba','lo que el viento se llevo','cien años de soledad'])

console.log();
console.log(libros);
console.log();




// 5. Añade dos más. Uno de ellos repetido

console.log();
console.log('<----------------------------------------->');
console.log('<----5. Añade dos más. Uno de ellos repetido----->');

libros.add('doña Barbara');
libros.add('el amor en los tiempos de cólera');

console.log();
console.log(libros);
console.log();


// 6. Elimina uno concreto a tu elección

console.log();
console.log('<----------------------------------------->');
console.log('<----6. Elimina uno concreto a tu elección----->');

libros.delete('doña Barbara')


console.log();
console.log(libros);
console.log();


// 7. Crea un mapa que asocie el número del mes a su nombre

console.log();
console.log('<----------------------------------------->');
console.log('<----7. Crea un mapa que asocie el número del mes a su nombre----->');

let meses = new Map ([
    ['enero',1],
    ['febrero',2],
    ['marzo',3],
    ['abril',4],
    ['mayo',5],
    ['junio',6],
    ['julio',7],
    ['agosto',8],
    ['septiembre',9],
    ['octubre',10],
    ['noviembre',11],
    ['diciembre',12]

]);

console.log();
console.log(meses);
console.log();


// 8. Comprueba si el mes de mayo existe en el map e imprime su valor

console.log();
console.log('<----------------------------------------->');
console.log('<----8. Comprueba si el mes número 5 existe en el map e imprime su valor----->');

const mesBuscar = 'octubre'

console.log();
if (meses.has(mesBuscar)){

    console.log('el mes de:',mesBuscar, ' tiene el numero: ',meses.get(mesBuscar));

}
console.log();


// 9. Añade al mapa una clave con un array que almacene los meses de verano

console.log();
console.log('<----------------------------------------->');
console.log('<----9. Añade al mapa una clave con un array que almacene los meses de verano----->');

meses.set('verano',['junio','julio','agosto']);

console.log();
console.log(meses);
console.log();


// 10. Crea un Array, transformarlo a un Set y almacenarlo en un Map

console.log();
console.log('<----------------------------------------->');
console.log('<----10. Crea un Array, transformarlo a un Set y almacenarlo en un Map----->');

let miArray =['pera','manzana',15,20,true,false,'navidad','vacaciones'];

let miSet = new Set (miArray);

let miMap = new Map();

miMap.set('valores',miSet)




console.log();
console.log(miArray);
console.log();
console.log(miSet);
console.log();
console.log(miMap);
console.log();

