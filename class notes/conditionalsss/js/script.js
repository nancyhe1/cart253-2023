/**
 * Title of Project
 * Nancy He
 * 
 * an object that phases in and out with alpha
 * while versus for loops
 * if versus while
 * more covid!
 * distance between a circle and a rectangle??
 * object following the mouse but not right on it
 */

"use strict";

let square = {
    x: 400,
    y: 100,
    size: 100,
    fill: {
        r: 255,
        g: 100,
        b: 100,
        a: 0
    },
    alphaChange: 10
    // alphaAngle: 0
};

/**
 * Description of preload
*/
function preload() {

}


/**
 * Description of setup
*/
function setup() {
    createCanvas(800, 200);
    angleMode(DEGREES);
}


/**
 * Description of draw()
*/
function draw() {
    background(172, 242, 178);

    // let sinValue = sin(square.alphaAngle);
    // square.fill.a = map(sinValue, -1, 1, 0, 255);

    square.fill.a += square.alphaChange;
    if (square.fill.a >= 255) {
        square.alphaChange *= -1;
    }
    else if (square.fill.a <= 0) {
        square.alphaChange *= -1;
    }

    rectMode(CENTER);
    noStroke();
    fill(square.fill.r, square.fill.g, square.fill.b, square.fill.a);
    rect(square.x, square.y, square.size);

    // square.alphaAngle += 0.8;
}