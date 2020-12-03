'use strict'

// Arrays Bidimensionales

var categorias =['Accion', 'Terror', 'Comedia'];
var peliculas =['La verdad duel', 'IT', 'Borat'];

var cine = [categorias, peliculas];

console.log(cine[0][1]);
console.log(cine[1][2]);

// Para añadir elementos al array
 // peliculas.push("Batman");
 // console.log(peliculas);

 var elemento = prompt("Introduce tu pelicula: ");

 do{
    elemento = prompt("Introduce tu pelicula: ");
    peliculas.push(elemento);

 }while(elemento != "ACABAR")

peliculas.pop();  // Elimina el ultimo elemento de un array (En este caso para que no salga ACABAR )

/* Como eliminar un objeto especifico de un array

var indice = peliculas.indexOf('Gran Torino');
if (indice  > -1){
    peliculas.splice(indice,1);
}
*/

// convierte un array en strings

var peliculas_string = peliculas.join(); 

// convierte string en un array
var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", ");

// Ordenar un array
peliculas.sort();  // Ordena por orden alfabetico
peliculas.reverse(); // Le da la vuelta a el array

console.log(peliculas);

// Otra forma de recorrer un array  (for in)

for(let lenguaje in lenguajes){
    document.write("<li>" + lenguajes[lenguaje] + "</li>");
}

document.write("</ul>");


// Busquedas de un array

var busqueda =lenguajes.find(function(lenguaje){
    return lenguaje == PHP;
});

// o 

var busqueda =lenguajes.find(lenguaje => lenguaje == "PHP");


console.log(busqueda);

// Busca el indice tambien en el que se encuentra
var busqueda =lenguajes.findIndex(lenguaje => lenguaje == "JS");

// Busqueda para ints 

var precios =[10, 20, 30 , 40];
var buscando = precios.some(precio => precio > 10);

console.log(busqueda);