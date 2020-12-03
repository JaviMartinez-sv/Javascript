'use strict'

// DOM - Seleccionar y modificar cosas en el html

// Conseguir elementos con un ID conceto

var caja =  document.querySelector("#micaja");

// Conseguir elementos por su etiqueta

var todosLosDivs = document.getElementsByTagName('div');
console.log(todosLosDivs);

// Para seleccionar un div concreto en esta caso el 2
var todosLosDivs1 = document.getElementsByTagName('div');
var contenidoEnTexto = todosLosDivs[2];
contenidoEnTexto.innerHTML = "Otro texto para el segundo elemento";


console.log(contenidoEnTexto);

// Creo una lista y la meto dentro del body

var todosLosDivs = document.getElementsByTagName('div');



var valor;
for(valor in todosLosDivs){
    if(typeof todosLosDivs[valor].textContent ==  'string'){
        var parrafo = document.createElement("p");
        document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.appendChild(texto);
        document.querySelector("#miseccion").appendChild(parrafo);
    }
}

// Esto hace una barra separadora el prepend
var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");
seccion.prepend("hr");


// Conseguir elementos por su clase css