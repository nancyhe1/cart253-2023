class Bird {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 80;
        this.vx = 0;
        this.vy = 0;
        this.speed = 5;
        this.jitteriness = 0.1;
        this.alive = true;
    }

    move() {
        // First check if we should change direction
        let r = random(0, 1);
        if (r < this.jitteriness) {
          this.vx = random(-this.speed, this.speed);
          this.vy = random(-this.speed, this.speed);
        }
    
        // Update position with velocity to actually move
        this.x = this.x + this.vx;
        this.y = this.y + this.vy;
    
        // Constrain to the canvas (guess it's a walled garden!)
        this.x = constrain(this.x, 0, width);
        this.y = constrain(this.y, 0, height);
    }
      
    display() {
        noStroke();

        //the beak
        push();
        fill(240, 219, 86);
        triangle(this.x-50,this.y-10,this.x-25,this.y-20,this.x-30,this.y);
        pop();

        //the body
        push();
        fill(204, 120, 18);
        arc(this.x, this.y, this.size, this.size, 0, PI + QUARTER_PI, PIE);
        pop();

        //the eye
        push();
        fill(0);
        ellipse(this.x-25,this.y-10,this.size/10, this.size/10);
        pop();
    }
}