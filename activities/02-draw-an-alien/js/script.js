/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

/**
 * Description of preload
*/
function preload() {

}


/**
 * Description of setup
*/
function setup() {
createCanvas(640, 480);
background(240, 173, 197);

//draw a grey body
noStroke();
fill(146, 148, 147);
ellipse(320, 480, 400, 300);

//draw a darker grey face
fill(125, 125, 125);
ellipse(320, 240, 260, 360);

//draw the black eyes
fill(0)
ellipse(240,240, 80, 200);
ellipse(400, 240, 80, 200);

//draw the nostrils
ellipse(310,300,10,20);
ellipse(330,300,10,20);

//draw the mouth
stroke(200, 0, 0);
strokeWeight(5);
rectMode(CENTER);
rect(320, 370, 100, 25);
}


/**
 * Description of draw()
*/
function draw() {

}