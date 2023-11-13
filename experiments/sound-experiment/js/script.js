/**
 * Title of Project
 * Nancy He
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let mic;
let ghost;
let clownImage;

function preload() {
  clownImage = loadImage(`assets/images/clown.png`);
}

function setup() {
  createCanvas(600, 600);

  mic = new p5.AudioIn();
  mic.start();
  ghost = createGhost(clownImage);
}

// ghostly properties
function createGhost(ghostImage) {
  let ghost = {
    x: width / 2,
    y: height / 2,
    vx: 0,
    vy: 0,
    happySpeed: 1, 
    scaredSpeed: 25, 
    image: ghostImage, 
    alpha: 50, 
    state: `happy`, 
    scaredThreshold: 0.5 
  };
  return ghost;
}

function draw() {
  background(0);

  let level = mic.getLevel();

  if (level > ghost.scaredThreshold) {
    ghost.state = `afraid`;
    ghost.vx = ghost.scaredSpeed;
  }

  // Check if the ghost is happy at the moment
  if (ghost.state === `happy`) {
    let r = random(0, 1);
    if (r < 0.1) {
      ghost.vx = random(-ghost.happySpeed, ghost.happySpeed);
      ghost.vy = random(-ghost.happySpeed, ghost.happySpeed);
    }
  }

  // Move the ghost
  ghost.x += ghost.vx;
  ghost.y += ghost.vy;

  // Display the ghost
  push();
  tint(255, ghost.alpha);
  image(ghost.image, ghost.x, ghost.y);
  pop();
}