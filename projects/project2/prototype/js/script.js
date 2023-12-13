/**
 * project 2
 * Nancy He
 * 
 * this is a cute little dodging game, you will have to catch some positive energy items and avoid the negative objects
 */

"use strict";

let state = `title`; //Can be title, living room, bedroom, end
let bg;
let player;
// the good objects
let goods = [];
let numGood = 10;
let goodCounter = 0;
//the bad objects
let bullets = [];
let numBullets = 10;
let bulletCounter = 0;

/**
 * Description of preload
*/
function preload() {
    bg = loadImage("assets/images/background-sky.png");
    Player.loadImage();
}


/**
 * Description of setup
*/
function setup() {
    createCanvas(1000, 600);
    player = new Player(width/2,height*4/5-20);
    
}


/**
 * Description of draw()
*/
function draw() {
    if (state === `title`) {
        title();
    }
    else if (state === `simulation`) {
        simulation();
    }
    else if (state === `gameover`) {
        gameover();
    }
}

function title() {
   push();
   background(140, 119, 118);
   textSize(30);
    fill(0);
    textWrap(WORD);
    textAlign(CENTER,CENTER);
    text(`dodge`, width/2, height/2);
    textAlign(CENTER,CENTER);
    textSize(20);
    text(`Use the arrows to move around and dogde the obstacles`, width/2, height/2 + 30)
    text('Click to start!', width/2, height/2 + 130);
    pop();
}

function simulation() {
    background(bg);
    player.x = mouseX;
    player.x = constrain(player.x, 0, width);
    player.display();
// for the bad objects
    if (random(1) < 0.1) {
        bullets.push(new Bullet(random(width), random(-100,-20), random(0.05, 1)))
    }
    for (let bullet of bullets) {
        bullet.move();
        bullet.display();
        bullet.checkOverlap();
    }
//for the good objects
    if (random(1) < 0.1) {
        goods.push(new Positive(random(width), random(-100,-20), random(0.05, 1)))
    }
    for (let good of goods) {
        good.move();
        good.display();
        good.checkOverlap();
    }
}

function gameover() {
    push();
    background(150,150,150,10);
    textSize(30);
    fill(0);
    textWrap(WORD);
    textAlign(CENTER,CENTER);
    text(`GAME OVER`, width/2, height/2);
    textSize(20);
    textAlign(CENTER,CENTER);
    text(`You caught too many bad emotions T^T`, width/2, height/2 + 30)
    pop();
}

function mousePressed() {
    if (state === 'title') {
      state = 'simulation';
    }
}