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
let spawnTimer = 2000;
let goods = [];
let numGood = 10;
let bullets = [];
let numBullets = 10;

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
    for (let i = 0; i < numBullets; i++) {
        let x = random(0, width);
        let y = random(-100, -20);
        let speed = random(0.25,1);
        let bullet = new Bullet(x, y, speed);
        bullets.push(bullet);
    }
    // for the positive objects
    for (let i = 0; i < numGood; i++) {
        let x = random(0, width);
        let y = random(-100, -20);
        let speed = random(0.25,1);
        let good = new Positive(x, y, speed);
        goods.push(good);
    }

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
    for (let i = 0; i < numBullets; i++) {
        let bullet = bullets[i];
        bullet.move();
        bullet.display();
        bullet.checkOverlap();
    }
//for the good objects
    for (let i = 0; i < numGood; i++) {
        let good = goods[i];
        good.move();
        good.display();
        good.checkOverlap();
    }
}

function gameover() {
    push();
    background(255,0,0,70);
    textSize(30);
    fill(0);
    textWrap(WORD);
    textAlign(CENTER,CENTER);
    text(`GAME OVER`, width/2, height/2);
    textSize(20);
    textAlign(CENTER,CENTER);
    text(`something to restart`, width/2, height/2 + 30, 250)
    pop();
}

function mousePressed() {
    if (state === 'title') {
      state = 'simulation';
    }
}