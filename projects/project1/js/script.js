/**
 * Project 1
 * Nancy He
 * 
 * This is going to be a gardening simulator where you can plant seeds and grow them.
 */

"use strict";
//setting up my variables
//player
let player = {
    x: 0,
    y: 0,
    size: 75,
    vx: 0,
    vy: 0,
    speed: 5,
    texture: undefined,
    texture2: undefined,
}
let state = 'title'; //can be: title...
//let customFont;

/**
 * loading images
*/
function preload() {
  //customFont = loadFont('assets/font/YoungSerif-Regular');
player.texture = loadImage("assets/images/gardening-glove.png");
player.texture2 = loadImage("assets/images/closed-glove.png");
}


/**
 * setting up the canvas
*/
function setup() {
createCanvas(windowWidth,windowHeight);
rectMode(CENTER);
textAlign(CENTER);
//textFont(customFont);
}


/**
 * all the game animation
*/
function draw() {
   
    playerControls();
    

if (state === 'title') {
  title();
  }
  else if (state === 'simulation') {
    simulation();

}
}
function simulation() {
  background(198, 232, 169); //grass
  fill(135, 79, 15);
  rect(width/2,height/2,windowWidth-100,windowHeight-200);//dirt
  display(); 
}
//player controls
function playerControls() {
   player.x = mouseX;
   player.y = mouseY;
player.x = player.x + player.vx;
player.y = player.y + player.vy; 

//constrain the player withing the canvas
player.x = constrain(player.x,0,width);
player.y = constrain(player.y,0,height);
}
function title() {
  push();
  background(152, 213, 237);
  textSize(30);
  fill(255);
  text('Welcome to this calming Gardening Simulator!', width/2,height/2);
  textSize(20);
  text("Use 'AWSD' keys to move around",width/2,height/2+20);
  text('Press any key to Start', width/2,height/2+40);
  pop();
}

function display() {
  if (mouseIsPressed === true) {
    image(player.texture2,player.x,player.y,player.size,player.size);
  }
  else {
//player appearance
noStroke();
imageMode(CENTER);
image(player.texture,player.x,player.y,player.size,player.size);
  } // when the mouse is pressed the glove will appear closed
}

function keyPressed() {
  if (state === 'title') {
      state = 'simulation';
  }
  
}

function mouseIsPressed() {
  
}
