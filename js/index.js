function getRandomInt (min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }

var myCanvas = document.querySelector("#starfield");
myCanvas.width = 400;
myCanvas.height = 500;

var canvas = document.getElementById("starfield");
var ctx = canvas.getContext("2d");

var w = 400;
var h = 500;

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

setInterval(drawStars, 33);
