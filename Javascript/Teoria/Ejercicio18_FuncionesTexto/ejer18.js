'use strict'

// Transformacion de textos
var numero = 44;
var texto1 = "Bienvenido al curso de Javier Martinez";
var texto2 = "es muy buen curso";

var dato = numero.toString(); // Para convertir a un tipo de dato String
    dato = texto1.toUpperCase(); // Para convertir a Mayusculas
    dato = texto2.toLowerCase(); // Para convertir a Minusculas

console.log(dato);

// Calcular la longitud de un texto
var nombre = "Javier";
    nombre = ["hola", "holas", "holas"]

console.log(nombre.length);

// Como concatenar textos

/* FORMA 1
var texto_total = texto1 + " "+ texto2;
console.log(texto_total);
*/

// FORMA 2
var texto_total = texto1.concat(" "+ texto2);
console.log(texto_total);