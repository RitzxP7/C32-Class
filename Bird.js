class Bird {
  constructor(x, y) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':10.0,
        'mass': 15000
    }
    this.body = Bodies.rectangle(x, y, 50, 50, options);
    this.width = 50;
    this.height = 50;
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    World.add(world, this.body);

    this.trajectory =  [];
  }
  display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();

    if(this.body.position.x > 200 && this.body.velocity.x > 5) {
      var position = [this.body.position.x, this.body.position.y]
      this.trajectory.push(position);
    }


    for(var i = 0; i < this.trajectory.length; i++) {
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
    }
  }
}