//Press a button to choose your path
//See the README file for more information

/* VARIABLES */
let instructButton, startGameButton, backButton, mini1Button, clue1Button, main2Button, mini2Button, clue2Button, main3Button, suspect1Button, suspect2Button;
let backgroundImg, instructImg, backImg, mainImg, clue1Img, clue2Img, hope1Img, suspectImg;
let screen = 0;
let player1, ground, monster, platforms, coins;
let score = 0;


/* PRELOAD LOADS FILES */
function preload(){
  backgroundImg = loadImage("assets/background.png");
  instructImg = loadImage("assets/instruct.png");
  backImg = loadImage("assets/button.png");
  monsterImg = loadImage("assets/monster.png");
  mainImg = loadImage("assets/mainS.png");
  clue1Img = loadImage("assets/clue1.png");
  clue2Img = loadImage("assets/Clue2.png");
  hope1Img = loadImage("assets/hope2.jpg");
  suspectImg = loadImage("assets/suspect.png");

}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(950, 540);
  textAlign(CENTER);
  textSize(20);
  noStroke();
  
  //Create Buttons for all screens 
  //Instructions Button
  instructButton = new Sprite(width/2 - 100, height/2 + 170, 120, 50, 'k');
  instructButton.color = color(255, 187, 51);

  //Start Game Button
  startGameButton = new Sprite( width/2 + 100, height/ 2 + 170, 120, 50, 'k');
  startGameButton.color = color(255, 187, 51);

  //Back Button
  backButton = new Sprite(50, 50, 50, 50);
  backButton.img = backImg; //Assign the image to backButton

  //Mini Game 1 Button
  mini1Button = new Sprite(-300, -300, 50, 30, 'k');
  mini1Button.color = color(255, 187, 51);

  //Clue 1 Button
  clue1Button = new Sprite(-400, -400, 120, 50, 'k');
  clue1Button.color = color(255, 187, 51);

  //Main 2 Button
  main2Button = new Sprite(-500, -500, 120, 50, 'k');
  main2Button.color = color(255, 187, 51);

  //Mini 2 Button
  mini2Button = new Sprite(-350, -350, 50, 30, 'k');
  mini2Button.color = color(255, 187, 51);

  //Clue 2 Button
  clue2Button = new Sprite(-450, -450, 120, 50, 'k');
  clue2Button.color = color(255, 187, 51);

  //Main 3 Button
  main3Button = new Sprite(-500, -500, 120, 50, 'k');
  main3Button.color = color(255, 187, 51);

  //Suspect 1 Button
  suspect1Button = new Sprite(-550, -550, 120, 50, 'k');
  suspect1Button.color = color(255, 187, 51);

  //Suspect 2 Button
  suspect2Button = new Sprite(-600, -600, 120, 50, 'k');
  suspect2Button.color = color(255, 187, 51);

  /*WORKING ON MINI GAME 1*/
  world.gravity.y = 10;

  //Resize image
  monsterImg.resize(40, 0);

  //Create player
  player1 = new Sprite(50, 300, 40, 40);
  player1.color = 'grey';
  player1.rotationLock = true;
  player1.velocity.x = 0;
  player1.velocity.y = 0;


  //Create ground
  ground = new Sprite(150, 450, 900, 40, "s");
  ground.color = color(188, 158, 130);
  ground.friction = 0;

  //Create monster
  monster = new Sprite(monsterImg, 760, 199, "k");
  monster.friction = 0;

  //Create platforms group
  platforms = new Group();
  platforms.color = "blue";
  platforms.collider = "s";
  platforms.friction = 0;

  //Create coins group
  coins = new Group();
  coins.color = "yellow";
  coins.collider = "k";

  //Overlaps method takes in a Sprite or group name (coins), then calls a function (collect)
  player1.overlaps(coins, collect);

  //Load starting screen
  loadStartScreen();

  hope1Img.resize(450, 0);
  
}

