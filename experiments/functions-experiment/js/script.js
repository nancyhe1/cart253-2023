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

   // Check if the a key (code 65) is currently pressed
   if (keyIsDown(65)) {
    // If it is, display a square
    rectMode(CENTER);
    rect(width / 2, height / 2, 100, 100);
  }
  // Otherwise check if the b key (code 66) is currently pressed
  else if (keyIsDown(66)) {
    // If it is, display a circle
    ellipse(width / 2, height / 2, 100, 100);
  }
}