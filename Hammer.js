class Hammer {
    constructor(x, y) {
      var options = {
        'density':__,
        'friction': ___,
        'restitution':___
      };
      this.body = Bodies.rectangle(x, y, 50, 50,__________);
      this.width = ___;
      this.height = ___;
      World.add(_______);
    };
    display(){
      var pos = this.body.position;
      pos.x = ________;
      pos.y = ________;
      var angle = this.body.angle;
  
      push();
      translate(________);
      rotate(________);
      strokeWeight(3);
      stroke('white')
      fill('orange')
      rectMode(CENTER)
      rect(0, 0, _________, _________);
      pop();
    };
  };
  