'use strict'

// SWITCH

var edad = 18;
var imprime = "";

switch(edad){
    case 18:
    imprime = "Acabas de cumplir las mayoria de edad";
    break;
    case 25:
    imprime = "Ya eres adulto";
    break;
    case 40:
    imprime = "Crisis de los 40";
    break;
    case 75:
    imprime = "Ya eres viejo";
    break;
    default:
    imprime = "Tu edad es neutra";
    break;
}

