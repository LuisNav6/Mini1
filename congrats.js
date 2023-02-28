// Recuperamos las variables de la pagina anterior
var Player = localStorage.getItem("players");
Player = JSON.parse(Player);
if(Player == null) Player=[];
for(var i in Player){
  var p = JSON.parse(Player[i]);

// Variables DOM
const congratsScreen = document.getElementById("congrats-screen");
const congratsScore = document.getElementById("congrats-score");
const congratsTime = document.getElementById("congrats-time");
const restartButton = document.getElementById("restart-button");

congratsScore.innerHTML = p.score;
congratsTime.innerHTML = p.bestTime;

// Función para cerrar el juego
function closeGame() {
  // Se cierra la ventana del juego
  window.close();
}

// Evento para reiniciar el juego
restartButton.addEventListener("click", function () {
    // Se reinician las variables globales y se muestra la pantalla de inicio
    score = 0;
    time = 0;
    window.location.href = "game.html";
  });

// Boton para cerrar
const quitButton2= document.getElementById("quit-button-2");
quitButton2.addEventListener("click", closeGame);
}
/*if(PlayerStats && PlayerStats.time){
    time = PlayerStats.time;
}else{
    time = 0;
}

if(PlayerStats && PlayerStats.score){
     score = PlayerStats.score;
}else{
    score = 0;
}

if(PlayerStats && PlayerStats.bestTime){
   bestTime = PlayerStats.bestTime;
}else{
   bestTime = 0;
}*/
