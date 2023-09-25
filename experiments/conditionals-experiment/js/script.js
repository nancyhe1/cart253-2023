/**
 * Title of Project
 * Nancy He
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let displayCircle = false;

function setup() {
  createCanvas(500,500);
}

function draw() {
  background(0);

  if (mouseIsPressed) {
    displayCircle = true;
  }

  if (displayCircle) {
    ellipse(250,250,100,100);
  }
  
}
