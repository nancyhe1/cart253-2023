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
        a: 255
    },
    active: false
};

function preload() {

}

function setup() {
    createCanvas(800, 200);
    angleMode(DEGREES);
}

function draw() {
    background(172, 242, 178);

    if (square.active) {
        rectMode(CENTER);
        noStroke();
        fill(square.fill.r, square.fill.g, square.fill.b, square.fill.a);
        rect(square.x, square.y, square.size);
    }
}

function mouseMoved() {
    if (square.active === false) {
        square.x = mouseX;
        square.y = mouseY;
        square.active = true;
    }
}

function mouseClicked() {
    square.x = mouseX;
    square.y = mouseY;
}