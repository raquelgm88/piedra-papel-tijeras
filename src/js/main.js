'use strict';

//VARIABLES
const machine = ['piedra', 'papel', 'tijeras'];
const option = document.querySelector('.js__input');
const button = document.querySelector('.js__button');
const msg = document.querySelector('.js__msg');
const max = 3;
let randomNumber = 0;


// const options= {
//     piedra: 0,
//     papel: 1,
//     tijeras: 2
// }
// const valorUsuario = document.querySelector('.js__input').toLowerCase();
// const number = options[valorUsuario] // 1

// FUNCIONES

// Función para generar un número aleatorio entre 0 y 2
function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

// Variable donde almaceno el número aleatorio
randomNumber = getRandomNumber(max);

// Función para pintar en la consola el número aleatorio y comprobar que funciona
function renderNumber () {
  console.log('El número aleatorio es el ' + randomNumber);
}
renderNumber();

//Función para extraer el número que escribe el usuario
function getOption () {
  const userOption = parseInt(option.value);
  return userOption;
}

//Función para comparar el número aleatorio con el del usuario
function checkChoices () {
    if 
}

function handleClickButton (event) {
  event.preventDefault();
}


// EVENTOS
button.addEventListener('click', handleClickButton);