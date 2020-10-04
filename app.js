// Ejercicio 1
console.log("Ejercicio 1\n");

var msg = "Hola mundo!";
console.log(msg);

console.log('---------------------------------');

// Ejercicio 2
console.log("Ejercicio 2\n");

var memes = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
memes.forEach(valor => console.log(valor));

console.log('---------------------------------');

// Ejercicio 3
console.log("Ejercicio 3\n");

function par(num){
    if(num % 2 == 0){
        return "Es par";
    }else{
        return "Es impar";
    }
};

console.log(par(3));
console.log(par(18));

console.log('---------------------------------');

// Ejercicio 4
console.log("Ejercicio 4\n");
var arr = [1,2,3,4];
var arr2 = [1,7,5];
var arr3 = [2,4,6];

var algunPar = num => num % 2 === 0;
console.log(arr3.some(algunPar));

function esPar(_arr){
    return pares = _arr.some(numero => numero % 2 === 0);
}

console.log(esPar(arr2));

console.log('---------------------------------');

// Ejercicio 5
console.log('Ejercicio 5\n');

/**
    class Alumno {
        constructor(nota1, nota2, nota3){
                        
            var notas = [nota1,nota2,nota3];
        }
    }


var alumno1 = new Alumno(1,4,8);
var alumno2 = new Alumno(4,8,10);
var alumno3 = new Alumno(2,3,1); 
*/

function aprobo(notasAlumno){
    var limite = (valor) => valor >= 4;
    var aprobado = notasAlumno.every(limite);
    if (aprobado == true){
        return "Aprobado";
    }else{
        return "Desaprobado";
    }
}

var alumno1 = [1,3,3];
var alumno2 = [4, 7, 8];
var alumno3 = [3,10,9];
var alumno4 = [8, 8, 8];

console.log(aprobo(alumno1));
console.log(aprobo(alumno2));
console.log(aprobo(alumno3));

console.log('---------------------------------');

// Ejercicio 6
console.log("Ejercicio 6\n");

var clase = [alumno1, alumno2, alumno3, alumno4];

function quienesAprobaron(alumnos){
    var aprobados = alumnos.map(notas => aprobo(notas));
    var aprobadosFiltrado = aprobados.filter(alumno => alumno === "Aprobado");
    return aprobadosFiltrado;
}

console.log(quienesAprobaron(clase));

console.log('---------------------------------');

// Ejercicio 7
console.log("Ejercicio 7\n");

function hayAlgunNegativo(numeros){
    var negativos = numeros.some(num => num < 0);
    return negativos;
}

var arrNumeros = [1, 2, 3, -2];

console.log(hayAlgunNegativo(arrNumeros));

console.log('---------------------------------');

// Ejercicio 8
console.log("Ejercicio 8\n");

function cuantosCumplen(cb, numeros) {    
    let pares = numeros.map(nota => cb(nota));
    return pares;
}

function even(num) {
    if (num % 2 === 0) {
        return num;
    } else {
        return false;
    }
}

console.log(cuantosCumplen(even, arrNumeros));