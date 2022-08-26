function setup() {
  createCanvas(500, 500);
  background(0);
}

let x = 100

function draw() {
  background(0);
  ellipse(x, 450, 25, 25);

  if (keyIsDown(LEFT_ARROW)) {
        x -= 5;
    }
  
    if (keyIsDown(RIGHT_ARROW)) {
        x += 5;
    }
}


