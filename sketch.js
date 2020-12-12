var a;
var circles=[];

const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies
const Constraint= Matter.Constraint

var base1
var block1,block2,block3,block4,block5,block16,block7,block8,block9,block10,block11,block12;
var block13,block14,block15,block16;
var engine;
var polygon;
var polygonimage;
var sling;
var smallbox;

function preload(){
  polygonimage = loadImage("polygon.png")
}
function setup() {
  createCanvas(1000,650);
  stroke(255)
  
     engine = Engine.create()
     world = engine.world

    block1 = new Box(400,340,30,40)
    block2 = new Box(370,380,30,40)
    block3 = new Box(400,380,30,40)
    block4 = new Box(430,380,30,40)
    block5 = new Box(340,420,30,40)
    block6 = new Box(370,420,30,40)
    block7 = new Box(400,420,30,40)
    block8 = new Box(430,420,30,40)
    block9 = new Box(460,420,30,40)
    block10 = new Box(310,460,30,40)
    block11 = new Box(340,460,30,40)
    block12 = new Box(370,460,30,40)
    block13 = new Box(400,460,30,40)
    block14 = new Box(430,460,30,40)
    block15 = new Box(460,460,30,40)
    block16 = new Box(490,460,30,40)

    //smallbox = new Box(40,200,25,25)
    sling = new SlingShot(polygon.body,{x:50,y:230})

    polygon = Bodies.circle(100,230,20)
    World.add(world,polygon)
   

 // a=height;
  //circles.push(width/2)

  base1 = new Ground(400,488,300,15)

}

function draw() {
 // camera.zoom=camera.zoom+1
  background(0);  
  //a=a-1;

  // for (i=0;i<circles.length;i++)
//{
//	circle(circles[i], height/2,20)
//}
//if(camera.position.x%width===0)
//{
//	circles.push(camera.position.x+width/2)
//}
 // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);

 imageMode(CENTER)
 image(polygonimage,polygon.position.x,polygon.position.y,40,40)

base1.display();
block1.display();
block2.display();
block3.display();
block4.display();
block5.display()
block6.display()
block7.display()
block8.display()
block9.display()
block10.display()
block11.display()
block12.display()
block13.display()
block14.display()
block15.display()
block16.display()

//smallbox.display()
sling.display()

 drawSprites();


}






function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
  }
} 
