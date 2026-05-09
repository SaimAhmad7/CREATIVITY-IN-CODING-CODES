function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(135, 206, 235); // Sky
  
  // Grass
  fill(100, 200, 100);
  rect(0, 250, width, 150);
  
  // Road
  fill(120);
  rect(0, 280, width, 120);
  
  // Road lane lines
  stroke(255);
  strokeWeight(4);
  for (let i = 0; i < width; i += 80) {
    line(i, 340, i + 40, 340);
  }
  noStroke();

  // 🚗 Car Body
  fill(200, 0, 0);
  rect(250, 230, 300, 60, 20); // Bottom body
  rect(300, 190, 180, 60, 20); // Top cabin
  
  // Windows
  fill(180, 220, 255);
  rect(320, 200, 70, 40, 10);
  rect(400, 200, 70, 40, 10);
  
  // Door Handles
  fill(50);
  rect(360, 250, 20, 5, 5);
  rect(430, 250, 20, 5, 5);
  
  // Front Headlights (RIGHT SIDE)
  fill(255, 220, 0); // Yellow
  rect(540, 245, 15, 15, 5);
  
  // Back Lights (LEFT SIDE)
  fill(255, 0, 0);
  rect(245, 245, 10, 15, 5);
  
  // Wheels
  fill(0);
  ellipse(320, 300, 60, 60);
  ellipse(480, 300, 60, 60);
  
  // Wheel rims
  fill(180);
  ellipse(320, 300, 25, 25);
  ellipse(480, 300, 25, 25);
}