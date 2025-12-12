
// 1. Crea un objeto con 3 propiedades


console.log();
console.log('<----------------------------------------->');
console.log('<----1. Crea un objeto con 3 propiedades----->');

const vehiculo = {
    marca: "chevrolet",
    anio: 2007,
    modelo: 'grand vitara'
};

console.log();
console.log(vehiculo);
console.log();

// 2. Accede y muestra su valor


console.log();
console.log('<----------------------------------------->');
console.log('<----2. Accede y muestra su valor----->');


console.log();
console.log(`El vehículo marca: ${vehiculo.marca}, modelo: ${vehiculo.modelo}, es del año: ${vehiculo.anio}`);
console.log();


// 3. Agrega una nueva propiedad


console.log();
console.log('<----------------------------------------->');
console.log('<----3. Agrega una nueva propiedad----->');

vehiculo.placa = 'AB834ND';
vehiculo.serial = '23467DRT89GHTO';


console.log();
console.log(vehiculo);
console.log();


// 4. Elimina una de las 3 primeras propiedades


console.log();
console.log('<----------------------------------------->');
console.log('<----4. Elimina una de las 3 primeras propiedades----->');

delete vehiculo.marca;


console.log();
console.log(vehiculo);
console.log();


// 5. Agrega una función e invócala

console.log();
console.log('<----------------------------------------->');
console.log('<----5. Agrega una función e invócala----->');


const vehiculo2 = {
    marca: "chevrolet",
    anio: 2015,
    modelo: 'aveo',
    servicio: function (){
        console.log('Los servicios están al dia');
    }

};

console.log();
console.log(vehiculo2);
vehiculo2.servicio()
console.log();

// 6. Itera las propiedades del objeto

console.log();
console.log('<----------------------------------------->');
console.log('<----6. Itera las propiedades del objeto----->');

const vehiculo3 = {
    marca: "chevrolet",
    anio: 2015,
    modelo: 'bronco',
    servicio: function (){
        console.log('Los servicios están al dia');
    }

};

for (let clave in vehiculo3){

    console.log(clave+ ' : '+vehiculo3[clave]);
};




console.log();
console.log('<----------------------------------------->');
console.log('<----// 7. Crea un objeto anidado----->');

const apartamento = {
    cuarto : 4,
    banio : 2,
    superficie: 250,
    distribucion: 'cocina,lavandero,salacomedor',
    acabado: function (){
        console.log();
        console.log('Esta en obra gris');
        console.log();
    },

    serviciosComodidades: {
        seguridad: 'vigilante',
        areasComunes: 'piscina,jardines',
        serviciosBasicos: 'agua potable, electricidad, gas',
        mantenimiento: function (){
            console.log();
            console.log('todos los servicios están al dia');
            console.log();
        }

    }
};

// 8. Accede y muestra el valor de las propiedades anidadas

console.log();
console.log('<----------------------------------------->');
console.log('<----8. Accede y muestra el valor de las propiedades anidadas----->');


console.log();
console.log('El apartamento tienen lo siguiente: ');
console.log(`cuartos: ${apartamento.cuarto}`);
console.log(`baños: ${apartamento.banio}`);
console.log(`distribución: ${apartamento.distribucion}`);
apartamento.acabado();
console.log('Tiene los siguientes servicios adicionales: ');
console.log(`seguridad: ${apartamento.serviciosComodidades.seguridad}`);
console.log(`servicios adicionales: ${apartamento.serviciosComodidades.areasComunes}`);
apartamento.serviciosComodidades.mantenimiento();
console.log();

// 9. Comprueba si los dos objetos creados son iguales

console.log();
console.log('<----------------------------------------->');
console.log('<----9. Comprueba si los dos objetos creados son iguales----->');

function sonObjetosIguales (dato1,dato2){
    
    if (dato1===dato2){
        return true;
    }

    if (typeof dato1 !== 'object' || dato1 === null || typeof dato2 !== 'object' || dato2 === null) {
        return false;
    }

    const clavesDato1 = Object.keys(dato1);
    const clavesDato2 = Object.keys(dato2);

    if (clavesDato1.length !== clavesDato2.length) {
        return false;
    }

    for (const clave of clavesDato1) {
        
        if (!Object.prototype.hasOwnProperty.call(dato2, clave)) {
            return false;
        }
        
        if (!sonObjetosIguales(dato1[clave], dato2[clave])) {
            return false;
        }
    }

    // Si todas las comprobaciones han pasado, los objetos son iguales.
    return true;

}

console.log();
console.log('los objetos vehiculo2 y vehiculo 3 son iguales: ', sonObjetosIguales(vehiculo2,vehiculo3));
console.log();

// 10. Comprueba si dos propiedades diferentes son iguales


console.log();
console.log('<----------------------------------------->');
console.log('<----10. Comprueba si dos propiedades diferentes son iguales----->');

if (vehiculo2.marca === vehiculo3.modelo){
    console.log('la propiedad marca de los objetos vehiculo2 y vehiculo 3: ',true );
} else{
    console.log('la propiedad marca de los objetos vehiculo2 y vehiculo 3: ',false );
}






