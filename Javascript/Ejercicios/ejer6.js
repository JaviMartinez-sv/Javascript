'use strict'

/*
Hacer un progrma que nos diga si un numero es par o impar
1. Ventana prompt
2. Si no es valido que nos pida de nuevo el numero
3. Que nos diga si es par o impar
*/

var number = parseInt(prompt('Introduce un numero', 0));

while(isNaN(number)){
    number = parseInt(prompt('Introduce un numero', 0));
}

if(number % 2 ==0){
    alert("Es un numero par");
}else{
    alert('Es impar');
}