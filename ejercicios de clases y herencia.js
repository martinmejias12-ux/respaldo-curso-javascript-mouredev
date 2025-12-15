/*

console.log();
console.log('<----------------------------------------->');
console.log('<--------->');


console.log();
console.log();
console.log();

*/


// 1. Crea una clase que reciba dos propiedades
// Crea una clase llamada Mascota que sirva para representar a un animal. Esta clase debe recibir 
// y almacenar dos propiedades al ser instanciada: nombreMascota (un string) y edadMascota (un 
// número).

console.log();
console.log('<----------------------------------------->');
console.log('<----1. Crea una clase que reciba dos propiedades----->');

class Mascota{

    constructor(nombreMascota,edadMascota){
        this.nombreMascota = nombreMascota
        this.edadMascota = edadMascota
    }
    presentarse(){
        return `Mi mascota ${this.nombreMascota} tiene ${this.edadMascota} años`
    }


}

let animal = new Mascota('Rita', 4 )

console.log();
console.log(`Mi mascota ${animal.nombreMascota} tiene ${animal.edadMascota} meses`);
console.log();


// 2. Añade un método a la clase que utilice las propiedades
// Crea una nueva clase y añádele un método de instancia llamado presentarse. 
// Este método debe retornar un string que combine los valores de las propiedades nombreMascota y 
// edadMascota para formar una frase completa, como por ejemplo: "Hola, mi nombre es 
// [nombreMascota] y tengo [edadMascota] años."

console.log();
console.log('<----------------------------------------->');
console.log('<----2. Añade un método a la clase que utilice las propiedades----->');

class Mascota2{

    constructor(nombreMascota,edadMascota){
        this.nombreMascota = nombreMascota
        this.edadMascota = edadMascota
    }
    presentarse(){
        return `Mi mascota se llama ${this.nombreMascota} y tiene ${this.edadMascota} años`
    }

}

let animal2 = new Mascota2 ('Dalila', 11)
console.log();
console.log(animal2.presentarse());
console.log();


// 3. Muestra los valores de las propiedades e invoca a la función
// Utilizando la clase Mascota2:

// Crea una nueva instancia llamada miPerro con el nombre "Fido" y la edad 5.

// Muestra en la consola los valores individuales de las propiedades nombreMascota y edadMascota de la instancia miPerro.

// Invoca al método presentarse de la instancia miPerro y muestra el resultado en la consola.


console.log();
console.log('<----------------------------------------->');
console.log('<----3. Muestra los valores de las propiedades e invoca a la función----->');

let miPerro = new Mascota2('Fido', 5)

console.log();
console.log(miPerro.nombreMascota);
console.log();
console.log(miPerro.edadMascota);
console.log();
console.log(miPerro.presentarse());


// 4. Añade un método estático a una clase
// Crea una clase Mascota3 para añadirle un método estático llamado tipoDeAnimal. Este método 
// debe ser capaz de ser llamado sin necesidad de instanciar la clase y debe retornar un string 
// fijo, por ejemplo: "Esta es una clase para definir animales domésticos."


console.log();
console.log('<----------------------------------------->');
console.log('<---4. Añade un método estático a una clase------>');

class Mascota3 {
    constructor(nombreMascota,edadMascota) {

        this.nombreMascota = nombreMascota
        this.edadMascota =edadMascota
        
    }

    static tipoDeAnimal(){
        return "Esta es una clase para definir animales domésticos."
    }
}


// 5. Haz uso del método estático
// Sin crear ninguna instancia de la clase Mascota3, haz uso del método estático tipoDeAnimal y 
// muestra el valor retornado en la consola.


console.log();
console.log('<----------------------------------------->');
console.log('<----5. Haz uso del método estático----->');


let resultadoMetodoStatic = Mascota3.tipoDeAnimal()

console.log();
console.log(resultadoMetodoStatic);
console.log();

// 6. Crea una clase que haga uso de herencia
// Crea una clase llamada Perro que herede todas las propiedades y métodos de la clase Mascota2. 
// La clase Perro debe tener una propiedad adicional propia llamada raza (un string) que se 
// inicialice en el constructor.



console.log();
console.log('<----------------------------------------->');
console.log('<----6. Crea una clase que haga uso de herencia----->');


class Perro extends Mascota2 {
    constructor(nombreMascota,edadMascota, raza) {

        super(nombreMascota,edadMascota);
        this.raza = raza;        
    }
}

let claseHeredada = new Perro('Toby',3, 'pequines')

console.log();
console.log(claseHeredada.presentarse(), ` y es de la raza ${claseHeredada.raza}`);
console.log();



// 7. Crea una clase que haga uso de getters y setters
// Crea una nueva clase llamada Inventario que reciba una propiedad cantidadDisponible (un 
// número). Implementa los siguientes métodos especiales:

