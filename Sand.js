class Sand {
  constructor(x, y, width, height) {
    var options = {
        'restitution':1.3,
        'friction':5.0,
        'density':1.0
     
    }
    this.body = Bodies.circle(x, y,20, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(RADIUS);
    fill("saddleBrown");
    strokeWeight("4");
    ellipse(0, 0, this.width, this.height);
    pop();
  }
};
