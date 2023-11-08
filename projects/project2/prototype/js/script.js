/**
 * Title of Project
 * Nancy He
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let pet;

/**
 * Description of preload
*/
function preload() {

}


/**
 * Description of setup
*/
function setup() {
createCanvas(windowWidth, windowHeight);

let pet = new Pet(windowWidth/2,windowHeight/2);

}


/**
 * Description of draw()
*/
function draw() {
    background(0);
    
    pet.display();

}