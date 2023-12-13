class Player {

    static loadImage() {
        this.image = loadImage("assets/images/bear.png")
    }
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 75;
    }

    display() {
        push()
        imageMode(CENTER);
        image(Player.image,this.x,this.y,this.size,this.size) 
        pop()
    }
}