class block{
    constructor(x,y,width,height){
        var options={
            isStatic:false
              }
              this.bodies = bodies.rectangle(x,y,width,height,options);
              World.add(World,this.body);
              this.width = width;
              this.height = height;
            }
            display()
            {
                rectMode(CENTER);
               rect(this.rect,this.body.position.x, this.body.position.y,this.width, this.height);
            }
          
    }
    
