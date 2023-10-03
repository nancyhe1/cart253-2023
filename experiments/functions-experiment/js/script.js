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
    vx: 0,
    vy: 0,
    speed: 2,
    size: 100
  }
  
  function setup() {
    createCanvas(500, 500);
  }
  
  function draw() {
      background(0);

      let change = random();
      if (change < 0.1) {
      
      circle.vx = random(-circle.speed,circle.speed);
      circle.vy = random(-circle.speed,circle.speed);
      }
  
    circle.x = circle.x + circle.vx;
    circle.y = circle.y + circle.vy;
  
    ellipse(circle.x, circle.y, circle.size);
  }