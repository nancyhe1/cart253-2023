/**
 * Exercise 2: Dodge em
 * Nancy He
 * 
 * this my attempt of making a covid19 dodge game.
 * 
 * images from:
 * virus image from flaticon
 * smiling emoji from emoji island
 * crying emoji from emoji island
 */

"use strict";

//Variables
let gameOver = false;

let covid19 = {
    x: 0,
    y: 0,
    size: 100,
    vx: 0,
    vy: 0,
    ax: 0,
    ay: 0,
    speed: 0.25,
    image: undefined,
    xoff: 0.0,
    yoff: 0.0
};
let user = {
    x: 250,
    y: 250,
    vx: 0,
    vy: 0,
    ax: 0,
    ay: 0,
    acceleration: 0.25,
    maxSpeed: 10,
    size: 100,
    fill: 255,
    image: undefined,
    dieImage: undefined
}

let numStatic = 1000;

/**
 * adding image to shapes
*/
function preload() {
    covid19.image = loadImage("assets/images/covid19 virus.png");
    user.image = loadImage("assets/images/smiling emoji.webp");
    user.dieImage = loadImage("assets/images/crying emoji.webp");
}

/**
 * setting up the canvas
*/
function setup() {
    createCanvas(windowWidth,windowHeight);

    covid19.y = random(0,height);
    covid19.vx = covid19.speed;

    //noCursor();
}


/**
 * making the user and covid19
*/
function draw() {
    background(0);
    
    //display static
    for (let i = 0; i < numStatic; i++) {
        let x = random(0,width);
        let y = random(0,height);
        stroke(255,255,255,90);
        strokeWeight(2);
        point(x,y);
        
    }
    for (let i = 0; i < numStatic; i++) {
        let x = random(0,width);
        let y = random(0,height);
        stroke(255);
        strokeWeight(3);
        point(x,y);
        
    }
    
    //user movement
    if (mouseX < user.x) {
        user.ax = -user.acceleration;
    }
    else {
        user.ax = user.acceleration;
    }
    if (mouseY < user.y) {
        user.ay =-user.acceleration;
    }
    else {
        user.ay = user.acceleration;
    }
    user.vx = user.vx + user.ax;
    user.vx = constrain(user.vx,-user.maxSpeed,user.maxSpeed);
    user.vy = user.vy + user.ay;
    user.vy = constrain(user.vy,-user.maxSpeed,user.maxSpeed);
    
    user.x = user.x + user.vx;
    user.y = user.y + user.vy;
    
    //covid movement

    covid19.x += user.x;
    covid19.y += user.y;
   
    covid19.xoff = covid19.xoff + 0.01;
    covid19.x = noise(covid19.xoff) * width;
    covid19.yoff = covid19.yoff + 0.03;
    covid19.y = noise(covid19.yoff)* height;
    
    
    //Display covid19
    imageMode(CENTER)
    image(covid19.image,covid19.x,covid19.y,covid19.size,covid19.size);

    //display user
    image(user.image,user.x,user.y,user.size,user.size);
    
    //check for catching covid19
    let d = dist(user.x,user.y,covid19.x,covid19.y);
    if (d < covid19.size/2 + user.size/2) {
        gameOver = true;
        noLoop();
        //changing the user image
        image(user.dieImage,user.x,user.y,user.size,user.size);
        //adding text to the game over
        textAlign(CENTER);
        textSize(40);
        text('YOU CAUGHT COVID!', windowWidth/2, windowHeight/2);
        
        //click tp restart text
        textSize(30);
        fill(255);
        text('CLICK TO RESTART',windowWidth/2,windowHeight/2+50);

    }

}

function mouseClicked() {
if (gameOver) {
    location.reload();
}
}
