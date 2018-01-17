
var ufosCanvas = document.querySelector("#ufos");
var ctxU = ufosCanvas.getContext("2d");
ufosCanvas.width = 400;
ufosCanvas.height = 500;

var ufos = [];

function Ufo(){
  this.x = 400;
  this.y = getRandomInt(0,400);
  this.size = 10;
  this.fill
}

function drawUfo(){
  for (var i = 0; i <ufos.length; i++){
    var u = ufos[i];
    ctxU.fillRect()
  }
}
