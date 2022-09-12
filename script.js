function setup() {
  createCanvas(1500, 800);
  background(0);
  jungle = loadImage('jungle.jpg');
}

function preload() {
  img1 = loadImage('monkey.png');
  img2 = loadImage('banana.png');
  img3 = loadImage('banana-peel.png');
}

let x = 750
let y = 650
let w = 30;
let h = 30;

let ballx = this.x;
let bally = this.y;


var gameState = 0;
var score = 0;
var a = 0;
var balls = [];

let img1;
let img2;

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
  text(score, 135, 43);

  image(img1, x, y, 70, 70,);

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

  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];

    if(x < ball.x + w && x + 70 > ball.x && y < ball.y + h && 70 + y > ball.y)
    {
      score += 1;

       //skips collision check for the ball at index i+1 for one frame. Can be resolved by using a foreach statement - Marijn Kneppers
      balls.splice(i, 1);
    }
  }



  if (frameCount % 100 == 0) {

    balls.push(new Ball());
  }

  //if (this.y <= 650){
  // img2 = img3 
  //}




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

class Ball {
  constructor() {
    this.x = random(width);
    this.y = 55;

  }

  draw() {
    image(img2, this.x, this.y, w, h);
    this.y += 1.5;
  }
}