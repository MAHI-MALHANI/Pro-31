class Umbrella{
    constructor(x, y){

        var options = {
            stiffness: 0.04,
            length: 10,
            isStatic: true
        }

        this.umbrella = Bodies.circle(x, y, 5, options);
        this.image=loadImage("walking_1.png");
        World.add(world, this.umbrella);

    }

    display(){ 
    
        var pos=this.umbrella.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y+70, 300, 300);
    }
    
};