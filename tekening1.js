var xCar;
var yCar;
var xSize = 600;
var ySize = 180;
var wheelSize;

function setup() {
  createCanvas(xSize, ySize); 
  xCar = 50;
  yCar = 100;
  wheelSize = 24;
  speed = 3;
}

function draw() {
    //Één cijfer geeft grijswaarden
    background(220); 
    drawCar(xCar, yCar, wheelSize);
    //width is de breedte van het canvas
    if (xCar > width || xCar < 0){ 
        speed = -speed;
    }
    xCar += speed;
};

function drawCar(xCar, yCar, wheelSize){
	noStroke();
	fill(255, 0, 0);
	rect(xCar, yCar, 200, 20);
	rect(xCar + 10, yCar-20, 90, 30)
	
	stroke(224, 224, 235)
	strokeWeight(3);
	fill(0, 0, 0);
	
	ellipse(xCar + 40, yCar + 21, wheelSize, wheelSize); 
	ellipse(xCar + 130, yCar + 21, wheelSize, wheelSize);
    stroke(0); 
    line(0, yCar + 21 + wheelSize/2, width, yCar + 21 + wheelSize/2); 
};

