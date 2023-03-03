
let draggableElements = document.querySelector('.draggable-elements');
let droppableElements = document.querySelector('.droppable-elements');
let play = document.getElementById("play");
let pause = document.getElementById("paused");


var global = new Audio("recursos/fondo.mp3")

play.addEventListener("click",playAudio)
pause.addEventListener("click",pauseAudio)

function playAudio(){
     global.loop = true;
    global.volume = 0.1;
    global.play();
    
}
function pauseAudio(){
    
   global.pause()
}


var lista = [2,4,5,1,6,3];
var lista2 = [4,2,6,1,3,5];
lista = lista.sort(function() {return Math.random() - 0.5});
card =  lista2.sort(function() {return Math.random() - 0.5});

   for (let x= 0; x <lista.length; x++ ){
   /* console.log(lista[x]);*/
    PutElements(lista[x],card[x]);
    
    }
function PutElements(id,id2) {
     switch (id) {
        case 1:
          let random1 = Math.random();
          random1 = random1 * 200 + 1;
            draggableElements.innerHTML += ` <div class="animal"  style="margin-top: ${random1}px;">
            <img id="ardilla" draggable="true" class="image" src="imagenes/ardilla.png" alt="animal">
          </div>`;
            
            break;
        case 2:
          let random2 = Math.random();
          random2 = random2 * 150 + 1;
            draggableElements.innerHTML += ` <div class="animal" style="margin-top: ${random2}px; ">
            <img id="buho" draggable="true" class="image" src="imagenes/buho.png" alt="animal" style="  width: 80px;">
          </div>`;
            
        break;
        case 3:
          let random3 = Math.random();
          random3 = random3 * 350 + 180;
            draggableElements.innerHTML += ` <div class="animal"  style="margin-top: ${random3}px; ">
            <img id="jabali" draggable="true" class="image" src="imagenes/jabali.png" alt="animal" >
          </div>`;

        break;
        case 4:
          let random4 = Math.random();
          random4 = random4 * 300 + 190;
            draggableElements.innerHTML += ` <div class="animal" style="margin-top: ${random4}px; ">
            <img id="mapache" draggable="true" class="image" src="imagenes/mapache.png" alt="animal" >
          </div>`;
        
        break;
        case 5:
          let random5 = Math.random();
          random5 = (random5 * 300 + 250)-30;
            draggableElements.innerHTML += ` <div class="animal" style="margin-top: ${random5}px; ">
            <img  id="oso" draggable="true" class="image" src="imagenes/oso.png" alt="animal" style="  width: 120px;">
          </div>`;
        

        break;
        case 6:
          let random6 = Math.random();
          random6 = (random6 * 300 + 280)-30
          console.log(random6)
            draggableElements.innerHTML += ` <div class="animal" style="margin-top: ${random6}px; ">
            <img id="zorro" draggable="true" class="image" src="imagenes/zorro.png" alt="animal" >
          </div>`;

        break;
        
     }

     switch (id2) {
        case 1:
            droppableElements.innerHTML += `<div class="names">
            <p>ardilla</p>
       </div>`;
            
            break;
        case 2:
         droppableElements.innerHTML += `<div class="names">
         <p>buho</p>
    </div>`;
            
        break;
        case 3:
         droppableElements.innerHTML += `<div class="names">
         <p>jabali</p>
    </div>`;
 
        break;
        case 4:
         droppableElements.innerHTML += `<div class="names">
         <p>mapache</p>
    </div>`;
        
        break;
        case 5:
         droppableElements.innerHTML += `<div class="names">
         <p>oso</p>
    </div>`;
        
 
        break;
        case 6:
         droppableElements.innerHTML += `<div class="names">
         <p>zorro</p>
    </div>`;
 
        break;
        
     }
    
  let animales = document.querySelectorAll('.image');
  animales = [...animales];
  animales.forEach(animal => {
    animal.addEventListener('dragstart', event=>{
      event.dataTransfer.setData('text',event.target.id)
    })
  })

  let names = document.querySelectorAll('.names')
  let wrong = document.querySelector('.wrong')
  let point = 0;
  names = [...names]
  names.forEach(nombre => {
    nombre.addEventListener('dragover', event=>{
          event.preventDefault()
    })
    nombre.addEventListener('drop', event=>{
          const draggableElementData = event.dataTransfer.getData('text')
          let animalElement = document.querySelector(`#${draggableElementData}`)
          if(event.target.innerText == draggableElementData){

            console.log('SI')
            point++;
            event.target.innerHTML = ''

            event.target.appendChild(animalElement)
            wrong.innerText = ''
            if(point == 6){
                draggableElements.innerHTML = '<p> ¡GANASTE! </p>';
            }
            if( draggableElementData == 'jabali'){
                
                let audio = new Audio("recursos/jabali.mp3");
                audio.volume = 1;
                audio.play();
            }
            if( draggableElementData == 'zorro'){
                
                let audio = new Audio("recursos/zorro.mp3");
                audio.volume = 1;
                audio.play();
            }
            if( draggableElementData == 'mapache'){
                
                let audio = new Audio("recursos/mapache.mp3");
                audio.volume = 1;
                audio.play();
            }
            if( draggableElementData == 'ardilla'){
               
                let audio = new Audio("recursos/ardilla.mp3");
                audio.volume = 1;
                audio.play();
            }
            if( draggableElementData == 'oso'){
               
                let audio = new Audio("recursos/oso.mp3");
                audio.volume = 1;
                audio.play();
               
            }
            if( draggableElementData == 'buho'){
                
                let audio = new Audio("recursos/buho.mp3");
                audio.volume = 1;
                audio.play();
                
            }
          }else{
            console.log('No')
            let err = new Audio("recursos/error.mp3");
            err.volume = 1;
            err.play();
            wrong.innerText = '¡Inténtalo de Nuevo!'
          }
    })
  })
    
}
window.onload = playAudio;

