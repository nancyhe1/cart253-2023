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
 * Description of preload
*/
function preload() {

}


/**
 * Description of setup
*/
function setup() {
createCanvas(canvas.w,canvas.h);
rectMode(CENTER);
textAlign(CENTER);
}


/**
 * Description of draw()
*/
function draw() {
    background(198, 232, 169); //grass
    playerControls();
    
display();
}

function display() {
//player appearance
noStroke();
fill(181, 115, 209);
ellipse(player.x,player.y,player.size);

}
