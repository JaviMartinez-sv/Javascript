'use strict'

// Funciones anonimas
// Un callback es una funcion que se ejecuta dentro de otra
// Una funcion anonima es una funcion que no tiene nombre
/*
var pelicula = function(nombre){
    return "La pelicula es: " + nombre;
}
*/
// Funcion Callback

function sumame (numero1, numero2, sumaYmuestra, sumaPorDos){
    var sumar = numero1 + numero2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);


    return sumar;
}

sumame(5,7,function(dato){
    console.log("La suma es: ", dato); // Funcion Anonima
},
function (dato){
    console.log("La suma por dos es: ", (dato * 2));

});

