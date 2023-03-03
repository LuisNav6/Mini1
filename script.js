
//canvas = document.querySelector('canvas');
var myFont = new FontFace('myFont', 'url(LetraBosque.ttf)');

myFont.load().then(function(font){
  // with canvas, if this is ommited won't work
  document.fonts.add(font);
  console.log('Font loaded');
});
var fondo = new Audio("juego/recursos/fondo.mp3")


function iniciar(){
  fondo.loop = true;
  fondo.volume = 0.4;
  fondo.play();
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "chocolate";
    ctx.clearRect(40, 40, 1270, 620);
    ctx.font = 'bold 130px myFont';
    ctx.textAlign = 'center';
    ctx.fillText("Animales del bosque",750,100);


     var canvas2 = document.getElementById("inicio");
     if (canvas2.getContext){
       // Specify 2d canvas type.
       var ctx2 = canvas2.getContext("2d");
       ctx2.fillStyle = "chocolate";
       ctx2.fillRect(550, 20, 350, 70);
       ctx2.strokeStyle = "white";
       ctx2.strokeRect(555, 25, 340, 60);
       ctx2.fillStyle = "white";
       ctx2.font = ' 50px myFont';
       ctx2.textAlign = 'right';
       ctx2.fillText("Jugar",790,70);
     }

     var canvas4 = document.getElementById("creditos");
     if (canvas4.getContext){
       // Specify 2d canvas type.
       var ctx4 = canvas4.getContext("2d");
       ctx4.fillStyle = "chocolate";
       ctx4.fillRect(550, 15, 350, 70);
       ctx4.strokeStyle = "white";
       ctx4.strokeRect(555, 20, 340, 60);
       ctx4.fillStyle = "white";
       ctx4.font = ' 50px myFont';
       ctx4.textAlign = 'right';
       ctx4.fillText("Créditos",830,65);
     }


     var canvas5 = document.getElementById("play");
     if (canvas5.getContext){
       // Specify 2d canvas type.
       var ctx5 = canvas5.getContext("2d");
       var img = new Image();
       img.src = "juego/imagenes/play.png";
     
       img.onload = function(){
       ctx5.drawImage(img,10,3,58,58);
       }
      
     }


     var canvas6 = document.getElementById("pause");
     if (canvas6.getContext){
       // Specify 2d canvas type.
       var ctx6 = canvas6.getContext("2d");
       var img2 = new Image();
       img2.src = "juego/imagenes/paused.png";
     
       img2.onload = function(){
       ctx6.drawImage(img2,10,6,55,55);
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


window.addEventListener('load',iniciar,false);
