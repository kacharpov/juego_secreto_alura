/*Aplicante: Luciano Hidalgo R*/
/*Fecha: 12/03/24*/
/*---------------------------------------------*/
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del cuarto desafío';
/*--------------------Primero------------------*/
/*----------------Lista genérica---------------*/
/*
function verificarIntento(){
    let listaGenerica = [];
    console.log(listaGenerica);
}
*/
/*--------------------Segundo------------------*/
/*----------------Lista lenguajes---------------*/
/*
function verificarIntento(){
    let lenguajesDeProgramacion = ['JavaSript', 'C', 'C#', 'C++', 'Kotlin', 'Python'];
    console.log(lenguajesDeProgramacion);
}
*/
/*---------------------Tercero------------------*/
/*----------------Lista lenguajes---------------*/
/*
function verificarIntento(){
    let lenguajesDeProgramacion = ['JavaSript', 'C', 'C#', 'C++', 'Kotlin', 'Python'];
    console.log(lenguajesDeProgramacion);
    lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');
    console.log(lenguajesDeProgramacion);
}
*/
/*---------------------Cuarto------------------*/
/*----------Función lista lenguajes---------------*/
/*
function listaLenguajes(){
    let lenguajesDeProgramacion = ['JavaSript', 'C', 'C#', 'C++', 'Kotlin', 'Python'];
    console.log(lenguajesDeProgramacion);
    lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');
    console.log(lenguajesDeProgramacion);
}
*/
/*---------------------Quinto------------------*/
/*----------Función lista lenguajes---------------*/
/*---------------orden inverso--------------------*/
/*
function listaLenguajes(){
    let lenguajesDeProgramacion = ['JavaSript', 'C', 'C#', 'C++', 'Kotlin', 'Python'];
    console.log(lenguajesDeProgramacion);
    lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');
    console.log(lenguajesDeProgramacion);
    let reverseListLeng = lenguajesDeProgramacion.reverse();
    console.log(reverseListLeng);
}
*/
/*---------------------Sexto------------------*/
/*--------Promedio de una lista de elementos------*/
/*
function arrayProm(){
    let listaPromedio = [4, 6, 9, 10, 8];
    console.log(listaPromedio);
    let prom = (listaPromedio[0] + listaPromedio[1] + listaPromedio[2] + listaPromedio[3] + listaPromedio[4])/5;
    console.log(prom);
}
*/
/*---------------------Séptimo--------------------*/
/*---------Número más grande y más pequeño--------*/
/*
function arrayProm(){
    let listaPromedio = [4, 6, 9, 10, 8];  
    console.log(typeof(listaPromedio[0]));
    console.log(listaPromedio);
    let Vmax = Math.max(...listaPromedio);
    let Vmin = Math.min(...listaPromedio);
    console.log(Vmax);
    console.log(Vmin);
}
*/
/*---------------------Octavo--------------------*/
/*--------Función suma de todos los datos--------*/
/*
function arrayProm(){
    let listaPromedio = [4, 6, 9, 10, 8];
    console.log(listaPromedio);
    let sum = listaPromedio[0] + listaPromedio[1] + listaPromedio[2] + listaPromedio[3] + listaPromedio[4];
    console.log(sum);
}
*/
/*---------------------Noveno--------------------*/
/*---------Función posición en la lista----------*/
/*
let array1 = [1,2];
function posArray(x){
    return(array1.push(x), array1.indexOf(x), console.log(`El arreglo es: ${array1}` + ' ' + `la posición es:${array1.indexOf(x)}`));
}

function arreglo(){
    let numUser = parseFloat(document.getElementById('valorUsuario').value);
    console.log(numUser);
    posArray(numUser);
}
*/
/*---------------------Décimo--------------------*/
/*---------------Suma de dos arreglos------------*/
/*
let array1 = [1, 2, 3];
console.log(array1);
let array2 = [4, 5, 6];
console.log(array2);
let arraySum = [];

function sumarrays(){
    if (array1.length == array2.length){
        for(i=0; i< array1.length; i++) {
            arraySum.push(array1[i]+ array2[i])
        }
        console.log(arraySum);
    }
    else{
        alert('El array no es del mismo tamaño');
    }
}
*/
/*---------------------Undécimo--------------------*/
/*----------Cuadrado de los elementos array------------*/
/*
let array1 = [1, 2, 3];
let sqarray = [];
console.log(array1);

function cuadarray(x){
    for (i=0; i < array1.length; i++){
        sqarray.push(Math.pow(array1[i],2));
    }
    console.log(sqarray);
}
*/