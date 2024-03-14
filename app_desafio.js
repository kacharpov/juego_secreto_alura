/*Aplicante: Luciano Hidalgo Rosas*/
/*Fecha: 22 de Febrero 2024*/
/*Desafios*/
/*--------------------------------------*/
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del desafío';
/*--------------------------------------*/
function pushConsole(){
    console.log('El botón fue clikado');
}
/*--------------------------------------*/
function pushPromt(){
    let city = prompt('Escribe el nombre de una ciudad de México');
    alert(`Estuve en ${city} y me acorde de ti!!!`);
}
/*--------------------------------------*/
function pushAlert(){
    alert('Yo amo JS!!!');
}
/*---------------------------------------*/
function pushSuma(){
    alert('Realicemos una suma de 2 números enteros');
    let num1 = prompt('Ingresa el primer número entero:');
    let num2 = prompt('Ingresa el segundo número entero:');
    let total = parseInt(num1) + parseInt(num2);
    console.log(total);
    alert(`Al sumar: ${num1} + ${num2} = ${total}`);
}