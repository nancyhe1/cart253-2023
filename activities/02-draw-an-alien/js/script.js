/**
 * Activity 2: Draw an alien
 * Nancy He
 * 
 * 
 * Draws an alien on the canvas, I drew the alien from Toy Story.
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

//Draw a body
noStroke();
fill(105, 149, 207);
ellipse(320, 480, 450, 300);

//Draw the collar
fill(183, 111, 237);
ellipse(320, 300, 410, 300);

//Draw a face
fill(187, 250, 160);
ellipse(320, 240, 500, 300);

//Draw the eyes
fill(250);
ellipse(180, 240, 90, 90);
ellipse(320, 220, 90, 90);
ellipse(460, 240, 90, 90);

//Draw the pupils
fill(0);
ellipse(180, 240, 60, 60);
ellipse(320, 220, 60, 60);
ellipse(460, 240, 60, 60);

//Draw the mouth
stroke(0);
strokeWeight(5);
line(250, 310, 320, 350);
line(320, 350, 390, 310);

//Draw the ears
noStroke();
fill(187, 250, 160);
triangle(60, 310, 30, 60, 120, 240);
triangle(520, 240, 610, 60, 580, 310);

//Draw the anthena
triangle(300, 100, 320, 30, 340, 100);
circle(320, 30, 30);
}


/**
 * Does nothing
*/
function draw() {

}