/**
 * project 2
 * Nancy He
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let state = `title`; //Can be title, living room, bedroom, end
let bg;
let player = {
    x: 0,
    y: 0,
    size:100,
    vx: 0,
    vy: 0,
    speed:5,
};

let shooter = {
    x: 0,
    y: 0,
    size:100,
    vx: 0,
    vy: 0,
    speed:5, 
};

let bullets = [];
let numBullets = 5;

/**
 * Description of preload
*/
function preload() {

}


/**
 * Description of setup
*/
function setup() {
    createCanvas(windowWidth, windowHeight);
    player.x = windowWidth/2;
    player.y = windowHeight/2;

    for (let i = 0; i < numBullets; i++) {
        let x = random(0, width);
        let y = random(0, height);
        let bullet = new Bullet(x, y);
        bullets.push(bullet);
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
}

function title() {
   push();
   background(140, 119, 118);
   textSize(30);
    fill(0);
    textWrap(WORD);
    textAlign(CENTER,CENTER);
    text(`dodge`, width/2, height/2);
    textSize(20);
    text(`use the arrows to move around and dogde the obstacles`, width/2, height/2 + 30, 250)
    text('Click to start!', width/2, height/2 + 130);
    pop();
}

function simulation() {
    background(0);
    display();
    playerControls();

    for (let i = 0; i < numBullets; i++) {
        let bullet = bullets[i];
        bullet.move();
        bullet.display();
    }
}

function display() {
    fill(201, 168, 240);
    ellipse(player.x, player.y, player.size);
    //ellipse(shooter.x, shooter.y, shooter.size);
}

function playerControls() {
    if (keyIsDown(LEFT_ARROW)) {
        player.vx = -player.speed;
      }
      else if (keyIsDown(RIGHT_ARROW)) {
        
        player.vx = player.speed;
      }
      else {
        player.vx = 0;
      }
      if (keyIsDown(UP_ARROW)) {
        player.vy = -player.speed;
      }
      else if (keyIsDown(DOWN_ARROW)) {
        player.vy = player.speed;
      }
      else {
        player.vy = 0;
      }

      //to make it move
      player.x = player.x + player.vx;
      player.y = player.y + player.vy;

      //constrain it within the canvas
      player.x = constrain(player.x, 0, width);
      player.y = constrain(player.y, 0, height);

}

function mousePressed() {
    if (state === 'title') {
      state = 'simulation';
    }
}