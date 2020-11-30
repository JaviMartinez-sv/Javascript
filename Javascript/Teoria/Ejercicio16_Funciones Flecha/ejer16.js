'use strict'

function sumame (numero1, numero2, sumaYmuestra, sumaPorDos){
    var sumar = numero1 + numero2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);


    return sumar;
}

sumame(5,7,dato => {   // Sustituir la palabra function poner el parametro y la flecha
    console.log("La suma es: ", dato); // Funcion Anonima
},
dato => {
    console.log("La suma por dos es: ", (dato * 2));

});

