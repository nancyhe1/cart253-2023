/**
 * Title of Project
 * Nancy He
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";
let clown = {
  x: 250,
  y: 250,
  size: 100,
  image: undefined // Not loaded yet
};

function preload() {
  // Load the clown image
  clown.image = loadImage("assets/images/clown.png");
}

function setup() {
  createCanvas(500,500);
}

function draw() {
  background(0);

  // Position the clown at the mouse position
  clown.x = mouseX;
  clown.y = mouseY;

  // Display the clown (we're using the size arguments so we can change size)
  imageMode(CENTER);
  image(clown.image,clown.x,clown.y,clown.size,clown.size);
}

function mousePressed() {
  // Increase the clown's size when the user clicks
  clown.size = clown.size + 50;
}

