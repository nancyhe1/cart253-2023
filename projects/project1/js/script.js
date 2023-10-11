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
    background(198, 232, 169); //grass
    playerControls();
    
display();
}
//player controls
function playerControls() {
    if (keyIsDown(65)) { //key code for 'A'
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


function display() {
//player appearance
noStroke();
fill(181, 115, 209);
ellipse(player.x,player.y,player.size);

}