/* DRAW LOOP REPEATS */
function draw() {
  background(0);

  //Draw Background image
  if (screen == 0) {
    showScreen0();

    //Check Instructions Button
    if (instructButton.mouse.presses()){
      print("pressed");
      showScreen1();
      screen = 1;
    } else if (startGameButton.mouse.presses()){
      print("Display screen 1");
      showScreen2();
      screen = 2;
    }
  } else if (screen == 1) {
    image(instructImg,0 ,0);

    // Draw Back Button
    backButton1();

    //Check if back Button is pressed
    if (backButton.mouse.presses()){
      showScreen0();
      screen = 0
    }
  } else if (screen == 2){
    showScreen2();

    if (mini1Button.mouse.presses()){
      print("Display Screen 2");
      showScreen3();
      screen = 3;
    }
  } else if (screen == 3){
    showScreen3();

    if (clue1Button.mouse.presses()){
      print("Display Screen 3");
      showScreen4();
      screen = 4;
    }
  } else if (screen == 4){
    showScreen4();

    if (main2Button.mouse.presses()){
      print("Display Screen 4");
      showScreen5();
      screen = 5;
    }
  } else if (screen == 5){
    showScreen5();

    if (mini2Button.mouse.presses()){
      print("Display Screen 5");
      showScreen6();
      screen = 6;
    }
  } else if (screen == 6){
    showScreen6();

    if (clue2Button.mouse.presses()){
      print("Display Screen 6");
      showScreen7();
      screen = 7;
    }
  } else if (screen == 7){
    showScreen7();

    if (main3Button.mouse.presses()){
      print("Display Screen 7");
      showScreen8();
      screen = 8;
    }
  } else if (screen == 8){
    showScreen8();

    if (suspect1Button.mouse.presses()){
      print("Display Screen 8");
      showScreen9();
      screen = 9;
    } else if (suspect2Button.mouse.presses()){
      print("Display Screen 9");
      showScreen10();
      screen = 10;
    }
  } else if (screen == 9){
    showScreen9();
  } else if (screen == 10){
    showScreen10();
  }
  
}

/* FUNCTIONS */

// Show Screen 0
function showScreen0(){
  image(backgroundImg, 0, 0);

  //Display Instruction buton
  instructButton.draw();
  fill(0);
  instructButton.text = 'Instructions';
  instructButton.pos = { x: width/2 - 100, y: height/2 + 170};

  // Display Start Game Button
  startGameButton.draw();
  fill(0);
  textSize(18);
  startGameButton.text = 'Start Game';
  startGameButton.pos = {x: width/2 + 100, y: height/2 + 170};

  backButton.pos = { x: -200, y: -200};
}

//Show Screen 1
function showScreen1(){
  image(instructImg, 0, 0);
  instructButton.pos = {x: -100, y: -100};
  startGameButton.pos = {x: -200, y: -200};
  backButton.pos = {x: 890, y: 30};
}
//Back Button
function backButton1(){
  drawSprite(backButton);
  backButton.img.resize(backButton.w, backButton.h);
}

//Show Screen 2
function showScreen2(){
  image(mainImg, 0, 0);

  fill(255, 85, 0);
  textSize(12);
  text("We need your help! A shocking crime has taken place at the Grand Museum of History.\n The museum’s renowned curator, Dr. Amelia Thompson, was found lifeless in her office. \nThe doors were locked, and there are no signs of forced entry.\nYour mission, should you choose to accept it, is to solve this perplexing mystery, \ncatch the culprit, and bring justice for Dr. Thompson.", 600, 450);
  
  //Add mini Game Button
  mini1Button.draw();
  fill(0);
  mini1Button.text = 'Next';
  mini1Button.pos = { x: width/2 + 420, y: height/2 + 220};
  
  

  //Remove Buttons
  instructButton.pos = {x: -100, y: -100};
  startGameButton.pos = {x: -200, y: -200};
  backButton.pos = {x: -300, y: -300};
}

