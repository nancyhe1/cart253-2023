/**
 * Activity 4: Dodging Covid19
 * Nancy He
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let covid19 = {
    x: 0,
    y: 250,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 5,
    fill: {
        r: 255,
        g: 0,
        b: 0
    }
};
let user = {
    x: 250,
    y: 250,
    size: 100,
    fill: 255
}

let numStatic = 5000;

/**
 * Description of setup
*/
function setup() {
    createCanvas(windowWidth,windowHeight);

    covid19.y = random(0,height);
    covid19.vx = covid19.speed;

    noCursor();
}


/**
 * Description of draw()
*/
function draw() {
    background(0);

    //display static
    for (let i = 0; i < numStatic; i++) {
        let x = random(0,width);
        let y = random(0,height);
        stroke(255);
        point(x,y);
    
    }
    
    //covid movement
    covid19.x = covid19.x + covid19.vx;
    covid19.y = covid19.y + covid19.vy;

    if (covid19.x > width) {
        covid19.x = 0;
        covid19.y = random(0,height);
    } 

    //user movement
    user.x = mouseX;
    user.y = mouseY;

    //check for catching covid19
    let d = dist(user.x,user.y,covid19.x,covid19.y);
    if (d < covid19.size/2 + user.size/2) {
        noLoop();
    }

    //Display covid19
    fill(covid19.fill.r,covid19.fill.g,covid19.fill.b);
    ellipse(covid19.x,covid19.y,covid19.size);

    //display user
    fill(user.fill);
    ellipse(user.x,user.y,user.size);


}