'use strict'

// DOM - Document Object Model

function cambiaColor(){
    caja.style.color = color;

}


var caja = document.getElementById("micaja").innerHTML;
//document.getElementById("micaja") para apuntar a un elemento
// .innerHTML para capturar lo que hay dentro

/*
Si yo quiero introducir texto en esa caja seria como:
caja.innerHTML = "¡texto en la caja desde JS!";
*/

/* Añadir css desde javascript
caja.style.background="red";
caja.style.padding = "20px";
caja.style.color = "white";
*/
/* Tambien puedo añadirle una clase al html
caja.className = "hola";
*/

console.log(caja);


// Otra forma es usar el Query selector
var caja = document.querySelector("#micaja");

