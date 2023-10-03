/**
 * Title of Project
 * Nancy He
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";
let bg = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(bg);

  textAlign(CENTER, CENTER);
  textSize(64);
  fill(255);
  text(keyCode, 250, 250);
}

// keyPressed() is called whenever a key is pressed!
function keyPressed() {
   if (keyCode === UP_ARROW) {
    bg = bg +10;
    bg = constrain(bg,0,255);
   }
   else if (keyCode === DOWN_ARROW) {
    bg = bg-10;
    bg = constrain(bg,0,255);
   }
}