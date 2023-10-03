/**
 * Title of Project
 * Nancy He
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let circle = {
    x: 250,
    y: 250,
    size: 100,
    vx: 0,
    vy: 0
  }
  
  function setup() {
    createCanvas(500, 500)
    reset();
  }
  
  function draw() {
    background(0);
  
    move();
  
    let offScreen = circleIsOffScreen();
    if (offScreen) {
      reset();
    }
  
    ellipse(circle.x, circle.y, circle.size);
  }
  
  function circleIsOffScreen() {
    let result = (circle.x < 0 || circle.x > width || circle.y < 0 || circle.y > height);
    return result;
  }
  
  function move() {
    circle.x = circle.x + circle.vx;
    circle.y = circle.y + circle.vy;
  }
  
  function reset() {
    circle.x = 250;
    circle.y = 250;
    circle.vx = random(-10, 10);
    circle.vy = random(-10, 10);
  }