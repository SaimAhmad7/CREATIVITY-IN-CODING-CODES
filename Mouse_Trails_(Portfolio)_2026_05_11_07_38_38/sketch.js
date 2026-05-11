let trail = [];
let hue = 0;

function draw() {
  background(0);

  noStroke();

  trail.push({ x: mouseX, y: mouseY, h: hue });

  if (trail.length > 60) trail.shift();

  for (let i = 0; i < trail.length; i++) {
    let p = trail[i];

    let size = map(i, 0, trail.length, 10, 30); // BIGGER stars
    let twinkle = sin(frameCount * 0.2 + i) * 5; // stronger twinkle

    fill(p.h, 200, 255, 0.9);

    drawStar(p.x, p.y, size + twinkle, (size + twinkle) / 2, 5);
  }

  hue = (hue + 2) % 255;
}

function setup() {
  createCanvas(500, 400);
  colorMode(HSB);
}

function drawStar(x, y, r1, r2, n) {
  beginShape();
  for (let i = 0; i < TWO_PI; i += TWO_PI / n) {
    vertex(x + cos(i) * r1, y + sin(i) * r1);
    vertex(x + cos(i + PI / n) * r2, y + sin(i + PI / n) * r2);
  }
  endShape(CLOSE);
}