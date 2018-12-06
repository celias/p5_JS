
// serpinkski triangle!!!

let points;
let current;
let percent = 0.5;
let previous;

// Function defining canvas
// NOTE: windowWidth and windowHeight fills the canvas
// but you can define height and width if you so wish
function setup() {
  createCanvas(500, 500);
  points = [];
  const n = 5;
  for (let i = 0; i < n; i++) {
    let angle = i * TWO_PI / n;
    let v = p5.Vector.fromAngle(angle);
    v.mult(width / 2);
    v.add(width / 2, height / 2);
    points.push(v);
  }

  reset();
}

// Reset points in env
function reset() {
  current = createVector(random(width), random(height));

  background(0);
  stroke(255);
  strokeWeight(2);
  // Draw points
  for (let p of points) {
    point(p.x, p.y);
  }
}

// Draw 100 dots
function draw() {
  if (frameCount % 100 == 0) {
    //reset(); 
  }

  for (let i = 0; i < 1000; i++) {
    strokeWeight(0.3);
    stroke(255, 0, 255, 200);

    // The random function in p5
    let next = random(points);
    if (next !== previous) {
      current.x = lerp(current.x, next.x, percent);
      current.y = lerp(current.y, next.y, percent);

      // Draw the point
      point(current.x, current.y);
    }

    previous = next;
  }


}
