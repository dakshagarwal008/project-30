const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var block1,block2,block3,block4,block5,block6,block7;
var block8,block9,block10,block11,block12,block13,block14;
var block15,block16,block17,block18,block19,block20,block21;
var ground,base1;
var polygone,thrower;

function setup(){

  var canvas =createCanvas(2000,1000);
  engine = Engine.create();
  world = engine.world;


  block1 = new Tower(620,670,40,60);
  block2 = new Tower(650,670,40,60);
  block3 = new Tower(680,670,40,60);
  block4 = new Tower(710,670,40,60);
  block5 = new Tower(740,670,40,60);
  block6 = new Tower(770,670,40,60);
  block7 = new Tower(800,670,40,60);
//level 2
  block8  = new Tower(630,605,40,60);
  block9  = new Tower(660,605,40,60);
  block10 = new Tower(690,605,40,60);
  block11 = new Tower(720,605,40,60);
  block12 = new Tower(750,605,40,60);
  block13 = new Tower(780,605,40,60);
//level3
  block14 = new Tower(645,540,40,60);
  block15 = new Tower(680,540,40,60);
  block16 = new Tower(710,540,40,60);
  block17 = new Tower(740,540,40,60);
  block18 = new Tower(775,540,40,60);
//level4
  block19 = new Tower(680,475,40,60);
  block20 = new Tower(715,475,40,60);
  block21 = new Tower(750,475,40,60);
//level5
  block22 = new Tower(715,410,40,60)

  ground = new Base(1000,1000,2000,20);

  polygone = new Polygon(200,400,40);

  base1 = new Base(720,700,400,20);

  thrower = new Slingshot(polygone.body,{x:200,y:500})

}


function preload(){



}

function draw(){

background(255);
Engine.update(engine);

block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
//level2
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
//level3
block14.display();
block15.display();
block16.display();
block17.display();
block18.display();
//level4
block19.display();
block20.display();
block21.display();
//level5
block22.display();

ground.display();

polygone.display();

base1.display();

thrower.display();

}
function mouseDragged(){
  Matter.Body.setPosition(polygone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  thrower.fly();
}
