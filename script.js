let puntuacion = 0;

valoraPuntuacion(puntuacion);
function valoraPuntuacion(puntuacion){
if (puntuacion) {
    console.log("tienes puntos");

} else {
    console.log("no tienes puntos");
}

}

puntuacion = 1;
valoraPuntuacion(puntuacion);

//en el caso a no tenemos puntos y en el caso b si al no ser 0 es truthy.

/**
 * EJERCICIO 2
 */

let usuario = null;

let nombre = usuario || "Invitado";

console.log(nombre);

//Imprime invitado al ser un valor falsy(null, o cadena vacia...)
//rechaza la primera opcion y pasa a la por defecto "invitado"

/** 
 * EJERCICIO 3 
 */

let intentos = 3;

while(intentos){
    console.log("Intento Número: " + intentos);
    intentos--;
}


//punto a valor numero = 0 es falsy entonces al llegar ahi no cuenta mas
//misma respusta anterior es el 0 alvaler falsy el que para el bucle

/**
 * EJERCICIO 4
 */

let datos = "";
//punto a en este punto es falsy al ser cadena vacia
datos = "Juan";

//aqui estrthy pues vale "Juan"

if (datos && datos.length > 0){
    console.log("hay datos válidos");
}

//por que la condicion and implica que ambos terminos sean trythy
//aunque en este caso con datos estamos diciendo si datos es decir si datos no es falsy
//pero diciendo que su longitud sea mayor a 0 tambien pero realmente
//esetamos haciendo lo mismo por que ah vlle si datos es cadena vacia pasa por el primero
//por que aunque sea cadena vacia no es undfined y pas un filtro pero no dos

/** 
 * EJERCICIO 5
 * 
 */

let valores = [0, "", null, "hola", undefined, 42, false, []];

for (let i = 0; i < valores.length; i++) {
    if (valores[i]) {
        console.log(valores[i] + " -> truthy");
    }    else {
        console.log(valores[i] + " -> falsy");
    }
}
// pues respondo ante de ejecutar, [falsy, falsy, falsy, truthy, falsy, truthy, falsy, truthy]