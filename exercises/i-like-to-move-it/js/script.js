/**
 * Excersise 1: I like to move it
 * Nancy He
 * 
 * Here is my attempt for exercise 1.
 */

"use strict";
//putting in all the variables
let bg = {
    r:0,
    g:0,
    b:0
}
let x= 0;


/**
 * Description of preload
*/
function preload() {

}


/**
 * Description of setup
*/
function setup() {
createCanvas(700,700);
background(bg.r,bg.g,bg.b);
noStroke();
angleMode(DEGREES);
}


/**
 * Description of draw()
*/
function draw() {
    noStroke();

    //background
    background(bg.r,bg.g,bg.b);
    //circle
    fill(mouseX, mouseY, mouseX);
    ellipse(mouseX, 350, mouseY);
    //cat's legs
    fill(150);
    rect(x,190,25,30);
    rect(x+75,190,25,30);
    //cat's tail
    rect(x-40,100,50,20);
    //square
    fill(mouseY, mouseX, 200);
    rect(x, 100, 100, 100);
    //making a cat,the bongo cat!!
        //head
        fill(150);
         ellipse(x+120,150,100,90);
        triangle(x+70,150,x+80,80,x+130,150);
        triangle(x+110,150,x+160,80,x+170,150);
        fill(252, 225, 242);
        triangle(x+80,130,x+83,90,x+100,115);
        triangle(x+140,115,x+157,90,x+160,130);
        //eyes
        fill(0);
        ellipse(x+90,150,15,15);
        ellipse(x+150,150,15,15);
        fill(255);
        ellipse(x+88,145,5,5);
        ellipse(x+148,145,5,5);
        //nose and mouth
        fill(0);
        ellipse(x+120,150,12,10);
        stroke(0);
        strokeWeight(2);
        line(x+110,160,x+120,152);
        line(x+120,152,x+130,160);


    x += 3;
    if (x>width)(
    x=0
);

}