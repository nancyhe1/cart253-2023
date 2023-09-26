/**
 * Title of Project
 * Nancy He
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";
let clownImage;

function preload() {
  clownImage = loadImage("assets/images/slown.png");
}

function setup() {
  createCanvas(500,500);

}

function draw() {
  background(0);

  imageMode(CENTER);
  image(clownImage,mouseX,mouseY)
}

