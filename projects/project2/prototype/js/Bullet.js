class Bullet {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 50;
        this.vx = 0;
        this.vy = 0;
        this.speed = 1;
        this.alive = true;
    }

    move() {
        this.vx += this.speed;
        this.vy += this.speed;
        // Update position with velocity to actually move
        this.x = this.x + this.vx;
        this.y = this.y + this.vy;
    }

    display() {
        fill(252, 186, 3);
        ellipse(this.x, this.y, this.size);
    }
}