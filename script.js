function setup() {
  createCanvas(500, 500);
  background(0);
}

let x = 100
let y = 450

function draw() {
  background(0);
  ellipse(x, y, 25, 25);

  if (keyIsDown(LEFT_ARROW)) {
        x -= 5;
    }
  
    if (keyIsDown(RIGHT_ARROW)) {
        x += 5;
    }
    if (keyIsDown(UP_ARROW)) {
        y -= 5;
    }
  
    if (keyIsDown(DOWN_ARROW)) {
        y += 5;
    }
}


