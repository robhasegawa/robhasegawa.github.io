var ufosCanvas = document.querySelector("#ufos");
var ctxU = ufosCanvas.getContext("2d");
ufosCanvas.width = 400;
ufosCanvas.height = 500;

function getRandomInt (min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }

var ufo = {
  x: 400,
  y: getRandomInt(0,500),
  vx: -1 *(Math.random() * 2 +.1),
  radius: .5,
  color:'black',

  draw: function(){
    ctxU.beginPath();
    ctxU.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctxU.closePath();
    ctxU.fillStyle = this.color;
    ctxU.fill();
  }
}

function flashRed(){
  var grd = ctxU.createRadialGradient(ufo.x,ufo.y,1,ufo.x,ufo.y,5);
  grd.addColorStop(0,'rgba(256,0,0,1)');
  grd.addColorStop(1,'rgba(256,256,256,0)');
  ctxU.fillStyle = grd;
  ctxU.fillRect(ufo.x-5,ufo.y-5,10 ,10);
  setTimeout(function(){
    requestAnimationFrame(flashInterval);
    },100);

}

function flashGreen(){
  var grd = ctxU.createRadialGradient(ufo.x,ufo.y,1,ufo.x,ufo.y,5);
  grd.addColorStop(0,'rgba(0,256,0,1)');
  grd.addColorStop(1,'rgba(256,256,256,0)');
  ctxU.fillStyle = grd;
  ctxU.fillRect(ufo.x-5,ufo.y-5,10 ,10);
  setTimeout(function(){
    requestAnimationFrame(flashInterval2);
    },2000);
}

function flashInterval(){
  setTimeout(function(){
    requestAnimationFrame(flashGreen);
    },10);
}

function flashInterval2(){
  setTimeout(function(){
    requestAnimationFrame(flashRed);
    },1000);
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
        ufo.x = 405;
        ufo.y = getRandomInt(0,500);
        ufo.vx = -1 *(Math.random() * 1 +.1);
        }
  else {
        requestAnimationFrame(draw);
  }
}
requestAnimationFrame(flashRed);
requestAnimationFrame(draw);
