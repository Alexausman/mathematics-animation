
let dotX = 0;
let mirrorX = 600;

let dotY = 200;
let speed = 2;

let isPaused = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(25, 35, 55);

  // Center mirror line
  stroke(255);
  strokeWeight(2);
  line(300, 90, 300, 330);

  // First object
  fill(255, 190, 80);
  noStroke();
  circle(dotX, dotY, 30);

  // Mirror object
  fill(100, 220, 255);
  circle(mirrorX, dotY, 30);

  if (isPaused == false) {
    dotX = dotX + speed;
    mirrorX = mirrorX - speed;
  }

  if (dotX > 600) {
    dotX = 0;
    mirrorX = 600;
  }

  fill(255);
  textSize(25);
  text("Mirror Image Motion", 190, 30);

  fill(255);
  textSize(15);
  text("Alexa B. Usman | BSIT 2-B", 210, 70);

  textSize(14);
  fill(200, 220, 255);
  text("SPACE = Pause / Resume", 18, 370);
  text("+ = Faster | - = Slower", 18, 390);

  fill(255, 190, 80);
  text("Speed: " + speed, 450, 370);
}

function keyPressed() {

  if (keyCode == 32) {
    isPaused = !isPaused;
  }

  if (key == '+' || key == '=') {
    speed = speed + 1;
  }

  if (key == '-' && speed > 1) {
    speed = speed - 1;
  }
}
