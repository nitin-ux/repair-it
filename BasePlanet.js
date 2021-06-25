class BasePlanet{
    constructor(x,y,radius){
        var options = {
            timescale : 0.8
        }
      this.body = Bodies.circle(x,y,radius,options);
      this.r = radius;
      this.image = loadImage("images/base.png");
      World.add(world , this.body);

      }
      display(){
          var pos = this.body.position;
          push()
          imageMode(CENTER);
          translate(pos.x, pos.y)
          image(this.image,0 , 0,this.r , this.r);
          pop()
      }
}