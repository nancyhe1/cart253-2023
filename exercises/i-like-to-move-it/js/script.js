/**
 * Excersise 1: I like to move it
 * Nancy He
 * 
 * Here is my attempt for exercise 1. Nyan cat.
 */

"use strict";

//putting in all the variables
let bg = {
    r:39,
    g:16,
    b:87
}
let x= 0;


/**
 * does nothing
*/
function preload() {

}


/**
 * Set up a canvas and background
*/
function setup() {
createCanvas(700,300);
background(bg.r,bg.g,bg.b);
noStroke();
angleMode(DEGREES);
}


/**
 * Drawing Nyan cat and animate it
*/
function draw() {
    noStroke();
    
    //constrains
     mouseX = constrain(mouseX,100,600);
     mouseY = constrain(mouseY,0,200);
    //background
    background(bg.r,bg.g,bg.b);
    //circle
    let color = map(mouseX,0,width,255,0);
    fill(color*1.5,color/3,color/0.5);
    ellipse(mouseX, mouseY, mouseY);
    //cat's legs
    fill(150);
    rect(x,190,25,30);
    rect(x+75,190,25,30);
    //cat's tail
    rect(x-40,100,50,20);
    //cat body
    fill(random(0,255), random(0,255), random(0,255));
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
//moving the position
    x += 3;
    if (x>width)(
    x=0
    );
}