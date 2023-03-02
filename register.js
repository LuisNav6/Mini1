/*
    Cliente
*/

document.getElementById("start-button").addEventListener('click', function(e) {
    e.preventDefault(); // Evita que se recarge la pagina al enviar el formulario
    
    var score = 0;
    var bestTime = 0;
    var time = 0;

    const aliasInput = document.getElementById("name").value;
    const player = {alias: aliasInput, time: time, score: score, bestTime: bestTime}; // Creamos un objeto player
    
    // Si el alias está vacío, se vuelve a solicitar
    if (aliasInput.trim() === "") {
        alert("El alias no puede estar vacío. Intenta de nuevo.");
    }else{
        // Agregamos el player al arreglo
        addPlayer(player);
    }

});

function addPlayer(player){
    //Obtenemos el arreglo de usuarios almacenado en LocalStorage
    const playerJSON = localStorage.getItem("Players");
    let players = JSON.parse(playerJSON) ?? [];

    if(playerJSON !== null){
        players = JSON.parse(playerJSON);
    }

    // Validar si el usuario ya existe en el arreglo
    const playerExists = players.find(existingPlayer => existingPlayer.alias === player.alias);

    if (playerExists !== undefined) {
        alert('El usuario ya existe');
        return;
    }else{
        // Agregar el nuevo usuario al arreglo
        players.push(player);
        const newPlayerJSON = JSON.stringify(players);

        // Actualizamos el LocalStorage
        localStorage.setItem("Players",newPlayerJSON);
        window.location.href = "login.html";
    }
}