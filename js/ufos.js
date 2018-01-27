
var ufosCanvas = document.querySelector("#ufos");
var ctxU = ufosCanvas.getContext("2d");
ufosCanvas.width = 400;
ufosCanvas.height = 500;

function getRandomInt (min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }

var ufo = {
  x: 400,
  y: getRandomInt(0,500),
  vx: -1 *(Math.random() * 2 +.1),
  vy: 0,
  radius: 1,
  color:'red',

  draw: function(){

    ctxU.beginPath();
    ctxU.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctxU.closePath();
    ctxU.fillStyle = this.color;
    ctxU.fill();
  }
}
function draw(){

  ctxU.clearRect(0,0,ufosCanvas.width,ufosCanvas.height);
  ufo.draw();

  ufo.x += ufo.vx;

    if (ufo.x <= 0){
        ctxU.clearRect(0,0,ufosCanvas.width,ufosCanvas.height);
        setTimeout(function(){
        requestAnimationFrame(draw);
      },getRandomInt(3000,8000));
       ufo.x = 400;
       ufo.y = getRandomInt(0,500);
       ufo.vx = -1 *(Math.random() * 2 +.1);
      }
else {
  requestAnimationFrame(draw);
  console.log(ufo.vx)

}
}
requestAnimationFrame(draw);
