class Box {
    constructor(x, y, width,height) {
      
      this.body = Bodies.rectangle(x, y, width,height,{isStatic:true,restitution:0.2,friction:10,density:1.0});

      this.width = width;
      this.height =height;
      
      World.add(world, this.body);
    }
    display(){
      var pos=this.body.position;
      var angle=this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);

      rectMode(CENTER);
      fill("red");
      
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  