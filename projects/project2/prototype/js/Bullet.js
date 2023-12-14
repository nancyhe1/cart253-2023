class Bullet {
    constructor(x, y, speed) {
        this.x = x;
        this.y = y;
        this.size = 50;
        this.vx = 0;
        this.vy = 0;
        this.image = random(sadImage);
        this.speed = speed;
        this.alive = true;
    }

    move() {
        //this.vx += this.speed;
        this.vy += this.speed;
        // Update position with velocity to actually move
        this.y = this.y + this.vy;
    }

    display() {
        imageMode(CENTER);
        image(this.image, this.x, this.y, this.size, this.size); 
    }

    /*checkOverlap() {
        let d = dist(player.x, player.y, this.x, this.y);
         if (d < player.size/2 + this.size/2) {
        
         }    
    }*/

}