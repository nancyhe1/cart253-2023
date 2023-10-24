/**
 * Age of Aquariums
 * Nancy He
 * 
 * this is a simple simulation of a duck eating fish using the mouse.
 */

"use strict";
//state the variables
let school = [];
let schoolSize = 25;
let bg;
let fishImage;
let time = 30;

let duck = {
  x:300,
  y:300,
  vx: 1,
  vy: 1,
  size: 50,
  speed: 2,
  image: undefined,
}
let state = 'title'; // can be: title, simulation, gameover, win

function setup() {
  createCanvas(600, 600);

  // loading the images
  imageMode(CENTER);
  duck.image = loadImage("assets/images/duck.png");
  fishImage = loadImage("assets/images/fish.png");

  //setting up the fish at random positions
  for (let i = 0; i < schoolSize; i++) {
    school[i] = createFish(random(0, width), random(0, height));
  }
}

// Creates a new JavaScript Object describing a fish and returns it
function createFish(x, y) {
  let fish = {
    x: x,
    y: y,
    size: 50,
    vx: 0,
    vy: 0,
    speed: 3.5,
    eaten: false,
  };
  return fish;
}

// draw()
// Moves and displays our fish
function draw() {
  background(147, 219, 245);
  
  if (state === 'title') {
    title();
    }
    else if (state === 'simulation') {
        simulation();
    }
    else if (state === 'gameover') {
      gameover();
    }
    else if (state === 'win') {
      win();
    }
  
  }

// display title screen
function title() {
    push();
    textSize(30);
    fill(0);
    textWrap(WORD);
    textAlign(CENTER,CENTER);
    text('Hungry lil duck', width/2, height/2);
    textSize(20);
    text('Use your mouse to move around and eat all the fish before the time runs out', 180, height/2 + 30, 250)
    text('Click to start!', width/2, height/2 + 130);
    pop();
}

//display simulation
function simulation() {
  // displaying the timer
  push();
  textSize(30)
  fill(0);
  text(`Timer: ${time}`, 20,30);
  pop();
  timer();
  //the fish
  for (let i = 0; i < school.length; i++) {
    moveFish(school[i]);
    displayFish(school[i]);
  }
  //the duck
  duckControls();
  displayDuck();

  checkOverlap();
}

//displaying gameover screen
function gameover() {
  background(0)
  push();
  textSize(30)
  textAlign(CENTER,CENTER);
  fill(255);
  text('You lost ;((', width/2, height/2);
  pop();
}

//displaying winning screen
function win() {
  background(250, 250, 202);
  push();
  textSize(30)
  textAlign(CENTER,CENTER);
  fill(0);
  text('The lil duck is full now! :)) ', width/2, height/2);
  pop();
}

// Chooses whether the provided fish changes direction and moves it
function moveFish(fish) {
  // Choose whether to change direction
  let change = random(0, 1);
  if (change < 0.05) {
    fish.vx = random(-fish.speed, fish.speed);
    fish.vy = random(-fish.speed, fish.speed);
  }
  
  // Move the fish
  fish.x = fish.x + fish.vx;
  fish.y = fish.y + fish.vy;
  
  // Constrain the fish to the canvas
  fish.x = constrain(fish.x, 0, width);
  fish.y = constrain(fish.y, 0, height);
}

// Displays the provided fish on the canvas
function displayFish(fish) {
  if (!fish.eaten) {
    push();
  image(fishImage, fish.x, fish.y, fish.size, fish.size);
  pop();
  } 
}

// checking if the fish and duck overlap, if so then the fish disappears
function checkOverlap() {
  for (let i = 0; i < school.length; i++) {
    let fish = school[i];
    
    if (!fish.eaten) {
      let d = dist(duck.x, duck.y, fish.x, fish.y);
      if (d < duck.size/2 + fish.size/2) {
        fish.eaten = true;
      }
    }
  }

  // Check if all fish are eaten
  let allEaten = true;
  for (let i = 0; i < school.length; i++) {
    if (!school[i].eaten) {
      allEaten = false;
      break;
    }
  }
  //if all eaten then the player wins
  if (allEaten) {
    state = 'win';
  }
}

//making the duck follow the mouse
function duckControls() {
  
  duck.x = mouseX;
  duck.y = mouseY;
  
  // Update the duck's position based on velocity
  duck.vx = duck.x + duck.vx;
  duck.vy = duck.y + duck.vy;
}

//displaying the duck
function displayDuck() {
image(duck.image, duck.x, duck.y, duck.size, duck.size);
}

// adding a time limit
function timer() {
  if (frameCount % 60 == 0 && time > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    time --;
  }
  //when the time runs out, the game is over
  if (time == 0) {
    state = 'gameover';
  }
}

//use mouse press to start the simulation
function mousePressed() {
  if (state === 'title') {
      state = 'simulation';
  }
}