//Made in 2018 by Robert Hasegawa

function getRandomInt (min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }



var canvas = document.getElementById("starfield");
var ctx = canvas.getContext("2d");
var w = 400;
var h = 500;
canvas.width = w;
canvas.height = h;

var stars = [];

for(var i=0; i<200; i++){
  stars.push(new create_stars())
}

function create_stars(){

    this.x = getRandomInt( 0, w );
    this.y = getRandomInt( 0, h );

    this.size = getRandomInt(.1,.1);

    this.hue = getRandomInt( 0, 360 );
    this.opacity = getRandomInt( 0, 70 );
    this.saturation = getRandomInt( 0, 30 ) + "%";

}

function drawStars() {
    for(var t = 0; t <stars.length; t++) {
    var p = stars[t];

    ctx.beginPath();
    ctx.fillStyle = "hsla("+ p.hue +", "+ p.saturation +", 80%, ."+ p.opacity +")";

    ctx.fillRect( p.x, p.y, p.size, p.size );
  }
}
//toggle about div
function showAbout() {
  var aboutGet = document.getElementById("aboutme");
  var contactGet = document.getElementById("contactDiv");
  if (aboutGet.style.display === "block") {
  aboutGet.style.display = "none";
  contactGet.style.display = "none";
  } else {
  aboutGet.style.display = "block";
  contactGet.style.display = "none";
}
}
//toggle contact div
function showContact() {
  var contactGet = document.getElementById("contactDiv");
  var aboutGet = document.getElementById("aboutme");
  if (contactGet.style.display === "block") {
  contactGet.style.display = "none";
  aboutGet.style.display = "none";
  } else {
  contactGet.style.display = "block";
  aboutGet.style.display = "none";

}
}

setInterval(drawStars, 33);
