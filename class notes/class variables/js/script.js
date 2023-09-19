/**
 * variables
 * Nancy He
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";
let me = {
    x: 0,
    y: 500,
    h: 500,
    speed: 1,
    fill: 255
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
createCanvas(500,500)
background(0);
colorMode(HSL);

}


/**
 * Description of draw()
*/
function draw() {
    let hue = map(me.x, 0, width, 360, 0);
stroke(hue,100, 50);
line(me.x, me.y, me.x, me.y-me.h);
//changing the position
me.x += me.speed;
//update color
me.fill = me.fill-0.5;
}