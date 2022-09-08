function setup() {
  createCanvas(1500, 800);
  background(0);
}

let x = 100
let y = 750


var gameState = 0; // 0 = menu, 1 = game, 2 = gameover

function draw() {

  text("gameState" + gameState, 25, 25);

  if (gameState == 0) {
    menu();
  }

  if (gameState == 1) {
    monkey();
  }

  if (gameState == 2) {
    minion();
  }

  if (gameState == 3) {
    victory();
  }

  if (gameState == 4) {
    gameOver();
  }
}

var a = 0;

function menu() {
  background("#ababab");
  text("MENU", 25, 45);
  text("1. menu", 25, 65);
  text("2. start game", 25, 85);
  text("3. game over", 25, 105);
}

function monkey() {
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

function gameOver() {
  background("green");
  text("GAME OVER", 25, 45);
  x = 0;
}

function keyPressed() {

  if (keyCode == 27) {
    gameState = 0;
  }

  if (keyCode == 49) {
    gameState = 1;
  }

  if (keyCode == 50) {
    gameState = 2;
  }

  if (keyCode == 51) {
  gameState = 3;
  }

   if (keyCode == 52) {
  gameState = 4;
  } 
}

class Ball{
  constructor(){
    this.x = random(width);
    this.y = 0;
  }

  draw(){
    circle(this.x, this.y, 30);
    this.y += 3;
  }
}

var balls = [];

