'use strict';

//VARIABLES
const machine = ['Piedra', 'Papel', 'Tijeras'];
const rock = document.querySelector('.js__rock');
const paper = document.querySelector('.js__paper');
const scissors = document.querySelector('.js__scissors');
const machineChoise = document.querySelector('.js__random');
const msg = document.querySelector('.js__msg');
const max = 3;

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
let randomNumber = getRandomNumber(max);

// Función para pintar en la consola el número aleatorio y comprobar que funciona
function renderMachineOption () {
  console.log('La máquina ha elegido ' + machine[randomNumber]);
}

renderMachineOption();

//Función para comparar el número aleatorio con el del usuario
function checkChoices (id) {
  if (id === randomNumber) {
    msg.innerHTML = '¡Empate!';
  } else if (randomNumber > id && randomNumber !== 2) {
    msg.innerHTML = '¡Has perdido!';
  } else if(randomNumber < id && id !== 2) {
    msg.innerHTML = '¡Has ganado!';
  }
}

//Función para pintar la opción de la máquina en pantalla
function showMachineOption () {
  const choiceMsg = 'La máquina ha elegido: ';
  machineChoise.innerHTML = choiceMsg + machine[randomNumber];
}


function handleClickButton (event) {
  event.preventDefault();
  const idBtn = parseInt(event.currentTarget.id);
  checkChoices(idBtn);
  showMachineOption();
}

// EVENTOS
rock.addEventListener('click', handleClickButton);
paper.addEventListener('click', handleClickButton);
scissors.addEventListener('click', handleClickButton);