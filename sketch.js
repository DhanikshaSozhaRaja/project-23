var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 600);
	engine = Engine.create();
    world = engine.world;

	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.20;
	
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-25, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.2, isStatic:false});
	World.add(world, packageBody);
	//Create a Ground
	ground = Bodies.rectangle(width/2, 550, width, 10 , {isStatic:true} );
 	World.add(world, ground);
    box1 = new Box(340,530,15,100,PI/2);
	box2 = new Box(480,530,15,100,PI/2);
	box3 = new Box(410,565,150,15);
	Engine.run(engine);
}
function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
box1.display();
box2.display();
box3.display();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.2, isStatic:false});
	World.add(world, packageBody);
	Matter.Body.setStatic(packageBody,false);
    
  }
}



