var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,c1,c2,c3;
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
	createCanvas(800, 700);
	rectMode(CENTER);
	
	//var packageSprite_options={
		//restetution:0.8
	//}

	c1=createSprite(280,height-85,20,100);
	c1.shapeColor=("red");
	c2=createSprite(380,height-45,200,20);
	c2.shapeColor=("red");
	c3=createSprite(480,height-85,20,100);
	c3.shapeColor=("red");
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-20, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 );
	
	 c1 = Bodies.rectangle(800,700,100,20,{isStatic:true,restitution:1});
	 World.add(world, c1);
	 c2 = Bodies.rectangle(800,700,100,20,{isStatic:true,restitution:1});
	 World.add(world, c2);
	 c3= Bodies.rectangle(800,700,100,20,{isStatic:true});
	 World.add(world, c3);
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true,restitution:1} );
 	World.add(world, ground);


	Engine.run(engine);
	
}


function draw() {
	
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
  packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 
	
  drawSprites();
 
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	//packageSprite.x= packageBody.position.x 
	//packageSprite.velocityY=+10;
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7,isStatic:true});
	World.add(world, packageBody);
	
  }
}



