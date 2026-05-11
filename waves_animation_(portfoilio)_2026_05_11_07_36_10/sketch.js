function setup() {
  createCanvas(500, 300);
}

function draw() {
  background(240);

  noFill();

  let t = frameCount * 0.05; // controls jiggle speed

  for (let yOffset = 40; yOffset <= height - 40; yOffset += 35) {
    strokeWeight(map(yOffset, 40, height - 40, 1, 4));
    stroke(0);

    beginShape();

    for (let x = 0; x < width; x++) {
      let jiggle = sin(t + x * 0.01) * 10; // up-down motion
      let y = yOffset + sin(x * 0.02 + yOffset * 0.05) * (25 + jiggle);
      vertex(x, y);
    }

    endShape();
  }
}