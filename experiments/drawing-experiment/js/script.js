/**
 * Drawing Experiments
 * Nancy He
 * 
 *
 * Experimenting with p5's drawing and color
 * 
 * Currently drawing a face.
 */

"use strict";

/**
 * Description of preload
*/
function preload() {

}


/**
 * Drawing a face on the canvas.
*/
function setup() {
createCanvas(500,500);

// Set the background to purple
background(150, 100, 255);

// Draw a flesh-colored head
fill(250, 200, 200);//the flesh color
ellipse(250, 250, 200, 200);//the head

// Draw the eyes (black as the void of space)
fill(0);
ellipse(200,250,30,30);
ellipse(300,250,30,30);

// Draw the mouth
strokeWeight(10);
line(200, 300, 300, 300);
}


/**
 * Description of draw()
*/
function draw() {

}