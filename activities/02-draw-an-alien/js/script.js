/**
 * Activity 2: Draw an alien
 * Nancy He
 * 
 * 
 * Draws an alien on the canvas
 */

"use strict";

/**
 * Does nothing
*/
function preload() {

}


/**
 * Draw an alien
*/
function setup() {
createCanvas(640, 480);
background(240, 173, 197);

//Draw a grey body
noStroke();
fill(146, 148, 147);
ellipse(320, 480, 400, 300);

//Draw a darker grey face
fill(125, 125, 125);
ellipse(320, 240, 260, 360);

//Draw the black eyes
fill(0)
ellipse(240,240, 80, 200);
ellipse(400, 240, 80, 200);

//Draw the nostrils
ellipse(310,300,10,20);
ellipse(330,300,10,20);

//Draw the mouth
stroke(200, 0, 0);
strokeWeight(5);
rectMode(CENTER);
rect(320, 370, 100, 25);
}


/**
 * Does nothing
*/
function draw() {

}