//Show Screen 3
function showScreen3(){
  background(144, 238, 144);
  //Draw instructions and score to screen
  fill(0);
  textAlign(LEFT);
  textSize(20);
  text('Coins = ' + score, 10, 60);
  textSize(15);
  text('Collect all 12 coins to win!', 10, 30);

  //Move the player
  if (kb.presses("up")) {
    player1.vel.y = -6;
  }
  if (kb.pressing("left")) {
    player1.vel.x = -3;
  } else if (kb.pressing("right")) {
    player1.vel.x = 3;
  } else {
    player1.vel.x = 0;
  }

  //Stop player from moving outside of screen
  if (player1.x < 20) {
    player1.x = 20;
  }

  if (player1.x > 950) {
    player1.x = 950;
  }

  if (player1.y < 20){
    player1.y = 20;
  }

  //Move monster
  if (monster.y < 250) {
    monster.vel.y = 3;
  } else if (monster.y > 390) {
    monster.vel.y = -3;
  }

  //Collide with monster and restart
  if (player1.collides(monster)) {
    reset();
  }

  //Collect 12 coins and win
  if (score == 12) {
    youWin1();
  }

  //Set camera to follow player
  camera.x = player1.x + 102;
  ground.x = camera.x; 

  //Draw Sprites
  drawSprite(ground);
  drawSprite(player1);
  drawSprite(monster);
  platforms.draw();
  coins.draw();


}
function loadStartScreen() {
  platforms.removeAll();
  coins.removeAll();

  //Move player to starting position
  player1.x = 50;

  //Create two platforms
  new platforms.Sprite(110, 380, 70, 100);
  new platforms.Sprite(280, 260, 220, 40);

  //Create twelve coins coins
  new coins.Sprite(220, 220, 15);
  new coins.Sprite(260, 220, 15);
  new coins.Sprite(300, 220, 15);
  new coins.Sprite(340, 220, 15);
  new coins.Sprite(600, 370, 15);
  new coins.Sprite(640, 370, 15);
  new coins.Sprite(680, 370, 15);
  new coins.Sprite(720, 370, 15);
  new coins.Sprite(810, 370, 15);
  new coins.Sprite(850, 370, 15);
  new coins.Sprite(890, 370, 15);
  new coins.Sprite(930, 370, 15);
}

function reset() {
  score = 0;
  loadStartScreen();
}

//This function uses parameters 
function collect(player1, coin) {
  coin.remove();
  score = score + 1;
}

function youWin1() {
  //Draw sprites off screen
  monster.x = 2000;
  player1.x = 3000;

  platforms.removeAll();


  //Draw end of game text
  textSize(30);
  fill(0);
  text("You win!", width/2 - 50, height/2 - 30); 
  
  //Add Get Clue Button
  clue1Button.draw();
  fill(0);
  clue1Button.text = 'Get Clue!';
  clue1Button.pos = { x: width/ 2, y: height/2 + 180};

  //Remove Buttons
  instructButton.pos = {x: -100, y: -100};
  startGameButton.pos = {x: -200, y: -200};
  backButton.pos = {x: -300, y: -300};
  mini1Button.pos = {x: -400, y:-400};
}

//Show Screen 4
function showScreen4(){
  image(clue1Img, 0, 0);

  //Add Main 2 Button
  main2Button.draw();
  fill(0);
  main2Button.text = 'Continue';
  main2Button.pos = { x: width/2, y: height/2 + 200};

  //Removing Buttons
  instructButton.pos = {x: -100, y: -100};
  startGameButton.pos = {x: -200, y: -200};
  backButton.pos = {x: -300, y: -300};
  mini1Button.pos = {x: -400, y:-400};
  clue1Button.pos = {x: -350, y:-350};
}

//Show Screen 5
function showScreen5(){
  image(mainImg, 0, 0);

  fill(255, 85, 0);
  textSize(15);
  text("Keep moving forward Detective!! You are almost finished", 400, 450);

  
  //Draw Mini Game 2 Button
  mini2Button.draw();
  fill(0);
  mini2Button.text = 'Next';
  mini2Button.pos = { x: width/2 + 390, y: height/2 + 220};

  //Remove Buttons
  instructButton.pos = {x: -100, y: -100};
  startGameButton.pos = {x: -200, y: -200};
  backButton.pos = {x: -300, y: -300};
  mini1Button.pos  = {x: -400, y:-400};
  clue1Button.pos = {x: -350, y:-350};
  main2Button.pos = {x: -500, y: -500};
}

