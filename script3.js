//EJERCICIO 1
let numeros = [1, 2, 3, 4, 5];

let dobles = numeros.map(num => num * 2);

console.log(dobles);
console.log(numeros);
//imprime el resultado de el array numeros * 2 en cada elemento
//el otro imprime le array normal que si se conserva intacto


//EJERCICIO 2

numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let pares = numeros.filter(n => n % 2 === 0);
let mayoresDeCinco = numeros.filter(n=> n > 5);

// EJERCICIO 3

let productos = [
    { nombre: "Laptop", precio: 1000 },
    { nombre: "Mouse", precio: 50 },
    { nombre: "Teclado", precio: 75 },
    { nombre: "Monitor", precio: 300 }
];

let mayoresDeCien = productos.filter(n => n.precio > 100);
console.log(mayoresDeCien.length);  

console.log(mayoresDeCien[0]);

//EJERCICIO 4
numeros = [1, 2, 3, 4];

let reducidos = numeros.reduce((acumulador,elementoActual ) => {
    return acumulador + elementoActual;
}, 0);

console.log(reducidos);
//acumulador vale 0 se le suma el primer lemento 1 si no indicasemos el valor inicial empezaria enel primer elemento
//y tambien estariamos en unocon lo que le sumaria 1mas 1 y recorreria pero como empezamos en cero
//va sumando y va 1, 3, 6, 10 en cada vuelta 
🔧 Ejercicio 5 — reduce para encontrar el mayor

Dado este array:

javascript
let numeros = [5, 12, 8, 20, 3];

👉 Usa reduce SIN valor inicial para encontrar el número mayor. ¿Con qué valor empieza el acumulador y por qué?

🔧 Ejercicio 6 — reduce con array vacío

javascript
let vacio = [];

👉 Intenta usar reduce sobre él dos veces: una con valor inicial y otra sin él. ¿Qué pasa en cada caso?

🔧 Ejercicio 7 — forEach

Dado este array:

javascript
let productos = [
    { nombre: "Laptop", precio: 1000 },
    { nombre: "Mouse", precio: 50 },
    { nombre: "Teclado", precio: 75 }
];

👉 Usa forEach para mostrar por consola cada producto en formato: "Laptop cuesta 1000€"

🔧 Ejercicio 8 — join y split

👉 Tienes este array: ["manzana", "pera", "naranja"]. Únelo en una cadena separada por -.

👉 Tienes esta cadena: "Hola mundo que tal". Conviértela en array separando por espacios y muestra cuántos elementos tiene y el tercero.

🔧 Ejercicio 9 — encadenando filter y map

Dado este array:

javascript
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

👉 En una sola línea: filtra solo los pares y multiplica cada uno por 3. Explica qué hace cada paso.

🔧 Ejercicio 10 — sort

Dado este array:

javascript
let numeros = [10, 5, 8, 1, 3];

👉 Ordénalo de menor a mayor y luego de mayor a menor usando sort. ¿Qué diferencia hay entre a - b y b - a?