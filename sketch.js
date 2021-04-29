
// we give const inted of var
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball , bouncy

function setup(){
    var canvas = createCanvas(400,400);
    // created engine
    engine = Engine.create();
    world = engine.world;
   // ground option helps us to change properties
    var ground_options ={
        isStatic: true
    }
  // created groung
    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
  // make the ball bounce
    var balls ={
        restitution: 1.0
    }
  // created ball
    ball = Bodies.circle(200,100,20, balls);
    World.add(world,ball);
  // make the bouncy bounce
    var bouncing = {
        restitution : 1.0
    }
  // created bouncy
    bouncy = Bodies.circle(150,120,20,bouncing)
    World.add(world,bouncy);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    // we have assigned the bodies postion 
    // rect
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    // ball
    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);
    // bouncy
    ellipse(bouncy.position.x,bouncy.position.y,30 ,30)
}