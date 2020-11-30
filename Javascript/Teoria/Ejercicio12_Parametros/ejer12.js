'use strict'

// Funciones
// Una funcion es una agrupacion de un conjunto der instrucciones
// PARAMETROS

// Defino la funcion 
function calculadora(numero1, numero2, mostrar=false){  
    // Mostrar false seria un parametro opcional
    // Son parametros que se los pasamos pero que ya vienen inicializados y
    // que no son obligatorios ponerlos cuando invocamos la funcion

    // Conjunto de instrucciones a ejecutar
    
    if(mostrar == false){
    console.log("Suma: " + (numero1 + numero2));
    console.log("Resta: " + (numero1 - numero2));
    console.log("Multiplicacion: " + (numero1 * numero2));
    console.log("Division: " + (numero1 / numero2));
    console.log("********************************");
    }else{
    document.write("Suma: " + (numero1 + numero2) + "</br>");
    document.write("Resta: " + (numero1 - numero2)+ "</br>");
    document.write("Multiplicacion: " + (numero1 * numero2)+ "</br>");
    document.write("Division: " + (numero1 / numero2)+ "</br>");
    document.write("********************************" + "</br>");
    }
    // return "Hola soy la Calculadora!!";

}

// Invocar o llamar a la funcion 
calculadora(1,4);
calculadora(2,2,true);
/*
for(var i=1; i<=10; i++){
    console.log(i);
    calculadora(i, 8);
}
*/
