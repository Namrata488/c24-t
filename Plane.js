class Plane {
    constructor(x,y,width,height) {
      var options = {
          isStatic: _______
      }
      this.body = Bodies.rectangle(x,y,width,height,________);
      this.width = ________;
      this.height = __________;
      World.add(______________);
    }
    
    display(){
      var pos =this.body.position;
      rectMode(________);
      fill("brown");
      rect(__________);
    }
  };