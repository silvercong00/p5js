let img;

function preload() {
  img = loadImage("project2.png");
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(255);
  image(img, 0, 0, width, height);
}
