var tcanvas =document.getElementById("twinkles");
var context = tcanvas.getContext("2d");
// function calls a callback count times. Saves typing out for loops all the time
var doFor = (count, callback) => {
  var i = 0;
  while (i < count) {
    callback(i++)
  }
};
// creates a random integer between min and max. If min only given the between 0 and the value
var randI = (min, max = min + (min = 0)) => (Math.random() * (max - min) + min) | 0;
// same as above but as floats.
var rand = (min, max = min + (min = 0)) => Math.random() * (max - min) + min;
// creates a 2d point at x,y. If only x is a point than set to that point
var point = (x = 0, y) => {
  if (x.x && y === undefined) {return { x: x.x,y: x.y} }
  return {x,y: y === undefined ? 0 : y }
};
function ease (time, amount = 2) { return Math.pow(time % 1,amount) };
var clamp = (v, min = 1,max = min + (min = 0)) => v < min ? min : v > max ? max : v;




// stuff for twinkles
var skyColour = [10,30,50];
var density = 1000; // number of star per every density pixels
var colourChangeRate = 32; // Time in frames to change a colour
var twinkles = [];
var star = { // define a star
  draw() {
    this.count += 1; // integer counter used to triger color change every 16 frames
    if (this.count % colourChangeRate === 0) { // change colour ?
      // colour is a gaussian distrabution (NOT random) centered at #888
      var c = (Math.random() + Math.random() + Math.random() + Math.random()) * 4;
      var d = (rand(0,360));
      var str = "hsl(";
          str += Math.floor(d) * this.red;
          str +=","
          str += Math.floor(rand(0,20) * this.green);
          str +="%,"
          str += Math.floor(rand(50,100) * this.blue);
          str +="%)"

      this.col = str;
    }

    context.fillStyle = this.col;
    // move star around  a pixel. Again its not random
    // but a gaussian distrabution. The movement is sub pixel and will only
    // make the twinkles brightness vary not look like its moving
    var ox = (Math.random() + Math.random() + Math.random() + Math.random()) / 4;
    var oy = (Math.random() + Math.random() + Math.random() + Math.random()) / 4;
    context.fillRect(this.pos.x , this.pos.y , this.size, this.size);
  }
}
// create a random star
// the size is caculated to produce many more smaller twinkles than big
function createStar(pos) {
  twinkles.push(Object.assign({}, star, {
    pos,
    col: "#ccc",
    count: randI(colourChangeRate),
    alpha: 1-(rand(1) * rand(1) *rand(1)),
    size: rand(1) * rand(1) * 1 + 0.1,
    red: 1-(rand(1) * rand(1) *rand(1)),  // reduces colour channels
    green: 1-(rand(1) * rand(1) *rand(1)), // but only by a very small amount
    blue: 1-(rand(1) * rand(1) *rand(1)),  // most of the time but occasional
                                           // star will have a distinct colour
  }));
}

var starCount;
var skyGrad;
var requestAnimationFrame = window.requestAnimationFrame ||
                            window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame ||
                            window.msRequestAnimationFrame;
// render the twinkles
function mainLoop(time) {
  // resize canva if page size changes
  if (tcanvas.width !== 400 || tcanvas.height !== 400) {
    tcanvas.width = 400;
    tcanvas.height = 400;
    // create a new set of twinkles
    twinkles.length = 0;
    // density is number of pixels one the tcanvas that has one star
    starCount = Math.floor((tcanvas.width * tcanvas.height) / density);
    // create the random twinkles;
    doFor(starCount, () => createStar(point(randI(tcanvas.width), randI(tcanvas.height))));
    skyGrad = context.createLinearGradient(0,0,0,tcanvas.height);
    skyGrad.addColorStop(0,"black");
    doFor(100,(i)=>{
        var pos  = clamp(i/100,0,1);
        var col = ease(pos);
        skyGrad.addColorStop(
            pos,
            "rgb(" +
              Math.floor(skyColour[0] * col) + "," +
              Math.floor(skyColour[1] * col) + "," +
              Math.floor(skyColour[2] * col) + ")"
         );
     });
     // floating point error can cause problems if we dont set the top
     // at 1
     skyGrad.addColorStop(1,"rgb("+skyColour[0]+","+skyColour[1]+","+skyColour[2]+")");

  }
//  context.fillStyle = skyGrad;
//  context.fillRect(0, 0, tcanvas.width, tcanvas.height);
  doFor(starCount, (i) => twinkles[i].draw());

  requestAnimationFrame(mainLoop);
}
requestAnimationFrame(mainLoop);
