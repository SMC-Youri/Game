function setup() {
  createCanvas(1500, 800);
  background(0);
  jungle = loadImage('jungle.jpg');
  char_sel = loadImage('char_sel.jpg');
  title = loadImage('title.jpg');
  textFont("atari", 25);
  textSize(40);
}

function preload() {
  atari = loadFont('atari.otf');
  img1 = loadImage('banana.png');
  img2 = loadImage('dk_r.png');
  img3 = loadImage('dk_l.png');
  img4 = loadImage('diddy_r.png');
  img5 = loadImage('diddy_l.png');
  img6 = loadImage('mario_r.png');
  img7 = loadImage('mario_l.png');
  img8 = loadImage('luigi_r.png');
  img9 = loadImage('luigi_l.png');
  img10 = loadImage('link_r.png');
  img11 = loadImage('link_l.png');
  img12 = loadImage('minion_r.png');
  img13 = loadImage('minion_l.png');

  
}

let bw = 30;
let bh = 30;
let ballx = this.x;
let bally = this.y;


var gameState = 0;
var score = 0;
var highscore = 0;
var lives = 3;
var a = 0;
var balls = [];
var direction = "r";
var player;

function draw() {

  text("gameState" + gameState, 25, 25);

  if (gameState == 0) {
    menu();
  }

  if (gameState == 1) {
    characters();
  }

  if (gameState == 2) {
    gameplay();
  }

  if (gameState == 3) {
    diddykong();
  }

  if (gameState == 4) {
    mario();
  }

  if (gameState == 5) {
    luigi();
  }

  if (gameState == 6) {
    link();
  }

  if (gameState == 7) {
    minion();
  }

  if (gameState == 8) {
    gameover();
  }

  if (gameState == 9) {
    newhighscore();
  }
}

function menu() {
  background(title);
}

function characters (){
  background(char_sel);
  text("1", 365, 360);
  text("2", 365, 655);
  text("3", 740, 360);
  text("4", 740, 655);
  text("5", 1080, 360);
  text("6", 1080, 655);
}

  

function gameplay() {
  background(jungle);
  text("score:", 25, 45);
  text(score, 250, 45);
  text("lives:", 1220, 45);
  text(lives, 1450, 45);

  player.update();

  if (player.x <= -80){
    player.x = 1499;
  }

  if (player.x >= 1500){
    player.x = -79;
  }
  
  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];

    if(player.x < ball.x + bw && player.x + player.w > ball.x && player.y < ball.y + bh && player.h + player.y > ball.y){
      score += 1;
//skips collision check for the ball at index i+1 for one frame. Can be resolved by using a foreach statement - Marijn Kneppers
      balls.splice(i, 1);
    }
    
  if (ball.y >= 700){
    lives -= 1;
    balls.splice(i, 1);
  } 
}

  if (lives <= 0 && score > highscore){
    gameState = 9;
    highscore = score;
    lives = 3;
    score = 0;
  } else if (lives <= 0 && score <= highscore){
  gameState = 8;
  lives = 3;
  score = 0;
  }

  if (frameCount % 100 == 0) {

    balls.push(new Ball());
  }

  balls.forEach((b) => {
    b.draw();
  });
}

function diddykong() {
  background("green");
  text("GAME OVER", 25, 45);
}

function mario(){
  background("#ababab");
}

function luigi(){
  background("#ababab");
}

function link(){
  background("#ababab");
}

function minion(){
  background("#ababab");
}

function gameover(){
  background("blue");
  text("gameover");
}

function newhighscore(){
  background("green");
  text("New highscore:", 500, 300,)
  text(highscore, 750, 375,)
  text("press ENTER to continue", 350, 500,);
}

function keyPressed() {

  if (keyCode == 0) {
    gameState = 0;
  }

  if (keyCode == 13) {
    gameState = 1;
  }

  if (gameState == 1 && keyCode == 49) {
    player = new Player(img3, img2);
    gameState = 2;
  }

  if (gameState == 1 && keyCode == 50) {
    player = new Player(img5, img4);
    gameState = 2
  }

  if (gameState == 1 && keyCode == 51) {
    player = new Player(img7, img6);
    gameState = 2
  }

  if (gameState == 1 && keyCode == 52) {
    player = new Player(img9, img8);
    gameState = 2
  }

  if (gameState == 1 && keyCode == 53) {
    player = new Player(img11, img10);
    gameState = 2
  }

  if (gameState == 1 && keyCode == 54) {
    player = new Player(img13, img12);
    gameState = 2
  }

  if (keyCode == 1) {
    gameState = 8;
  }

  if (keyCode == 2) {
    gameState = 9;
  }
}

class Ball {
  constructor() {
    this.x = random(width);
    this.y = 55;
  }
  
  draw() {
    image(img1, this.x, this.y, bw, bh);
    this.y += 3;
  }
}

class Player{
  
  constructor(left_image, right_image){
    this.direction = "r";
    this.x = 725;
    this.y = 630;
    this.w = 85;
    this.h = 85;
    this.leftImage = left_image;
    this.rightImage = right_image;
  }

  update()
  {
    this.move();
    this.draw();
  }

  draw(){
    if(this.direction == "r")
    {
      image(this.rightImage, this.x, this.y, this.w, this.h);
    }
    else if(this.direction == "l")
    {
      image(this.leftImage, this.x, this.y, this.w, this.h);
    }
  }

  move()
  {
    if(keyIsDown(RIGHT_ARROW))
    {
      this.direction = "r";
      this.x += 10;
    }
    else if (keyIsDown(LEFT_ARROW))
    {
      this.direction = "l";
      this.x -= 10;
    }
  }
}