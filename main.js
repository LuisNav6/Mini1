// Variables globales
let alias = "";
let score = 0;
let bestTime = 0;

// Variables DOM
document.getElementById("start-button").addEventListener("click", function () {
    getAlias();
});
const aliasSpan = document.getElementById("alias");

// Función para obtener el alias del jugador
function getAlias() {

  let aliasInput = document.getElementById("name").value;
  console.log(aliasInput)

  // Si el alias está vacío, se vuelve a solicitar
  if (aliasInput.trim() === "") {
    alert("El alias no puede estar vacío. Intenta de nuevo.");
  }
  // Si el alias ya existe en el localstorage, se obtienen sus datos
  else if (localStorage.getItem("PlayerStats")) {
    let playerData = JSON.parse(localStorage.getItem("PlayerStats"));
    alias = aliasInput;
    score = playerData.score;
    bestTime = playerData.bestTime;
    alert(
      `Bienvenido de nuevo, ${alias}! Tu puntaje actual es ${score} y tu mejor tiempo es ${bestTime} segundos.`
    );
    startGame();
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