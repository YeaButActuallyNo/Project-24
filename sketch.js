
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var p2, ground,box,box2,box3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

    p2 = new paper(20,20)
    ground = new Ground(600,380,1200,20)

    box1 = new Dustbin(540,340,10,60)
    box2 = new Dustbin(575,365,60,10)
    box3 = new Dustbin(610,340,10,60)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  p2.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  keyPressed();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(p2.body,p2.position,{x:85,y:-85})
	}
}



