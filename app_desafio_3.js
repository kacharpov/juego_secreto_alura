/*Tercer desafio*/
/*Aspirante: Luciano Hidalgo Rosas*/
/*---------------Primer problema---------------*/
/*---Calculadora de índice de masa corporal---*/
/*
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Calculadora de IMC';
let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Ingresa tu peso y altura';
function intentoDeUsuario(){
    alert('Click desde el botón');
}


function imc(x,y){
    return ('Tu IMC es:' + x/(Math.pow(y,2)));
}
function datosImc(){
    indice = imc(parseFloat(prompt('Ingresa tu peso en kilogramos:')), parseFloat(prompt('Ingresa tu altura en metros:')));
    alert(`Tu IMC = ${indice}`);
}
*/
/*---------------Segundo problema---------------*/
/*------------------Factorial-------------------*/
/*
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Calculadora de factorial';
let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Ingresa el número a calcular el factorial';

function datum(){
    numFact = parseInt(prompt('Ingresa el número a calcular el factorial'));
    let i = numFact;
    let j = i;
    while (i > 1){
        i = i - 1;
        console.log(i);
        numFact = numFact * i;
        console.log(numFact);
    }
    alert(`el factorial de ${j}! = ${numFact}`);
}
*/
/*---------------Tercer problema---------------*/
/*-------------- Cambio de moneda--------------*/
/*
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Calculadora de cambio de moneda';
let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Ingresa el número de dolares';

function cambioDolar(x){
    let change = 16.81;
    console.log(`cambio dolar: ${change}`);
    return(alert(`El día de hoy recibirías por US ${x} dolares =` + change*x + ' ' + 'pesos mx'));
}

function divisa(){
    pesosMexicanos = cambioDolar(parseFloat(prompt('Ingresa el número de dolares'))); 
}
*/
/*------------------------------------------------*/
/*---------------Cuarto problema---------------*/
/*---------------Área y perímetro--------------*/
/*
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Calculadora de Área y perímetro';
let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Ingresa el largo y el ancho';

function areaPerimetro(h,w){
    return (alert(`el área es:` + h*w + ' ' + 'm^2'));
}

function area(){
    areaPerimetro(parseFloat(prompt('Ingresa el largo')) ,parseFloat(prompt('Ingresa el ancho')));
}
*/
/*------------------------------------------------*/
/*---------------Quinto problema---------------*/
/*---------------Área y perímetro--------------*/
/*
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Calculadora de Área y perímetro';
let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Ingresa el radio del cículo';

function areaCirculo(radio){
    return(alert(`El perimetro de un circulo de r=${radio}es:` + 2*Math.PI*radio + `y su área es:` + Math.PI*(Math.pow(radio,2))));
}

function perArea(){
    areaCirculo(parseFloat(prompt('Ingresa el valor del radio')));
}
*/
/*------------------------------------------------*/
/*------------------Sexto problema----------------*/
/*---------------Tabla de multiplicar-------------*/
/*
function tablaMult(x){
    for (i=0; i<=10; i++){
      alert(`${x} x ${i}=` + x*i);  
    }
}

function numTab(){
    let num = tablaMult(prompt('Ingresa el número de la tabla de multiplica'));
    console.log(num);
}
*/