/*
    Cliente
*/
// Modal
// Evento que oculta el modal al hacer clic en el botón 'Salir'
const quitButton = document.querySelector('#quit-button');
quitButton.addEventListener('click', function (e) {
    e.preventDefault(); // Evita que se envíe el formulario
    hideModal(); // Ocultar el modal
});

function PlayerSession(){
    var modalLogin = document.querySelector(".modal-login");
    modalLogin.style.display = 'block';
}

/* Obtenemos el modal */
var modal = document.querySelector(".modal-start");

/* Obtenemos el botón de cerrar el modal */
var closeBtn = document.querySelector(".close");
// Función que muestra el modal
function showModal() {
    modal.style.display = 'block';
}

// Función que oculta el modal
function hideModal() {
    modal.style.display = 'none';
}

function RegisterStart() {
    showModal();
}

document.getElementById("start-button").addEventListener('click', function (e) {
    e.preventDefault(); // Evita que se recarge la pagina al enviar el formulario
    var score = 0;
    var bestTime = 0;
    var time = 0;

    const aliasInput = document.getElementById("name").value;
    const player = { alias: aliasInput, time: time, score: score, bestTime: bestTime }; // Creamos un objeto player

    // Si el alias está vacío, se vuelve a solicitar
    if (aliasInput.trim() === "") {
        alert("El alias no puede estar vacío. Intenta de nuevo.");
    } else {
        // Agregamos el player al arreglo
        addPlayer(player);
        hideModal();
    }

});

//evento para reedirigir a la tabla
document.getElementById("tabla-score").addEventListener('click', function (e) {
    e.preventDefault();
    window.location.href = "../html/scores.html";
});

function addPlayer(player) {
    //Obtenemos el arreglo de usuarios almacenado en LocalStorage
    const playerJSON = localStorage.getItem("Players");
    let players = JSON.parse(playerJSON) ?? [];

    if (playerJSON !== null) {
        players = JSON.parse(playerJSON);
    }

    // Validar si el usuario ya existe en el arreglo
    const playerExists = players.find(existingPlayer => existingPlayer.alias === player.alias);

    if (playerExists !== undefined) {
        alert('El usuario ya existe');
        window.location.href = "../index.html";
        //return;
    } else {
        // Agregar el nuevo usuario al arreglo
        players.push(player);
        const newPlayerJSON = JSON.stringify(players);

        // Actualizamos el LocalStorage
        localStorage.setItem("Players", newPlayerJSON);
        modalLogin.style.display = 'block';
    }
}

// ------------------------------- Logica Chava ------------------------------ //


//canvas = document.querySelector('canvas');
var myFont = new FontFace('myFont', 'url(../recursos/LetraBosque.ttf)');

myFont.load().then(function (font) {
    // with canvas, if this is ommited won't work
    document.fonts.add(font);
    console.log('Font loaded');
});
var fondo = new Audio("../recursos/fondo.mp3")


function iniciar() {
    fondo.loop = true;
    fondo.volume = 0.4;
    fondo.play();
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "chocolate";
    ctx.clearRect(40, 40, 1270, 620);
    ctx.font = 'bold 130px myFont';
    ctx.textAlign = 'center';
    ctx.fillText("Animales del bosque", 750, 100);


    var canvas2 = document.getElementById("inicio");
    if (canvas2.getContext) {
        // Specify 2d canvas type.
        var ctx2 = canvas2.getContext("2d");
        ctx2.fillStyle = "chocolate";
        ctx2.fillRect(550, 20, 350, 70);
        ctx2.strokeStyle = "white";
        ctx2.strokeRect(555, 25, 340, 60);
        ctx2.fillStyle = "white";
        ctx2.font = ' 50px myFont';
        ctx2.textAlign = 'right';
        ctx2.fillText("Jugar", 790, 70);
    }

    var canvas4 = document.getElementById("creditos");
    if (canvas4.getContext) {
        // Specify 2d canvas type.
        var ctx4 = canvas4.getContext("2d");
        ctx4.fillStyle = "chocolate";
        ctx4.fillRect(550, 15, 350, 70);
        ctx4.strokeStyle = "white";
        ctx4.strokeRect(555, 20, 340, 60);
        ctx4.fillStyle = "white";
        ctx4.font = ' 50px myFont';
        ctx4.textAlign = 'right';
        ctx4.fillText("Créditos", 830, 65);
    }


    var canvas5 = document.getElementById("play");
    if (canvas5.getContext) {
        // Specify 2d canvas type.
        var ctx5 = canvas5.getContext("2d");
        var img = new Image();
        img.src = "../imagenes/play.png";

        img.onload = function () {
            ctx5.drawImage(img, 10, 3, 58, 58);
        }

    }


    var canvas6 = document.getElementById("pause");
    if (canvas6.getContext) {
        // Specify 2d canvas type.
        var ctx6 = canvas6.getContext("2d");
        var img2 = new Image();
        img2.src = "../imagenes/paused.png";

        img2.onload = function () {
            ctx6.drawImage(img2, 10, 6, 55, 55);
        }

    }
}

function playMusic() {

    fondo.loop = true;
    fondo.volume = 0.4;
    fondo.play();

}

function pauseMusic() {

    fondo.pause();

}

window.addEventListener('load', iniciar, false);