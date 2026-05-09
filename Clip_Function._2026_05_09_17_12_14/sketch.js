let img;

function preload() {
  img = loadImage('Scene.jpg');
}

function setup() {
  createCanvas(700, 700);
  background(190, 220, 250);

  // Resize once
  img.resize(200, 200);

  // =========================
  // 🟢 1. CLIP VERSION
  // =========================
  let cnvClip = createGraphics(200, 200);
  let ctx = cnvClip.drawingContext;

  ctx.save();

  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(100, 200);
  ctx.lineTo(200, 0);
  ctx.closePath();
  ctx.clip();

  cnvClip.image(img, 0, 0);

  ctx.restore();

  image(cnvClip, 100, 250); // LEFT image


  let imgCopy = img.get(); 

  let maskShape = createGraphics(200, 200);
  maskShape.fill(255);
  maskShape.noStroke();
  maskShape.triangle(0, 0, 100, 200, 200, 0);

  imgCopy.mask(maskShape);

  image(imgCopy, 400, 250); // RIGHT image
}