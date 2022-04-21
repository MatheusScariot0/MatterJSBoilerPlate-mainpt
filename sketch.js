
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
	Engine.run(engine);
	background(51);
	Engine.update(engine);
	drawSprites();
	ellipse(block1.position.x, block1.position.y, 10);
	ellipse(block2.position.x, block2.position.y, 20);
	rect(plane.position.x, plane.position.y, 200, 20);
	rect(wall.position.x, wall.position.y, 200, 20);

	Matter.Body(wedge, angle);
	push()
	Translate(wedge.position.x, wedge.position.y);
	rotate(angle);

	rect(0, 0, 100, 20)
	pop();
	angle += 0.1
	rect(wall.position.x, wall.position.y, 70, 20);
}



