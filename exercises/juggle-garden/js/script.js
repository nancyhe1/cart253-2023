/**
 * juggle-garden
 * Nancy He
 * 
 * tried to make another gardening simulation but i kind of gave up :/ sorry 
 */

"use strict";

let state = 'title'; // can be: title, simulation, end, 

// Our garden
let garden = {
    // An array to store the individual flowers
    flowers: [],
    // How many flowers in the garden
    numFlowers: 20,
    // An array to our the bees
    bees: [],
    // How many bees in the garden
    numBees: 10,
    birds: [],
    // How many birds in the garden
    numBirds: 3,
    // The color of the grass (background)
    grassColor: {
      r: 120,
      g: 180,
      b: 120
    }
  };
  
  // setup() creates the canvas and the flowers in the garden
function setup() {
  createCanvas(600, 600);
  
  // Create our flowers by counting up to the number of the flowers
  for (let i = 0; i < garden.numFlowers; i++) {
      // Create variables for our arguments for clarity
      let x = random(0, width);
      let y = random(0, height);
      let size = random(50, 80);
      let stemLength = random(50, 100);
      let petalColor = {
        r: random(100, 255),
        g: random(100, 255),
        b: random(100, 255)
      }
      // Create a new flower using the arguments
      let flower = new Flower(x, y, size, stemLength, petalColor);
      // Add the flower to the array of flowers
      garden.flowers.push(flower);
    }
  
  // Create our bees by counting up to the number of bees
  for (let i = 0; i < garden.numBees; i++) {
      // Create variables for our arguments for clarity
      let x = random(0, width);
      let y = random(0, height);
      // Create a new bee using the arguments
      let bee = new Bee(x, y);
      // Add the bee to the array of bees
      garden.bees.push(bee);
    }

    // Create our birds by counting up to the number of birds
  for (let i = 0; i < garden.numBirds; i++) {
    // Create variables for our arguments for clarity
    let x = random(0, width);
    let y = random(0, height);
    // Create a new bee using the arguments
    let bird = new Bird(x, y);
    // Add the bee to the array of bees
    garden.birds.push(bird);
  }
} //end function set up
  
  // draw()
  // Displays our flowers
function draw() {
  if (state === 'title') {
    title();
  }
  else if (state === 'simulation') {
    simulation();
  }
 } // end function draw
 
function title() {
  push();
  background(125, 227, 213);
  textSize(40);
  fill(255);
  textAlign(CENTER,CENTER);
  text('Garden simulator', width/2, height/2);
  textSize(25);
  fill(255);
  text('Press any key to Start',width/2,height/2+50);
  pop(); 
}

 function simulation() {
   // Display the grass
   background(garden.grassColor.r, garden.grassColor.g, garden.grassColor.b);
   
   // Loop through all the flowers in the array and display them
   for (let i = 0; i < garden.flowers.length; i++) {
     let flower = garden.flowers[i];
     // Check if this flower is alive
     if (flower.alive) {
       // Update the flower by shrinking it and displaying it
       flower.shrink();
       flower.display();
      }
    }
    
    // Loop through all the bees in the array and display them
    for (let i = 0; i < garden.bees.length; i++) {
      let bee = garden.bees[i];
      // Check if this bee is alive
      if (bee.alive) {
        // Shrink and move the bee
        bee.shrink();
        bee.move();
        
        // Note that we use j in our for-loop here because we're already inside
        // a for-loop using i!
        for (let j = 0; j < garden.flowers.length; j++) {
          let flower = garden.flowers[j];
          bee.tryToPollinate(flower);
        }
        
        // Display the bee
        bee.display();
      }
    }

    // Loop through all the bees in the array and display them
    for (let i = 0; i < garden.birds.length; i++) {
      let bird = garden.birds[i];
      // Check if this bird is alive
      if (bird.alive) {
        bird.move();
        bird.display();
    }
  }
    //mouseIsClicked();

} //end function simulation

/*function mouseIsClicked() {
  // everytime the mouse is clicked it creates a new flower
    // Create variables for our arguments for clarity
    let x = random(0, width);
    let y = random(0, height);
    let size = random(50, 80);
    let stemLength = random(50, 100);
    let petalColor = {
      r: random(100, 255),
      g: random(100, 255),
      b: random(100, 255)
    }
    // Create a new flower using the arguments
    let flower = new Flower(x, y, size, stemLength, petalColor);
    // Add the flower to the array of flowers
    garden.flowers.push(flower);
  

} //end function mouseclicked */

function keyPressed() {
  if (state === 'title') {
      state = 'simulation';
  }
}