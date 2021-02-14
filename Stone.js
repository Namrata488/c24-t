class Stone {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.9,
        'density':12
    }
    this.body = Bodies.rectangle(x, y, width, height, _________);
    this.width = __________;
    this.height = _________;
    
    World.add(_______________);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(_________________);
    rotate(_______);
    rectMode(_______);
    strokeWeight(4);
    stroke("black");
    fill("black");
    rect(______________);
    pop();
  }
};
