'use strict'

// Arrays Avanzados

var nombre ="Javier Martinez";
var nombres = ["Victor Robles", "Juan Lopez", "Manolo Garcia", "Jose Martin", 52, true];

var lenguajes = new Array("PHP","JS","Go", "Java");

/*
var elemento =parseInt(prompt("Que elemento del array quieres?", 0))

if(elemento >= nombre.length){
    alert("Introduce el numero correcto menor que " + nombre.length);

}else{
    alert("El usuario seleccionado es " + nombres[elemento]);
}
*/

document.write("<h1>Lenguajes de programacion del 2018</h1>");
document.write("<ul>");
/* Bucle for para recorrer y sacar los lenguajes
for (var i=0; i<lenguajes.length; i++){
    document.write("<li>" + lenguajes[i]+ "</li>");
}
*/

// for each itera todo el array y lo muestra
lenguajes.forEach((elemento, indice)=>{        // Elemento que saca las palabres de lenguajes e inidice que saca posicion con numero
    document.write("<li>" + indice + " - " +elemento[i]+ "</li>");
});


document.write("</ul>")
