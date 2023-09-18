/**
 * Excersise 1: I like to move it
 * Nancy He
 * 
 * Here is my attempt for exercise 1.
 */

"use strict";
//putting in all the variables
let bg = {
    r:0,
    g:0,
    b:0
}
let x= 0;

/**
 * Description of preload
*/
function preload() {

}


/**
 * Description of setup
*/
function setup() {
createCanvas(700,700);
background(bg.r,bg.g,bg.b);
noStroke();
angleMode(DEGREES);
//making a cat,the bongo cat!!
fill(255);
arc(350,350,200,200,180,0);
triangle(255,320,280,220,350,320);
triangle(350,320,410,220,445,320);
}


/**
 * Description of draw()
*/
function draw() {
//background
background(bg.r,bg.g,bg.b);
//circle
fill(mouseX, mouseY, mouseX);
ellipse(mouseX, 350, mouseY);
//square
fill(mouseY, mouseX, 200);
rect(x, 100, 100, 100);
x += 3;
if (x>width)(
    x=0
);

}