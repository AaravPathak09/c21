
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,gnd,leftside,rightside;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	gnd=new Ground(400,680,800,20)
	leftside=new Ground(500,610,20,120)
	rightside=new Ground(750,610,20,120)
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2

	}

	ball=Bodies.circle(50,660,20,ball_options)
	World.add(world,ball)
	rectMode(CENTER);
	ellipseMode(RADIUS)
}


function draw() {
   background(0);
  Engine.update(engine);
 
  ellipse(ball.position.x,ball.position.y,20)
  gnd.display();
  leftside.display();
  rightside.display();
}

function keyPressed(){

		//if(keyCode===UP_ARROW) both works
		if(keyDown("UP_ARROW")){
			Body.applyForce(ball, {x:0,y:0}, {x:48,y:0})

		}
}


