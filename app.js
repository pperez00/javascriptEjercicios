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

var arrNumeros = [1, 2, 3, -2, 6];

console.log(hayAlgunNegativo(arrNumeros));

console.log('---------------------------------');

// Ejercicio 8
console.log("Ejercicio 8\n");

function even(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function cuantosCumplen(callback, arr){
    const resultado = arr.filter(element => callback(element));
    console.log(resultado);
    return resultado;
}

var pares = cuantosCumplen(even, arrNumeros);
console.log(pares);

console.log('---------------------------------');

// Ejercicio 9
console.log("Ejercicio 9\n");

function rechazar(callback, arr){
    const resultado = arr.filter(element => !callback(element));
    console.log(resultado);
    return resultado;
}

var rechazados = rechazar(even, arrNumeros);
console.log(rechazados);

console.log('---------------------------------');

// Ejercicio 10
console.log("Ejercicio 10\n");

function contiene(i, arr){
    var resultado = arr.includes(i);
    return resultado;
}

console.log(contiene(1, [2,4,5]));
console.log(contiene(1, [2,1,5]));

console.log('---------------------------------');

// Ejercicio 11
console.log("Ejercicio 11\n");

class Persona{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    presentarse() {

        return console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`);
    }
    
}

var persona1 = new Persona("Pablo", 39);
persona1.presentarse();

console.log('---------------------------------');

// Ejercicio 12
console.log("Ejercicio 12\n");

class Estudiante extends Persona{
    constructor(nombre, edad){
        super(nombre, edad);
        this.profesor;
    }

    estudiando(){
        console.log(`${this.nombre} está estudiando con ${this.profesor.nombre}`);
    }

    setProfesor(Profesor){
        this.profesor = Profesor;
    }
}

var est1 = new Estudiante("Pablo", 39);
est1.presentarse();
//est1.setProfesor("Christian");
//est1.estudiando();

console.log('---------------------------------');

// Ejercicio 13
console.log("Ejercicio 13\n");

class Profesor extends Persona{
    constructor(nombre, edad){
        super(nombre, edad);
        this.estudiantes = [];
    }

    addEstudiante(Estudiante){
        Estudiante.setProfesor(this);
        this.estudiantes.push(Estudiante);

    }

    ensenando(){
        console.log("Estudiantes de " + this.nombre + ": ");
        this.estudiantes.forEach(element => console.log(element.nombre)); 
    }
}

var prof = new Profesor("Juan", 33);
var prof1 = new Profesor("Christian", 36);

var est2 = new Estudiante("Pepe", 23);

prof.addEstudiante(est1);
prof.addEstudiante(est2);
est1.estudiando();

est1.setProfesor(prof1);
est1.estudiando();


prof1.addEstudiante(est2);
console.log("");
prof1.ensenando();
prof.ensenando();