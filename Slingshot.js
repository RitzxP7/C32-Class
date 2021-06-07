class Slingshot {
    constructor(body1, point2) {
        var options = {
            bodyA: body1, 
            pointB: point2,
            stiffness: 0.04, 
            length: 10,
        }
   
        this.pointB = point2;

        this.sling = Constraint.create(options);
        World.add(world, this.sling);

        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
    }
    drawLine() {

        image(this.sling1, 200, 20);
        image(this.sling2, 175, 20);



        if(this.sling.bodyA) {
            push();
        fill('#301608')    
        if(this.sling.bodyA.position.x < 220) {
        strokeWeight(10);
        line(this.sling.bodyA.position.x -25, this.sling.bodyA.position.y, this.pointB.x -10, this.pointB.y);
        line(this.sling.bodyA.position.x -25, this.sling.bodyA.position.y, this.pointB.x +30, this.pointB.y);
            
        image(this.sling3, this.sling.bodyA.position.x - 30, this.sling.bodyA.position.y -10, 15, 30);
        }
        else{
            strokeWeight(4);
            line(this.sling.bodyA.position.x +25, this.sling.bodyA.position.y, this.pointB.x -10, this.pointB.y);
            line(this.sling.bodyA.position.x +25, this.sling.bodyA.position.y, this.pointB.x +30, this.pointB.y);
                
            image(this.sling3, this.sling.bodyA.position.x +25, this.sling.bodyA.position.y -10, 15, 30);}
        pop();
        
    
    }
    }

    fly() {
        this.sling.bodyA = null;
    }
    attach(body) {
        this.sling.bodyA = body;
    }
}