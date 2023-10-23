/**
 * Title of Project
 * Nancy He
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let music;

function preload() {
  music = loadSound(`assets/sounds/bark.wav`);
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);
}

function mousePressed() {
  tryMusic();
}

function keyPressed() {
  tryMusic();
}

function tryMusic() {
  // Play music if this is the first interaction
  if (!music.isPlaying()) {
    music.loop();
  }
}