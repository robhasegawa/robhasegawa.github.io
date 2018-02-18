var cvsC = document.querySelector("#clouds");
var ctxC = cvsC.getContext("2d");
cvsC.width = 400;
cvsC.height = 600;

var cloud1 = new Image();
cloud1.src = "images/cloud1.png";
var cloud2 = new Image();
cloud2.src = "images/cloud2.png";
var cloud3 = new Image();
cloud3.src = "images/cloud2.png";
var trees = new Image();
trees.src = "images/foreground2.png";

var c1 = {
  x:0,
  y:300,
  vx:-0.3
}
var c2 = {
  x:-600,
  y:300,
  vx:-.03
}
var c3 = {
  x:199,
  y:300,
  vx:-.03
}


function drawClouds(){
  c1.x += c1.vx;
  c2.x += c2.vx;
  c3.x += c3.vx;
  ctxC.clearRect(0,0,cvsC.width,cvsC.height);

  if (c1.x <= -cloud1.width){
    c1.x = c1.x+799;
  }
  if (c2.x <= -cloud2.width){
    c2.x = c3.x+799;
  }
  if (c3.x <= -cloud3.width){
    c3.x = c2.x+799;
  }

//  ctxC.drawImage(cloud1,c1.x,c1.y);
  ctxC.drawImage(cloud2,c2.x,c2.y);
  ctxC.drawImage(cloud3,c3.x,c3.y);
  ctxC.drawImage(trees,0,320);

  requestAnimationFrame(drawClouds);
}


trees.onload = drawClouds;
