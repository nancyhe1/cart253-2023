/**
 * Title of Project
 * Nancy He
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let synth;
let notes = [`F4`, `G4`, `Ab4`, `Bb4`, `C4`, `Db4`, `Eb4`, `F5`];
let currentNote = 0;
let interval;

function setup() {
  createCanvas(600, 600);
  userStartAudio();

  synth = new p5.PolySynth();
}

function draw() {
  background(0);
}

// mousePressed() starts and stops our piano playing
function mousePressed() {
  if (interval === undefined) {
    interval = setInterval(playNextNote, 500);
  }
  else {
    clearInterval(interval);
    interval = undefined;
  }
}

// playNextNote() plays the next note in our array
function playNextNote() {
  let note = notes[currentNote];
  synth.play(note, 0.2, 0, 0.4);
  currentNote = currentNote + 1;
  if (currentNote === notes.length) {
    currentNote = 0;
  }
}