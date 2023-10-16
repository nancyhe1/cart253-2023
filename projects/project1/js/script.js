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
let canvas = {
  w:1000,
  h:800,
}
let instructionBox = {
  x:0,
  y:0,
  w:250,
  h:800,
}
let seedBag = {
  x:75,
  y:75,
  size:200,
  image: undefined,
}
let waterCan = {
  x:150,
  y:75,
  size:200,
  image: undefined,
  pour: undefined,
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
seedBag.image = loadImage("assets/images/seed-bag.png");
waterCan.image = loadImage("assets/images/can.png");
waterCan.pour = loadImage("assets/images/water.png");

}


/**
 * setting up the canvas
*/
function setup() {
  canvas.w=windowWidth;
  canvas.h=windowHeight;
createCanvas(canvas.w,canvas.h);
rectMode(CENTER);
textAlign(CENTER);
noCursor();
waterCan = createDraggableShape(waterCan.x,waterCan.y);
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
  //drawing the ground
  fill(135, 79, 15);
  rect(width/2-100,height*3/5,canvas.w-400,canvas.h-200);//dirt
  //drawing the seed of bag
  image(seedBag.image,seedBag.x,seedBag.y,seedBag.size,seedBag.size);
  display(); 
  instruction();
 water();
} 
function instruction() {
  instructionBox.x = width*9/10+20;
  instructionBox.y = height/2; 
  let controlText ="-To plant a seed, drag the seed to the dirt and press 'P' -To water the plant, hover over the plant and press 'W'"
  fill(255);
  rect(instructionBox.x,instructionBox.y,instructionBox.w,instructionBox.h);
  textSize(20);
  fill(0);
  text(controlText,instructionBox.x,instructionBox.y,instructionBox.w,instructionBox.h);
}

function water() {
  if (keyIsDown(87)) { //use 'W' key
    image(waterCan.pour,waterCan.x,waterCan.y,waterCan.size,waterCan.size);
  }
  else {
    image(waterCan.image,waterCan.x,waterCan.y,waterCan.size,waterCan.size);
  }
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
  text('Press any key to Start', width/2,height/2+40);
  pop();
}

function display() {
  if (mouseIsPressed === true) {// when the mouse is pressed the glove will appear closed
    image(player.texture2,player.x,player.y,player.size,player.size);
  }
  else {
//player appearance
noStroke();
imageMode(CENTER);
image(player.texture,player.x,player.y,player.size,player.size);
  } //when it is not pressed the glove is open
}

function keyPressed() {
  if (state === 'title') {
      state = 'simulation';
  } 
}







