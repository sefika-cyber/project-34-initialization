class hero{
    constructor(x,y,width,height){
     var options =
     { isStatic: false
        }
     this.Img1 = loadImage("images/superhero-01.png");
     this.body = body.rectangle(x,y,width,height);
     World.add(World,this.body);
     this.width = width;
     this.height = height;
    
    }
     
   display()
      {
          imageMode(CENTER);
         image(this.Img1,this.body.position.x, this.body.position.y,this.width, this.height);
      }
    
    
    } 

