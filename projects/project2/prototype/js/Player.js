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

    checkOverlapBullet(bullets) {
        let d = dist(bullets.x, bullets.y, this.x, this.y);
         if (d < bullets.size/2 + this.size/2) {
            return true;
         }
            else {
                return false;
            }
    }
    
    checkOverlapHappy(happys) {
        let d2 = dist(happys.x, happys.y, this.x, this.y);
        if (d2 < happys.size/2 + this.size/2) {
            return true;
        }
        else {
            return false;
        }
    }
}