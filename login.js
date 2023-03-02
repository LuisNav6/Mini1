document.getElementById("login-button").addEventListener('click', function(e) {
    e.preventDefault();

    const aliasInput = document.getElementById("name").value;
    const playerJSON = localStorage.getItem("Players");
    let players = [];

    if(playerJSON !== null){
        players = JSON.parse(playerJSON);
    }

    const playerExists = players.find(existingPlayer => existingPlayer.alias === aliasInput);

    if (playerExists === undefined) {
        alert('El usuario no existe. Por favor, regístrese primero.');
        return;
    }
    // Mandamos al jugador actual
    localStorage.setItem("currentPlayer",aliasInput);
    // El usuario existe, lo redirigimos a la página de juego
    window.location.href = "game.html";
});