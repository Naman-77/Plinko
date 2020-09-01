const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var Ground1
var engine, world

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  Ground1 = new Ground(400, 600, 900, 30);

  Block1 = new Ground(80, 435, 10, 300);
  Block2 = new Ground(160, 435, 10, 300);
  Block3 = new Ground(240, 435, 10, 300);
  Block4 = new Ground(320, 435, 10, 300);
  Block5 = new Ground(400, 435, 10, 300);
  Block6 = new Ground(0, 435, 10, 300);
  Block7 = new Ground(480, 435, 10, 300);

  if(frameCount%60===0){
    circle1 = new Circle(random(0, 400), 0, 20)
  }
  
    plinko1 = new Plinko(200, 200, 30);
    plinko2 = new Plinko(100, 200, 30);
    plinko3 = new Plinko(300, 200, 30);
    plinko4 = new Plinko(0, 200, 30);
    plinko10 = new Plinko(400, 200, 30);

    plinko5 = new Plinko(450, 100, 30);
    plinko6 = new Plinko(250, 100, 30);
    plinko7 = new Plinko(350, 100, 30);
    plinko8 = new Plinko(150, 100, 30);
    plinko9 = new Plinko(50, 100, 30);
    



  
  
  
}


function draw() {
  Engine.update(engine);
 Ground1.display();
  background(0);  
  Ground1.display();
  Block1.display();
  Block2.display();
  Block3.display();
  Block4.display();
  Block5.display();
  Block6.display();
  Block7.display();

  plinko1.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display();
  plinko6.display();
  plinko7.display();
  plinko8.display();
  plinko9.display();
  plinko10.display();
  

  
  circle1.display();
  

  
  drawSprites();
}