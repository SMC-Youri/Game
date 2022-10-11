function setup() {
  createCanvas(1500, 800);
  textFont("atari", 25);
  textSize(40);
}

function preload() {
  //FONT
  atari = loadFont('atari.otf');

  //BACKGROUND
  jungle = loadImage('background/jungle.jpg');
  mario_bros = loadImage('background/mario_bros.jpg');
  luigi_mansion = loadImage('background/luigi_mansion.jpg');
  eldin_bridge = loadImage('background/legend_of_zelda.jpg');
  donkey_kong_original = loadImage('background/dk.jpg');
  char_sel = loadImage('background/char_sel.jpg');
  title = loadImage('background/title.jpg');

 //CHARACTERS
  img2 = loadImage('characters/dk_r.png');
  img3 = loadImage('characters/dk_l.png');
  img16 = loadImage('characters/dk_j_r.png');
  img22 = loadImage('characters/dk_j_l.png');
  
  img4 = loadImage('characters/diddy_r.png');
  img5 = loadImage('characters/diddy_l.png');
  img17 = loadImage('characters/diddy_j_r.png');
  img23 = loadImage('characters/diddy_j_l.png');
    
  img6 = loadImage('characters/mario_r.png');
  img7 = loadImage('characters/mario_l.png');
  img18 = loadImage('characters/mario_j_r.png');
  img24 = loadImage('characters/mario_j_l.png');
  
  img8 = loadImage('characters/luigi_r.png');
  img9 = loadImage('characters/luigi_l.png');
  img19 = loadImage('characters/luigi_j_r.png');
  img25 = loadImage('characters/luigi_j_l.png');
    
  img10 = loadImage('characters/link_r.png');
  img11 = loadImage('characters/link_l.png');
  img20 = loadImage('characters/link_j_r.png');
  img26 = loadImage('characters/link_j_l.png');
    
  img12 = loadImage('characters/kirby_r.png');
  img13 = loadImage('characters/kirby_l.png'); 
  img21 = loadImage('characters/kirby_j_r.png');
  img27 = loadImage('characters/kirby_j_l.png');

  //OBJECTS
  img1 = loadImage('ball/banana.png');
  img14 = loadImage('ball/bananas.png');
  img15 = loadImage('ball/coconut.png');
  coin = loadImage('ball/coin.png');
  mushroom = loadImage('ball/mushroom.png');
  shell = loadImage('ball/shell.png');
  ghost = loadImage('ball/ghost.png');
  dark_moon = loadImage('ball/dark_moon.png');
  gem = loadImage('ball/gem.png');
  bomb = loadImage('ball/bomb.png');
  tri_force = loadImage("ball/triforce.png");
  star = loadImage("ball/star.png");
  barrel = loadImage("ball/barrel.png");

  //CHARACTER SOUNDS
  jump = loadSound('sounds/jump.mp3');
  mario = loadSound('sounds/mario.mp3');
  link = loadSound('sounds/link.mp3');
  kirby = loadSound('sounds/kirby.mp3');
  dk = loadSound('sounds/dk.mp3');
  diddy = loadSound('sounds/diddy.mp3');
  luigi = loadSound('sounds/luigi.mp3');

  //BACKGROUND THEMES
  mario_theme = loadSound('themes/mario_theme.mp3');
  kirby_theme = loadSound('themes/kirby_theme.mp3');
  dk_theme = loadSound('themes/dk_theme.mp3');
  luigi_theme = loadSound('themes/luigi_theme.mp3');
  link_theme = loadSound('themes/link_theme.mp3');
  diddy_theme = loadSound('themes/diddy_theme.mp3');
  smash_theme = loadSound('themes/smash_theme.mp3');

  //OBJECT SOUNDS
  splat = loadSound('sounds/fail.mp3');
  coconut = loadSound('sounds/coconut.mp3');
  collect = loadSound('sounds/collect.mp3');
  collects = loadSound('sounds/collects.mp3');

  //MENU SOUNDS
  menuOk = loadSound('sounds/menuOk.mp3');
  dead = loadSound('sounds/dead.mp3');
  victory = loadSound('sounds/victory.mp3');

  //GAMECUBE
  gamecube = loadSound('sounds/gamecube.mp3');
  gamecube_gif = loadImage('gamecube.gif');
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
var song;
var multiballs = [];
var coconuts = [];
var isTwoPlayer = false;
var i = 0;


function draw() {
  i = i + 1
  
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
    OnePlayer();
  }

  if (gameState == 4) {
    newLevel();
  }

  if (gameState == 5){
    cube_anim();
  }

  if (gameState == 8) {
    gameover();
    song.stop();
  }

  if (gameState == 9) {
    newhighscore();
    song.stop();
  }

  if (score >= 25 && score <= 30 && gameplay_background == jungle) {
    gameState = 4;
    victory.play();
    song.stop();
  }

  if (score >= 50 && score <= 55 && gameplay_background == mario_bros) {
    gameState = 4;
    victory.play();
    song.stop();
  }

  if (score >= 75 && score <= 80 && gameplay_background == luigi_mansion) {
    gameState = 4;
    victory.play();
    song.stop();
  }

  if (score >= 100 && score <= 105 && gameplay_background == eldin_bridge) {
    gameState = 4;
    victory.play();
    song.stop();
  }

  if (score >= 0){
    gameplay_background = jungle;
    fall_ball = img1;
    fall_balls = img14;
    fall_enem = img15;
  }
  
  if (score >= 25 && score <= 50){
    gameplay_background = mario_bros;
    fall_ball = coin;
    fall_balls = mushroom;
    fall_enem = shell;
    song = mario_theme;
  }

  if (score >= 50 && score <= 75){
    gameplay_background = luigi_mansion;
    fall_ball = coin;
    fall_balls = dark_moon;
    fall_enem = ghost;
    song = luigi_theme;
  }

  if (score >= 75){
      gameplay_background = eldin_bridge;
      fall_ball = gem;
      fall_balls = tri_force;
      fall_enem = bomb;
      song = link_theme;
    }

  if (score >= 100){
      gameplay_background = donkey_kong_original;
      fall_ball = coin;
      fall_balls = star;
      fall_enem = barrel;
      song = dk_theme;
    }
}

