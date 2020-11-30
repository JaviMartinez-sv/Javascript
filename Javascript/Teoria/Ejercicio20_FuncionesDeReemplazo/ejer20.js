'use strict'

// Funciones de Reemplazo
var numero = 44;
var texto1 = "Bienvenido al curso de Javier Martinez, curso de 0";
var texto2 = "es muy buen curso";

/* Uso de replace para reemplazar
var busqueda = texto1.replace("Javier", "Jose"); 
console.log(busqueda);
*/

/* Uso de slice para cortar desde el numero de caracter que quiera hasta el que quiera
var busqueda = texto1.slice(14, 25);  
console.log(busqueda);
*/

/* Uso de split para guardar todas las palabras en un array
var busqueda = texto1.split(" ");  
console.log(busqueda);
*/

// Para quitar los espacios por delante y detras de un String
var busqueda = texto1.trim();  
console.log(busqueda);