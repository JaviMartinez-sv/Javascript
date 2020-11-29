'use strict'

// Condicional if
// si a = b entonces haz algo

var edad1 = 30;
var edad2 = 12;


// Si pasa esto
if(edad1>edad2){
// ejecuta esto
    console.log("Edad1 es mayor que edad2")
}else{
    console.log("Edad2 es mayor que edad1")
}

var edad =18;
var nombre = "David Suarez";

/* OPERADORES RELACIONALES: 
 Mayor : >
 Menor : <
 Mayor o igual : >=
 Menor o iguaL : <=
 Igual : == 
 Distinto : !=
 */

if(edad >= 18){
    console.log(nombre + "tiene " + edad + ", es mayor de edad" )
    if(edad==33){
        console.log("Todavia eres milenial")
    }else if(edad > 40){
        console.log("Ya no eres milenial")
    }
}else{
    console.log(nombre + "tiene" + edad + ", es menor de edad" )
}

/* OPERADORES LOGICOS:
AND(Y): &&
OR(O): ||
NEGACION: !
*/


var year=2018;

// Negacion

if(year!=2016){
   console.log("El año no es 2016, el año es " + year)
}

// AND
if(year>=2000 && year<=2020 ){
    console.log("Estamos en la era actual")
 }else{
     console.log("Estamos en la era post moderna")
 }

 // OR
if(year==2008 || year==2018 ){
    console.log("El año acaba en 8")
}



