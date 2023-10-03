/**
 * Title of Project
 * Nancy He
 * 
 *  - How does keyReleased() work?
 - text() alignment
 - When to use dist()?
 - Movement based on angle and speed (polar coordinates)
 - Making one shape follow another

 */

"use strict";

let bg = 127;

function setup() {
    createCanvas(800, 350);
}

function draw() {
    background(bg);
}

function keyPressed() {
    if (key === `p`) {
        bg = 200;
    }
}


function keyReleased() {
    if (key === `p`) {
        bg = 0;
    }
}