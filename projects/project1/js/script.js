/**
 * Title of Project
 * Nancy He
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";
//setting up my variables
//player
let player = {
    x: 400,
    y: 375,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 5,
}
let canvas = {
    w:700,
    h:500,
}
let state = 'title'; //can be: title...

/**
 * loading images
*/
function preload() {

}


/**
 * setting up the canvas
*/
function setup() {
createCanvas(canvas.w,canvas.h);
rectMode(CENTER);
textAlign(CENTER);
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
  display(); 
}
//player controls
function playerControls() {
    if (keyIsDown(65)) { //key code for 'A'
      console.log("A is pressed");
        player.vx = -player.speed;
      }
      else if (keyIsDown(68)) { //keycode for 'D' 
        
        player.vx = player.speed;
      }
      else {
        player.vx = 0;
      }
      if (keyIsDown(87)) { //keycode for 'W'
        player.vy = -player.speed;
      }
      else if (keyIsDown(83)) { //keycode for 'S' 
        player.vy = player.speed;
      }
      else {
        player.vy = 0;
      }
player.x = player.x + player.vx;
player.y = player.y + player.vy; 
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
//player appearance
noStroke();
fill(181, 115, 209);
ellipse(player.x,player.y,player.size);

}

function keyPressed() {
  if (state === 'title') {
      state = 'simulation';
  }
  
}

