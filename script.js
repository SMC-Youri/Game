function setup() {
  createCanvas(1500, 800);
  background(0);
  jungle = loadImage('jungle.jpg');
  textFont("atari", 25);
  textSize(40);
}

function preload() {
  atari = loadFont('atari.otf');
  img1 = loadImage('monkey.png');
  img2 = loadImage('banana.png');
  img3 = loadImage('banana-peel.png');
}

let px = 725;
let py = 630;
let bw = 30;
let bh = 30;
let pl = 85;
let pw = 85;
let ballx = this.x;
let bally = this.y;


var gameState = 0;
var score = 0;
var a = 0;
var balls = [];

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
  text("score:", 25, 45);
  text(score, 250, 45);

  image(img1, px, py, pl, pw,);

  if (keyIsDown(LEFT_ARROW)) {
    px -= 10;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    px += 10;
  }

  if (px <= -80){
    px = 1499;
  }

  if (px >= 1500){
    px = -79;
  }




  

  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];

    if(px < ball.x + bw && px + pl > ball.x && py < ball.y + bh && pw + py > ball.y){
      score += 1;
//skips collision check for the ball at index i+1 for one frame. Can be resolved by using a foreach statement - Marijn Kneppers
      balls.splice(i, 1);
    }
    
  //if (ball.y >= 650){
  //  gameState = 4;
  //} 
}

  if (frameCount % 100 == 0) {

    balls.push(new Ball());
  }

  balls.forEach((b) => {
    b.draw();
  });
}

function gameOver() {
  background("green");
  text("GAME OVER", 25, 45);
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
    image(img2, this.x, this.y, bw, bh);
    this.y += 2;
  }
}