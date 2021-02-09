
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var ground;
var stone;
var rubber;
var sand1,sand2,sand3,sand4;
var iron;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;



	Engine.run(engine);

   ground = new Ground(700,height,1400,20);
   hammer = new Hammer(300,500,70,70);
   stone = new Stone(1000,600,100,100);
   rubber = new Rubber(300,100,55, 55)
   sand1 = new Sand(500,680,10,10);
   sand2 = new Sand(510,680,10,10);
   sand3 = new Sand(520,680,10,10);
   sand4 = new Sand(530,680,10,10);
   iron = new Iron(800,600,100,50)
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");

  hammer.display();
  ground.display();
  stone.display();  
  rubber.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  iron.display();

  drawSprites();
 
}




