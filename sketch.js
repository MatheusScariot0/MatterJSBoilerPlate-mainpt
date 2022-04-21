
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


let engine;
let world;
var plane;
var block1;
var block2;
var block3;
var angle = 60
var wall;
var wedge;
function preload() {

}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;


	var block1_options = {
		restitution: 0.5,
		frictionAir: 0.,
		friction: 0.02
	}

	var block2_options = {
		restitution: 0.7,
		frictionAir: 0.1,
		friction: 0.01
	}

	var block3_options = {
		restitution: 0.01,
		friction: 0.01,
		frictionAir: 0.1
	}

	var plane_options = {
		isStatic: true


	}
plane = Bodies.rectangle(200,390,400,10,plane_options)
World.add(world, plane)
	block1 = Bodies.circle(300, 20, 10, block1_options);
	World.add(world, block1);

	block2 = Bodies.rectangle(110, 50, 10, 10, block2_options);
	World.add(world, block2);

	block3 = Bodies.rectangle(350, 50, 10, 10, block3_options);
	World.add(world, block3);
	

	rectMode(CENTER);
	ellipseMode(RADIUS); 
}


function draw() {
	background("lightgreen");
	Engine.update(engine);
	drawSprites();
	ellipse(block1.position.x, block1.position.y, 10);
	rect(block2.position.x, block2.position.y, 20,20);
	rect(block3.position.x,block3.position.y,60,30);
rect(plane.position.x,plane.position.y,400,10)
}



