/*
console.log();
console.log('<----------------------------------------->');
console.log('<--------->');


console.log();
console.log();
console.log();
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 

console.log();
console.log('<----------------------------------------->');
console.log('<----1. Usa desestructuración para extraer los dos primeros elementos de un array----->');


const nombresEmpleados = ["Juan", "María", "Pedro", "Luisa", "Carlos"];

const [nombre1, nombre2, , , ,] = nombresEmpleados;

console.log();
console.log('arreglo original: ',nombresEmpleados);
console.log();
console.log(nombre1);
console.log();
console.log(nombre2);
console.log();

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

// Ejercicio:** Usa desestructuración para asignar el valor predeterminado 
// "Lima" a la variable 'CiudadFaltante' si no existe un tercer elemento.


console.log();
console.log('<----------------------------------------->');
console.log('<----2. Usa desestructuración en un array y asigna un valor predeterminado a una variable----->');

const ciudadesVisitadas = ["Bogotá", "Medellín"];

const [ciudad1,ciudad2, ciudadFaltante = 'lima'] = ciudadesVisitadas

console.log();
console.log('esta es la ciudad 1: ', ciudad1);
console.log();
console.log('esta es la ciudad 2: ', ciudad2);
console.log();
console.log('esta es la ciudad faltante: ', ciudadFaltante);
console.log();
console.log();

// 3. Usa desestructuración para extraer dos propiedades de un objeto
// **Ejercicio:** Usa desestructuración para extraer las propiedades 'modelo' y 'color'.

console.log();
console.log('<----------------------------------------->');
console.log('<----3. Usa desestructuración para extraer dos propiedades de un objeto----->');

const cocheDeportivo = {
    marca: "Ferrari",
    modelo: "F8 Tributo",
    año: 2023,
    color: "Rojo"
};

const {modelo, color}=cocheDeportivo;


console.log();
console.log(`el coche deportivo es del modelo: ${modelo} y es de color: ${color}`);
console.log();



// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas a nuevas variables con nombres diferentes

// Extrae 'nombre' y 'edad', renombrándolas a 'nombreJugador' y 'edadJugador'.

console.log();
console.log('<----------------------------------------->');
console.log('<----4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas a nuevas variables con nombres diferentes----->');

const jugadorEstrella = {
    nombre: "Lionel",
    apellido: "Messi",
    edad: 37,
    posicion: "Delantero"
};

const {nombre : nombreJugador, edad : edadJugador} = jugadorEstrella

console.log();
console.log(`El nombre del jugador es: ${nombreJugador}`);
console.log();
console.log(`Y tiene la edad de: ${edadJugador}`,' años');
console.log();


// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

// **Ejercicio:** Utiliza desestructuración para extraer 'calle' y 'codigoPostal' del objeto 'direccion'.

console.log();
console.log('<----------------------------------------->');
console.log('<----5. Usa desestructuración para extraer dos propiedades de un objeto anidado----->');


const clienteVIP = {
    id: 101,
    nombreCliente: "Ana López",
    direccion: {
        calle: "Avenida Principal 123",
        ciudad: "Madrid",
        codigoPostal: "28001"
    },
    telefono: "555-1234"
};

const {direccion:{calle,codigoPostal}} = clienteVIP;


console.log();
console.log(`La calle del cliente vip es: ${calle}`);
console.log();
console.log(`El código postal del cliente vip es: ${codigoPostal}`);
console.log();


// 6. Usa propagación para combinar dos arrays en uno nuevo
// **Ejercicio:** Usa propagación para combinar ambos arrays en 'ingredientesCompletos' 
// y añade el elemento "Aderezo".

console.log();
console.log('<----------------------------------------->');
console.log('<----6. Usa propagación para combinar dos arrays en uno nuevo----->');

const ingredientesEnsalada = ["Lechuga", "Tomate", "Pepino"];
const ingredientesFrutas = ["Manzana", "Naranja", "Fresa"];

const ingredientesCompletos = [...ingredientesEnsalada,...ingredientesFrutas, 'Aderezo'];


console.log();
console.log('los ingredientes completos: ',ingredientesCompletos);
console.log();


// 7. Usa propagación para crear una copia de un array
// **Ejercicio:** Usa propagación para crear una copia superficial 'copiaColores' 
// y luego añade "Amarillo" a la copia.

console.log();
console.log('<----------------------------------------->');
console.log('<----7. Usa propagación para crear una copia de un array----->');

const coloresOriginales = ["Rojo", "Azul", "Verde"];

const copiaColores = [...coloresOriginales, 'Amarillo'];

console.log();
console.log('Esta es la copia de los colores: ',copiaColores);
console.log();

// 8. Usa propagación para combinar dos objetos en uno nuevo
// **Ejercicio:** Usa propagación para combinarlos en 'productoCompleto', 
// permitiendo que 'marca' de 'detallesTecnicos' sobrescriba la del primero.

console.log();
console.log('<----------------------------------------->');
console.log('<----8. Usa propagación para combinar dos objetos en uno nuevo----->');

const productoElectronico = {
    nombreProducto: "Laptop Gaming",
    precio: 1500,
    marca: "TechPro"
};
const detallesTecnicos = {
    memoria: "16GB RAM",
    almacenamiento: "1TB SSD",
    marca: "Innovate"
};

const productoCompleto = {...productoElectronico , ...detallesTecnicos};

console.log();
console.log(productoCompleto);
console.log();

// 9. Usa propagación para crear una copia de un objeto
// **Ejercicio:** Usa propagación para crear una copia superficial 'copiaLibro' 
// y luego cambia 'paginas' a 500 en la copia.

console.log();
console.log('<----------------------------------------->');
console.log('<----9. Usa propagación para crear una copia de un objeto----->');


const libroOriginal = {
    titulo: "Cien años de soledad",
    autor: "García Márquez",
    paginas: 496
};

const copiaLibro = {...libroOriginal, paginas:500};

console.log();
console.log('libro original: ',libroOriginal);
console.log();
console.log('copia del libro: ', copiaLibro);
console.log();

// 10. Combina desestructuración y propagación
// **Ejercicio:** Desestructura 'tipo' y 'capacidadPasajeros', y usa el operador Rest ('...') 
// para capturar las propiedades restantes en un objeto llamado 'otrosDatos'.

console.log();
console.log('<----------------------------------------->');
console.log('<----10. Combina desestructuración y propagación----->');

const aeronave = {
    tipo: "Avión Comercial",
    velocidad: "900 km/h",
    capacidadPasajeros: 200,
    añoFabricacion: 2018,
    aerolinea: "Global Airlines"
};

const {tipo, capacidadPasajeros, ...otrosDatos} = aeronave;



console.log();
console.log(`La aeronave es del tipo: ${tipo} y tiene la capacidad para: ${capacidadPasajeros} pasajeros`);
console.log();
console.log('los otros datos de la aeronave son: ',otrosDatos);
console.log();