//Show Screen 6
function showScreen6(){
  image(hope1Img, 0, 0);



  //Display you win message
  fill(255, 0, 102);
  textAlign(CENTER);
  textSize(20);
  text("Surprise! \nNo Challenge on this level! Just for you! \nPlus you get a free clue as bonus!", width/2, height/2 + 100);

  //Add Get Clue Button
  clue2Button.draw();
  fill(0);
  clue2Button.text = 'Get Clue!';
  clue2Button.pos = { x: width/ 2, y: height/2 + 220};

  //Remove Buttons
  instructButton.pos = {x: -100, y: -100};
  startGameButton.pos = {x: -200, y: -200};
  backButton.pos = {x: -300, y: -300};
  mini1Button.pos = {x: -400, y: -400};
  clue1Button.pos = {x: -350, y: -350};
  main2Button.pos = {x: -500, y: -500};
  mini2Button.pos = {x: -450, y: -450};

}

//Show Screen 7 
function showScreen7(){
  image(clue2Img, 0, 0);

  //Draw Main 3 Button
  main3Button.draw();
  fill(0);
  main3Button.text = 'Continue';
  main3Button.pos = { x: width/2, y: height/2 + 200};
  
  //Remove Buttons
  instructButton.pos = {x: -100, y: -100};
  startGameButton.pos = {x: -200, y: -200};
  backButton.pos = {x: -300, y: -300};
  mini1Button.pos = {x: -400, y: -400};
  clue1Button.pos = {x: -350, y: -350};
  main2Button.pos = {x: -500, y: -500};
  mini2Button.pos = {x: -450, y: -450};
  clue2Button.pos = {x: -550, y: -550};
}

// Show Screen 8
function showScreen8(){
  image(suspectImg, 0, 0);

  //Draw Suspect 1 Button
  suspect1Button.draw();
  fill(0);
  suspect1Button.text = 'Sus 1';
  suspect1Button.pos = { x: width/2 -150, y: height/2 + 210};

  //Draw Suspect 2 Button
  suspect2Button.draw();
  fill(0);
  suspect2Button.text = 'Sus 2';
  suspect2Button.pos = {x: width/2 +150, y: height/2 + 210};

  //Remove Buttons
  instructButton.pos = {x: -100, y: -100};
  startGameButton.pos = {x: -200, y: -200};
  backButton.pos = {x: -300, y: -300};
  mini1Button.pos = {x: -400, y: -400};
  clue1Button.pos = {x: -350, y: -350};
  main2Button.pos = {x: -500, y: -500};
  mini2Button.pos = {x: -450, y: -450};
  clue2Button.pos = {x: -550, y: -550};
  main3Button.pos = {x: -600, y: -600};
}

function showScreen9(){
  image(mainImg, 0, 0);

  fill(255, 85, 0);
  text("Congratulations! \nYou have found the suspect!", 600, 460);

  //Remove Buttons
  instructButton.pos = {x: -100, y: -100};
  startGameButton.pos = {x: -200, y: -200};
  backButton.pos = {x: -300, y: -300};
  mini1Button.pos = {x: -400, y: -400};
  clue1Button.pos = {x: -350, y: -350};
  main2Button.pos = {x: -500, y: -500};
  mini2Button.pos = {x: -450, y: -450};
  clue2Button.pos = {x: -550, y: -550};
  main3Button.pos = {x: -600, y: -600};
  suspect1Button.pos = {x: -700, y: -700};
  suspect2Button.pos = {x: -750, y: -750};
}

//Show Screen 10
function showScreen10(){
  image(mainImg, 0, 0);

  fill(255, 85, 0);
  text("Oh, looks like you caught the wrong suspect. \nDon't worry, play the game again and be sure to catch the real culprit.", 600, 450);

  //Remove Buttons
  instructButton.pos = {x: -100, y: -100};
  startGameButton.pos = {x: -200, y: -200};
  backButton.pos = {x: -300, y: -300};
  mini1Button.pos = {x: -400, y: -400};
  clue1Button.pos = {x: -350, y: -350};
  main2Button.pos = {x: -500, y: -500};
  mini2Button.pos = {x: -450, y: -450};
  clue2Button.pos = {x: -550, y: -550};
  main3Button.pos = {x: -600, y: -600};
  suspect1Button.pos = {x: -700, y: -700};
  suspect2Button.pos = {x: -750, y: -750};
  
}