function menu() {
  background(title);
  fill('white');
  text('NINTENDO ALL-STARS', 400, 200);
  text('1 PLAYER GAME', 515, 550);
  text('2 PLAYER GAME', 515, 650);
}

function OnePlayer() {
  background(0);

  if (i % 80 === 0){
  	fill(0);
   text('PRESS ENTER TO START', 375, 450);
  } else {
    fill(255);
    text('PRESS ENTER TO START', 375, 450);
  }
}

function newLevel() {
  background(0);

  if (i % 80 === 0){
  	fill(0);
   text('PRESS ENTER TO CONTINUE', 325, 500);
   text('NEW LEVEL UNLOCKED', 430, 350)
  } else {
    fill(255);
    text('PRESS ENTER TO CONTINUE', 325, 500);
    text('NEW LEVEL UNLOCKED', 430, 350)
  }
}

function cube_anim() {
  background(10);
  image(gamecube_gif, 530, 275);
  
  setInterval(function(){if(gameState == 5){gameState = 3}}, 5500)
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
  background(gameplay_background);
  text("score:", 25, 45);
  text(score, 250, 45);
  text("lives:", 1220, 45);
  text(lives, 1450, 45);

  player.update();

  if (isTwoPlayer){
    player2.update();
  } 
  
  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];

    if(player.x < ball.x + bw && player.x + player.w > ball.x && player.y < ball.y + bh && player.h + player.y > ball.y){
      score += 1;
      balls.splice(i, 1);
      collect.play();
    }

    if(isTwoPlayer && player2.x < ball.x + bw && player2.x + player2.w > ball.x && player2.y < ball.y + bh && player2.h + player2.y > ball.y){
      score += 1;
      balls.splice(i, 1);
      collect.play();
    }
    
  if (ball.y >= 700){
    lives -= 1;
    balls.splice(i, 1);
    splat.play();
  } 
}

  for (let i = 0; i < multiballs.length; i++) {
    let multiBall = multiballs[i];

    if(player.x < multiBall.x + bw && player.x + player.w > multiBall.x && player.y < multiBall.y + bh && player.h + player.y > multiBall.y){
      score += 5;
      multiballs.splice(i, 1);
      collects.play();
    }

    if(isTwoPlayer && player2.x < multiBall.x + bw && player2.x + player2.w > multiBall.x && player2.y < multiBall.y + bh && player2.h + player2.y > multiBall.y){
      score += 5;
      multiballs.splice(i, 1);
      collects.play();
    }

  if (multiBall.y >= 700){
    multiballs.splice(i, 1);
    splat.play();
  } 
}

  for (let i = 0; i < coconuts.length; i++) {
    let Coconut = coconuts[i];

    if(player.x < Coconut.x + bw && player.x + player.w > Coconut.x && player.y < Coconut.y + bh && player.h + player.y > Coconut.y){
      lives -= 1;
      coconuts.splice(i, 1);
      coconut.play();
    }

    if(isTwoPlayer && player2.x < Coconut.x + bw && player2.x + player2.w > Coconut.x && player2.y < Coconut.y + bh && player2.h + player2.y > Coconut.y){
      lives -= 1;
      coconuts.splice(i, 1);
      coconut.play();
    }

  if (Coconut.y >= 700){
    coconuts.splice(i, 1);
    coconut.play();
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
    dead.play();
  }
  
  if (frameCount % 1000 == 0) {
    multiballs.push(new multiBall());
  }
  
  if (frameCount % 100 == 0) {
    balls.push(new Ball());
  }

  if (frameCount % 1500 == 0) {
    coconuts.push(new Coconut());
  }

    coconuts.forEach((d) => {
    d.draw();
  });

    multiballs.forEach((c) => {
    c.draw();
  });
  
  balls.forEach((b) => {
    b.draw();
  });
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
  if (gameState == 0 && keyCode == 49) {
    isTwoPlayer = false;
    menuOk.play();
    gameState = 5;
    gamecube.play();
  }

  if (gameState == 0 && keyCode == 50) {
    isTwoPlayer = true;
    menuOk.play();
    gameState = 5;
    gamecube.play();
  }

  if (keyCode == 27){
    gameState = 0;
    balls.length = 0;
    multiballs.length = 0;
    coconuts.length = 0;
    menuOk.play();
  }

  if (gameState == 4 && keyCode == 13){
    gameState = 2;
    balls.length = 0;
    multiballs.length = 0;
    coconuts.length = 0;
    menuOk.play();
    song.play();
  }
  
  if (gameState != 2 && keyCode == 13) {
    gameState = 1;
    balls.length = 0;
    multiballs.length = 0;
    coconuts.length = 0;
    menuOk.play();
    song = smash_theme;
    song.loop();
  }

  if (gameState == 1 && keyCode == 49) {
    player = new Player(img3, img2, img16, img22);
    player2 = new Player2(img4, img3, img17, img23);
    dk.play();
    menuOk.play();
    song.stop();
    song = diddy_theme;
    song.play();
    gameState = 2;
  }

  if (gameState == 1 && keyCode == 50) {
    player = new Player(img5, img4, img17, img23);
    player2 = new Player2(img3, img2, img16, img22);
    diddy.play();
    menuOk.play();
    song.stop();
    song = diddy_theme;
    song.play();
    gameState = 2
  }

  if (gameState == 1 && keyCode == 51) {
    player = new Player(img7, img6, img18, img24);
    player2 = new Player2(img9, img8, img19, img25);
    mario.play();
    menuOk.play();
    song.stop();
    song = diddy_theme;
    song.play();
    gameState = 2
  }

  if (gameState == 1 && keyCode == 52) {
    player = new Player(img9, img8, img19, img25);
    player2 = new Player2(img7, img6, img18, img24);
    luigi.play();
    menuOk.play();
    song.stop();
    song = diddy_theme;
    song.play();
    gameState = 2
  }

  if (gameState == 1 && keyCode == 53) {
    player = new Player(img11, img10, img20, img26);
    player2 = new Player2(img13, img12, img21, img27);
    link.play();
    menuOk.play();
    song.stop();
    song = diddy_theme;
    song.play();
    gameState = 2
  }

  if (gameState == 1 && keyCode == 54) {
    player = new Player(img13, img12, img21, img27);
    player2 = new Player2(img11, img10, img20, img26);
    kirby.play();
    menuOk.play();
    song.stop();
    song = kirby_theme;
    song.loop();
    gameState = 2
  }

  if (keyCode == 1) {
    gameState = 8;
  }

  if (keyCode == 2) {
    gameState = 9;
  }

  if (keyCode == 32 && player.y == 630 && gameState == 2) {
    player.vy -= 7;
    jump.play();
  }

  if (keyCode == 87 && player2.y == 630 && gameState == 2) {
    player2.vy -= 7;
    jump.play();
  }
}

