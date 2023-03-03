// Declaramos la variables de new
var time = 0;
var score = 0;
var bestTime = 0;
// Recuperamos las variables de la pagina anterior
const playerJSON = localStorage.getItem("Players");
let players = [];

if(playerJSON !== null){
  players = JSON.parse(playerJSON);
}

// Variables DOM
const restartButton = document.getElementById("restart-button");
const quitButton = document.getElementById("quit-button");
const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const endButton = document.getElementById("end-button");
const scoreValue = document.getElementById("score-value");
const timerValue = document.getElementById("timer-value");

let timer = setInterval(function () {
  time++;
  timerValue.innerText = time;
}, 1000);

// Evento para terminar el juego
endButton.addEventListener("click", function () {
  clearInterval(timer);
  score++;
  scoreValue.innerText = score;
  // Recuperamos el usuario actual
  const alias = localStorage.getItem("currentPlayer");

  // Obtener el arreglo de jugadores almacenado en el LocalStorage
  let players = JSON.parse(localStorage.getItem("Players")) || [];

  // Buscar al jugador actual en el arreglo
  const playerIndex = players.findIndex(player => player.alias === alias);

  if (playerIndex !== -1) {
    // Si el jugador ya existe en el arreglo, actualizar su propiedad "bestTime" si corresponde
    const player = players[playerIndex];
    if (player.bestTime === undefined || player.bestTime < time || player.bestTime == 0) {
      player.bestTime = time;
    }

    // Actualizar la propiedad "time" del jugador actual
    player.time = time;
    player.score = score;
    // Actualizar el arreglo de jugadores en el LocalStorage
    localStorage.setItem("Players", JSON.stringify(players));
  }

  // Redirigir al jugador a la página de felicitaciones
  window.location.href = ("../html/congrats.html");
});

// Evento para reiniciar el juego
restartButton.addEventListener("click", function () {
  // Se reinician las variables globales y se muestra la pantalla de inicio
  score = 0;
  time = 0;
  scoreValue.innerText = score;
  timerValue.innerText = 0;
});
 
// Función para cerrar el juego
quitButton.addEventListener("click", function () {
  if (confirm("¿Estás seguro de que deseas cerrar el juego?")) {
    window.close();
  }
});