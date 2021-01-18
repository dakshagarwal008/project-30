class Tower {
    constructor(x, y, width, height) {
      var options = {
          isStatic:false,
          'restitution':0.2,
          'friction':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){

      var pos =this.body.position;
      var angle = this.body.angle;

      if(this.body.speed < 3){

        fill("blue");
        rect(pos.x,pos.y,this.width,this.height);

       }
       else{
         World.remove(world, this.body);
         push();
         translate(pos.x, pos.y);
         rotate(angle);
         rectMode(CENTER);
         strokeWeight(4);    
        
         this.Visiblity = this.Visiblity - 5;
         tint(255,this.Visiblity);
         rect(0, 0, this.width, this.height);
         pop();
       }

      
      
    }
  };
  