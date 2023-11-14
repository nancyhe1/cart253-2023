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
let bg2;


/**
 * Description of preload
*/
function preload() {
bg = loadImage("assets/images/messy room.jpg"); 
bg2 = loadImage("assets/images/living-room.jpg");
}


/**
 * Description of setup
*/
function setup() {
createCanvas(windowWidth, windowHeight);


}


/**
 * Description of draw()
*/
function draw() {
    if (state === `title`) {
        title();
    }
    else if (state === `room1`) {
        room1();
    }
    else if (state === `room2`) {
        room2();
    }
}

function title() {
   push();
   background(140, 119, 118);
    textSize(30);
    fill(0);
    textWrap(WORD);
    textAlign(CENTER,CENTER);
    text(`murder mystery `, width/2, height/2);
    textSize(20);
    text('Use your mouse to change between the rooms', width/2, height/2 + 30, 250)
    text('Click to start!', width/2, height/2 + 130);
    pop();
}
function room1() {
    background(bg);
}

function room2() {
    background(bg2);
}

function mousePressed() {
  if (state === 'title') {
      state = 'room1';
  }
}

function keyPressed() {
    if (keyCode == LEFT_ARROW) {
        state = 'room1';
    }
    else if (keyCode == RIGHT_ARROW) {
        state = 'room2';
    }
}