const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine , body , world;
var sun , earth , mars;

function setup() {
  createCanvas(600, 600);


sun = new Sun(300,300,103);
earth = new Earth(300,425 ,45)

  engine = Engine.create();
  world = engine.world;
}
function draw() {

  background("black");
  Engine.update(engine);

  sun.display();
  earth.display();
  
  drawSprites();
}
