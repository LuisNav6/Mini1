// Variables globales
let alias = "";
let score = 0;
let bestTime = 0;

// Variables DOM
const startScreen = document.getElementById("start-screen");
const startButton = document.getElementById("start-button").addEventListener("click",startGame);
const gameScreen = document.getElementById("game-screen");
const endButton = document.getElementById("end-button");
const scoreValue = document.getElementById("score-value");
const timerValue = document.getElementById("timer-value");
const congratsScreen = document.getElementById("congrats-screen");
const congratsScore = document.getElementById("congrats-score");
const congratsTime = document.getElementById("congrats-time");
const restartButton = document.getElementById("restart-button");
const aliasSpan = document.getElementById("alias");


// Función para obtener el alias del jugador
function getAlias() {
  let aliasInput = prompt("Ingresa tu alias:");

  // Si el alias está vacío, se vuelve a solicitar
  if (aliasInput.trim() === "") {
    alert("El alias no puede estar vacío. Intenta de nuevo.");
    getAlias();
  }
  // Si el alias ya existe en el localstorage, se obtienen sus datos
  else if (localStorage.getItem(aliasInput)) {
    let playerData = JSON.parse(localStorage.getItem(aliasInput));
    alias = aliasInput;
    score = playerData.score;
    bestTime = playerData.bestTime;
    alert(
      `Bienvenido de nuevo, ${alias}! Tu puntaje actual es ${score} y tu mejor tiempo es ${bestTime} segundos.`
    );
  }
  // Si el alias no existe en el localstorage, se crea un nuevo registro
  else {
    alias = aliasInput;
    localStorage.setItem(
      alias,
      JSON.stringify({
        score: 0,
        bestTime: 0,
      })
    );
    alert(`Bienvenido, ${alias}! Empieza a jugar y diviértete.`);
  }
  // Se actualiza el alias en el DOM
  aliasSpan.innerText = alias;
}

// Función para iniciar el juego
function startGame() {
  // Se obtiene el alias del jugador
  getAlias();
  // Se oculta la pantalla de inicio y se muestra la pantalla de juego
  startScreen.style.display = "none";
  gameScreen.style.display = "block";
  // Se inicia el contador de tiempo y se actualiza cada segundo
  let time = 0;
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
    if (bestTime === 0 || time < bestTime) {
      bestTime = time;
    }

    // Se muestra la pantalla de felicitación y se actualizan los datos del jugador en el localstorage
    congratsScore.innerText = score;
    congratsTime.innerText = bestTime;
    localStorage.setItem(
      alias,
      JSON.stringify({
        score: score,
        bestTime: bestTime,
      })
    );
    gameScreen.style.display = "none";
    congratsScreen.style.display = "block";
  });

  // Evento para reiniciar el juego
  restartButton.addEventListener("click", function () {
    // Se reinician las variables globales y se muestra la pantalla de inicio
    alias = "";
    score = 0;
    bestTime = 0;
    scoreValue.innerText = score;
    timerValue.innerText = 0;
    startScreen.style.display = "block";
    gameScreen.style.display = "none";
    congratsScreen.style.display = "none";
  });

  // Evento para salir del juego
  window.addEventListener("beforeunload", function () {
    // Se actualizan los datos del jugador en el localstorage antes de salir
    if (alias !== "") {
      localStorage.setItem(
        alias,
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
  const quitButton2 = document.getElementById("quit-button-2");

  // Eventos para cerrar el juego
  quitButton.addEventListener("click", closeGame);
  quitButton2.addEventListener("click", closeGame);
}
