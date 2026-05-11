var font;

function preload() { 
font = loadFont('Iosevka-bold.ttf'); }

 var points;
 function setup() { 
createCanvas(550, 320); 
stroke(0); 
points = font.textToPoints('Creative', 100, 175, 100, { sampleFactor: 0.22 });

background(255); 
for (var i = 0; i < points.length; i++) { 
    var p = points[i]; 
    ellipse(p.x, p.y, 5, 3); 
  } 
}