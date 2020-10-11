class Paper {
    constructor(x, y, width, height) {
      var options = {
          isStatic:false,
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
      this.image = loadImage("sprites/paper.png");
      this.image.radius=70;
      var paper = createSprite(10,10,10);
      Matter.Bodies.circle(x,y,radius,[options],[maxSides]);
        function keyPressed(){
            if(keyCode === UP_ARROW){
                Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85, y:-85})
            }
        }

      this.body = Bodies.rectangle(x, y, width, height, options);
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
      rectMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };