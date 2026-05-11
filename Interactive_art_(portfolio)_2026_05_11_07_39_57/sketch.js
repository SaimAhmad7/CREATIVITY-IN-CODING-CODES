let symmetry = 6;
let angle;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angle = 360 / symmetry;
  background(10);
}

function draw() {
  translate(width / 2, height / 2);

  if (mouseIsPressed) {
    let mx = mouseX - width / 2;
    let my = mouseY - height / 2;
    let pmx = pmouseX - width / 2;
    let pmy = pmouseY - height / 2;

    strokeWeight(2);

    // dynamic color
    let r = map(mouseX, 0, width, 100, 255);
    let g = map(mouseY, 0, height, 100, 255);
    let b = 255;

    stroke(r, g, b, 150);

    for (let i = 0; i < symmetry; i++) {
      rotate(radians(angle));

      line(mx, my, pmx, pmy);

      push();
      scale(1, -1);
      line(mx, my, pmx, pmy);
      pop();
    }
  }
}

// change symmetry
function keyPressed() {
  if (keyCode === UP_ARROW) {
    symmetry++;
    angle = 360 / symmetry;
  }
  if (keyCode === DOWN_ARROW && symmetry > 2) {
    symmetry--;
    angle = 360 / symmetry;
  }
  if (key === 'c' || key === 'C') {
    background(10);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(10);
}