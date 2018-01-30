var cvsC = document.querySelector("#clouds");
var ctxC = cvsC.getContext("2d");
cvsC.width = 400;
cvsC.height = 500;

var cloud1 = new Image();
cloud1.src = "images/cloud1.png";
var cloud2 = new Image();
cloud2.src = "images/cloud2.png";
var cloud3 = new Image();
cloud3.src = "images/cloud3.png";

var c1 = {
  x:0,
  y:300,
  vx:-.1
}
var c2 = {
  x:-200,
  y:130,
  vx:-.05
}
var c3 = {
  x:100,
  y:50,
  vx:-.15
}
function drawCloud3(){
  ctxC.drawImage(cloud3,c3.x,c3.y);
  c3.x += c3.vx;


}
function drawClouds(){
  c1.x += c1.vx;
  c2.x += c2.vx;
  ctxC.clearRect(0,0,cvsC.width,cvsC.height);
  if (c1.x <= -cloud1.width){
    c1.x = 400;
  }
  if (c2.x <= -cloud2.width){
    c2.x = 400;
  }
  if (c3.x <= -300){
    ctxC.clearRect(0,0,cvsC.width,cvsC.height);

    setTimeout(function(){
      drawCloud3();
    },5000);
    c3.x= 400;
  } else {
    drawCloud3();
  }

  ctxC.drawImage(cloud1,c1.x,c1.y);
  ctxC.drawImage(cloud2,c2.x,c2.y);
  requestAnimationFrame(drawClouds);


}


window.onload = drawClouds;
