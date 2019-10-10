var gif;

function preload() {
  gif = createImg("mccay.gif");
  gif2 = createImg("mccay.gif");
  gif3 = createImg("mccay.gif");
  gif4 = createImg("mccay.gif");
  snake = createImg("snake.gif");
}


function setup() {
  createCanvas(1000, 1000, WEBGL);
  background(0);
  frameRate(5);
  push();
  snake.position(500, 500);
  gif.position(random(900), random(1000), random(1000));
  gif2.position(random(1000), random(1000), random(1000));
  gif3.position(random(1000), random(1000), random(1000));
  gif4.position(random(1000), random(1000), random(1000));
}

function draw(){

        
    
}
function mousePressed() {
    
  }
