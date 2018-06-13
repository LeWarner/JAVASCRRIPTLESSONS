function setup() {
    createCanvas(1366,768);
    background(255);
}

function draw() {
    if (mouseIsPressed) {
      fill(255);
      noStroke(0);
    } else {
      fill(255);
      stroke(4);
    }
    ellipse (mouseX, mouseY, 50, 50)
}
