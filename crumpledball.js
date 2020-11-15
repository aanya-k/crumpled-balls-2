class Ball{
    constructor(x,y){
        var options={
            density: 1.2,
            isStatic: false,
            restitution: 0.3,
            friction: 0.5
        }
        this.body = Matter.Bodies.circle(x,y,10,options);
        this.radius = 70;
        this.image = loadImage("paperball.png");

        World.add(world,this.body);


    }

    display(){
        var pos = this.body.position;
        
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);

    }
}