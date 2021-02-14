class Iron {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':3,
          'density':30
      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = ___;
      this.height =___;
      
      World.add(____________);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(____________);
      rotate(________);
      rectMode(CENTER);

      fill("brown");
      rect(0, 0, _______, ________);
      pop();
    }
  };
  