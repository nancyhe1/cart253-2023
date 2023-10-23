/**
 * Title of Project
 * Nancy He
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let barkSFX;

/**
 * Description of preload
*/
function preload() {
barkSFX = loadSound('assets/sounds/bark.wav');
}


/**
 * Description of setup
*/
function setup() {
createCanvas(500,500);
}


/**
 * Description of draw()
*/
function draw() {
background(0);
}

function mousePressed() {
    barkSFX.play();
}