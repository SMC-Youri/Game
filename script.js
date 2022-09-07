function setup() {
  createCanvas(1500, 800);
  background(0);
}

let x = 100
let y = 750

function draw() {
  background(0);
  ellipse(x, y, 25, 25);

  if (keyIsDown(LEFT_ARROW)) {
        x -= 8;
    }
  
    if (keyIsDown(RIGHT_ARROW)) {
        x += 8;
    }
    if (keyIsDown(UP_ARROW)) {
        y -= 8;
    }
  
    if (keyIsDown(DOWN_ARROW)) {
        y += 8;
    }

    if(frameCount % 100 == 0){
    // spawn!
    balls.push(new Ball());
  }

  balls.forEach((b) => {
    b.draw();
  });
}

class Ball{
  constructor(){
    this.x = random(width);
    this.y = 0;
  }

  draw(){
    circle(this.x, this.y, 30);
    this.y += 4;
  }
}

var balls = [];

