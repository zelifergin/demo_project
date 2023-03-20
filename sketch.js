let t = 0;
let numLines = 200;

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  strokeWeight(2);
  stroke(255);

  let amplitude = width / 4;

  for (let i = 0; i < numLines; i++) {
    let x1 = sin((t + i) / 10) * amplitude;
    let y1 = cos((-t + i) / 10) * amplitude + sin(((t + 1) / 5) * 50);

    let x2 = sin((t + i) / 20) * (amplitude * 2) + cos(t + 1) * 10;
    let y2 = cos((-t + i) / 10) * (amplitude * 2);

    line(x1, y1, x2, y2);
    
    if (x1 > width / 2) {
  stroke(map(noise(t + 10), 0, 1, 0, 50), map(noise(t + 10), 0, 1, 0, 50), map(noise(t + 10), 0, 1, 0, 50));
} else {
  stroke(map(noise(t + 20), 0, 1, 50, 150), map(noise(t + 100), 0, 1, 50, 150),map(noise(t + 20), 0, 1, 50, 150));
}
    
    
  }

  t += 0.1;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}
