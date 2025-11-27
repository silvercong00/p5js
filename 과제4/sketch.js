let img;

function preload() {
  img = loadImage("project4.gif");
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  image(img, 0, 0, width, height);
}
