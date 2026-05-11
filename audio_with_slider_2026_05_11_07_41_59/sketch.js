let song;
let fft;

function preload() {
  // Put your audio file in the project folder
  song = loadSound('Song.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  fft = new p5.FFT(0.8, 128);

  let btn = createButton('Play / Pause');
  btn.position(20, 20);
  btn.mousePressed(toggleSong);
}

function draw() {
  background(10, 10, 20);

  let spectrum = fft.analyze();

  noStroke();

  let barWidth = width / spectrum.length;

  for (let i = 0; i < spectrum.length; i++) {
    let amp = spectrum[i];
    let y = map(amp, 0, 255, height, 0);

    let hue = map(i, 0, spectrum.length, 0, 360);

    fill(hue, 255, 255);
    rect(i * barWidth, y, barWidth - 2, height - y);
  }
}

function toggleSong() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.loop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}