'use strict';

const machine = [piedra, papel, tijeras];
const option = document.querySelector('.js__input');
const button = document.querySelector('.js__button');
const msg = document.querySelector('.js__msg');
const max = 3;
let randomNumber = 0;

// Función para generar un número aleatorio entre 0 y 2
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

// Variable donde almaceno el número aleatorio
randomNumber = getRandomNumber(max);

// Función para pintar en la consola el número aleatorio y comprobar que funciona

function renderNumber () {
    console.log('El número aleatorio es el ' + randomNumber);
}
renderNumber();