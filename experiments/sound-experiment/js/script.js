/**
 * Title of Project
 * Nancy He
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let oscillator; 
let t = 0; 
let tIncrease = 0.075; 

function setup() {
  createCanvas(600, 600);
  userStartAudio();

  oscillator = new p5.Oscillator(0, `sine`);
  oscillator.amp(0.25);
}

function draw() {
  background(0);

  let perlinValue = noise(t);
  let newFreq = map(perlinValue, 0, 1, 110, 880);
  oscillator.freq(newFreq);
  t += tIncrease;

}


function mousePressed() {
  oscillator.start();
}