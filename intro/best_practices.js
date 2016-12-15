/*---------------------------------------------CONTADOR-------------------------------------------------*/

/* Mala práctica para crear una función contador */
// Ya que se declara la variable contador como globar y cualquier función del script tendría acceso a ella

var counter = 0;

function add() {
    counter += 1;
}

add();
add();
add();

/* Buena práctica*/

var add = (function() {
	var counter = 0;
	return function() {return counter += 1;}
})();

add();
add();
add();

// Las dos soluciones devuelven lo mismo pero la segunda esta mejor hecha

/*--------------------------------------DECLARACIÓN DE VARIABLES---------------------------------------*/
// TODAS las variables a usar se deben inicializar al principio, hasta el iterador de un loop, dentro de su contexto

var i = 0;

for (i; i < 5, i++) {
	console.log('Hola');
}

// Formas de de declarar variables de todo tipo

var x1 = {};           // new object
var x2 = "";           // new primitive string
var x3 = 0;            // new primitive number
var x4 = false;        // new primitive boolean
var x5 = [];           // new array object
var x6 = /()/;         // new regexp object
var x7 = function(){}; // new function object

/*----------------------------------CONVERSION AUTOMÁTICA----------------------------------------------*/

var x = 5 + 7;       // x.valueOf() is 12,  typeof x is a number
var x = 5 + "7";     // x.valueOf() is 57,  typeof x is a string
var x = "5" + 7;     // x.valueOf() is 57,  typeof x is a string
var x = 5 - 7;       // x.valueOf() is -2,  typeof x is a number
var x = 5 - "7";     // x.valueOf() is -2,  typeof x is a number
var x = "5" - 7;     // x.valueOf() is -2,  typeof x is a number
var x = 5 - "x";     // x.valueOf() is NaN, typeof x is a number 

/*------------------------------DIFERENCIA ENTRE == Y === ---------------------------------------------*/
// == convierte los valores a un tipo y despues los compara
0 == "";        // true
1 == "1";       // true
1 == true;      // true

// === no convierte los valores y los compara tal cual
0 === "";       // false
1 === "1";      // false
1 === true;     // false 

/*----------------------------USO DE LOS PARAMETROS POR DEFECTO ---------------------------------------*/
// Si falta algun parametro en la llamada este se guarda en undefined. Por esto deberiamos comprobar si esta undefined y darle valor
function myFunction(x, y) {
    if (y === undefined) {
        y = 0;
    }
} 

/*-----------------------------------EVITAR USO DE eval()-----------------------------------------------*/
// Ejecuta el texto de su interior como código. Presenta un problema de seguridad
var a = eval("x * y") + "<br>";