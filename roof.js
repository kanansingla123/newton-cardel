class Roof {
    constructor(x, y, width, height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var paperpos = this.body.position;
      rectMode(CENTER);
      fill("grey");
      rect(paperpos.x, paperpos.y, this.width, this.height);
    }
  };