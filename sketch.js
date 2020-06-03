var paper, r1,r2,r3,ground,paper;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;


function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	
	paper = new Paper(200,300,5);

	//Create a Ground
	ground = new Ground(600, 370, 1200, 10 );
	 
	
	 


	
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(0);
  paper.display();
  drawSprites();
 ground.display();




 if(keyWentDown("space")){
	 Matter.Body.applyForce(paper.body,paper.body.position,{x:6,y:-3})
 }
}



