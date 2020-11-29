'use strict'
// Pruebas con let y var


// Prueba con VAR
var numero =40;
console.log(numero); //  Valor 40

if(true){
    var numero=50;
    console.log(numero); // valor 50
}

console.log(numero); // valor 50

// Prueba con LET
var texto="Curso Javier Martinez"
console.log(texto); // valor "Curso Javier Martinez"

if(true){
    let texto="que paxaa";
    console.log(texto); // valor que paxa
}

console.log(texto); // valor Curso Javier Martinez