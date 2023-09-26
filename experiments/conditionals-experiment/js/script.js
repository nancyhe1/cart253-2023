/**
 * Title of Project
 * Nancy He
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";
let angle = 0;
let rectScale = 0;

function setup() {
  createCanvas(500,500);

}

function draw() {
  background(0);

  push(); 
  fill(255,0,0);
  rectMode(CENTER);
  translate(width/2,height/2)
  rotate(angle);
  scale(rectScale);
  rect(0,0,100,100);
  pop(); 
 
 angle = angle + 0.05;
 rectScale = rectScale + 0.01;
}

