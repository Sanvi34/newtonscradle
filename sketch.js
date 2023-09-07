
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3, bob4,bob5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;


function setup() {
	createCanvas(windowWidth, windowHeight);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofObject=new roof(600,250,230,20);
	bob1 = new bob(520,575,40)
	bob2 = new bob(560,575,40)
	bob3 = new bob(600,575,40)
	bob4 = new bob(640,575,40)
	bob5 = new bob(680,575,40)
	
	rope1=new rope(bob1.body,roofObject.body,-80)
	rope2=new rope(bob2.body,roofObject.body,-40)
	rope3=new rope(bob3.body,roofObject.body,0)
	rope4=new rope(bob4.body,roofObject.body,40)
	rope5=new rope(bob5.body,roofObject.body,80)
	
	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background(253,245,230);
  roofObject.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  
  bob3.display();
  bob4.display();
  bob5.display();

  textSize(40);
  fill(0);
  textFont("serif");
  text("press up arrow key to lift the bob:-",10,70);
}


function keyPressed() {
	if (keyCode === UP_ARROW) {
//WRITE A CORRECT CODE TO APPLY A KEYPRESSED TO CHANGE THE POSITION OF BALL OBJECT TO THE LEFT WHEN UP ARROW KEY IS PRESSED
Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
	}
}


