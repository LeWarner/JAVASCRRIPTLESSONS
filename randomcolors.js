// variables

var spot = {
  x: 100,
  y: 50
};

var col = {
  r: 255,
  g: 0,
  b: 0
};

var sizey = {
  w: 0,
  h: 0
};

// setups

function setup() {
    createCanvas(1300, 700);
    background(0)
}

function draw() {
  // random
  col.r = random(100, 255);
  col.g = random(50, 255);
  col.b = random(50,255);
  sizey.w = random(0, 100);
  sizey.h = sizey.w;

  noStroke();

  // basics
  spot.x = random(0, width);
  spot.y = random(0, height);
  fill(col.r, col.g, col.b);
  ellipse(spot.x, spot.y, sizey.w, sizey.h);


  // moving ellipse
  fill(255);
  ellipse(mouseX, mouseY, 20, 20);
  stroke(0);
  strokeWeight(50)
}
