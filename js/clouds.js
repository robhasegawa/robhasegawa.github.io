var cvsC = document.querySelector("#clouds");
var ctxC = cvsC.getContext("2d");
cvsC.width = 400;
cvsC.height = 500;

var cloud1 = new Image();

var c1 = {
  x:0,
  y:200,
  vx:-.1

}


function drawClouds(){
  c1.x += c1.vx;

  ctxC.clearRect(0,0,cvsC.width,cvsC.height);

  ctxC.drawImage(cloud1,c1.x,c1.y);
  requestAnimationFrame(drawClouds);


}


cloud1.onload = drawClouds;
cloud1.src = "images/cloud1.png";
