let values = [120, 180, 240, 90, 160, 220, 140, 200];
let animated = [];

function setup() {
  createCanvas(700, 400);

  // start all bars at 0 for animation
  for (let i = 0; i < values.length; i++) {
    animated.push(0);
  }
}

function draw() {
  background(15);

  let margin = 60;
  let w = width - margin * 2;
  let h = height - margin * 2;

  let maxVal = max(values);
  let barWidth = w / values.length;

  // Axes
  stroke(100);
  line(margin, margin, margin, height - margin);
  line(margin, height - margin, width - margin, height - margin);

  // Bars + animation
  for (let i = 0; i < values.length; i++) {
    let target = map(values[i], 0, maxVal, 0, h);
    animated[i] = lerp(animated[i], target, 0.08);

    let x = margin + i * barWidth;
    let y = height - margin - animated[i];

    // Bar
    noStroke();
    fill(80, 120, 255);
    rect(x + 10, y, barWidth - 20, animated[i], 6);

    // Value text
    fill(255);
    textAlign(CENTER);
    textSize(12);
    text(values[i], x + barWidth / 2, y - 8);
  }

  // Line graph on top
  stroke(0, 200, 255);
  strokeWeight(3);
  noFill();
  beginShape();

  for (let i = 0; i < values.length; i++) {
    let x = margin + i * barWidth + barWidth / 2;
    let y = height - margin - animated[i];
    vertex(x, y);
  }

  endShape();

  // Dots
  fill(0, 200, 255);
  noStroke();
  for (let i = 0; i < values.length; i++) {
    let x = margin + i * barWidth + barWidth / 2;
    let y = height - margin - animated[i];
    ellipse(x, y, 8);
  }

  // Title
  fill(255);
  textSize(18);
  textAlign(CENTER);
  text("Most Played Songs", width / 2, 30);
}