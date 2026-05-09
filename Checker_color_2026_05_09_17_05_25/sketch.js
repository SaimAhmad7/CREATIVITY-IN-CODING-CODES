var img;
function preload(){
  img = loadImage("img.png")
}

function setup() {
  createCanvas(1000, 1000);
  background(0);
}

function draw() {
background(0);
tint(5, 250, 221);
image(img,8,10);

filter(POSTERIZE);
}
 