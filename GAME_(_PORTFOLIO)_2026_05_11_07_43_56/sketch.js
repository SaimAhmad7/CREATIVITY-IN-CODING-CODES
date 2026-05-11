let balls = [];
let blocks = [];

let numBalls = 20;
let shooting = false;
let origin;
let aim;

let shootIndex = 0;
let shootTimer = 0;

let cols = 10;
let tileSize;

let score = 0;
let gameOverFlag = false;

let bg;

function setup() {
  createCanvas(500, 600);
  origin = createVector(width / 2, height - 20);

  tileSize = width / cols;

  bg = createGalaxy(); // pre-render once

  for (let r = 0; r < 3; r++) {
    createRow(r * tileSize * 0.9 + 100);
  }
}

function draw() {
  image(bg, 0, 0);

  drawBlocks();
  drawBalls();
  drawUI();

  if (gameOverFlag) {
    drawGameOver();
    return;
  }

  if (!shooting) drawAimLine();

  // shooting stream
  if (shooting && shootIndex < numBalls) {
    shootTimer++;
    if (shootTimer % 3 === 0) {
      balls.push({
        pos: origin.copy(),
        vel: aim.copy().mult(15),
        r: tileSize * 0.18,
        active: true
      });
      shootIndex++;
    }
  }

  let activeBalls = 0;

  for (let b of balls) {
    if (!b.active) continue;

    activeBalls++;
    b.pos.add(b.vel);

    if (b.pos.x < b.r || b.pos.x > width - b.r) b.vel.x *= -1;
    if (b.pos.y < b.r) b.vel.y *= -1;
    if (b.pos.y > height) b.active = false;

    for (let block of blocks) {
      if (block.value <= 0) continue;

      let nx = constrain(b.pos.x, block.x, block.x + block.w);
      let ny = constrain(b.pos.y, block.y, block.y + block.h);

      let dx = b.pos.x - nx;
      let dy = b.pos.y - ny;

      if (dx * dx + dy * dy < b.r * b.r) {
        block.value--;
        score++;

        if (abs(dx) > abs(dy)) b.vel.x *= -1;
        else b.vel.y *= -1;

        break;
      }
    }
  }

  if (shooting && activeBalls === 0 && shootIndex >= numBalls) {
    shooting = false;
    shootIndex = 0;
    balls = [];
    moveBlocksDown();
  }
}

function mousePressed() {
  if (!shooting && !gameOverFlag) {
    aim = createVector(mouseX - origin.x, mouseY - origin.y).normalize();
    balls = [];
    shooting = true;
  }
}

// 🌌 ultra-light galaxy (no strokes, minimal loops)
function createGalaxy() {
  let g = createGraphics(width, height);

  // gradient
  for (let y = 0; y < height; y++) {
    let c = lerpColor(color(5, 0, 20), color(25, 0, 60), y / height);
    g.fill(c);
    g.rect(0, y, width, 1);
  }

  // stars (simple dots, no stroke)
  g.noStroke();
  g.fill(255);

  for (let i = 0; i < 80; i++) {
    g.circle(random(width), random(height), random(1, 2));
  }

  return g;
}

function moveBlocksDown() {
  for (let block of blocks) {
    block.y += tileSize * 2;

    if (block.y + block.h >= height - tileSize * 2) {
      gameOverFlag = true;
    }
  }
}

function drawBlocks() {
  noStroke();
  for (let block of blocks) {
    if (block.value > 0) {
      fill(block.color);
      rect(block.x, block.y, block.w, block.h, 3);

      fill(255);
      textAlign(CENTER, CENTER);
      textSize(11);
      text(block.value, block.x + block.w / 2, block.y + block.h / 2);
    }
  }
}

function drawBalls() {
  noStroke();
  fill(255);

  for (let b of balls) {
    if (b.active) {
      circle(b.pos.x, b.pos.y, b.r * 2);
    }
  }
}

function drawAimLine() {
  fill(255);

  let dir = createVector(mouseX - origin.x, mouseY - origin.y);
  dir.setMag(100);

  for (let i = 0; i < 12; i += 2) {
    let t = i / 12;
    circle(
      lerp(origin.x, origin.x + dir.x, t),
      lerp(origin.y, origin.y + dir.y, t),
      2
    );
  }
}

function createRow(yPos) {
  for (let i = 0; i < cols; i++) {
    let x = i * tileSize;

    if (random() < 0.8) {
      blocks.push({
        x: x + 2,
        y: yPos,
        w: tileSize - 4,
        h: tileSize - 4,
        value: floor(random(10, 25)),
        color: color(random(120,255), random(120,255), random(255))
      });
    }
  }
}

function drawUI() {
  fill(255);
  textSize(14);
  textAlign(LEFT);
  text("Score: " + score, 10, 20);
}

function drawGameOver() {
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(26);
  text("BETTER LUCK NEXT TIME", width / 2, height / 2 - 20);
  textSize(18);
  text("YOU LOST", width / 2, height / 2 + 20);
}