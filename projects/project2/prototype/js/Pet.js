class Clue {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.size = 40;
        this.active = true;
      }
    
      display() {
        push();
        fill(255);
        stroke(0);
        ellipse(this.x,this.y,this.size);
        pop();
      }
}