class Ball {
  constructor() {
    this.x = random(width);
    this.y = 55;
  }
  
  draw() {
    image(fall_ball, this.x, this.y, bw, bh);
    this.y += 3;

    if (score >= 25){
      this.y = this.y + 0.5
    }

    if (score >= 50){
      this.y = this.y + 0.5
    }

    if (score >= 75){
      this.y = this.y + 0.5
    }

    if (score >= 100){
      this.y = this.y + 0.5
    }

    if (score >= 125){
      this.y = this.y + 0.5
    }
  }
}

class multiBall {
  constructor() {
    this.x = random(width);
    this.y = 55;
  }
  
  draw() {
    image(fall_balls, this.x, this.y, bw, bh);
    this.y += 5;
  }
}

class Coconut {
  constructor() {
    this.x = random(width);
    this.y = 55;
  }
  
  draw() {
    image(fall_enem, this.x, this.y, bw, bh);
    this.y += 4;
  }
}

class Player{
  constructor(left_image, right_image, jump_image_right, jump_image_left){
    this.direction = "r";
    this.x = 725;
    this.y = 630;
    this.w = 85;
    this.h = 85;
    this.leftImage = left_image;
    this.rightImage = right_image;
    this.jumpImageright = jump_image_right;
    this.jumpImageleft = jump_image_left;
    this.vy = 0;
    this.gravity = 0.2;
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
    else if(this.direction == "j_r")
    {
      image(this.jumpImageright, this.x, this.y, this.w, this.h);
    } 
    else if (this.direction == "j_l") 
    {
      image(this.jumpImageleft, this.x, this.y, this.w, this.h);
    }

    this.vy += this.gravity;

    this.y += this.vy;

    if (this.y > 630) {
      this.vy = 0;
      this.y = 630;
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
    
    if (this.y >= 629 && this.direction == "j_l"){
      this.direction = "l";
    }

    if (this.y >= 629 && this.direction == "j_r"){
      this.direction = "r"
    }

    if (this.x <= -80){
      this.x = 1499;
    }

    if (this.x >= 1500){
      this.x = -79;
    }

    if (this.y != 630 && keyIsDown(RIGHT_ARROW)){
      this.direction = "j_r"
    }
      
    if (this.y != 630 && keyIsDown(LEFT_ARROW)){
      this.direction = "j_l"
    }

    if (keyIsDown(32) && player.y <= 629 && gameState == 2 && player.direction == "l") {
      player.direction = "j_l";
    }

    if (keyIsDown(32) && player.y <= 629 && gameState == 2 && player.direction == "r") {
      player.direction = "j_r";
    }
  }
}

class Player2{
  constructor(left_image, right_image, jump_image_right, jump_image_left){
    this.direction = "r";
    this.x = 625;
    this.y = 630;
    this.w = 85;
    this.h = 85;
    this.leftImage = left_image;
    this.rightImage = right_image;
    this.jumpImageright = jump_image_right;
    this.jumpImageleft = jump_image_left;
    this.vy = 0;
    this.gravity = 0.2;
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
    else if(this.direction == "j_r")
    {
      image(this.jumpImageright, this.x, this.y, this.w, this.h);
    } 
    else if (this.direction == "j_l") 
    {
      image(this.jumpImageleft, this.x, this.y, this.w, this.h);
    }

    this.vy += this.gravity;

    this.y += this.vy;

    if (this.y > 630) {
      this.vy = 0;
      this.y = 630;
    }
  }

move()
  {
     if(keyIsDown(68))
    {
      this.direction = "r";
      this.x += 10;
    }
    else if (keyIsDown(65))
    {
      this.direction = "l";
      this.x -= 10;
    }
    
    if (this.y >= 629 && this.direction == "j_l"){
      this.direction = "l";
    }

    if (this.y >= 629 && this.direction == "j_r"){
      this.direction = "r"
    }

    if (this.x <= -80){
      this.x = 1499;
    }

    if (this.x >= 1500){
      this.x = -79;
    }

    if (this.y != 630 && keyIsDown(68)){
      this.direction = "j_r"
    }
      
    if (this.y != 630 && keyIsDown(65)){
      this.direction = "j_l"
    }

    if (keyIsDown(87) && player2.y <= 629 && gameState == 2 && player2.direction == "l") {
      player2.direction = "j_l";
    }

    if (keyIsDown(87) && player2.y <= 629 && gameState == 2 && player2.direction == "r") {
      player2.direction = "j_r";
    }
  }
}