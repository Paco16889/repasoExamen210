/**
 * Ejercicio 1
 */

let precios = [69.99, , , 12.49, , 35.20];

for (let i = 0; i < precios.length; i++) {
    console.log(precios[i])    
}


for (let i in precios) {
  console.log(precios[i])
}

for (let precio of precios) {
    console.log(precio);
}

//pues a recore con un contador que se va incrementando
//b el indice se incrementa automaticamente de uno en uno al ser array
// y c accede al valor directamente de cada elemento

/** 
 * EJERCICIO 2
 * 
 */

let sinIva = [10.00, 20.00, 30.00];
let conIva = sinIva;

conIva[0] = 999;

console.log(sinIva[0]);
console.log(conIva[0]);

//ambas lineas imprimen 999 por que los arrays al ocupar un espacioen memoria determinado o algo asi
//cojen el valor de uno y el otro algo asi era

/**
 * CONJUNTOS(SETS)
 */

//EJERCICIO1
var conjunto = new Set([1, 2, 2, 3, 3, 3, 4]);

console.log(conjunto.size);

//4 por que evita duplicados

//EJERCICIO2
var conjunto = new Set();

conjunto.add(7).add("Samuel").add(69).add(7);

console.log(conjunto.size);
console.log(conjunto.has(69));
console.log(conjunto.has(99));

//pues el primero nos da 3 por que tnemos un duplicado
//el segundo nos dara true por que tenemos un 69
// el tercero dara false por queno lo tenemos

//EJERCICIO 3
var conjunto = new Set(["primero", "segundo", "tercero", "primero"]);

conjunto.delete("segundo");

for (let elemento of conjunto) {
    console.log(elemento);
}

//el bucle imprime primmero, tercero
//el conjunto tiene al declararse 3 elementos y al borrar uno de ellos tiene 2

//EJERICIO 4
let array1 = [1, 2, 3, 4];
let array2 = [3, 4, 5, 6];

var conjunto = new Set([...array1, ...array2]);
const resultado = [...conjunto];

console.log(resultado);

// pues lo qu eno entieno no odriamos decir new set (array1, array2)ahhh vale ai cada array seria un elemento de otro array eliminaria en caso de tener dentro arrays identicos vale vale
//pues concatena cada uno de los elementos del array con el spread...
// y l ser set elimina duplicados directamente, luego resultado tiene 123456 ha eliminado el 3 y 4 repetidos

//EJERCICIO 5

const telefonos = new Map([
    [111111, "ana"],
    [222222, "luis"],
    [333333, "marta"]
]);

console.log(telefonos.get(222222));
console.log(telefonos.has(444444));
console.log(telefonos.size);

//la primera el nombre de ese telefono pues es la clave y el vlaor el nombre
//telefonos.hass nos da false por que no tenemos esa clave
//y en .size nos da 3 elmentos cada par clave valor

//EJERCICIO 6
const mapa = new Map();
mapa.set(1, "uno");
mapa.set(2, "dos");
mapa.set(1, "ONE");

console.log(mapa.size);
console.log(mapa.get(1));

//primero 2 por que evitamos duplicados como los conjuntos
//y si tenemos mapa.get(1) nos da el primer valor introducido "uno"

//EJERCICIO7

for(let[telefono, persona] of telefonos){
    console.log(persona + ": " + telefono);


}

/**
 * primer telefono primer nomgre
 * segundo telfono  segundo mmonbre
 * tercer telefon, tercer nombre
 * he usado el map telefonos anterior
 */

//EJERCICIO 8
//reutilizo telefonos

for (let tel of telefonos.keys()) {
        console.log(tel);

}

for (let persona of telefonos.values()) {
    console.log(persona);
}

// cada bucle nos imprime uno los dos telefonos y el otro los nombres 
//pues el primero mete en tel las claves y el otro epersonas los nombres 