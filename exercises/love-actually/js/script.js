/**
 * Activity 5: Looking for love
 * Nancy He
 * 
 * simple game trying to escape the other circle
 */

"use strict";
// the player
let circle1 = {
    x: 0,
    y: 0,
    size: 100,
    vx: 0,
    vy: 0,
    speed:4,
};
// the stalker
let circle2 = {
    x: 400,
    y: 400,
    size: 75,
    vx: 0,
    vy: 0,
    speed:0.25,
    image: undefined
};
// the partner
let partner = {
    x: 0,
    y: 0,
    size: 150,
    vx: 0,
    vy: 0,
    speed:10,
}

let state = 'title'; // can be: title, simulation, love , sadness

/**
 * Description of preload
*/
function preload() {
circle2.image = loadImage("assets/images/clown.png");
}

/**
 * Description of setup
*/
function setup() {
createCanvas(windowWidth,windowHeight);
circle1.x = width/2;
circle1.y = height/2;

circle2.x = width*2/3;
circle2.y = height/3;

partner.x = width/2;
partner.y = height/2;

//start circles moving in random direction
partner.vx = random(-partner.speed,partner.speed);
partner.vy = random(-partner.speed,partner.speed);
}


/**
 * Description of draw()
*/
function draw() {
background(0);
circle1Controls();
circle2Controls();
partnerControls();

if (state === 'title') {
title();
}
else if (state === 'simulation') {
    simulation();

}
else if (state === 'catchStalker') {
catchStalker();
}
else if (state === 'protection') {
    protection();
}
else if (state === 'sadness') {
sadness();
}
}
//player controlling the circle
function circle1Controls() {
    if (keyIsDown(LEFT_ARROW)) {
        circle1.vx = -circle1.speed;
      }
      else if (keyIsDown(RIGHT_ARROW)) {
        
        circle1.vx = circle1.speed;
      }
      else {
        circle1.vx = 0;
      }
      if (keyIsDown(UP_ARROW)) {
        circle1.vy = -circle1.speed;
      }
      else if (keyIsDown(DOWN_ARROW)) {
        circle1.vy = circle1.speed;
      }
      else {
        circle1.vy = 0;
      }
}

function circle2Controls() {
   let dx = circle2.x - circle1.x;
   let dy = circle2.y - circle1.y;

   if (dx < 0) {
    circle2.vx = circle2.speed;
   }

   else if (dx > 0) {
    circle2.vx = -circle2.speed;
   }

   if (dy < 0) {
    circle2.vy = circle2.speed;
  }
  else if (dy > 0) {
    circle2.vy = -circle2.speed;
  }
}

function partnerControls() {
if (partner.x > width) {
    partner.vx = -partner.speed;
}
else if (partner.x < 0) {
    partner.vx = partner.speed;
}
if (partner.y > height) {
    partner.vy = -partner.speed;
}
if (partner.y < 0) {
    partner.vy = partner.speed;
}
}

function title() {
    push();
    textSize(40);
    fill(200,100,100);
    textAlign(CENTER,CENTER);
    text('Try to escape the creepy stalker 🤡', width/2, height/2);
    textSize(30);
    fill(255);
    text('Press any key to Start',width/2,height/2+50);
    pop();
}

function simulation() {
move();
checkOffScreen();
checkOverlap();
display();

}
  
function catchStalker() {
    push();
    textSize(64);
    fill(200,100,100);
    textAlign(CENTER,CENTER);
    text('You got caught ;((', width/2, height/2);
    pop();
}

function protection() {
    push();
    background(217, 11, 118);
    textSize(40);
    fill(255);
    textAlign(CENTER,CENTER);
    text('Yay your partner saved you!💖', width/2, height/2);
    pop();
}
//the end game
function sadness() {
    push();
    textSize(50);
    fill(127);
    textAlign(CENTER,CENTER);
    text('You think you escaped? 🤡', width/2, height/2);
    //imageMode(CENTER);
    //background(circle2.image,width/2,height/2);
    pop(); 
}

function move() {
    //move the circles
circle1.x = circle1.x + circle1.vx;
circle1.y = circle1.y + circle1.vy;

circle2.x = circle2.x + circle2.vx;
circle2.y = circle2.y + circle2.vy;

partner.x = partner.x + partner.vx;
partner.y = partner.y + partner.vy;
}

function checkOffScreen() {
    //check if the circles have gone offscreen
    if (isOffScreen(circle1) || isOffScreen(circle2)) {
    state = 'sadness';
};
}

function isOffScreen(circle) {
    //check if they go off screen
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
    state = 'catchStalker';
}
// if the partner touches the player 
let d2 = dist(partner.x, partner.y, circle2.x,circle2.y);
if (d2 < partner.size/2 + circle2.size/2) {
    state = 'protection';
}
}

function display() {
//display the circles
//circle1 the player
fill(255);
ellipse(circle1.x, circle1.y, circle1.size);
//circle2 the stalker
imageMode(CENTER);
image(circle2.image,circle2.x, circle2.y, circle2.size,circle2.size);
//circle3 the partner
fill(166, 130, 207);
ellipse(partner.x, partner.y, partner.size);
}

function keyPressed() {
    if (state === 'title') {
        state = 'simulation';
    }
    
}