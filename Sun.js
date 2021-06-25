class Sun{
    constructor(x,y,radius){

     var options = {
         isStatic:true
     }   
    this.body = Bodies.circle(x,y,radius,options)
    this.r = radius;
    this.image = loadImage("images/sun.png");
    }
    display(){

      var pos = this.body.position;
      imageMode(CENTER);
     image(this.image , pos.x , pos.y , this.r , this.r);

    }

    
    


}