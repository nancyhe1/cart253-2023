/**
 * Title of Project
 * Nancy He
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";
let hello = {
    string: `Hello, World!`,
    x:0,
    y:0,
    vx:5,
    vy:1,
    size:64,
};

function setup() {
    createCanvas(500,500);
  }
  
  function draw() {
    background(0);

    hello.x = hello.x+hello.vx;
    hello.y = hello.y+hello.vy;
    hello.size = hello.size + 1;

    textAlign(CENTER,CENTER);
    textSize(hello.size);
    textStyle(BOLD);

    stroke(50,200,50);
    strokeWeight(3);

    fill(200,50,200);
    text(hello.string,hello.x,hello.y);
  }