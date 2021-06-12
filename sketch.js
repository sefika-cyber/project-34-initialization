const Engine = Matter.Engine;
const World = Matter.World;
const body = Matter.body;
const constraint = Matter.constraint;

var hero_1;
var heroImg;
var block_1;

function preload() {
//preload the images here
 backdropImg = loadImage("images/GamingBackground.png");
}

function setup() {
  createCanvas(500,500);
  // create sprites here
  hero_1 = new hero(150,400,100,100)
  block_1 = new block(300,200,50,50)
}

function draw() {
  background(backdropImg);
  drawSprites();
  hero_1.display();
  block_1.display();
}

function mouseDragged(){
  Matter.body.setPosition(hero.body,{x:mouseX, y:mouseY});
}