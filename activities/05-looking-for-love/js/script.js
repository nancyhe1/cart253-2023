/**
 * Title of Project
 * Nancy He
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let circle1 = {
    x: 0,
    y: 0,
    size: 100,
    vx: 0,
    vy: 0,
    speed:5,
};

let circle2 = {
    x: 0,
    y: 0,
    size: 100,
    vx: 0,
    vy: 0,
    speed:5,
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
createCanvas(windowWidth,windowHeight);

circle1.x = width/3;
circle1.y = height/2;

circle2.x = width*2/3;
circle2.y = height/2;

//start circles moving in random direction
circle1.vx = random(-circle1.speed,circle1.speed);
circle2.vx = random(-circle2.speed,circle2.speed);
circle1.vy = random(-circle1.speed,circle1.speed);
circle2.vy = random(-circle2.speed,circle2.speed);
}


/**
 * Description of draw()
*/
function draw() {
background(0);
//move the circles
circle1.x = circle1.x + circle1.vx;
circle1.y = circle1.y + circle1.vy;

circle2.x = circle2.x + circle2.vx;
circle2.y = circle2.y + circle2.vy;

//check if the circles have gone offscreen
if (circle1.x < 0 || circle1.x > width || circle1.y < 0 || circle1 > height ||circle2.x < 0 || circle2.x > width || circle2.y < 0 || circle2 > height );

//display the circles
ellipse(circle1.x, circle1.y, circle1.size);
ellipse(circle2.x, circle2.y, circle2.size);

}