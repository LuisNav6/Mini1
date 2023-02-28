// Declaramos la variables de new
var time = 0;
var score = 0;
// Recuperamos las variables de la pagina anterior

var Player = localStorage.getItem("players");
Player = JSON.parse(Player);
if(Player == null) Player=[];
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
  for (var i in Player){
    var p = JSON.parse(Player[i]);
    alias = p.alias;
    better = p.bestTime;
    //si viene vacio le damos a fuerzas el valor 0
    if(better === undefined){
     better = 0;
    }
    if(better < time){
    /*  localStorage.setItem(
        "players",
        JSON.stringify({
          alias: Player.alias,  
          time: time,
          score: score,
          bestTime: time,
        })
      );*/
      var pp = JSON.stringify({
        alias : p.alias,
        time: time,
        score : score,
        bestTime: time,
      });
      Player.push(pp);
      localStorage.setItem("players",JSON.stringify(Player));
      }else{
        /*localStorage.setItem(
          "players",
          JSON.stringify({
            alias: Player.alias,  
            time: time,
            score: score,
            bestTime: best,
          })
        );*/
        var pp = JSON.stringify({
          alias : p.alias,
          time: time,
          score : score,
          bestTime: better,
        });
        Player.push(pp);
        localStorage.setItem("players",JSON.stringify(Player));
      }
  }
 // var best = parseInt(Player.bestTime);
//si no viene vacio le damos el valor que tenga en la key bestTime

  // Si no hay un mejor tiempo registrado o el tiempo actual es mejor, se actualiza el tiempo

  // Se muestra la pantalla de felicitación y se actualizan los datos del jugador en el localstorage
  
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
          bestTime: Player.bestTime,
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
