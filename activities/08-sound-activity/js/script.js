/**
 * Title of Project
 * Nancy He
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let balls = [];
//G major
let notes = [`G`, `A`, `B`, `C`, `D`, `E`, `F#`, `G`];

/**
 * Description of preload
*/
function preload() {

}


/**
 * Description of setup
*/
function setup() {
    createCanvas(500,500);

    userStartAudio();
}


/**
 * Description of draw()
*/
function draw() {
background(0);
for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    ball.move();
    ball.bounce();
    ball.display();
}
}

function mousePressed() {
    createBall(mouseX, mouseY);
}

function createBall(x,y) {
    let note = random(notes);
    let ball = new Ball(x,y,note);
    balls.push(ball);
}