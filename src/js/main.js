'use strict';

//VARIABLES
const machine = ['Piedra', 'Papel', 'Tijeras', 'Lagarto', 'Spock'];
const rock = document.querySelector('.js__rock');
const paper = document.querySelector('.js__paper');
const scissors = document.querySelector('.js__scissors');
const lizard = document.querySelector('.js__lizard');
const spock = document.querySelector('.js__spock');
const machineChoise = document.querySelector('.js__random');
const msg = document.querySelector('.js__msg');
const max = 5;
const options= {
  '1_0': 1,
  '2_0': 0,
  '2_1': 2,
  '3_0': 0,
  '4_3': 3,
  '4_2': 4,
  '3_2': 2,
  '3_1': 3,
  '4_1': 1,
  '4_0': 4
};

// FUNCIONES

// Función para generar un número aleatorio entre 0 y 4
function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

// Variable donde almaceno el número aleatorio
let randomNumber = getRandomNumber(max);

// Función para pintar en la consola el número aleatorio y comprobar que funciona
function renderMachineOption () {
  console.log('La máquina ha elegido ' + machine[randomNumber]);
}

renderMachineOption();

//Función para comparar el número aleatorio con el del usuario
// function checkChoices (id) {
//   if (id === randomNumber) {
//     msg.innerHTML = '¡Empate!';
//   } else if (randomNumber > id) {
//     msg.innerHTML = randomNumber === 2 && id === 0 ? '¡Has ganado!' : '¡Has perdido!';
//   } else if(randomNumber < id) {
//     msg.innerHTML = randomNumber === 0 && id === 2 ? '¡Has perdido!' : '¡Has ganado!';
//   }
// }

//Función anterior mejorada
function checkChoices(id){
  if(randomNumber === id) return '¡Empate!';
  const key = randomNumber > id ? `${randomNumber}_${id}` : `${id}_${randomNumber}`;
  return id === options[key] ? '¡Has ganado!' : 'Lo siento, has perdido';
}

//Función para pintar la opción de la máquina en pantalla
function showMachineOption () {
  const choiceMsg = 'La máquina ha elegido: ';
  machineChoise.innerHTML = choiceMsg + machine[randomNumber];
}

//Función del evento
function handleClickButton (event) {
  event.preventDefault();
  const idBtn = parseInt(event.currentTarget.id);
  msg.innerHTML = checkChoices(idBtn);
  showMachineOption();
}

// EVENTOS
rock.addEventListener('click', handleClickButton);
paper.addEventListener('click', handleClickButton);
scissors.addEventListener('click', handleClickButton);
lizard.addEventListener('click', handleClickButton);
spock.addEventListener('click', handleClickButton);