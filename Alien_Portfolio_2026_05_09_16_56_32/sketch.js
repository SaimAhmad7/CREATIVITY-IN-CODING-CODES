function setup() {
  createCanvas(500, 650);
  noLoop();
}

function draw() {
  drawBackground();
  translate(width / 2, height / 2 + 60);

  drawFloor();
  drawAlienLegs();
  drawBody();
  drawAlienArms(); // simple hands
  drawHead();
  drawEyes();
  drawAntennas();
}

// Background
function drawBackground() {
  for (let y = 0; y < height; y++) {
    let c = lerpColor(color(30, 50, 80), color(10, 10, 20), y / height);
    stroke(c);
    line(0, y, width, y);
  }

  noStroke();
  fill(255, 40);
  for (let i = 0; i < 60; i++) {
    ellipse(random(width), random(height), random(1, 3));
  }
}

// Head
function drawHead() {
  noStroke();
  fill(180, 190, 200);
  ellipse(0, -180, 240, 260);

  fill(160, 170, 180, 120);
  ellipse(-40, -200, 150, 200);
}

// Eyes
function drawEyes() {
  fill(10);

  beginShape();
  vertex(-70, -210);
  bezierVertex(-110, -180, -90, -140, -50, -150);
  bezierVertex(-20, -160, -30, -200, -70, -210);
  endShape(CLOSE);

  beginShape();
  vertex(70, -210);
  bezierVertex(110, -180, 90, -140, 50, -150);
  bezierVertex(20, -160, 30, -200, 70, -210);
  endShape(CLOSE);

  fill(255, 180);
  ellipse(-65, -185, 15, 25);
  ellipse(60, -185, 15, 25);
}

// Body
function drawBody() {
  noStroke();
  fill(170, 180, 190);
  ellipse(0, 40, 220, 280);

  fill(150, 160, 170, 120);
  ellipse(0, 60, 160, 220);
}

// Arms with simple hands
function drawAlienArms() {
  stroke(170, 180, 190);
  
  // Left arm
  strokeWeight(18);
  line(-120, -10, -80, 120);
  
  // Simple hand
  strokeWeight(12);
  point(-80, 120);
  
  // Right arm
  strokeWeight(18);
  line(120, -10, 80, 120);
  
  // Simple hand
  strokeWeight(12);
  point(80, 120);
}

// Legs
function drawAlienLegs() {
  stroke(170, 180, 190);
  strokeWeight(24);

  // Left leg
  beginShape();
  vertex(-50, 170);
  bezierVertex(-60, 250, -55, 320, -50, 360);
  endShape();

  // Right leg
  beginShape();
  vertex(50, 170);
  bezierVertex(60, 250, 55, 320, 50, 360);
  endShape();
}

// Floor
function drawFloor() {
  noStroke();
  fill(40, 40, 60);
  rectMode(CENTER);
  rect(0, 370, 500, 40);
}

// Antennas
function drawAntennas() {
  stroke(180, 190, 200);
  strokeWeight(4);
  line(-40, -250, -80, -300);
  noStroke();
  fill(255, 200);
  ellipse(-80, -300, 12, 12);

  stroke(180, 190, 200);
  strokeWeight(4);
  line(40, -250, 80, -300);
  noStroke();
  fill(255, 200);
  ellipse(80, -300, 12, 12);
}