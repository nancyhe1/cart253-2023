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
    speed: 1,
    size:100,
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
createCanvas(800,500);


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

function mousePressed() {
  if (state === 'title') {
      state = 'simulation';
  }
}

function simulation() {

}

function display() {
    ellipse(player.x, player.y, player.size);
}