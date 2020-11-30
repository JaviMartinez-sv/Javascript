'use strict'

// Plantillas de texto  JS

var nombre = prompt("Mete tu Nombre");
var apellidos = prompt ("Mete tus Apellidos");

/* Esta seria la forma de toda la vida de mostrarlo

var texto = "Mi nombre es " + nombre + "y tus apellidos son " + apellidos;
document.write(texto);
*/

// De esta forma podemos hacerlo en una plantilla 
var texto = `
    <h1>Hola que tal</h1>
    <h3>Mi nombre es: ${nombre}</h3>
    <h3>Mis apellidos son: ${apellidos}</h3>
`;
document.write(texto);