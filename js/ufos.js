var ufosCanvas = document.querySelector("#ufos");
var ufosctx = ufosCanvas.getContext("2d");
ufosCanvas.width = 400;
ufosCanvas.height = 500;

var ufos =
  x: 400,
  y: 0,
  xVel: getRandomInt(2,10),
  size: 1;
  
int initialTime;
int interval = 1000;//one second

function Ufo(){
  this.x = 400;
  this.y = getRandomInt(0,500);
  this.size = 1;
  this.xVel = getRandomInt(2,10);
}

function SetupUfo(){
  var ufo = new Ufo();
  ufos.push(ufo);
  UfoTimer();
}
function UfoTimer(){
  var ufoUP = ufos;
  if (millis() - initialTime > interval)
  {
    time = nf(int(millis()/1000), 3);
    initialTime = millis();
    DrawUfo();
  }
}
DrawUfo(){
  for(var i=0; i<1; i++){

  }
}
}
