
function iniciar(){
   
      const canvas = document.getElementById("creditos");
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "chocolate";
      ctx.clearRect(40, 40, 1270, 620);
      ctx.font = 'bold 55px cursive';
      ctx.textAlign = 'center';
      ctx.fillText("PROGRAMMING",750,100);
      ctx.font = '30px cursive';
      ctx.textAlign = 'center';
      ctx.fillText("Salvador Gaytan Ponce",750,150);
      ctx.fillText("Luis Humberto Navarrete Balandran",750,200);
  

      ctx.font = 'bold 55px cursive';
      ctx.textAlign = 'center';
      ctx.fillText("DESIGN",750,350);
      ctx.font = '30px cursive';
      ctx.textAlign = 'center';
      ctx.fillText("Michelle Ruvalcaba Reyes",750,400);
      ctx.fillText("Jose Antonio Jimenez Romo",750,450);

      ctx.font = 'bold 55px cursive';
      ctx.textAlign = 'center';
      ctx.fillText("Created BY",750,550);
      ctx.font = '30px cursive';
      ctx.textAlign = 'center';
      ctx.fillText("Equipo Estrella",750,600);
      

      


}











window.addEventListener('load',iniciar,false);