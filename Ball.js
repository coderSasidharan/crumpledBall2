class Ball{
    constructor(x, y, radius){
        var a = {
            isStatic:false, restitution:0.3, friction:0.5, density:1.2
        }
        this.body= Bodies.circle(x,y,radius,a)
        this.radius=radius;
        this.image= loadImage("paper.png");
        World.add(world, this.body);
    }
    Display(){
        push();
        fill("white");
        imageMode(CENTER);
        image(this.image,this.body.position.x, this.body.position.y, this.radius);
        pop();
    }
}