function setup() {
  createCanvas(1500, 800);
  background(0);
  jungle = loadImage('jungle.jpg');
}

let x = 750
let y = 650

let w = 20;
let h = 20;

let img;
function preload() {
  img = loadImage('monkey.png');
}

var gameState = 0;

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
  background(jungle); 
  textSize(40);
  text("score:", 25, 40);

  image(img, x, y, 70, 70,);

  if (keyIsDown(LEFT_ARROW)) {
        x -= 10;
    }
  
    if (keyIsDown(RIGHT_ARROW)) {
        x += 10;
    }
    //if (keyIsDown(UP_ARROW)) {
    //    y -= 10;
    //}
  
    //if (keyIsDown(DOWN_ARROW)) {
    //    y += 10;
    //}

    if(frameCount % 100 == 0){

    balls.push(new Ball());
  }

  if (x >= this.x-w/2 && x <= this.x+w/2) {
  if (y >= this.y-h/2 && y <= this.y+y/2) {
      this.y = -1000;
    }
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
    rect(this.x, this.y, w, h);
    this.y += 2.5;
  }
}

var balls = [];

