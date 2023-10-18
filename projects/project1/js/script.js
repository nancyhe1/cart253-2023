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
    x: undefined,
    y: undefined,
    size:125,
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
  x:undefined,
  y:undefined,
  w:175,
  h:600,
} 
let pot = {
  x:undefined,
  y:undefined,
  size:400,
  image: undefined,
  active: true
}
let seedBag = {
  x:undefined,
  y:undefined,
  size:250,
  image: undefined,
  active:true 
}
let waterCan = {
  x:undefined,
  y:undefined,
  size:250,
  image: undefined,
  pour: undefined,
  active: true 
}
let plant = {
  x:undefined,
  y:undefined,
  size:200,
  image: undefined,
  sprout: undefined,
  active: true 
}
let shovel = {
  x:undefined,
  y:undefined,
  size:250,
  image: undefined,
  active: true 
}
let dirt = {
  x:undefined,
  y:undefined,
  size:400,
  image:undefined,
  active: true,
}
let state = 'title'; //can be: title...
//let customFont;

/**
 * loading images
*/
function preload() {
player.texture = loadImage("assets/images/gardening-glove.png");
player.texture2 = loadImage("assets/images/closed-glove.png");
seedBag.image = loadImage("assets/images/seed-bag.png");
waterCan.image = loadImage("assets/images/can.png");
waterCan.pour = loadImage("assets/images/water.png");
//plant.sprout = loadImage("assets/images/sprout.png");
shovel.image = loadImage("assets/images/shovel.png");
dirt.image = loadImage("assets/images/potwithdirt.png")
pot.image = loadImage("assets/images/pot.png");
}


/**
 * setting up the canvas
*/
function setup() {
  createCanvas(canvas.w,canvas.h);
  rectMode(CENTER);
  textAlign(CENTER);
  noCursor();
  toolSetUp();
}


/**
 * all the game animation
*/
function draw() {
  playerControls();
  // displaying different states   
  if (state === 'title') {
    title();
  }
  else if (state === 'simulation') {
    simulation();
  }
}
function toolSetUp() {
  pot.x = width/2;
  pot.y = height/2+200;
  seedBag.x= 150;
  seedBag.y= 100;
  waterCan.x = 150;
  waterCan.y = 300;
  shovel.x = 150;
  shovel.y = 500;
}

//simulation
function simulation() {
  background(198, 232, 169); //grass
  instruction();
  displayImage(); 
} 

function instruction() {
  instructionBox.x = width*8/9;
  instructionBox.y = height/2; 
  let controlText ="-First put some dirt in the pot with the help of the shovel -To plant a seed, drag the seed to the dirt and press 'P' -To water the plant, hover over the plant and press 'W', it will grow as you water it"
  fill(255);
  rect(instructionBox.x,instructionBox.y,instructionBox.w,instructionBox.h);
  textSize(20);
  fill(0);
  text(controlText,instructionBox.x,instructionBox.y+50,instructionBox.w,instructionBox.h);
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
  
  
  function displayImage() {
    //drawing the pot
  image(pot.image,pot.x,pot.y,pot.size,pot.size);
  
  //drawing the seed of bag
  image(seedBag.image,seedBag.x,seedBag.y,seedBag.size,seedBag.size);
  
  // drawing the shovel
  image(shovel.image,shovel.x,shovel.y,shovel.size,shovel.size);
  
  //watercan
  if (keyIsDown(87)) { //use 'W' key
    image(waterCan.pour,waterCan.x,waterCan.y,waterCan.size,waterCan.size);
  }
  else {
    image(waterCan.image,waterCan.x,waterCan.y,waterCan.size,waterCan.size);
  }
  
  //player display (glove)
  if (mouseIsPressed === true) { // when the mouse is pressed the glove will appear closed
    image(player.texture2,player.x,player.y,player.size,player.size);
  }
  else { //when it is not pressed the glove is open
    noStroke();
    imageMode(CENTER);
    image(player.texture,player.x,player.y,player.size,player.size);
  } 
}

function shoveling() {
  //drawing the pot with dirt
  image(dirt.image, dirt.x, dirt.y, dirt.size, dirt.size);
  dirt.x = width/2;
  dirt.y = height/2+200; 
}

function keyPressed() {
  if (state === 'title') {
    state = 'simulation';
    if(keyCode === 83) {
      state = 'growth1';
    }
  } 
}

function DraggingSeedBad() {
      if (seedBag.isBeingDragged) {
          seedBag.x = mouseX + seedBag.offSetX;
          seedBag.y = mouseY + seedBag.offSetY;
  
          seedBag.x = constrain(seedBag.x, 0, width);
          seedBag.y = constrain(seedBag.y, 0, height);
      }
  }
function mouseDragged() {
  if ((mouseX > waterCan.x - 100) && (mouseX < waterCan.x + 100)) {
    if ((mouseY > waterCan.y - 100) && (mouseY < waterCan.y + 100)) {
      waterCan.x = mouseX;
      waterCan.y = mouseY;
    }
  }
  if ((mouseX > shovel.x - 100) && (mouseX < shovel.x + 100)) {
    if ((mouseY > shovel.y - 100) && (mouseY < shovel.y + 100)) {
      shovel.x = mouseX;
      shovel.y = mouseY;
    }
  }
  if ((mouseX > seedBag.x - 100) && (mouseX < seedBag.x + 100)) {
    if ((mouseY > seedBag.y - 100) && (mouseY < seedBag.y + 100)) {
      seedBag.x = mouseX;
      seedBag.y = mouseY;
    }
  }
}
 