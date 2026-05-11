function setup() {
  createCanvas(500, 300);
  noLoop();
}

function draw() {
  background(240);

  noFill();

  for (let yOffset = 40; yOffset <= height - 40; yOffset += 35) {
    strokeWeight(map(yOffset, 40, height - 40, 1, 4)); // varying thickness
    stroke(0);

    beginShape();

    for (let x = 0; x < width; x++) {
      let y = yOffset + sin(x * 0.02 + yOffset * 0.05) * 25;
      vertex(x, y);
    }

    endShape();
  }
}