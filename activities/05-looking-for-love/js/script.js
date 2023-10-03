/**
 * Activity 5: Looking for love
 * Nancy He
 * 
 * simple love game with 2 circles
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

let state = 'title'; // can be: title, simulation, love , sadness

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

if (state === 'title') {
title();
}
else if (state === 'simulation') {
    simulation();

}
else if (state === 'love') {
love();
}
else if (state === 'sadness') {
sadness();
}
}

function title() {
    push();
    textSize(64)
    fill(200,100,100);
    textAlign(CENTER,CENTER);
    text('LOVE?', width/2, height/2);
    pop();
}

function simulation() {
move();
checkOffScreen();
checkOverlap();
display();

}

function love() {
    push();
    textSize(64)
    fill(200,100,100);
    textAlign(CENTER,CENTER);
    text('LOVE!', width/2, height/2);
    pop();
}

function sadness() {
    push();
    textSize(64)
    fill(127);
    textAlign(CENTER,CENTER);
    text(';((', width/2, height/2);
    pop(); 
}

function move() {
    //move the circles
circle1.x = circle1.x + circle1.vx;
circle1.y = circle1.y + circle1.vy;

circle2.x = circle2.x + circle2.vx;
circle2.y = circle2.y + circle2.vy;
}

function checkOffScreen() {
    //check if the circles have gone offscreen
    if (isOffScreen(circle1) || isOffScreen(circle2)) {
    state = 'sadness';
};
}
function isOffScreen(circle) {
    if (circle.x < 0 || circle.x > width || circle.y < 0 || circle.y > height) {
        return true;
    }
    else {
        return false;
    }
}
function checkOverlap() {
    //check if the circles overlap
let d = dist(circle1.x,circle1.y,circle2.x,circle2.y);
if (d < circle1.size/2 + circle2.size/2) {
    state = 'love';
}
}

function display() {
//display the circles
ellipse(circle1.x, circle1.y, circle1.size);
ellipse(circle2.x, circle2.y, circle2.size);
}

function mousePressed() {
    if (state === 'title') {
        state = 'simulation';
    }
}