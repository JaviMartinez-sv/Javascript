// EJERCICIO 1

'use strict'

/*
Programa que pida dos numeros y que nos diga cual es el mayor,
 el menor y si son iguales
PLUS: Si los numeros no son un numero o son menores o iguales
a cero, nos los vuelva a pedir
*/

var capturar_resultado = prompt("Dime un numero", );
console.log(parseInt(capturar_resultado));

var capturar_resultado2 = prompt("Dime otro numero", );
console.log(parseInt(capturar_resultado2));

while(capturar_resultado<=0 || capturar_resultado2 <=0 || isNaN(capturar_resultado) || isNaN(capturar_resultado2)){
    capturar_resultado = parseInt(prompt("Dime un numero", ));
    capturar_resultado2 = parseInt(prompt("Dime otro numero", ));
}


if(capturar_resultado > capturar_resultado2){
    console.log("El primer numero que has introducido es mayor que el segundo");
}else if (capturar_resultado == capturar_resultado2){
    console.log("El primer numero es igual que el segundo");
}else if(capturar_resultado < capturar_resultado2){
    console.log("El primer numero es menor que el segundo");
}else{
    console.log("Introduce numeros correctos");
}
