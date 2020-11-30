'use strict'

// Busqueda en Textos
var numero = 44;
var texto1 = "Bienvenido al curso de Javier Martinez, curso de 0";
var texto2 = "es muy buen curso";
/*
var busqueda = texto1.indexOf("curso");  // Busca la primera coincidencia
console.log(busqueda);

var busqueda = texto1.lastIndexOf("curso");  // Busca la ultima coincidencia
console.log(busqueda);
*/
var busqueda = texto1.match(/curso/g);  // Nos devuelve un array diciendo donde aparece
console.log(busqueda);