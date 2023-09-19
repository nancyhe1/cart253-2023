/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";
let x=0;

/**
 * Description of preload
*/
function preload() {

}


/**
 * Description of setup
*/
function setup() {
createCanvas(500,500);
background(255, 200, 200);
noStroke();
angleMode(DEGREES);
}


/**
 * Description of draw()
*/
function draw() {
 background(255, 100, 100);
 rect(x, 100, 100, 100); 
 x += 3;
 if (x>width) (
    x=0
)
}