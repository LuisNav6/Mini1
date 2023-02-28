// Variables globales
var alias = "";
var score = 0;
var bestTime = 0;
var players = localStorage.getItem("players");
 players = JSON.parse(players);
 if(players == null) players = [];
// Variables DOM
document.getElementById("start-button").addEventListener("click", function () {
    getAlias();
});
document.getElementById("register-button").addEventListener("click", function () {
  alta();
});
const aliasSpan = document.getElementById("alias");
//para registrar usuarios
function alta(){
  let aliasInput = document.getElementById("name").value;
  if (aliasInput.trim() === "") {
    alert("El alias no puede estar vacío. Intenta de nuevo.");
  }
  var p = JSON.stringify({
    alias : aliasInput,
    time: 0,
    score : 0,
    bestTime: 0,
  });
  players.push(p);
  localStorage.setItem("players",JSON.stringify(players));
  alert("dado de alta")
}
// Función para obtener el alias del jugador
function getAlias() {

  let aliasInput = document.getElementById("name").value;
  console.log(aliasInput)

  // Si el alias está vacío, se vuelve a solicitar
  if (aliasInput.trim() === "") {
    alert("El alias no puede estar vacío. Intenta de nuevo.");
  }
  // Si el alias ya existe en el localstorage, se obtienen sus datos
  else if (localStorage.getItem("players")) {
    var playerData = JSON.parse(localStorage.getItem("players"));
    for(var i in playerData){
      let p = JSON.parse(playerData[i]);
      alias = p.alias;
      score = p.score;
      bestTime = p.bestTime;
      if(p.alias == aliasInput){
        alert(
          `Bienvenido de nuevo, ${alias}! Tu puntaje actual es ${score} y tu mejor tiempo es ${bestTime} segundos.`
        );
        startGame();
      }else{
        alta();
      }
    }
   
  }
  // Si el alias no existe en el localstorage, se crea un nuevo registro
  else {
    alias = aliasInput;
    localStorage.setItem(
      "Player",
      JSON.stringify({
      alias: alias,
      })
    );
    alert(`Bienvenido, ${alias}! Empieza a jugar y diviértete.`);
    startGame();
  }
  // Se actualiza el alias en el DOM
  aliasSpan.innerText = alias;
}

// Función para iniciar el juego
function startGame() {
  // Se inicia el contador de tiempo y se actualiza cada segundo
  window.open("game.html");  
}
