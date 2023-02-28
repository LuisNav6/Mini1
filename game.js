// Declaramos la variables de new
let time = 0;
let bestTime = 0;
let score = 0;

// Recuperamos las variables de la pagina anterior
const Player = JSON.parse(localStorage.getItem("Player"));

// Variables DOM
const restartButton = document.getElementById("restart-button");
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

  // Si no hay un mejor tiempo registrado o el tiempo actual es mejor, se actualiza el tiempo
  if (bestTime == 0 || time < bestTime) {
    bestTime = time;
  }

  // Se muestra la pantalla de felicitación y se actualizan los datos del jugador en el localstorage
  localStorage.setItem(
    "PlayerStats",
    JSON.stringify({
      alias: Player.alias,  
      time: time,
      score: score,
      bestTime: bestTime,
    })
  );
  window.open("congrats.html");
  window.close();
});

// Evento para reiniciar el juego
restartButton.addEventListener("click", function () {
  // Se reinician las variables globales y se muestra la pantalla de inicio
  score = 0;
  time = 0;
  scoreValue.innerText = score;
  timerValue.innerText = 0;
});

  
  // Evento para salir del juego
  window.addEventListener("beforeunload", function () {
    // Se actualizan los datos del jugador en el localstorage antes de salir
    if (alias !== "") {
      localStorage.setItem(
        "CloseStats",
        JSON.stringify({
          score: score,
          bestTime: bestTime,
        })
      );
    }
  });
  
  // Función para cerrar el juego
  function closeGame() {
    // Se cierra la ventana del juego
    window.close();
  }
  
  // Variables DOM para los botones de salir
  const quitButton = document.getElementById("quit-button");    
  // Eventos para cerrar el juego
  quitButton.addEventListener("click", closeGame);