/**
 * Title of Project
 * Nancy He
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let barkSFX;
// Whether to display "BARK!"
let showBarkText = false;

function preload() {
  barkSFX = loadSound(`assets/sounds/bark.wav`);
}

function setup() {
  createCanvas(600, 600);
  userStartAudio();

  // Add cues to our sound at specific times (in seconds)
  barkSFX.addCue(0.1, showBark);
  barkSFX.addCue(0.3, hideBark);
  barkSFX.addCue(0.4, showBark);
  barkSFX.addCue(0.7, hideBark);
}

function draw() {
  background(0);

  if (showBarkText) {
    push();
    fill(255);
    textSize(64);
    textAlign(CENTER, CENTER);
    text(`BARK!`, width / 2, height / 2);
    pop();
  }
}

function showBark() {
  showBarkText = true;
}

function hideBark() {
  showBarkText = false;
}

function mousePressed() {
  barkSFX.play();
}