// Un getter llamado stock que retorne el valor de cantidadDisponible con una unidad de medida, por ejemplo: "[cantidadDisponible] unidades".

// Un setter llamado stock que permita asignar un nuevo valor a cantidadDisponible.


console.log();
console.log('<----------------------------------------->');
console.log('<----7. Crea una clase que haga uso de getters y setters----->');

class Inventario {

    constructor(mercancia,cantidadDisponible){
        this.mercancia = mercancia;
        this.cantidadDisponible = cantidadDisponible;
    }
    get stock(){
        return  this.cantidadDisponible;
    }

    set stock(nuevaCantidadDisponible){
        this.cantidadDisponible = nuevaCantidadDisponible;
    }
}

let resultadoInventario = new Inventario('computadora', 3);

console.log();
console.log(`Inventario actual de la ${resultadoInventario.mercancia}: ${resultadoInventario.stock} unidades`);
console.log();
resultadoInventario.stock = 10;
console.log();
console.log(`Inventario actualizado de la ${resultadoInventario.mercancia}: ${resultadoInventario.stock} unidades`);
console.log();

// 8. Modifica la clase con getters y setters para que use propiedades privadas
// Crea la clase Inventario2 con los mismos parametros del ejercicio anterior para que la propiedad cantidadDisponible 
// sea privada (utilizando el prefijo #). Asegúrate de que tanto el getter como el setter de 
// stock sigan funcionando correctamente para leer y modificar esta propiedad privada.


console.log();
console.log('<----------------------------------------->');
console.log('<----8. Modifica la clase con getters y setters para que use propiedades privadas----->');


class Inventario2 {

    #cantidadDisponible

    constructor(mercancia,cantidadDisponible){
        this.mercancia = mercancia;
        this.#cantidadDisponible = cantidadDisponible;
    }
    get stock(){
        return  this.#cantidadDisponible;
    }

    set stock(nuevaCantidadDisponible){
        this.#cantidadDisponible = nuevaCantidadDisponible;
    }
}

let resultadoInventario2 = new Inventario('computadora', 3);

console.log();
console.log(`Inventario actual de la ${resultadoInventario2.mercancia}: ${resultadoInventario2.stock} unidades`);
console.log();
resultadoInventario.stock = 10;
console.log();
console.log(`Inventario actualizado de la ${resultadoInventario2.mercancia}: ${resultadoInventario2.stock} unidades`);
console.log();


// 9. Utiliza los get y set y muestra sus valores
// Utilizando la clase Inventario2 modificada con propiedades privadas:

// Crea una instancia llamada productoA con una cantidadDisponible inicial de 50.

// Muestra en la consola el valor del getter stock de productoA.

// Utiliza el setter stock para actualizar la cantidad a 35.

// Muestra nuevamente en la consola el valor del getter stock para verificar la modificación.

console.log();
console.log('<----------------------------------------->');
console.log('<----9. Utiliza los get y set y muestra sus valores----->');

let productoA = new Inventario2('producto A', 50)

console.log();
console.log(`El ${productoA.mercancia}, tiene el stock de: ${productoA.stock} unidades`);
console.log();

productoA.stock = 35

console.log();
console.log(`El ${productoA.mercancia} actualmente tiene el stock de: ${productoA.stock} unidades`);
console.log();



// 10. Sobrescribe un método de una clase que utilice herencia 
// Crea una clase Mascota4 añádele un nuevo método llamado emitirSonido que simplemente imprima en la consola: "La mascota hace un sonido genérico."

// Ahora, crea una clase Perro2 (que hereda de Mascota4) para sobrescribir (override) el método emitirSonido. El método emitirSonido de la clase Perro2 debe imprimir en la consola: "El perro ladra: ¡Guau! ¡Guau!"


console.log();
console.log('<----------------------------------------->');
console.log('<----10. Sobrescribe un método de una clase que utilice herencia----->');

class Mascota4 {
    constructor(nombreMascota, edad, raza){
        this.nombreMascota = nombreMascota;
        this.edad = edad;
        this.raza = raza;
    }
    emitirSonido(){
        console.log('La mascota hace un sonido genérico');
    }
}

let miMascota = new Mascota4('firulais', 4, 'cacri')

console.log();
console.log(`La mascota ${miMascota.nombreMascota} tiene la edad de ${miMascota.edad} años y es de la raza ${miMascota.raza}`);
console.log();
miMascota.emitirSonido();

class Perro2 extends Mascota4{
    constructor (nombreMascota, edad, raza){
        super (nombreMascota, edad, raza);
    }

    emitirSonido(){
        console.log('El perro ladra: ¡Guau! ¡Guau!');

    }

}

let perro2 = new Perro2('cascanueces', 1, 'chihuahua')

console.log();
console.log(`Mi nuevo perro se llama: ${perro2.nombreMascota}, tiene la edad de ${perro2.edad} y es de la raza ${perro2.raza}`);
console.log();

perro2.emitirSonido();