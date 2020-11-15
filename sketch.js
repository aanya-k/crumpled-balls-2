
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var crumpledball,ground;
var dustbin1,dustbin2,dustbin3,dustbin4,dustbinImg;

function preload(){
	dustbinImg = loadImage("trashcan.png");
}


function setup() {
	createCanvas(800,200);

	engine = Engine.create();
	world = engine.world;
	
	ground = new Ground(400,180,800,10);

	crumpledball = new Ball(50,150);

	dustbin1 = new Dustbin(700,180,100,10);
	dustbin2 = new Dustbin(650,130,10,115);
	dustbin3 = new Dustbin(750,130,10,115);

	dustbin4 = createSprite(700,130,100,115);
	dustbin4.addImage(dustbinImg);
	dustbin4.scale = 0.4;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  ground.display();
  crumpledball.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(crumpledball.body,crumpledball.body.position,{x:16.5,y:-16.5});
	}
}