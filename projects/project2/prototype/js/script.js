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
let happys = [];
let happyImage = [];
let happyCounter = 0;
//the bad objects
let bullets = [];
let sadImage = [];
let bulletCounter = 0;

/**
 * Description of preload
*/
function preload() {
    bg = loadImage("assets/images/background-sky.png");
    Player.loadImage();
    //loading happy images
    for (let i=0; i < 3; i++) {
        happyImage[i] = loadImage("assets/images/happy_"+i+".png");
    }
    //loading the sad images
    for (let i=0; i < 2; i++) {
        sadImage[i] = loadImage("assets/images/sad_"+i+".png");
    }  
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
    text(`Catching feelings`, width/2, height/2);
    textAlign(CENTER,CENTER);
    textSize(20);
    text(`Use the mouse to move around and avoid the sad emotions and catch good emotions`, width/2, height/2 + 30)
    text('Click to start!', width/2, height/2 + 130);
    pop();
}

function simulation() {
    background(179, 245, 255); //i dont know why i can load my background image soa solid color will do
    textSize(30);
    text("😁: "+(happyCounter)+"", 18, 40);
    text("😭: "+(bulletCounter)+"", 18, 75);
    lose();

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
        BulletcheckOverlap(); 
    }
//for the good objects
    if (random(1) < 0.1) {
        happys.push(new Positive(random(width), random(-100,-20), random(0.05, 1)))
    }
    for (let happy of happys) {
        happy.move();
        happy.display();
        HappycheckOverlap();
    }
}

function BulletcheckOverlap() {
    for (let i = bullets.length - 1; i >=0; i--) {
        if (player.checkOverlapBullet(bullets[i])) {
            bulletCounter++;
            bullets.splice(i, 1);
        }
         else if (bullets[i].y > height + bullets[i].size) {
            console.log("gone")
            bullets.splice(i, 1);
         }   
    }
}

function HappycheckOverlap() {
    for (let i = happys.length - 1; i >=0; i--) {
        if (player.checkOverlapHappy(happys[i])) {
            happyCounter++;
            happys.splice(i, 1);
        }
         else if (happys[i].y > height + happys[i].size) {
            console.log("gone")
            happys.splice(i, 1);
         }   
    }
}

function lose() {
    if (bulletCounter > 5) {
        state = "gameover";
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
    text(`Click to restart`, width/2, height/2 + 60);
    pop();
}

function mousePressed() {
    if (state === 'title') {
      state = 'simulation';
    }
    if (state === 'gameover') {
        location.reload();
    }
}